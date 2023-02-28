import React from 'react'
import { useParams } from 'react-router-dom'

const Blogs = () => {
  const para = useParams();
  return (
    <div style={{height:'110vh', backgroundColor:'grey', display:'flex', justifyContent:'center', alignItems:"center"}}>
      <h1>Blogs {para.num}</h1>
    </div>
  )
}

export default Blogs
