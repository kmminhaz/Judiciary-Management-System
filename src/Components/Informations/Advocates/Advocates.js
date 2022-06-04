import React, { useEffect, useState } from "react";
import "./Advocates.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const Advocates = () => {
   const [datas, setData] = useState([]);

   useEffect(() => {
     fetch(
       "http://localhost/projects/Defence/judiciary-system-management/src/API/advocate.php"
     )
       .then((res) => res.json())
       .then((data) => setData(data));
   }, []);

   const searchFor = (event) => {
     event.preventDefault();
     const text = event.target.searchText.value;

     fetch(
       `http://localhost/projects/Defence/judiciary-system-management/src/API/advocateSearch.php?search=${text.toLowerCase()}`
     )
       .then((res) => res.json())
       .then((data) => setData(data));
   };

   let count = 1;
  return (
    <div>
      {/* ------------------------------
          All Advocates
     -------------------------------*/}

      <section className='container py-5 px-4'>
        <header className='pt-5 mt-5'>
          <h2 className='text-center text-light py-3 fw-bold my-1'>
            A D V O C A T E S
          </h2>
          <form
            onSubmit={searchFor}
            className='d-flex flex-wrap flex-lg-nowrap flex-md-nowrap bg-white py-2 justify-content-center w-100 rounded-3 mb-5'
          >
            <input
              className='form-control m-3 fw-bold'
              type='search'
              placeholder='Search'
              aria-label='Search'
              name='searchText'
            />
            <button
              className='btn btn-outline-primary m-lg-3 ms-lg-2 m-md-3 ms-md-2'
              type='submit'
            >
              Search
            </button>
          </form>
        </header>
        <table className='table table-hover fw-bold bg-white rounded'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Advocate Name</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Office</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr>
                <th scope='row'>{count++}</th>
                <th scope='row'>{data.full_name}</th>
                <th scope='row'>{data.phoneNo}</th>
                <th scope='row'>{data.chember}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Advocates;
