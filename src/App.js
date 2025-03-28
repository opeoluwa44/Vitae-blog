import { createContext, useState } from 'react';
import './pages/Home'
import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Navbar/Header';

//Set up global state for Auth
const AuthContext = createContext()

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div className='App'>
     <Header/>
     <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
   
  );
}

export default App;
