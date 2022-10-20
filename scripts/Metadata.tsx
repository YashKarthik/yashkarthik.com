import path from 'path';
import fs from 'fs';

import { renderToStaticMarkup, renderToString } from 'react-dom/server';

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
const sortPost = (postArr: Meta[] | RSSMeta[]) => {
	return postArr.sort((a, b) => (
		(new Date(a.date)) < (new Date(b.date)) ? 1 : -1
	))
}

// returns metadata exported in .mdx for a single file
export const getMeta = async (fileName:string) => {
  const file = await import(`../pages/archive/${fileName}`);
  const metadata = file.meta;

  return metadata;
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

interface RSSMeta {
  shortName: string;
  title: string;
  date: string;
  description: string;
  long_desc?: string;
  content: string;
}

export const dataForRss = async () => {

  const fileNames = fs.readdirSync(postsDirectory) // arr of all posts

	// Promise.all takes an arr of promises, resolves them all then returns a single promise which
	// resolves into an arr containin the res of all the promises.
	const allFilesMetadata = await Promise.all(fileNames.map(async (fileName:string): Promise<RSSMeta> => {
    const file = await import(`../pages/archive/${fileName}`);
    const metadata = file.meta;
    const Test = () => file.default().props.children;
    const content = renderToStaticMarkup(<Test />);
    
    return {
      ...metadata,
      content
    };
  }));


	const sortedData = sortPost(allFilesMetadata) as RSSMeta[];

  return {
    props: {
			sortedData
		}
  }
}
