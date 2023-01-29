import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { BsMoon } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header className='header' id='header'>
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src='/src/assets/logo.png' alt="logo" className="nav__logo-img" />
            Sushi
          </a>
          <div className="nav__menu" id="nav-menu">
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
            <div className="nav__close" id='nav-close'>
                <IoMdClose className='nav__close-icon'/>
            </div>
            <img src="/src/assets/leaf-branch-4.png" alt="nav image" className="nav__img-1" />
            <img src="/src/assets/leaf-branch-3.png" alt="nav image" className="nav__img-2" />
          </div>
          <div className="nav__buttons">
            {/* theme change button */}
            <BsMoon className="nav__theme" id="theme-button" />
            {/* toggle button */}
            <div className="nav__toggle" id="nav-toggle">
              <HiMenu className="nav__toggle-icon" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header