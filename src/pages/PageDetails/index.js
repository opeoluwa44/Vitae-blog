import React from 'react'
import { useParams } from 'react-router-dom'


const PageDetails = ({data, loading, error}) => {
    
  const {id} = useParams()
  const filteredData = data.filter((item) => item.id === Number(id))

  const Loading =()=> {
    return <div className='loading'>Loading...</div>
  }
  
  const ErrorPage=({error})=>{
    return <div className='error'>{error}</div>
  }
    

  
  return (
    <div>
      {loading && <Loading/>}
      {error && <ErrorPage error={error}/>}
      {data.length > 0 &&  
      <div>
        <h2>{filteredData[0].title}</h2>
        <p>{filteredData[0].body}</p>
      </div>}
    </div>
  )
}

export default PageDetails