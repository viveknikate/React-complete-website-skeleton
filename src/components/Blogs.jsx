import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Blogs = () => {
  const para = useParams();
  const [ID,setId] = useState();

  const Arr = [1,2,3,4,5,6,7,8,9,10];
  return (
    //style={{display:'flex', justifyContent:'center', alignItems:"center"}}
    <>
      <div 
            style={{height:'70vh' /*, backgroundColor:'grey'*/}}>
        <div style={{paddingTop:'100px'}}>
          <h1>Choose the blog you want to read: </h1>
          <br />
          <div style={{textAlign:'center'}}>
            {
              Arr.map((val,num)=>(
                <button onClick={()=>setId(val)} style={{padding:'10px', margin:'10px'}}>
                  {num+1}
                </button>
              ))
            }
            <br />
            <br />
            <h1>This is Blog no.{para.num}</h1>
            <h1>This is Blog no.{ID}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
