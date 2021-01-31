import React,{useState,useEffect} from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';


const App=()=>{
 const[posts,setPosts]=useState([]);
 const[loading,setLoading]=useState(false)
 const[currentPage,setCurrentPage]=useState(1)
 const[postsPerPage]=useState(10)

 //changepage
 const paginate=(pageNumber)=>setCurrentPage(pageNumber);

 useEffect(()=>{
   const fetchPosts=async()=>{
     setLoading(true);
     const res=await fetch('https://jsonplaceholder.typicode.com/posts')
     const response=await res.json();
     setPosts(response);
     setLoading(false);
    }
    fetchPosts();
   },[])


   //Get Current Post
   const indexOfLastPost=currentPage*postsPerPage;
   const indexOfFirstPost=indexOfLastPost-postsPerPage;
   const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)

  return(
    <div className='container mt-5'>
      <h1 className="text-primary mb-3">Pagenation using DummyJson</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App;
