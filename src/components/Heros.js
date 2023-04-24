import React from 'react'
import Why from './whys'

const Hero = () => {
  return (
    <section className="hero">
  <header>
    <div className="cap">
      <i className="fa fa-graduation-cap" aria-hidden="true"></i>
    </div>
    <div className="left">
      <h3>
        THE UNIVERSITY <br />
        OF FREETON
      </h3>
      <h4>ARGENTINA</h4>
    </div>
    <nav className="navbar">
      <div>
        <ul>
          <li>
            <a href={Why}>Admission</a>
          </li>
          <li>
            <a href="http://google.com">About</a>
          </li>
          <li>
            <a href="http://google.com">Study</a>
          </li>
          <li>
            <a href="http://google.com">Research</a>
          </li>
          <li>
            <a href="http://google.com">News & Events</a>
          </li>
          <li>
            <a href="http://google.com">FAQs</a>
          </li>
          <li>
            <a href="http://google.com">Contact Us</a>
          </li>
        </ul>
        <form className="search" action="action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  </header>
  <div className="hero-view">
    <h1>
      Welcome to The University
      <br />
      Of Freeton
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      <br />
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      <br />
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      <br />
      ea commodo consequat.
    </p>
    <button className="hbtn">Explore Now</button>
  </div>
</section>

  )
}

export default Hero
