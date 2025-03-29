import React, { useContext } from 'react'
import './Home.css'
import { DataContext } from '../../App'


const Home = () => {

  const {data, loading, error, onNavigate} = useContext(DataContext)

  const handleClick=(id)=>{
    onNavigate(id)
  }

  
const Loading =()=> {
  return <div className='loading'>Loading...</div>
}

const ErrorPage=({error})=>{
  return <div className='error'>{error}</div>
}
  

  return (
    <div className='home'>
      {loading && <Loading/>}
      {error && <ErrorPage error={error}/>}
      <div className='posts-grid-container'>
        {data.map((post)=>(
          <div key={post.id} className='post' onClick={()=>handleClick(post.id)}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home