import React from 'react';

const Link = ({ title, contents }) => {
	return (
		<section className='link-block'>
			<h2 className='link-block-title'>{title}</h2>
			<div className='link-block-contents'>
				{contents.map((content, index) => (
					<a className='link-item' href={content.link} key={index}>{content.alias}</a>
				))}
			</div>
		</section>
	)
}

export default Link;
