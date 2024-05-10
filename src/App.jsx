import { useState } from 'react'
import './App.css'
import Main from './components/Main';
import Blog from './components/Blog/Blog';
import Resume from './components/Resume/Resume';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App