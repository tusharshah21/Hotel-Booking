import "./Home.css";

import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import midcontent from '../../Assets/Home/midcontent.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import service from '../../Assets/Home/service.jpg';
import Pricing from './Pricing.js';
import mid_index_a from '../../Assets/Home/mid_index_a.jpg';
import mid_index_b from '../../Assets/Home/mid_index_b.jpg';
import { Calendar } from 'react-bootstrap-icons';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

export default function Home(){
    return(<>

{/* ******************************NAVBAR************************ */}

    <Navbar/>


{/* ******************************NAVBAR************************ */}


    <div id="features">
    <Container >
    <Row className="mid-content" >
        <Col style={{textAlign: 'right'}}>
        <img  src={midcontent} alt="midcontent" className="midcontent-img1" />
        </Col>
        <Col  style={{textAlign: 'left'}} className="midcontent-img2" >
        <h2>We strive only for best</h2>
        <hr style={{width: '70%'}}></hr>
        <p className="midindex">Aut dolorem perspiciatis ea maiores adipisci ut dignissimos voluptates <br/> sit fugit sint et odit dicta.
        </p>
        <p style={{color:'black'}} className="midindex">
        Lorem ipsum dolor sit amet.
        </p>
        <p className="midindex"><br/>
        Ut delectus eveniet non doloribus praesentium et consequuntur <br/>consectetur eos omnis provident est totam voluptas non.
        </p>
        <br/>
        <button type="button" class="btn btn-success">Continue</button>
        </Col>
    </Row>


    <Row className="mid-content">
        <Col >
        <div style={{padding: '0 0 0 200px '}}>
        <h2>See our service</h2>
        <hr style={{width: '50%'} } ></hr>
        <p className="midindex">Lorem ipsum dolor sit amet, consectetur adipisci elit,<br/>  sed eiusmod tempor incidunt.
        </p><br/>
        
        <p className="midindex"><br/>
        
        </p>
        <FontAwesomeIcon icon="fa-solid fa-pot-food" />
        <br/>
        </div>
        </Col>

        <Col  style={{textAlign: 'left'}} className="midcontent-img2" >
        <img  src={service} alt="service" className="midindex-img1" />
        </Col>
    </Row>
    </Container>
</div>
{/******************************** Pricing.js called *********************************************************/}

    <Pricing/>

{/* here */}

        <div className="mid-content" style={{textAlign: 'center'}}>
            <h2 style={{fontWeight: 'normal'}}>Our latest Blogs & News</h2>
            <hr style={{ margin: 'auto',width:'30%'}}/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer nec odio. <br/> Praesent libero. Sed cursus ante dapibus diam.
            <br/><br/><br/><br/>
            <div class="container">
  <div class="row">
    <div class="col">
    <img  src={mid_index_a} alt="mid-index-a" className="midcontent-img1" />
    </div>
    <div class="col">
    <img  src={mid_index_b} alt="mid-index-b" className="midcontent-img1" />  
    </div>

  </div>
  <Calendar className="icon" />

  </div>
        </div>



        <div id="blogs" className="mid-content" style={{textAlign: 'center', padding: '0 100px 150px 100px', backgroundColor: '#EEEEEE;'}}>
            <div class="container" >
  <div class="row">
    <div class="col-xl index_space">
    <h4 style={{fontWeight: 'bold'}}>Remarkable Resort that offer <br/>The Best Views!</h4>
        <br/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br/> Integer nec odio. Praesent libero. Sed nisi. 
        <br/>Nulla quis sem at nibh elementum imperdiet. 
        <br/>Duis sagittis ipsum. Praesent mauris.
        </p>
     </div>
    <div class="col-xl index_space">
    <h4 style={{fontWeight: 'bold'}}>Villas in Nasikh That are Nothing Less <br/> Than Home Away From Home!</h4>
        <br/>
        <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br/> Integer nec odio. Praesent libero. Sed nisi. 
        <br/>Nulla quis sem at nibh elementum imperdiet. 
        <br/>Duis sagittis ipsum. Praesent mauris.
        </p>

    </div>

  </div>
        </div>
        </div>



    {/* *************************FOOTER******************************* */}


    <Footer/>


    {/* *************************FOOTER******************************* */}

    </>
    );
}