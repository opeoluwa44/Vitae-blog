import { useState, useEffect, createContext, useCallback, useMemo} from 'react';
import './pages/Home'
import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Navbar/Header';
import PageDetails from './pages/PageDetails';
import { useNavigate } from 'react-router-dom'
import Comments from './pages/Comments';
import ProtectedRoute from './pages/ProtectedRoute'
import Admin from './pages/Admin'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import About from './pages/About'

export const DataContext = createContext()


function App() {

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

  const onNavigate= useCallback(
    (id) => {
      navigate(`/${id}`)
    },
    [navigate],
  )
  

  const contextValue = useMemo(() => ({data, loading, error, onNavigate}), [data, error, loading, onNavigate])

  return (
    <DataContext.Provider value={contextValue}>
      <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<PageDetails data={data} error={error} loading={loading} />}>
          <Route path='comments' element={<Comments />}/>
        </Route>
        <Route path='admin' element={
        <ProtectedRoute>
          <Admin/>
        </ProtectedRoute>}/>
        <Route path='privacy' element={<Privacy/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      </div>
    </DataContext.Provider>
   
  );
}

export default App;
