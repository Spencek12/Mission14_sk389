import React from 'react';
import './App.css';
import Header from '../Header';
import MoviesList from '../movies/MoviesList';

function App() {
  return (
    <div className="App">
      <Header slogan="The best movies around! - Home"/>
      <MoviesList />
    </div>
  );
}

export default App;
