import React, { useEffect } from "react";
import "./Laws.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Laws = () => {
    const [datas, setData] = useState([]);

    useEffect(() => {
      fetch(
        "http://localhost/projects/Defence/judiciary-system-management/src/API/laws.php"
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  return (
    <div className='darkShade'>
      <div className='container py-5 px-4 mt-5'>
        <div className='text-white'>
          {/* -----------
          Law List
         ----------- */}
          <section>
            <div className='row pt-5'>
              <div className='col-lg-9'>
                <section className='border-none'>
                  {/* -- For A Alphabet -- */}
                  <div>
                    <h2 className="text-center text-uppercase fw-bold">L A W S</h2>
                    <hr className='' />
                    {datas.map((data) => (
                      <ul className='list-unstyled rounded-3 py-2'>
                        <li className='bg-white fw-bold rounded-3 w-100'>
                          <article>
                            {/* -- button -- */}
                            <Button
                              className='w-100 fw-bold text-start'
                              variant='outline-white'
                              href={data.link}
                              // onClick={() => setShowModal(true)}
                            >
                              {data.title}
                            </Button>
                          </article>
                        </li>
                      </ul>
                    ))}
                  </div>
                  
                </section>
              </div>
              <div className='col-lg-3'>
                <section className='d-flex flex-md-row flex-wrap flex-column align-items-center border border-white'>
                  <h4 className='w-100 border border-white ps-2'>
                    Laws & Rules
                  </h4>
                  <div className='my-3 mx-md-3'>
                    <a
                      href='http://www.parliament.gov.bd/index.php/en/bill-and-legislation-2'
                      className='btn btn-primary bg-white text-dark fw-bold'
                      tabindex='-1'
                      role='button'
                      aria-disabled='true'
                    >
                      Bails & Acts
                    </a>
                  </div>
                  <div className='my-3 mx-md-3'>
                    <a
                      href='http://www.judiciary.org.bd/en/law-and-rules/bailable-offences'
                      className='btn btn-primary bg-white text-dark fw-bold'
                      tabindex='-1'
                      role='button'
                      aria-disabled='true'
                    >
                      Bailable offenses
                    </a>
                  </div>
                  <div className='my-3 mx-md-3'>
                    <a
                      href='http://www.judiciary.org.bd/en/laws-for-protection-of-women'
                      className='btn btn-primary bg-white text-dark fw-bold'
                      tabindex='-1'
                      role='button'
                      aria-disabled='true'
                    >
                      Laws for Women
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Laws;
