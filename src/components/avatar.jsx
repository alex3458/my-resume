import React from 'react';

const Avatar = ({ image, name, desc }) => {
    return (
        <div className='avatar'>
            <img src={image} alt='avatar' />
            <h2 className='title'>{name}</h2>
            <span className='desc'>{desc}</span>
        </div>
    )
}

export default Avatar;
