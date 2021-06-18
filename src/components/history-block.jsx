import React from 'react';

export const WorkHistory = ({ title, contents }) => {
	return (
		<section className='history-block'>
			<h2 className='history-block-title'>{title}</h2>
			<div className='history-block-contents'>
				{contents.map((item, index) => (
					<div className='history-item' key={index}>
                        <h3>{`${item.title}, ${item.company}, ${item.city}`}</h3>
                        <p className='duration'>{`${item.start} - ${item.end}`}</p>
                        {item.descs.map((desc, idx) => (
                            <p className='item-desc' key={idx}>{desc}</p>
                        ))}
                    </div>
				))}
			</div>
		</section>
	)
}

export const EducationHistory = ({ title, contents }) => {
	return (
		<section className='history-block'>
			<h2 className='history-block-title'>{title}</h2>
			<div className='history-block-contents'>
				{contents.map((item, index) => (
					<div className='history-item' key={index}>
                        <h3>{`${item.degree}, ${item.school}, ${item.city}`}</h3>
                        <p className='duration'>{`${item.start} - ${item.end}`}</p>
                        <p className='item-desc'>{item.subject}</p>
                    </div>
				))}
			</div>
		</section>
	)
}


