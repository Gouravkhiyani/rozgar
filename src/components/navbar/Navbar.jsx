import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

const Menu = () => {
    return (
        <>
            <p><NavLink to="/home" className="nav-link">Home</NavLink></p>
            <p><NavLink to="/search" className="nav-link">Search Jobs</NavLink></p>
            <p><NavLink to="/people" className="nav-link">Available People</NavLink></p>
            <p><NavLink to="/contact" className="nav-link">Contact us</NavLink></p>
        </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                <button type='button'><NavLink to="/profile" className="nav-link">Profile</NavLink></button>
                <button type='button'><NavLink to="/" className="nav-link" onClick={handleLogout}>Log out</NavLink></button>
            </div>
            <div className="navbar-menu">
                {
                    toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className="navbar-menu_container scale-up-center">
                            <div className="navbar-menu_container-links">
                                <Menu />
                                <div className="navbar-menu_container-links-sign">
                                    <p>Sign In</p>
                                    <button type='button'>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
