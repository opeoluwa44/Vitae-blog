import { useState, useEffect, createContext} from 'react';
import './pages/Home'
import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Navbar/Header';
import PageDetails from './pages/PageDetails';
import { useNavigate } from 'react-router-dom'
import Comments from './pages/Comments';

export const DataContext = createContext()




function App() {

  // const [isAdmin, setIsAdmin] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {

    const fetchData =()=>{
      setLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res)=>{
        if (!res.ok) {
          throw new Error('Page or Server Error')
        }
        return res.json()
      })
      .then((data)=>{
        setData(data)
        setError(null)
      })

      
      .catch((error)=>{
        setError(error.message)
      })
      .finally(()=>{
        setLoading(false)
      })
    }

    fetchData()
  }, [])

  const navigate = useNavigate()

  const onNavigate=(id)=> {
    navigate(`/${id}`)
  }

  const contextValue = {data, loading, error, onNavigate}

  return (
    <DataContext.Provider value={contextValue}>
       <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<PageDetails data={data} error={error} loading={loading} />}>
          <Route path='comments' element={<Comments />}/>
        </Route>
      </Routes>
    </div>
    </DataContext.Provider>
   
  );
}

export default App;
