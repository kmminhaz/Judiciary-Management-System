import React from "react";
import "./SideMenuButtons.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import { Button } from "react-bootstrap";

// jurisdictionOfCourt
// courtHieararchy;

const SideMenuButtons = () => {
  return (
    <div>
      {/* ------------------ 
        Side Menu button
        ------------------ */}
      <div className='d-flex flex-md-row flex-wrap flex-column align-items-center'>
        <Button
          variant='outline-white'
          className='btn btn-primary bg-white text-dark fw-bold my-3 mx-md-3'
          href='./discription#jurisdictionOfCourt'
        >
          Jurisdiction of Court
        </Button>
        <Button
          variant='outline-white'
          className='btn btn-primary bg-white text-dark fw-bold my-3 mx-md-3'
          href='./discription#courtHieararchy'
        >
          Court Structure
        </Button>
      </div>
    </div>
  );
};

export default SideMenuButtons;
