import React, { useEffect, useState } from "react";
import "./Case.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const CivilCase = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/civilCases.php"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let results = datas.slice(0, 5);

  const searchFor = (event) => {
    event.preventDefault();
    const text = event.target.searchText.value;

    fetch(
      `http://localhost/projects/Defence/judiciary-system-management/src/API/search.php?target=civil&search=${text.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  let count = 1;

  return (
    <div className='darkShade'>
      {/* -------------------
           Cases-Items
      --------------------- */}

      <section className='container py-5 px-4'>
        <header className='pt-5'>
          <h2 className='text-center bg-white text-dark py-3 fw-bold my-5'>
            Civil Cases
          </h2>

          {/* ------------------------
            Searching Convensions 
          ------------------------- */}
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
          {/* <section>
            <div className='text-dark'>
              <div className='row row-cols-2 row-cols-lg-3 g-2 g-lg-3'>
                <div className='col'>
                  <div className='p-3 border bg-light d-flex flex-wrap rounded-3'>
                    <p>Case-Number :</p>
                    <input
                      type='text'
                      className='form-control'
                      aria-label='Sizing example input'
                      aria-describedby='inputGroup-sizing-default'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='p-3 border bg-light rounded-3'>
                    <p>Plaintiff-Name :</p>
                    <input
                      type='text'
                      className='form-control'
                      aria-label='Sizing example input'
                      aria-describedby='inputGroup-sizing-default'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='p-3 border bg-light rounded-3'>
                    <p>Defendant-Name</p>
                    <input
                      type='text'
                      className='form-control'
                      aria-label='Sizing example input'
                      aria-describedby='inputGroup-sizing-default'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='p-3 border bg-light rounded-3'>
                    <p>Court-Name :</p>
                    <input
                      type='text'
                      className='form-control'
                      aria-label='Sizing example input'
                      aria-describedby='inputGroup-sizing-default'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='p-3 border bg-light rounded-3'>
                    <p>Judge :</p>
                    <input
                      type='text'
                      className='form-control'
                      aria-label='Sizing example input'
                      aria-describedby='inputGroup-sizing-default'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button type='button' className='btn btn-primary btn-lg mt-5'>
                Filter Search
              </button>
            </div>
          </section> */}
        </header>

        {/* --------------------- 
          The list of cases 
        ----------------------- */}
        <table className='table fw-bold bg-white text-dark rounded my-5'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Case-Number</th>
              <th scope='col'>Plaintiff-Name</th>
              <th scope='col'>Defendant-Name</th>
              <th scope='col'>Court-Name</th>
              <th scope='col'>Judge</th>
              <th scope='col'>Case Status</th>
            </tr>
          </thead>
          <tbody>
            {results.map((data) => (
              <tr>
                <th scope='row'>{count++}</th>
                <td>{data.caseId}</td>
                <td>{data.plaintiffName}</td>
                <td>{data.diffendentName}</td>
                <td>{data.courtName}</td>
                <td>{data.judgeName}</td>
                <td>{data.caseStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CivilCase;
