import path from 'path';
import fs from 'fs';

export interface Meta {
	shortName: string;
	title: string;
	date: string;
	description: string;
	content?: string;
};

const postsDirectory = path.join(process.cwd(), 'pages/archive/')

// gets metadata exported in .mdx
const getMeta = async (fileName:string) => {
	const meta: Promise<Meta> = await import(`../pages/archive/${fileName}`)
		.then(m => m.meta)
		.catch(e => console.log('ERRORRRR in getMeta()', e));

	return meta;
}

// sorts posts by date
const sortPost = (postArr: Meta[]) => {
	return postArr.sort(({date:a}, {date:b}) => (
		(new Date(a)) < (new Date(b)) ? 1 : -1
	))
}

// gets firts n-bytes in file
export async function readFirstNBytes(fileName: string, n: number): Promise<String> {
  const chunks = [];
	const path = postsDirectory + fileName
  for await (let chunk of fs.createReadStream(path, { start: 0, end: n })) {
    chunks.push(chunk);
  }
  return (Buffer.concat(chunks)).toString()
}

// gets first 500 bytes of given list of files.
export const firstBits = async (files:Meta[]) => {

	// Promise.all takes an arr of promises, resolves them all then returns a single promise which
	// resolves into an arr containin the res of all the promises.
	await Promise.all(files.map(async (file:Meta): Promise<void> => {
    const data = file.content != null ? file.content : await readFirstNBytes(file.shortName + '.mdx', 290);
		files[files.indexOf(file)].content = data as string;
	}));

  return files;
}

// gets metadata export, for list of files
export const metaData = async () => {

  const fileNames = fs.readdirSync(postsDirectory) // arr of all posts

	// Promise.all takes an arr of promises, resolves them all then returns a single promise which
	// resolves into an arr containin the res of all the promises.
	const allFilesMetadata = await Promise.all(fileNames.map(async (fileName:string): Promise<Meta> => {
    const data = await getMeta(fileName); //get metadata for each filename
		return data;
	}));

	const sortedData = sortPost(allFilesMetadata);

  return {
    props: {
			sortedData
		}
  }
}
