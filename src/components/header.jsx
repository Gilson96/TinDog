import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// image
import iphone from '../assets/iphone6.png'

const Header = () => (
    <>
        <section id="title">
            <div class="container-fluid" style={{ padding: 3 + '%' + 15 + '%' + 7 + '%', fontFamily: 'Montserrat' }}>

                {/* <!-- Nav Bar -->*/}


                <Navbar collapseOnSelect expand="lg" bg="none" variant="dark" >

                    <a class="navbar-brand" href="" style={{ fontFamily: 'ubuntu', fontWeight: 'bold', fontSize: 2.5 + 'rem' }}>tindog</a>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" id="nav-mr-auto">
                            <Nav.Link href="#footer" class="nav-link" id='link'>Contact</Nav.Link>
                            <Nav.Link href="#pricing" class="nav-link" id='link'>Pricing</Nav.Link>
                            <Nav.Link href="#footer" class="nav-link" id='link'>Download</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                {/* <!-- Title --> */}
                <div class="row">

                    <div class="col-lg-6">
                        <h1>Meet new and interesting dogs nearby.</h1>
                        <button class="download btn btn-lg btn-dark" type="button"><i class="fa-brands fa-apple"></i> Download</button>
                        <button class="download btn btn-lg btn-outline-light" type="button"><i class="fa-brands fa-windows"></i> Download</button>
                    </div>

                    <div class="col-lg-6">
                        <img src={iphone} alt="iphone-mockup" />
                    </div>

                </div>

            </div>

        </section>

    </>
);

export default Header;