import React, { useEffect, useState } from "react";
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'


function Course() {

  const [book , setBook] =  useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
      const res = await axios.get("/books")
      console.log(res.data)
      setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])

  return (
    <>
      <div className="max-w-screen-2xl contain mx-auto md:px-20 px-4">
        <br/>  {/*   <-- very imp to prevent glitch in dark mode */}

        <div className="items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl mt-32">"Welcome to our <span className="text-pink-600">Book Bar</span>, where stories come alive :)"</h1>
          <p className="mt-12 text-xl">Welcome to the realm of horror comedy literature, where spine-chilling tales are infused with humor to offer a unique reading experience. These books blend elements of fear and laughter, presenting quirky characters, unexpected twists, and amusing encounters with the supernatural. It's a genre that playfully explores the darker side of storytelling while keeping readers entertained with its comedic twists and turns. Get ready for a journey through eerie yet hilarious narratives that redefine traditional horror tropes, providing both thrills and laughs in equal measure.
          </p>
          <Link to = "/"> 
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>        
        </div>


        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item)=>(
              <Cards item={item} key={item.id}  />
            ))
          }
        </div>
        
      </div>
    </>
  );
}

export default Course;
