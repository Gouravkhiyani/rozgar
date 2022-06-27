import React from 'react';
import './profile.css'
import image from '../../assets/profile-image.jpeg'
import Job from '../../components/jobprofile/Job'
import Navbar from '../../components/navbar/Navbar';

const Profile = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar/>
      </div>
      <section className="profile">
        <div className="profile-details">
          <h2 className='profile_heading'>User Details</h2>
          <img className='m-auto' src={image} alt="" />
          <h4 className='m-auto'>Name :<span>Ramesh Kumar</span></h4>
          <h4 className='m-auto'>Contact :<span>1234567890</span></h4>
          <h4 className='m-auto'>Location :<span>324,Manu Vihar,Bhopal</span></h4>

        </div>
        <div className="profile-add">
          <h2 className='profile_heading'>Add Jobs </h2>
          <Job/>
        </div>
      </section>
    </>
  )
};

export default Profile;
