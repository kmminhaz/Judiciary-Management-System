import React, { useEffect, useState } from "react";
import "./Judges.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const Judges = () => {
  const [appleadDevision, setAppleadDevision] = useState([]);
  const [highcourtDevision, setHighcourtDevision] = useState([]);
  const [subordinateDevision, setSubordinateDevision] = useState([]);
  const [chiefJustice, setChiefJustice] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/appleat_devision_judges.php"
    )
      .then((res) => res.json())
      .then((data) => setAppleadDevision(data));
  }, []);

  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/highcourt_devision_judges.php"
    )
      .then((res) => res.json())
      .then((data) => setHighcourtDevision(data));
  }, []);

  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/subordinate_court_judges.php"
    )
      .then((res) => res.json())
      .then((data) => setSubordinateDevision(data));
  }, []);
  
  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/chiefJustice.php"
    )
      .then((res) => res.json())
      .then((data) => setChiefJustice(data));
  }, []);

  let aCount = 1;
  let hCount = 1;
  let sCount = 1;

  return (
    <div>
      {/* ------------------------------
          All Judges
     -------------------------------*/}
      <section className='container mt-3 py-5 px-4'>
        {/* -- Supreame Court -- */}
        <article>
          <div className='pt-5 mt-5'>
            {/* Chief Justice */}
            <div className='text-white d-flex flex-column align-items-center'>
              <h3 className='text-center fw-bold pb-4'>
                {" "}
                Chief Justice of Bangladesh{" "}
              </h3>
              <img
                src={`images/${chiefJustice.image}`}
                alt=''
                height={"300px"}
              />
              <h4 className='py-3 fw-bold'>{chiefJustice.name}</h4>
              <div className='text-start'>
                <h6>
                  Appointed By : <strong>{chiefJustice.appointedBy}</strong>
                </h6>
              </div>
              <small className='pb-3'>
                Appointed in <strong>{chiefJustice.appointedIn}</strong>
              </small>
            </div>
            <h2 className='text-center bg-white text-dark py-3 fw-bold my-1'>
              Supreme Court Judges
            </h2>
          </div>
          <Accordion className='mb-5 text-dark'>
            <Accordion.Item eventKey='0' className='border border-white'>
              <Accordion.Header>
                <strong>Appellate Devision</strong>
              </Accordion.Header>
              <Accordion.Body
                className='overflow-auto'
                style={{ height: "25rem" }}
              >
                <h5 className='fw-bolder'>All Judges</h5>
                <table className='table text-dark'>
                  <thead className='bg-white text-dark'>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Court</th>
                      <th scope='col'>Appointed In</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appleadDevision.map((data) => (
                      <tr>
                        <th scope='row'>{aCount++}</th>
                        <td>{data.full_name}</td>
                        <td>{data.appointedCourt}</td>
                        <td>{data.appointed_in}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1' className='border border-white'>
              <Accordion.Header>
                <strong>High Court Devision</strong>
              </Accordion.Header>
              <Accordion.Body
                className='overflow-auto'
                style={{ height: "25rem" }}
              >
                <h5 className='fw-bolder'>All Judges</h5>
                <table className='table text-dark'>
                  <thead className='bg-white text-dark'>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Court</th>
                      <th scope='col'>Appointed In</th>
                    </tr>
                  </thead>
                  <tbody>
                    {highcourtDevision.map((data) => (
                      <tr>
                        <th scope='row'>{hCount++}</th>
                        <td>{data.full_name}</td>
                        <td>{data.appointedCourt}</td>
                        <td>{data.appointed_in}</td>
                      </tr>
                    ))}
                  </tbody>
                  {/* <tbody>
                    <tr>
                      <th scope='row'>1</th>
                      <td>Justice Ms. Sharmin Afroz</td>
                      <td>018376262</td>
                      <td>
                        You want to remember that while you’re judging the book,
                        the book is also judging you.
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>2</th>
                      <td>Justice Md. Jolil Uddin</td>
                      <td>018737388</td>
                      <td>
                        We are very good lawyers for our own mistakes but very
                        good judges for the mistakes of others.
                      </td>
                    </tr>
                  </tbody> */}
                </table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article>

        {/* -- Tribunals -- */}
        {/* <article>
          <div className='pt-5 mt-5'>
            <h2 className='text-center bg-white text-dark py-3 fw-bold my-1'>
              Tribunals Judges
            </h2>
          </div>
          <Accordion className='mb-5 text-dark'>
            <Accordion.Item eventKey='0' className='border border-white'>
              <Accordion.Header>
                <strong>All Judges</strong>
              </Accordion.Header>
              <Accordion.Body
                className='overflow-auto'
                style={{ height: "25rem" }}
              >
                <table className='table text-dark'>
                  <thead className='bg-white text-dark'>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Phone</th>
                      <th scope='col'>Quotes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row'>1</th>
                      <td>Justice Md. Sfiqur Mia</td>
                      <td>018376262</td>
                      <td>
                        Everyone has untold stories of pain and sadness that
                        make them love and live a little differently than you
                        do. Stop judging, instead try to understand.
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>2</th>
                      <td>Justice Md. Rofik Khan</td>
                      <td>018737388</td>
                      <td>
                        Judging others is just wasting your time, giving your
                        advice to men who don’t pay.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article> */}

        {/* -- Subordinate Courts -- */}
        <article>
          <div className='pt-5 mt-5'>
            <h2 className='text-center bg-white text-dark py-3 fw-bold my-1'>
              Subordinate Courts Judges
            </h2>
          </div>
          <Accordion className='mb-5 text-dark'>
            <Accordion.Item eventKey='0' className='border border-white'>
              <Accordion.Header>
                <strong>All Judges of District Judge Court</strong>
              </Accordion.Header>
              <Accordion.Body
                className='overflow-auto'
                style={{ height: "25rem" }}
              >
                {/* <ul>
                  <li>
                    <Link
                      className='text-decoration-none fw-bolder fs-6'
                      to={""}
                    >
                      District Judge Court
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-decoration-none fw-bolder fs-6'
                      to={""}
                    >
                      Chief Judicial Magistrate Court
                    </Link>
                  </li>
                </ul> */}
                <table className='table text-dark'>
                  <thead className='bg-white text-dark'>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Court</th>
                      <th scope='col'>Appointed In</th>
                      <th scope='col'>Place</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subordinateDevision.map((data) => (
                      <tr>
                        <th scope='row'>{sCount++}</th>
                        <td>{data.full_name}</td>
                        <td>{data.appointedCourt}</td>
                        <td>{data.appointed_in}</td>
                        <td>{data.address}</td>
                      </tr>
                    ))}
                  </tbody>
                  {/* <tbody>
                    <tr>
                      <th scope='row'>1</th>
                      <td>Justice Md. Shahabuddin Mia</td>
                      <td>018376262</td>
                      <td>
                        Easy to judge the mistakes of others, difficult to
                        recognize our own mistakes.
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>2</th>
                      <td>Justice Md. Zakaria Khan</td>
                      <td>018737388</td>
                      <td>
                        When someone judges you, it isn’t actually about you.
                        It’s about them and their own insecurities, limitations,
                        and needs.
                      </td>
                    </tr>
                  </tbody> */}
                </table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article>
      </section>
    </div>
  );
};

export default Judges;
