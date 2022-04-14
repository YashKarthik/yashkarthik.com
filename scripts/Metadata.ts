import path from 'path';
import fs from 'fs';

// interface of metadata object exported in each .mdx file
export interface Meta {
	shortName: string;
	title: string;
	date: string;
	description: string;
	long_desc?: string;
};

const postsDirectory = path.join(process.cwd(), 'pages/archive/')

// sorts posts by date
const sortPost = (postArr: Meta[]) => {
	return postArr.sort(({date:a}, {date:b}) => (
		(new Date(a)) < (new Date(b)) ? 1 : -1
	))
}

// returns metadata exported in .mdx for a single file
export const getMeta = async (fileName:string) => {
	const meta: Promise<Meta> = await import(`../pages/archive/${fileName}`)
		.then(m => m.meta)
		.catch(e => console.log('ERRORRRR in getMeta()', e));

	return meta;
}

// returns an object with metadata for all files, sorted by date.
export const metaData = async () => {

  const fileNames = fs.readdirSync(postsDirectory) // arr of all posts

	// Promise.all takes an arr of promises, resolves them all then returns a single promise which
	// resolves into an arr containin the res of all the promises.
	const allFilesMetadata = await Promise.all(fileNames.map(async (fileName:string): Promise<Meta> => {
    const data = await getMeta(fileName);
		return data;
	}));

	const sortedData = sortPost(allFilesMetadata);

  return {
    props: {
			sortedData
		}
  }
}
