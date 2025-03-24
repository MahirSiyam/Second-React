
import './App.css'
import Count from './count';
import BatsmanRun from './batsmanRun';
import User from './user';
import { Suspense } from 'react';
import Photos from './photos';
import Posts from './posts';



function App() {

  const handleClick = () => {
    alert("Wrong Answer");
  }

  const handleClick2 = (num) => {
    let ans = num + 10;
    alert(ans);
  }

  const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")
  .then (res => res.json())


  


  // const fetchPhotos = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  //   return response.jes();
  // }

  // const fetchPromisePhotos = fetchPhotos();

  // const fetchPhotos = fetch("https://jsonplaceholder.typicode.com/photos")
  // .then (res => res.json())


  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }

  const fetchPromisePosts = fetchPosts();

  return (
    <>

      <h1>Vite + React</h1>
      
      <button onClick={handleClick}>Click 1</button>

      <button onClick={() => handleClick2(12)}>Click 2</button>

      <Count></Count>

      <BatsmanRun></BatsmanRun>


      <Suspense fallback = {<h3>Loading.....</h3>}>
        <User fetchUser = {fetchUser}></User>
      </Suspense>

      
      


      {/* <Suspense fallback = {<h3>Photos Loading.....</h3>}>
        <Photos fetchPromisePhotos = {fetchPromisePhotos}></Photos>
      </Suspense> */}

      {/* <Suspense fallback = {<h3>Photo Loading.....</h3>}>
        <Photos fetchPhotos={fetchPhotos}></Photos>
      </Suspense> */}




        <Suspense fallback = {<h3>Posts Loading.....</h3>}>
          <Posts fetchPromisePosts = {fetchPromisePosts}></Posts>
        </Suspense>



    </>
  )
}

export default App
