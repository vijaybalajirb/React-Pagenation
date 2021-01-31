import React,{useState,useEffect} from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

const App=()=>{
 const[posts,setPosts]=useState([]);
 const[loading,setLoading]=useState(false)
 const[currentPage,setCurrentPage]=useState(1)
 const[postsPerPage]=useState(5)

 const paginate=(pageNumber)=>setCurrentPage(pageNumber);

 useEffect(()=>{
   const fetchPosts=async()=>{
     setLoading(true);
     const res=await fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
     const response=await res.json();
     setPosts(response);
     setLoading(false);
     console.log(response)
    }
    fetchPosts();
   },[])


   //Get Current Post
   const lastPost=currentPage*postsPerPage;
   const firstPage=lastPost-postsPerPage;
   const currentPosts=posts.slice(firstPage,lastPost)

  return(
    <div className='container mt-5'>
      <h1 className="text-primary mb-3">Pagenation using DummyJson</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App;
