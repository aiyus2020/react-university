import React from 'react'

const About = () => {
  return (
    <section className="about">
  <div className="both">
    <div className="writeup">
      <h1>About Freeton</h1>
      <h3>World Class knowledge</h3>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br />
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       <br/>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        <br />
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        <br />
        commodo consequat.
      </p>
      <button class="btn">Read More</button>
    </div>
    <div classname="about-video">
      <iframe
        width="400"
        height="300"
        src="https://www.youtube.com/embed/JMpnguwkPVc"
        title="YouTube video player"
        frameborder= 'none'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

  )
}

export default About
