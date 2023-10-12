import React from 'react';
import "../Styles/Contact.css"

const Contact = () => {
  return (
    <div>
      
    <div class="container mt-5 shadow ">
        <div class="row ">
            <div class="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
                <h2>Let's get in touch</h2>
                <p>We're open for any suggestion or just to have a chat</p>
                <div class="d-flex mt-2">
                    <i class="bi bi-geo-alt"></i>
                    <p class="mt-3 ms-3">Address : Road 198 West 21th Street, Suite 721 Singapor WW 10016</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-telephone-forward"></i>
                    <p class="mt-4 ms-3">Phone : 8888888888</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-envelope"></i>
                    <p class="mt-4 ms-3">Email : contactform@gmail.com</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-youtube"></i>
                    <p class="mt-4 ms-3">Channel : www.contactform.com/</p>
                </div>
            </div>
            <div class="col-md-8 p-5 ">
                <h2>Get in touch</h2>
                <form class="row g-3 contactForm mt-4">
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">First Name</label>
                      <input type="email" class="form-control" id="inputEmail4" required/>
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">Last Name</label>
                      <input type="password" class="form-control" id="inputPassword4" required/>
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Subject</label>
                      <input type="text" class="form-control" id="inputAddress" required/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Email Id</label>
                        <input type="text" class="form-control" id="inputAddress" required/>
                      </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">City</label>
                      <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Contact Number</label>
                        <input type="text" class="form-control" id="inputCity" required/>
                      </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary mt-3">Sign in</button>
                    </div>
                  </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
