import React, { useContext } from 'react'
import './Home.css'
import { DataContext } from '../../App'


const Home = () => {

  const {data, loading, error, onNavigate} = useContext(DataContext)

  const date = new Date().toLocaleDateString()

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
          <div key={post.id} className='post'>
            <p className='update'>update</p>
            <h2 onClick={()=>handleClick(post.id)} className='post-title'>{post.title}</h2>
            <p className='blur-text'>{date} - by opeSm - <span>Leave a Comment</span></p>
            <p>{post.body}</p>
            <button className='read-more' onClick={()=>handleClick(post.id)}>Read more</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home