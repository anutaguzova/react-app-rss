import './styles.css';
import React from 'react';
import { Card } from './components/card';
import { Search } from './components/search';
import { state } from './components/state';

const App = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Search />
      <div className="card-container">
        {state.card.map((card) => {
          return <Card card={card} key={card.country + Math.random()} />;
        })}
      </div>
    </div>
  );
};

export default App;
