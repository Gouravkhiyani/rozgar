import React from 'react';
import Feature from '../feature/Feature';
import './About.css';

const About = () => (
  <div className="about section__margin" id="wgpt3">
    <div className="about-feature">
      <Feature title="About DainikRozgar" text="The major importance nowadays is the availability of jobs for people who spend their livelihood by earning daily and fulfilling the needs of their families.The major hurdle they have lack of awareness of jobs nearby them so sometimes they have blank days without any earning, so for that reason we have created this platform so that they get the best jobs suitable for them." />
    </div>
    <div className="about-heading">
      <h1 className="gradient__text">Services we are offering currently</h1>
      <p>Explore them</p>
    </div>
    <div className="about-container">
      <Feature title="Best Jobs Available" text="For every daily earner, we have the portal for them to get jobs according to their skillset." />
      <Feature title="Best Skilled Personnels" text="For people looking for personnels to do their work, we provide you the most skilled and efficient people." />
      <Feature title="Listing Preferences" text="For people unable to find the jobs according to their profile currently, we give an option to set your profile and then when the best match is available, we contact you asap." />
    </div>
  </div>
);

export default About;