import React, { useEffect, useState } from 'react'
import "./styles/Header.css"
import Logo from "../resources/pngwing.com.png"
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';


function Header(props) {
    const [show, SetShow] = useState(false);
    const navigate = useNavigate();

    const handelShowBar = () => {
        if (window.scrollY > 100) {
            SetShow(true);
        }
        else {
            SetShow(false);
        }
    }

    const handleNavigation = (path) => {
        navigate(path, { replace: true });
        window.location.reload();
    };

    useEffect(() => {
        window.addEventListener('scroll', handelShowBar);

        return () => { window.removeEventListener('scroll', handelShowBar); };
    }, [])

    return (
        <div className={`header ${show && "header__black"}`}>
            <div className="headr__left">
                <img className='header__logo'
                    src={Logo}
                    alt='netflix main logo' />
                <ul className='header__list'>
                    <li onClick={() => handleNavigation("/")}>Home</li>
                    <li onClick={() => handleNavigation("/Series")}>TV Shows</li>
                    <li onClick={() => handleNavigation("/Movies")}>Movies</li>
                    <li className='header__newandpopular'>New & Popular</li>
                    <li className='header__mylist'>My List</li>
                    <li className='header__browse'>Browse by Languages</li>
                </ul>
            </div>
            {props.isLoggedIn ? <img className='header__avatar'
                src='https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg'
                alt='netflix avatar image' onClick={() => handleNavigation("/Profile")} /> : <div className="header__buttons"><Button action="Sign In" /> <Button action="Sign Up" /></div>}
        </div>
    )
}

export default Header