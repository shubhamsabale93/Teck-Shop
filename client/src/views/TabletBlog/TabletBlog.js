import React, { useState, useEffect } from 'react'
import './TabletBlog.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function TabletBlog() {
  const [title, setTitile] = useState('');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');

  const loadNote = async (id) => {
    if (!id) return
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/tablet/${id}`)

    setUrl(response.data.data.url)
    setTitile(response.data.data.title)
    setContent(response.data.data.content)
    setPrice(response.data.data.price)

  }

  const { id } = useParams()

  useEffect(() => {
    loadNote(id)
  }, [id])
  return (

    <div className='card-container-1'>
        <Navbar/>
        <div className='list-card-1'>
        <img src={url} alt='laptopimg' className='list-img-1'/>
        <h1 className='list-title-1'> {title}</h1>
        <p className='list-content-1'> {content}</p> 
        <h3 className='list-price-1'>₹ {price}</h3>
        <div className='button-container'>
        <Link to={`/ordernow/tablet/${id}`}><button className='order-btn'>order now</button></Link>
        </div>
        </div>
        <Footer/>
    </div >
  )
}

export default TabletBlog