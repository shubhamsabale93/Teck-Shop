import "./About.css"
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from 'react'
import AboutImg from './about.img.png'
import toast from 'react-hot-toast';
import axios from 'axios';
import ReviewCard from './../../components/ReviewCard/ReviewCard';
import Harshal from './Harshal.jpg';
import Nikhil from './Nikhil.jpg';
import Shubham from './Shubham.jpg';
import Ganesh from './Ganesh.jpg';
import Rohit from './Rohit.jpg';
import Srushti from './Srushti.jpg';
import Member from './../Home/review.jpeg'

function About() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [reviews, setReviews] = useState([]);

  const loadReview = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/review`);

    setReviews(response.data.data);
  }

  useEffect(() => {
    loadReview();
  }, []);

  const addReview = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/review`,
      {
        name, message
      })
    toast.success(response.data.message)
    reset()
  }

  const reset = () => {
    setMessage('');
    setName('');
  }

  return (
    <div>
      <Navbar />

      <div>
        <h1 className="text-center mt-4">About Us ..</h1><hr />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-6 p-4 p-md-5">
              <p className="fs-6 fs-md-5">Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app Alternatively called a notebook, a laptop is a portable computer that is more efficient and nearly as powerful as a desktop computer. Portable computers run off AC power or batteries such as NiMH (nickel-metal hydride), NiCad, or Li-ion packs, for several hours.</p>
            </div>
            <div className="col-12 col-md-6 p-4">
              <img src="https://png.pngtree.com/background/20231030/original/pngtree-d-rendering-of-advanced-tech-devices-laptop-phone-tablet-and-computer-picture-image_5791662.jpg" className="w-100" />
            </div>
          </div>
        </div>
      </div>


      <div className="p-5 c-bag">
        <h1 className="text-center">Write a review</h1><hr />
        <div className="container">
          <div className="row">
              <div className="card col-md-5 col-12 shadow p-4 p-md-5 w-xs-100 w-md-auto">
                <h1 className="text-center mb-5">Add Review</h1>
                <p className="mb-2">Name : </p>
                <input type="text" placeholder="Enter Name" required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  className="mb-4 p-2 px-3 rounded border border-black" />
                <p className="mb-2 col-6">Review : </p>
                <input placeholder="Write Your Review" required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  className="mb-4 p-2 px-3 rounded border border-black" />
                <div className="text-center mt-4">
                  <button type="button"
                    onClick={addReview} className="px-5 py-2 rounded bag-btn">Post</button>
                </div>
              </div>
              <div className="col-12 col-md-7 ">
              <img src={AboutImg} class="imges w-100" />
              </div>
            </div>
          </div>
      </div>
      <div>
        <div className="container">
          <div className="d-flex justify-content-evenly flex-wrap">
            {
              reviews.map((review) => {
                const { _id, name, message } = review;
                return (<ReviewCard key={_id} _id={_id} name={name} message={message} />)
              })
            }
          </div>
        </div>
      </div>
      
      
      <Footer />

    </div>
  )
}

export default About