import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

interface PostDataType {
	title: string,
	date: string,
	description: string,
};

interface AllPostsDataType {
	id: string,
	title: string,
	date: string,
	description: string,
};

interface AllPostIdsStructure {
	params: {
		id: string,
	}
}

interface FinalPostData {
	id: number,
	contentHTML: string,
	title: string,
	date: string
}

const postsDirectory: string = path.join(process.cwd(), 'posts') 

export const getSortedPostsData = () => {
	
	const fileNames: string[] = fs.readdirSync(postsDirectory);

	const allPostsData: AllPostsDataType[] = fileNames.map(fileName => {
		
		const id: string = fileName.replace(/\.md$/, '');
		const fileContent: string = fs.readFileSync(
			path.join(postsDirectory, fileName),
			'utf8'
		);

		const matterData: PostDataType = matter(fileContent).data;

		return {
			id,
			...matterData
		};

	});

	return allPostsData.sort(({ date: a}, { date: b}) => {
		if (a < b) {
			return 1
		} else if (a > b) {
			return -1
		} else {
			return 0
		}
	})

};

export function getAllPostIds(): AllPostIdsStructure[] {
  const fileNames = fs.readdirSync(postsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });

}

export async function getPostData(id: number): Promise<FinalPostData> {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);

	const contentHTML = processedContent.toString();

	return {
		id:id,
		contentHTML:contentHTML,
		...matterResult.data
	};

}
