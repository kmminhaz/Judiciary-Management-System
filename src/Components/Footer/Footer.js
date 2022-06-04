import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-dark text-center text-white'>
      {/* -- Grid container -- */}
      <div className='container p-4'>
        {/* -- Section: Social media -- */}
        <section className='mb-4'>
          {/* -- Google -- */}
          <a
            className='btn btn-outline-light btn-floating m-1'
            href='#!'
            role='button'
          >
            <i className='fab fa-google'></i>
          </a>

          {/* -- Github -- */}
          <a
            className='btn btn-outline-light btn-floating m-1'
            href='#!'
            role='button'
          >
            <i className='fab fa-github'></i>
          </a>
        </section>
        {/* -- Section: Social media -- */}
        {/* -- Section: Form -- */}

        {/* -- Section: Text -- */}
        <section className='mb-4'>
          <p>
            All informations of judiciary under one umbrella. Also judges &
            avdocates portal for managing their own details and taking the file
            system one step ahead{" "}
          </p>
        </section>
        {/* -- Section: Text -- */}

        {/* -- Section: Links -- */}
        <section className=''>
          {/* --Grid row-- */}
          <div className='row'>
            {/* --Grid column-- */}
            <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Home</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/' className='text-white'>
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link to='/courtAndCourtRules' className='text-white'>
                    Court&Court Rules
                  </Link>
                </li>
                <li>
                  <Link to='/laws' className='text-white'>
                    Laws
                  </Link>
                </li>
              </ul>
            </div>
            {/* --Grid column-- */}

            {/* --Grid column-- */}
            <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Guidelines</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/rightsInPoliceStation' className='text-white'>
                    Rights In Police Station
                  </Link>
                </li>
                <li>
                  <Link to='/appealProcedure' className='text-white'>
                    Appeal Procedure
                  </Link>
                </li>
                <li>
                  <Link to='/trialProcedure' className='text-white'>
                    Trial Procedure
                  </Link>
                </li>
                <li>
                  <Link to='/processOfLawsuit' className='text-white'>
                    Process of Lawsuit
                  </Link>
                </li>
                <li>
                  <Link to='/courtFee' className='text-white'>
                    Court Fee
                  </Link>
                </li>
                <li>
                  <Link to='/suitValidation' className='text-white'>
                    Suit Valuation
                  </Link>
                </li>
              </ul>
            </div>
            {/* --Grid column-- */}

            {/* --Grid column-- */}
            <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Cases</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/civilCases' className='text-white'>
                    Civil Cases
                  </Link>
                </li>
                <li>
                  <Link to='/criminalCases' className='text-white'>
                    Criminal Cases
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Informations</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/judges' className='text-white'>
                    Judge
                  </Link>
                </li>
                <li>
                  <Link to='/advocates' className='text-white'>
                    Advocate
                  </Link>
                </li>
                <li>
                  <Link to='/reportsAndNews' className='text-white'>
                    Reports & News
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Notice</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/noticeBoard' className='text-white'>
                    Notice
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Portals</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a
                    href='http://localhost/projects/Defence/judge/'
                    className='text-white'
                  >
                    Judge Portal
                  </a>
                </li>
                <li>
                  <a
                    href='http://localhost/projects/Defence/advocate/'
                    className='text-white'
                  >
                    Advocate Portal
                  </a>
                </li>
              </ul>
            </div>
            {/* --Grid column-- */}
          </div>
          {/* --Grid row-- */}
        </section>
        {/* -- Section: Links -- */}
      </div>
      {/* -- Grid container -- */}

      {/* -- Copyright -- */}
      <div className='text-center p-3 copyRightBG'>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          TresAmigos
        </a>
      </div>
      {/* -- Copyright -- */}
    </div>
  );
};

export default Footer;
