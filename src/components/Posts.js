import React from 'react';
 
const Posts=({posts,loading})=>{
  if(loading){
      return<h2>Loading....</h2>
  }
  
  return <ol className="list-group">
      {
          posts.map(post=>(
              <div key={post.callingCodes[0]}>
              <li className="list-group-item">
                 <p>Country Name:</p> <b>{post.name} </b>
              </li>

              <li className="list-group-item">
                  <p>Region</p><b>{post.region}</b></li>
              <br/>
              
              </div>
          ))
      }
  </ol>
        

}

export default Posts