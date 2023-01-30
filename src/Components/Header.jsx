import React, { useRef } from 'react'
import { IoMdClose } from 'react-icons/io'
import { BsMoon } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import './Header.css'

const Header = () => {
  const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
    <div>
      <header className='header' id='header'>
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src='/src/assets/logo.png' alt="logo" className="nav__logo-img" />
            Sushi
          </a> 
          <div className="nav__menu" id="nav-menu" ref={navRef}>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link active-link">Sobre</a>
              </li>
              <li className="nav__item">
                <a href="#popular" className="nav__link active-link">Popular</a>
              </li>
              <li className="nav__item">
                <a href="#recently" className="nav__link active-link">Recentes</a>
              </li>
            </ul>
            <button className="nav__toggle nav__close" id='nav-close' onClick={showNavBar}>
                <IoMdClose className='nav__close-icon'/>
            </button>
            <img src="/src/assets/leaf-branch-4.png" alt="nav image" className="nav__img-1" />
            <img src="/src/assets/leaf-branch-3.png" alt="nav image" className="nav__img-2" />
          </div>
          <div className="nav__buttons">
            {/* theme change button */}
            {/* <BsMoon className="nav__theme" id="theme-button" /> */}
            {/* toggle button */}
            <div className="nav__toggle" id="nav-toggle" onClick={showNavBar}>
              <HiMenu className="nav__toggle-icon" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header