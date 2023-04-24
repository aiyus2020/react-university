import React from 'react'
import Bookgirl from '../figimg/bookgirl.png'
const Why = () => {
    
  return (
    <section className="why">
    <div className="all">
      <div className="wrt">
        <h1>Why Choose <br/>
          University of Freeton</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et
          dolore<br/> magna aliqua.</p>
        <button className="btn">Read More</button>
      </div>
      <div className="girl">
      <img src={Bookgirl} alt="Bookgirl" />
      </div>
    </div>
  </section>
  )
}

export default Why
