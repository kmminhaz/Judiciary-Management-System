import React from 'react';
import "./ImageSlider.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState, useEffect, useRef } from "react";

import image1 from "../../images/imageSlider/image1.jpg";
import image2 from "../../images/imageSlider/image2.jpg";
import image3 from "../../images/imageSlider/image3.jpg";
import image4 from "../../images/imageSlider/image4.jpg";
import image5 from "../../images/imageSlider/image5.jpg";
// import image4 from "../../Images/Sheikh-Mujibur-Rahman.jpg";

// const images = [
//   { item: image1 },
//   { item: image2 },
//   { item: image3 },
//   { item: image4 },
// ];

// const delay = 2500;

const ImageSlider = () => {

  // const [index, setIndex] = useState(0);
  // const timeoutRef = useRef(null);

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );
  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);

    return (
      <div className='container my-5 py-5'>
        <Carousel className='mt-5 pt-3'>
          <Carousel.Item>
            <div className='d-flex justify-content-center'>
              <img
                className='d-block w-75 rounded-3'
                src={image1}
                alt=''
                height='500rem'
              />
            </div>
            <Carousel.Caption className='darkShade rounded-3'>
              <h3>Judiciary Informations</h3>
              <p>Know about Bangladesh judiciary Details.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='d-flex justify-content-center'>
              <img
                className='d-block w-75 rounded-3'
                src={image2}
                alt=''
                height='500rem'
              />
            </div>
            <Carousel.Caption className='darkShade rounded-3'>
              <h3>File Management Reduced Burden</h3>
              <p>Judges & Advocates can manage and view there Cases</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='d-flex justify-content-center'>
              <img
                className='d-block w-75 rounded-3'
                src={image3}
                alt=''
                height='500rem'
              />
            </div>
            <Carousel.Caption className='darkShade rounded-3'>
              <h3>Constitutional & Judiciary Procedures</h3>
              <p>
                Everybody can learn about Bangladesh's constitution and the
                legal system's processes.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='d-flex justify-content-center'>
              <img
                className='d-block w-75 rounded-3'
                src={image4}
                alt=''
                height='500rem'
              />
            </div>
            <Carousel.Caption className='darkShade rounded-3'>
              <h3>Cases & Case Details</h3>
              <p>
                Plaintiffs and defendants can learn more about their cases,
                which lessens their sufferings.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default ImageSlider;