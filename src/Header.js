import React from 'react'
import{Link} from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <header className='header'
    style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("starnight.webp")`,
    }}
    >
        <div className='header__logo'>
            <Link to="/">
                <h1>NASA</h1>
            </Link>
        </div>
        <div className='header__galleryabout'>
            <Link to="/gallery">
                <div className='header__link'>Gallery</div>
            </Link>
            <Link to="/about">
                <div className='header__link'>About</div>
            </Link>
        </div>  
    </header>
  )
}

export default Header