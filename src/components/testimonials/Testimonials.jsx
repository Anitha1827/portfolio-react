import React from 'react'
import "./testimonials.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Testimonials = () => {
  return (
    <section className='testimonials container section' >
        <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent Projects</span> 

      <div className='testimonial__container'>
          <div className='testimonial__card'>
            <IndividualIntervalsExample/>
          </div>
      </div>
    </section>
  )
}



function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={100}>
        <a href="https://6463640faf52ab00544b5c1a--effortless-pithivier-38f9fb.netlify.app/">
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.6o3zLLHqB13Xb3MoB--KzgHaE8?pid=ImgDet&rs=1"
          alt="Student Crud Application using React"
        />
        </a>
        <Carousel.Caption>
          <h3>Student Crud Application using React</h3>
          <p>I have created crud application using React in that i've used UseEffect Usestate and more tools</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <a href="https://648547cbc8f2a6547a2a16cd--fanciful-crumble-6404eb.netlify.app/">
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.6o3zLLHqB13Xb3MoB--KzgHaE8?pid=ImgDet&rs=1"
          alt="Web Scrap Application Frontend"
        />
        </a>
       
        <Carousel.Caption>
          <h3>Web Scrap Application Frontend</h3>
          <p>I have created crud application using React in that i've used UseEffect Usestate and more tools</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://web-scraper-backend1.vercel.app/products"><img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.6o3zLLHqB13Xb3MoB--KzgHaE8?pid=ImgDet&rs=1"
          alt="Web Scraping Application backend"
        /></a>
        
        <Carousel.Caption>
          <h3>Web Scraping Application backend</h3>
          <p>
            Here I've used nodeja, express js, mongodb, router, cors....
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials