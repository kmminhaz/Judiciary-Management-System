import React, { useEffect, useState } from "react";
import "./Notice";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Notice = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/noticeItems.php"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const searchFor = (event) => {
    event.preventDefault();
    const text = event.target.searchText.value;

    fetch(
      `http://localhost/projects/Defence/judiciary-system-management/src/API/search.php?target=notice&search=${text.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  let count = 1;

  return (
    <div>
      {/* -------------------
           Notice Board 
      --------------------- */}
      <section className='container py-5 px-4'>
        <header className='pt-5 mt-5'>
          <h2 className='text-center bg-white text-dark py-3 fw-bold my-1'>
            Notice Board
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
              <th scope='col'>Notice Title</th>
              <th scope='col'>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr>
                <th scope='row'>{count++}</th>
                <td>
                  <td>
                    <Link
                      to={`/detailedNotice/${data.id}`}
                      className='text-decoration-none w-100'
                    >
                      {data.title}
                    </Link>
                  </td>
                </td>
                <td>{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Notice;
