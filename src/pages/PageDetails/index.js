import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useData } from '../../App'

const PageDetails = () => {

  const {data, loading, error} = useData()
    
  const {id} = useParams()
  const post = data.find((item) => item.id === Number(id))

  const Loading =()=> {
    return <p className='loading'>Loading...</p>
  }
  
  const ErrorPage=({error})=>{
    return <p className='error'>{error}</p>
  }

  
    

  
  return (
    <div>
      {loading && <Loading/>}
      {error && <ErrorPage error={error}/>}
      {data.length > 0 &&  
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to='comments'>See comments</Link>
          <Outlet/>
        </div>
      }
    </div>
  )
}

export default PageDetails