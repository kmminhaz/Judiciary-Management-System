import React, { useState } from "react";
// import Guidlines from './Guidlines';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import image1 from "../images/imageSlider/courtFee.PNG";
import pdfFile from "../images/2nd-Followup.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "./CourtFee.css";
import { Container } from "react-bootstrap";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

const CourtFee = () => {
  // const [pdf, setPdf] = useState(pdfFile);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  return (
    <div className=''>
      {/* <Container className='my-5 pt-5'>
        <div className='my-5 jms-h d-flex flex-column align-items-center overflow-auto w-100'>
          <header>
            <h1 className='text-white'>Court Fee</h1>
          </header>
          <div className='Example__container w-100'>
            <div className='Example__container__load'>
              <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </div>
          </div>
        </div>
      </Container> */}
      {/* <Guidlines title={title} discription={discription}></Guidlines> */}
      <div className='container py-5 px-4'>
        <div className='row gx-2 my-5 py-5'>
          <div className='col-lg-12 order-lg-1 order-2 jms-h overflow-auto text-white'>
            <h2 className='text-center'>Court Fee</h2>
            <div className='my-5 d-flex justify-content-center'>
              <img
                src={image1}
                class='card-img-top h-100 w-50'
                alt='...'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtFee;
