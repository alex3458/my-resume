import React from 'react';

const DescBlock = ({ title, contents }) => {
	return (
		<section className='desc-block'>
			<h2 className='desc-block-title'>{title}</h2>
			<div className='desc-block-contents'>
				{contents.map((content, index) => (
					<p className='desc-item' key={index}>{content}</p>
				))}
			</div>
		</section>
	)
}

export default DescBlock;
