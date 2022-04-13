import React from "react";
import classic_bedroom from "../../Assets/Home/classic_bedroom.jpg";
import modern_room from "../../Assets/Home/modern_room.jpg";
import luxury_room from "../../Assets/Home/luxury_room.jpg";


export default function Pricing(){
    return(<div style={{background: '#222831'}} id="pricing">
<h2 className="pricing-index" style={{fontWeight: 'normal' , paddingTop: '80px'}}>Choose Best Package</h2><hr className="pricing-index" style={{height:'5px'}}/>
<p className="pricing-index">Lorem ipsum dolor sit amet, consectetur adipisci elit, <br/>sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
<div class="row row-cols-1 row-cols-md-3 mb-3 text-center pricing-content" style={{background: '#222831'}} >
      <div class="col"  >
      <br/><br/><br/><br/>
        <div class="card mb-4 rounded-3 shadow-sm" style={{background: '#EEEEEE'}} >
          <div class="card-header " style={{background: '#EEEEEE'}} >
            <h4 class="my-0 fw-normal"  >
            <img  src={classic_bedroom} alt="classic_bedroom" className="pricingimg"/>

            </h4>
          </div>
          <div class="card-body"  >
          <h4>Classic room</h4><hr/>
            <h3>$150/ per night</h3>
            <ul class="list-unstyled mt-3 mb-4"  >
              <li  >free Wifi</li>
              <li  >breakfast</li>
              <li  >1 bed in room</li>
              <li  >2 people in room</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-secondary">Select Package</button>
          </div>
        </div>
      </div>
      <div class="col"  >
        <div class="card mb-4 rounded-3 shadow-sm"  >
          <div class="card-header  text-white "  >
            <h4 class="my-0 fw-normal"  >
            <img  src={luxury_room} alt="luxury_room" className="pricingimg"/>
            </h4>
          </div>
          <div class="card-body"  >
          <h4>Luxury room</h4><hr/>

          <h3>$200/ per night</h3>
              <ul class="list-unstyled mt-3 mb-4"  >
              <li  >free Wifi</li>
              <li  >breakfast</li>
              <li  >2 beds in room</li>
              <li  >4 people in room</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-secondary ">Select package</button>
          </div>
        </div>
      </div>
      <div class="col"  >
      <br/>
      <br/>
      <br/>
      <br/>
        <div class="card mb-4 rounded-3 shadow-sm"  >
          <div class="card-header "  >
            <h4 class="my-0 fw-normal"  >
            <img  src={modern_room} alt="modern_room" className="pricingimg"/>
            </h4>
          </div>
          <div class="card-body"  >
          <h4>Modern room</h4><hr/>
          <h3>$175/ per night</h3>
              <ul class="list-unstyled mt-3 mb-4"  >
              <li  >free Wifi</li>
              <li  >breakfast</li>
              <li  >1 bed in room</li>
              <li  >2 people in room</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-secondary"  >Select Package</button>
          </div>
        </div>
      </div>
      
    </div>

    </div>);
}


