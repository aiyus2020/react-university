import React from 'react'
import test1 from '../figimg/test1.png'
import test2 from '../figimg/test2.png'
import test3 from '../figimg/test3.png'
import test4 from '../figimg/test4.png'
const Review = () => {
  return (
    <section className="review">
    <div className="rvw">
      <div className="rtv">
        <h1>Students Reviews</h1>
        <p>Lorem ipsum dolor sit amet, consectetur , sed do eiusmod tempor incididunt ut labore et <br/>dolore magna
          aliqua. Lorem ipsum dolor sit amet, consectetur , sed do eiusmod tempor .</p>
      </div>
      <div className="rrow">
        <div>
          <img src={test1} alt="test"/>
          <h1>Strobe Lilian</h1>
          <h3>Industrial Physicist</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore
            et dolore magna aliqua.</p>
        </div>
        <div>
          <img src={test2} alt="test2"/>
          <h1>Robin Matthew</h1>
          <h3>Medicine</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore
            et dolore magna aliqua.</p>
        </div>
        <div>
          <img src={test3}alt="teste3"/>
          <h1>Silly Mark</h1>
          <h3>Chemistry</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore
            et dolore magna aliqua.</p>
        </div>
        <div>
          <img src={test4} alt=""/>
          <h1>Michelle Davis</h1>
          <h3>Industrial Physicist</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore
            et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Review
