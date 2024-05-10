import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div class="header">
    <div class="logo">
        <img className='immg' src="../../../public/fogo.png" alt="Логотип"/>
        <span class="logo-text">Faynot</span>
    </div>
    <div class="buttons">
        <button class="button">
            <Link to="/">
                Main
            </Link>
        </button>

        <button class="button">
            <Link to="/Blog">
                Blog
            </Link>
        </button>

        <button class="button">
            <Link to="/Resume">
                Resume
            </Link>
        </button>
    </div>
    </div>
  )
}

export default Header