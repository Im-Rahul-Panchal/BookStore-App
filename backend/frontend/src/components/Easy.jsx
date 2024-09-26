import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Easy() {

  const [book , setBook] =  useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
      const res = await axios.get("/books")
      console.log(res.data)
      const data = res.data.filter((data) => data.category === "Free")
      setBook(data)
      console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])

  // const freeData = book.filter((data) => data.category === "Free"); 

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl contain mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-3">Free Books</h1>
          <p>
            Explore realms of adventure and imagination with our curated
            selection of free books.Step into a world of stories with our
            complimentary book offerings. Discover captivating tales that won't
            cost you a penny—because every great adventure deserves to be shared
            freely.
          </p>
        </div>

        <div >
        <Slider {...settings}>
            {book.map((item)=>(
                <Cards item = {item} key={item.id}/>
            ))}
        
      </Slider>
        </div>
        
      </div>
    </>
  );
}

export default Easy;
