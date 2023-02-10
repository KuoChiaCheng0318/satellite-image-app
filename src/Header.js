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
        <div >
            <Link to="/"  className='header__link'>
                <h1 className='header__logo'>NASA</h1>
            </Link>
        </div>
        <div className='header__galleryabout'>
            <Link to="/gallery" className='header__link'>
                <div className='header__linktext'>Gallery</div>
            </Link>
            <Link to="/about" className='header__link'>
                <div className='header__linktext'>About</div>
            </Link>
        </div>  
    </header>
  )
}

export default Header