import React from 'react';

const SkillBlock = ({ title, contents }) => {
	return (
		<section className='skill-block'>
			<h2 className='skill-block-title'>{title}</h2>
			<div className='skill-block-contents'>
				{contents.map((skill, index) => (
					<React.Fragment key={index}>
						<p className='skill-item'>{skill.item}</p>
						<span className='level'>
							<span className={`lvl-${skill.level}`} />
						</span>
					</React.Fragment>
				))}
			</div>
		</section>
	)
}

export default SkillBlock;
