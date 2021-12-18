import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'pages/posts')

export interface FileMeta {
	shortName: string,
	title: string,
	date: string,
	description: string
}

const getMeta = async (fileName:string) => {

	const meta = await import(`./posts/${fileName}`)
		.then(m => m.meta)
		.catch(e => console.log(e));

	console.log(meta)
	return meta;
}

export async function getSortedMetadata() {

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(async (fileName:string) => {
		getMeta(fileName)
  })

	return JSON.stringify(allPostsData);
}
