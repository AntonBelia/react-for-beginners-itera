import React, {FC} from 'react';
import {Contacts } from './contacts'
import { authorData, AuthorDataContext } from './context'

const Main = () => (
	<main>
		<h1>Hello, this is my blog page</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, quae debitis cum tenetur repellendus, deleniti voluptate eius quam dolorum ea laboriosam voluptatum omnis? Ducimus itaque, temporibus beatae rerum tempore corrupti quisquam quidem architecto nihil necessitatibus eaque mollitia cumque quis tenetur.
		</p>

		<Contacts />
	</main>
);
const Footer: FC< {author:string }> = ({author}) => {
	const year = new Date().getFullYear();
	return (
		<footer>
			By {author}. (C) {year}
		</footer>
	)
}

const Context = () => {
	const {authorName} = authorData;
	return (
		<>
			<AuthorDataContext.Provider value={authorData}>
				<Main/>
			</AuthorDataContext.Provider>
			<Footer author={authorName} />
		</>
	);
};

export default Context;