import React from "react";
import "./NavigataionBar.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className='bg-dark fixed-top'>
      <div className='container'>
        {/* top heading */}

        <div className='d-flex justify-content-between py-2 px-3'>
          <div>
            {/* <img src="../../../public/logo-judicial.png" alt="" srcset="" height={'100px'} width={'100px'}/> */}
            <p className='text-white'>Tres Amigos</p>
          </div>
          <div>
            <a
              href='http://localhost/projects/Defence/admin/'
              className='p-2 pl-0 text-decoration-none'
            >
              <span className='icon-person text-white'> Admin </span>
            </a>
          </div>
        </div>

        {/* --------------------
            Navigation Items
          --------------------- */}
        <Navbar className='navbar-dark bg-dark p-0 sticky-lg-top' expand='lg'>
          <Container>
            <Navbar.Brand>
              <h6>
                Judiciary Management System <br />
                Of Bangladesh
              </h6>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />

            <NavbarCollapse id='basic-navbar-nav'>
              <Nav className='ms-auto mb-2 mb-lg-0'>
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/courtAndCourtRules"}>
                  Court & Court Rules
                </Nav.Link>
                <Nav.Link as={Link} to={"/laws"}>
                  Laws
                </Nav.Link>

                <NavDropdown title='Guidelines' id='basic-nav-dropdown'>
                  <NavDropdown.Item as={Link} to={"/rightsInPoliceStation"}>
                    Rights in police station
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/appealProcedure"}>
                    Appeal Procedure
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/trialProcedure"}>
                    Trial Procedure
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/courtFee"}>
                    Court Fee
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/suitValidation"}>
                    Suit Valuation
                  </NavDropdown.Item>
                  <NavDropdown.Item href='http://www.judiciary.org.bd/sites/default/files/download/Contact-no-of-district-legal-aid-officer.pdf'>
                    District Ligal Aid Officers
                  </NavDropdown.Item>
                  <NavDropdown.Item href='http://www.judiciary.org.bd/sites/default/files/download/Legal_Service_Provided_organizations.pdf'>
                    Legal Service Providers
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='Cases' id='basic-nav-dropdown'>
                  <NavDropdown.Item as={Link} to='/civilCases'>
                    Civil Cases
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/criminalCases'>
                    Criminal Cases
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='Information' id='basic-nav-dropdown'>
                  <NavDropdown.Item as={Link} to='/judges'>
                    Judge
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/advocates'>
                    Advocate
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/reportsAndNews'>
                    Reports & News
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to='/noticeBoard'>
                  Notice
                </Nav.Link>

                <NavDropdown title='Portal' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='http://localhost/projects/Defence/judge/'>
                    Judge
                  </NavDropdown.Item>
                  <NavDropdown.Item href='http://localhost/projects/Defence/advocate/'>
                    Advocate
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;
