import React from 'react';
import './Card.scss';

const Card = ({id, name, username, email}) => {
    return (
        <div className='card'>
            <img width={220} src={`https://robohash.org/test${id}`} alt='robot' />

            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );
}

export default Card;