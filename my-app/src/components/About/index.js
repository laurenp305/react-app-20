import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Lauren Pineiro. I am currently 24 and living in Florida with my husband.
            I received my bachelor's in Communications and graduated from FIU. 
            I'm active in my local church and enjoy spending time with loved ones. 
            Although I'm a major book nerd, I've been on a slight hiatus while working on my coding bootcamp.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;