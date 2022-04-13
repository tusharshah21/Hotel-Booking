import { Container,Col,Row,button } from 'react-bootstrap';
import hotel2 from '../../Assets/Home/hotel2.jpg';
import hotel from '../../Assets/Home/hotel.png';
import hotel1 from '../../Assets/Home/hotel1.png';
import Carousel from 'react-bootstrap/Carousel';

import React from 'react';

export default function HomeNavbar(){
    return(
        <div className="homebar">
            {/* <Navbar bg="light" expand="lg" className="homenavbar">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> */}


<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation" >
  <div class="container-fluid" >
    <a class="navbar-brand" href="#" >Royal Park</a>
    <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon" ></span>
    </button>

    <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        <li class="nav-item" >
          <a class="nav-link active" aria-current="page" href="#" >Dashboard</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#" >Notifications</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#" >Profile</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#" >Switch account</a>
        </li>
        <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false" >Settings</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown01" >
            <li ><a class="dropdown-item" href="#" >Action</a></li>
            <li ><a class="dropdown-item" href="#" >Another action</a></li>
            <li ><a class="dropdown-item" href="#" >Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>


<Container >
  <Row>
    <Col className="img-1navbarcontent" xs={12} md={6}>
    <div className="navcontent">
    <h1>
        Stay once,<br/>carry memories<br/>Forever</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    </Col>

    <Col className="img-2navbarcont" xs={12} md={6}>
    {/* <img  src={hotel2} alt="hotel" className="img-2navbarcontent" /> */}
    
    {/* <div id="carouselExampleFade" class="carousel slide carousel-fade img-2navbarcontent" data-bs-ride="carousel" >
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={hotel} class="d-block w-100" alt="hotel2"/>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={hotel2} class="d-block w-100" alt="hotel"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={hotel1} class="d-block w-100" alt="hotel1"/>
    </div>
  </div>
</div> */}

    <div >
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={hotel1} alt="Image One"/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={hotel} alt="Image Two"/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={hotel2} alt="Image Three"/>
        </Carousel.Item>
      </Carousel>
    </div>
    
    </Col>

  </Row>
</Container>


        </div>
    )
}


