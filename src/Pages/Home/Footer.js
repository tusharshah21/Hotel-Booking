import React from "react";
import { Twitter,Instagram,Facebook,Youtube } from 'react-bootstrap-icons';


export default function Footer()
{
    return(
        <>

            <div class=" " style={{ background: '#393E46' , color: '#EEEEEE', padding: '0 100px', width: '100%' }}>
  <footer >
  <br/><br/>
    <div class="row" >
      <div class="col-2" >
        <h3>Royal Park</h3>
        <ul class="nav flex-column" >
          <li class="nav-item mb-2" >(+91) 11223 34455</li>
          <li class="nav-item mb-2" >hotel@gmail.com</li>
          <li class="nav-item " >19/63, Main Market</li>
          <li class="nav-item " >Delhi ,Haryana</li>
          <li class="nav-item " >India</li>
        </ul>
      </div>

      <div class="col-2" >
        <h3 >Resources</h3>
        <ul class="nav flex-column" >
          <li class="nav-item " ><a href="/#" class="nav-link p-0 text-muted" >How it works</a></li>
          <li class="nav-item " ><a href="/#features" class="nav-link p-0 text-muted" >Features</a></li>
          <li class="nav-item " ><a href="/#pricing" class="nav-link p-0 text-muted" >Contact</a></li>
        </ul>
      </div>

      <div class="col-2" >
        <h3 >Legal</h3>
        <ul class="nav flex-column" >
          <li class="nav-item " ><a href="#" class="nav-link p-0 text-muted" >Terms & condition</a></li>
          <li class="nav-item " ><a href="#" class="nav-link p-0 text-muted" >Privacy Policy</a></li>
          <li class="nav-item " ><a href="#" class="nav-link p-0 text-muted" >Cookies Policy</a></li>
        </ul>
      </div>

      <div class="col-4 offset-1" >
        <form >
          <h5 >Subscribe to our newsletter</h5>
          <p >Monthly digest of whats new and exciting from us.</p>
          <div class="d-flex w-100 gap-2" >
            <label for="newsletter1" class="visually-hidden" >Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
            <button class="btn btn-primary" type="button" >Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex justify-content-between py-4 my-4 border-top " >
    
      <p style={{textAlign: 'center', width: '100%'}}  >
      <Twitter className="icon" />
      <Instagram className="icon" />
      <Facebook className="icon" />
      <Youtube className="icon" />
      


      <br/>
      <br/>
      © 2021 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex" >
        </ul>
    </div>
  </footer>
</div>

        </>
    );
}


