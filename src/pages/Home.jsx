import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"

// import logoMain from "../logo/logoMain.png"; 


const images = [image1, image2, image3, image4, image5];

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar/>
      <div
        className="w-full h-screen bg-cover bg-center transition-all duration-4000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >

        <div className="max-w-3xl mx-auto px-4">
          Your Content
        </div>
      </div>
    </>

  )
}
