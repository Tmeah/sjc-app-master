import "../styles/gallery.css";
import React, { useEffect, useRef, useState } from "react";

// At the top of your Gallery component file
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaInstagram } from "react-icons/fa";

import { createClient } from "contentful";

// const settings = {
//   dots: true, // Show dot indicators at the bottom of the carousel
//   infinite: true, // Infinite looping
//   speed: 500, // Animation speed
//   slidesToShow: 3, // Number of slides to show at once
//   slidesToScroll: 1, // Number of slides to scroll at once
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

const client = createClient({
  space: "yl6ypwr5g4ob",
  environment: "master", // defaults to 'master' if not set
  accessToken: "RSTYXHOz79kc6Tw29CE4up1gjVqjVYySh7_rK04Onac",
});

function Gallery() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "gallery" })
      .then((response) => {
        // Duplicate the gallery items to create a seamless loop
        const duplicatedItems = [...response.items, ...response.items]; // Duplicate
        setGalleries(duplicatedItems);
      })
      .catch(console.error);
  }, []);

  const galleryRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (galleryRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
        const newScrollPosition = scrollLeft + 1; // Adjust speed by changing the increment

        // Reset scroll position to start when end is reached
        if (scrollLeft >= scrollWidth - clientWidth) {
          galleryRef.current.scrollLeft = 0;
        } else {
          galleryRef.current.scrollLeft = newScrollPosition;
        }
      }
    }, 20); // Adjust scrolling speed by changing interval time

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-gallery" id="gallery">
      <div className="gallery-title">
        <p className="red gallery-header">Gallery</p>
        <h2 className="gallery-para">Check Out Our Latest Work</h2>
      </div>

      <div className="scrolling-wrapper" ref={galleryRef}>
        {galleries.map((gallery) =>
          gallery.fields.carpics.map((pic, index) => (
            <div key={index} className="gallery-card">
              <div className="card-content">
                <div className="card-image">
                  <img src={pic.fields.file.url} alt={pic.fields.title} />
                </div>
                <div className="card-info">
                  <h3>{pic.fields.title}</h3>
                  {pic.fields.description && <p>{pic.fields.description}</p>}
                  <FaInstagram className="insta-logo" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Gallery;
