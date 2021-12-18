import path from 'path';
import fs from 'fs';

interface Meta {
	shortName: string,
	title: string,
	date: string,
	description: string
};

const getMeta = async (fileName:string) => {
	const meta: Promise<Meta> = await import(`../pages/posts/${fileName}`)
		.then(m => m.meta)
		.catch(e => console.log('ERRORRRR in getMeta()', e));

	return meta;
}

const sortPost = (postArr: Meta[]) => {
	return postArr.sort(({date:a}, {date:b}) => (
		(new Date(a)) < (new Date(b)) ? 1 : -1
	))
}

export const metaData = async () => {

	const postsDirectory = path.join(process.cwd(), 'pages/posts')
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
