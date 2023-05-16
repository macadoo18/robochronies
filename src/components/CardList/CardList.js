import React from 'react';
import Card from '../Card/Card';
import './CardList.scss'; 

const CardList = ({ robots }) => { 
  const cardsArr = robots.map((user) => {
    return <Card
      key={user.id}
      id={user.id}
      name={user.name}
      username={user.username}
      email={user.email}
    />;
  });

  return <div className='card-list'>{cardsArr}</div>;
};

export default CardList;
