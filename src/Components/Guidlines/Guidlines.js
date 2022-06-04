import React from 'react';
import './Guidlines.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';

const Guidlines = (props) => {
    return (
      <div>
        <div className='container py-5 px-4 darkShade'>
          <div className='row gx-2 my-5 py-5'>
            <div className='col-lg-12 order-lg-1 order-2 jms-h overflow-auto text-white'>
              <h2 className='text-center'>{props.title}</h2>
              <p className='jms-text-justify pe-2'>{props.discription}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Guidlines;