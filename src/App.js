import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router";
import News from './components/News';

const App = ()=> {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<News key="general" country="us" category="general"/>} />
            <Route exact path="/business" element={<News key="business" country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="us" category="entertainment"/>} />
            <Route exact path="/general" element={<News key="general" country="us" category="general"/>} />
            <Route exact path="/health" element={<News key="health" country="us" category="health"/>} />
            <Route exact path="/science" element={<News key="science" country="us" category="science"/>} />
            <Route exact path="/sports" element={<News key="sports"  country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News key="technology" country="us" category="technology"/>} />
          </Routes>
          </Router>
      </div>
    )
  }

export default App
