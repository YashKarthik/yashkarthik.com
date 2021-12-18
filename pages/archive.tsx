import { NextPage, GetStaticProps } from 'next';
import fs from 'fs'
import path from 'path'

interface Meta {
	shortName: string,
	title: string,
	date: string,
	description: string
};

// Returns metadata for a given file
const getMeta = async (fileName:string) => {
	const meta: Promise<Meta> = await import(`./posts/${fileName}`)
		.then(m => m.meta)
		.catch(e => console.log('ERRORRRR in getMeta()', e));

	return meta;
}

interface Metas {
	allFilesMetadata: Meta[]
}

export const getStaticProps: GetStaticProps<Metas> = async () => {

	const postsDirectory = path.join(process.cwd(), 'pages/posts')
  const fileNames = fs.readdirSync(postsDirectory) // arr of all posts

	// Promise.all takes an arr of promises, resolves them all then returns a single promise which
	// resolves into an arr containin the res of all the promises.
	const allFilesMetadata = await Promise.all(fileNames.map(async (fileName:string): Promise<Meta> => {
    const data = await getMeta(fileName); //get metadata for each filename
		return data;
	}));

  return {
    props: {
			allFilesMetadata
		}
  }
}

const Archive: NextPage<Metas> = ({ allFilesMetadata }) => {

	console.log(allFilesMetadata)

	return (
		<p>Hello wrld</p>
	);
}

export default Archive;
