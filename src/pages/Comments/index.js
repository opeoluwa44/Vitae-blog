import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Comments = () => {
  
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  
  useEffect(() => {

    (async()=>{

      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        if(!response.ok) {throw new Error(`Network Error`)}
        const data = await response.json()
        setComments(data)
        setError(null)
        setLoading(false)
        
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
      
    })()
    
  }, [])

  const {id} = useParams()
  const commentPostId = comments.filter((comment) => (comment.postId === parseInt(id)))

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {comments.length > 0 && commentPostId.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Comments