import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Web Developer, Designer, & Avid Content Creator</p>
      <hr />
      {/* <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Lauren Pineiro"/> */}
      <p className="content is-italic mt-4">
      My name is Lauren Pineiro and I live with my husband in Florida. I am a freelance web designer with
                experience in search engine optimization. I'm a major book and coffee lover.
      </p>
      <p className="content">
        I currently work as an search engine optimization specialist (SEO) for a local company in Fort Lauderdale. I help manage our SEO department along with various clients, specifically addiction-treatment related clients. Web developing is an additional skill that I'd love to master and utilize at my company. 
      </p>
    </div>
  );
}

export default About;