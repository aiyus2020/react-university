import React from 'react'

const Event = () => {
  return (
    <section className="event">
    <div className="ev">
      <div className="evh1">
        <h1>Upcoming Events </h1>
      </div>
      <div className="evrow">
        <div className="int">
          <div className="we">
            <h1>17<br/></h1>
            <h2>SEP<br/></h2>
            <p>2022</p>
          </div>
          <div className="me">
            <h1>Fintech & Key Investment<br/>
              Conference</h1>
            <p>1:00 pm - 2:00 pm Freeton Grand Hall</p>
          </div>
        </div>
        <div className="int">
          <div className="we">
            <h1>20<br/></h1>
            <h2>NOV<br/></h2>
            <p>2022</p>
          </div>
          <div className="me">
            <h1>International Conference on Biomolecular<br/>
              Engineering</h1>
            <p>1:00 pm - 2:00 pm Freeton Grand Hall</p>
          </div>
        </div>
        <div className="int">
          <div className="we">
            <h1>14<br/></h1>
            <h2>JAN<br/></h2>
            <p>2022</p>
          </div>
          <div className="me">
            <h1>Digital Art - a future of for the film<br/>
              industry</h1>
            <p>1:00 pm - 2:00 pm Freeton Grand Hall</p>
          </div>
        </div>

      </div>
      <button className="btn">View All Events</button>
    </div>
  </section>
  )
}

export default Event
