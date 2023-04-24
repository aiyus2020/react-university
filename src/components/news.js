import React from 'react'
import building from '../figimg/building.png'
import hall from '../figimg/hall.png'
import guys from '../figimg/guys.png'
const News = () => {
  return (
    <section className="news">
    <div className="tu">
      <div>
        <h1>News and Updates</h1>
      </div>
      <div className="upd">
        <div className="ty">
          <img src={building} alt=""/>
          <h6>Seven Freeton academics <br/>elected
            British Acedemy <br/>Fellows</h6>
          <a href="http://google.com">Read More</a>
          <p>22 JUL 2022</p>
        </div>
        <div className="ty">
          <img src={hall} alt=""/>
          <h6>The researchers at Freeton <br/>help create the most <br/>complete polygenic tree</h6>
          <a href="http://google.com">Read More</a>
          <p>22 JUL 2022</p>
        </div>
        <div className="ty">
          <img src={guys} alt=""/>
          <h6>A global MBA from the <br/>next generation of
            business <br/>leaders</h6>
          <a href="http://google.com">Read More</a>
          <p>22 JUL 2022</p>
        </div>
      </div>
      <button className="btn">View More</button>
    </div>
  </section>
  )
}

export default News

