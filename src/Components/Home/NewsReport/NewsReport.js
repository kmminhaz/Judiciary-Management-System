import React, { useEffect, useState } from "react";
import "./NewsReport.css";
import { Link } from "react-router-dom";


const NewsReport = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/newsReportsForHome.php"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let results = datas.slice(0, 3);
  let shortDes = '';
  
  return (
    <div className='container mt-5 text-black px-3 py-5'>
      <h2 className='my-4 text-white text-center bg-dark py-2 fw-bold'>
        Latest Cases Update's
      </h2>
      <div className='py-3'>
        <div className='row row-cols-1 row-cols-lg-3 row-cols-sm-2 row-cols-md-3 g-3'>
          {results.map((data) => (

            <div className='col'>
              <div
                key={data.id}
                class='card shadow-sm'
                style={{ width: "25rem" }}
              >
                <img
                  src={`images/newsReports/${data.image}`}
                  class='card-img-top'
                  alt='...'
                  height={"200px"}
                />
                <div class='card-body'>
                  <h5 class='card-title'>{data.title}</h5>
                  <p class='card-text'>{data.description.slice(0, 130)} . . .</p>
                  <Link
                    to={`/newsInDetails/${data.id}`}
                    class='btn btn-sm btn-outline-primary'
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='p-3 pt-5 pb-0 d-flex justify-content-center'>
          <Link to='/reportsAndNews' className='btn btn-light fw-bold'>
            All News & Reports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsReport;
