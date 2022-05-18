import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './layout/ButtonPage';
import TablePage from './layout/TablePage';
import PopoverPage from './layout/PopoverPage';

function App() {
  return (
    <div className='App'>
      <div style={{ paddingBottom: '30px' }}>
        <Link to='/'>Button / </Link>
        <Link to='/table'>Table / </Link>
        <Link to='/popover'>Popover / </Link>
      </div>
      <Routes>
        <Route path='/' element={<Button />} />
        <Route path='/table' element={<TablePage />} />
        <Route path='/popover' element={<PopoverPage />} />
      </Routes>
    </div>
  );
}

export default App;
