import { NavLink } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://www.facebook.com/TopRamet.Akh/" target="_blank">
            <img src={process.env.PUBLIC_URL + '/images/icon-workshop.png'} alt="icon bland" width="112"
                 height="28"/>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
            {/*<NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>*/}
            {/*<NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>*/}
            <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
            {/*<NavLink to="/counter" activeClassName="is-active" className="navbar-item">Counter App</NavLink>*/}
            <a className="navbar-item" href="https://github.com/ramet-top" target="_blank">GitHub
              <i className="fab fa-github"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
