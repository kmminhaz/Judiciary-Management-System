import React from "react";
import "./CourtAndCourtRule.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "../Descriptions/Description";
import { Button } from "react-bootstrap";

const CourtAndCourtRule = () => {
  return (
    <div className='darkShade'>
      <div className='container py-5 px-4'>
        <div className='row gx-2 pt-4'>
          <div className='col-lg-10 order-lg-1 order-2 jms-h overflow-auto text-white'>
            <Description></Description>
          </div>
          <div className='col-lg-2 order-lg-2 order-1 mt-5 pt-5'>
            <div className='d-flex flex-md-row flex-wrap flex-column align-items-center pt-5 mt-3'>
              <Button
                variant='outline-white'
                className='btn btn-primary bg-white text-dark fw-bold my-3 mx-md-3'
                href='http://localhost:3000/courtAndCourtRules#jurisdictionOfCourt'
              >
                Jurisdiction of Court
              </Button>
              <Button
                variant='outline-white'
                className='btn btn-primary bg-white text-dark fw-bold my-3 mx-md-3'
                href='http://localhost:3000/courtAndCourtRules#courtHieararchy'
              >
                Court Structure
              </Button>
            </div>
            {/* <SideMenuButtons></SideMenuButtons> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtAndCourtRule;
