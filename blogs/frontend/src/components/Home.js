import React from 'react'
import "../Styles/Home.css";
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
       <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100" class="d-block w-100 c-img" alt="Slide 1"/>
        <div class="carousel-caption top-0 mt-4">
          <p class="mt-5 fs-3 text-uppercase">Most Viewed Blogs</p>
          <h1 class="display-1 fw-bolder text-capitalize">Writter Alex Blogs</h1>
          <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Most Viewed Blogs</button>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100" class="d-block w-100 c-img" alt="Slide 2"/>
        <div class="carousel-caption top-0 mt-4">
          <p class="text-uppercase fs-3 mt-5">Latest Blogs</p>
          <p class="display-1 fw-bolder text-capitalize">Writter rag Blogs</p>
          <button class="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
            data-bs-target="#booking-modal">New Blogs</button>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" class="d-block w-100 c-img" alt="Slide 3"/>
        <div class="carousel-caption top-0 mt-4">
          <p class="text-uppercase fs-3 mt-5">Best Blogs</p>
          <p class="display-1 fw-bolder text-capitalize">Writter jim Blogs</p>
          <button class="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal"
            data-bs-target="#booking-modal">Best Blogs</button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


  <div class="container mt-5">
        <h4 class="articletag">Blog Articles</h4>

        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" class="card-img-top img-fluid" alt="..."/>
                <div class="card-body">
                    <span class="badge bg-primary">TECHNOLOGY Blogs</span>
                  <h5 class="card-title">Why is the Tesla Cybertruck designed the way it is?</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam! </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" class="card-img-top  img-fluid" alt="..."/>
                <div class="card-body">
                    <span class="badge bg-success">POPULAR Blogs</span>
                  <h5 class="card-title">How to Keep Going When You Don’t Know What’s Next.</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam!</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" class="card-img-top  img-fluid" alt="..."/>
                <div class="card-body">
                    <span class="badge bg-danger">Nature Blogs</span>
                  <h5 class="card-title">10 Rules of Dashboard Design.</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam!</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" class="card-img-top  img-fluid" alt="..."/>
                <div class="card-body">
                    <span class="badge bg-primary">Design Blogs</span>
                  <h5 class="card-title">10 Rules of Dashboard Design.</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam!</p>
                </div>
              </div>
            </div>


            <div class="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" class="card-img-top  img-fluid" alt="..."/>
                <div class="card-body">
                    <span class="badge bg-success">Sports Blogs</span>
                  <h5 class="card-title">10 Rules of Dashboard Design.</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam!</p>
                </div>
              </div>
            </div>


            <div class="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100" class="card-img-top  img-fluid" alt="..."/>
                <div class="card-body">
                    <span class="badge bg-danger">Food blogs</span>
                  <h5 class="card-title">10 Rules of Dashboard Design.</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam!</p>
                </div>
              </div>
            </div>
           
          </div>
    </div>

    <Footer/>
    
      </div>





  )
}

export default Home
