import React from 'react'
import '../App.css'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Find from '../components/find/Find'
import Footer from '../components/footer/Footer'
import Reviews from '../components/reviews/Reviews'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <About/>
      <Reviews/>
      <Find/>
      <Footer/>
    </>
  )
}

export default Home
