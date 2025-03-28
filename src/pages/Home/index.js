import React, { useEffect, useState } from 'react'
import './Home.css'

const Loading =({loading, error})=> {
  if (loading) {
    return <div className='loading'>Loading...</div>
  }
  if (error) {
    return <div className='error'>{error}</div>
  }
  return null
}

const Home = () => {
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
  

  return (
    <div className='home'>
      <Loading error={error} loading={loading}/>
      <div className='posts-grid-container'>
        {data.map((post)=>(
          <div key={post.id} className='post'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home