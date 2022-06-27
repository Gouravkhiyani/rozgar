import React from 'react'
import './header.css'
import front from '../../assets/front-interface-image.jpg'

const Header = () => {
    return (
        <div className="header section__padding" id="home">
            <div className="header-content">
                <h1 className="gradient__text">
                    Welcome  to  the  best  platform  for  the  daily  earners.
                </h1>
                <p>This  platform  is  solely  made  for  the  people  who  earn  daily  for their  family  needs  and  the  major  problem  they  face  is  lack  of  knowledge  of  opportunities  for  them.

                    So  here  we  are  to  present  you  this  platform.</p>
                <div className="header-content__input">
                    <button type='button'>See available jobs</button>
                </div>
            </div>
            <div className="header-image">
                <img src={front} alt="front" />
            </div>
        </div>
    )
}

export default Header
