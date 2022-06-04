import React, { useEffect, useState } from "react";
import "./ReportsAndNews.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ReportsAndNews = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/newsReports.php"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let count = 1;
  return (
    <div>
      {/* -------------------
        Reports & news
      --------------------- */}

      {/* -- Header -- */}

      <section className='container mt-5 py-5 px-4 text-dark'>
        <header className='row py-5 mx-0 bg-white'>
          <div className='col-lg-5 col-md-8 mx-auto'>
            <h1 className='fw-bold'>Reports & News</h1>
            <p className='lead text-muted'>
              Reports and Newses of different types of civil & criminal crimes.
              Also news on judicial events that contains the judges decision and
              verdict of trending cases.
            </p>
          </div>
        </header>

        {/* -- All Articales -- */}

        <section>
          <div className='album py-5 bg-white'>
            <div className='container'>
              <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                {datas.map((data) => (
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
                        <p class='card-text'>{data.description.slice(0, 200)} . . .</p>
                        <Link
                          to={`/newsInDetails/${data.id}`}
                          class='btn btn-sm btn-outline-primary'
                        >
                          view
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ReportsAndNews;
