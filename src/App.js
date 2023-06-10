// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Routes>
      {/* <Switch> */}
        <Route exact path="/" element={<Home/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
      {/* </Switch> */}
    </Routes>
  );
}

export default App;
