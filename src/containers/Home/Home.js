import React, { useState, useEffect } from 'react';
import './Home.scss';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Scroll from '../../components/Scroll/Scroll';

export default function Home() {
  const [robots, setRobots] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setRobots(users));
    // when 2nd parameter is just empty [] 'useEffect' runs on every mount
    // when there is a value(s) 'useEffect' only runs when those values change
  }, []);

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBots = robots.filter((bots) => {
    return bots.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="home">
      <h1>Robochronies</h1>
      <SearchBar searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredBots} />
      </Scroll>
    </div>
  );
}
