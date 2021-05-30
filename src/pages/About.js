import React from 'react'

import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-sec-img.jpg';
import AboutInfoItems from '../components/AboutInfoItem/index';
import ContactBanner from '../components/ContactBanner';
import { AboutPageStyles } from '../styles/PagesStyles'

export default function About() {
    return (
      <>
        <AboutPageStyles>
          <div className="container">
            <div className="top-section">
              <div className="left">
                <p className="about__subheading">
                  Hi, I am <span>Ayan Khan</span>
                </p>
                <h2 className="about__heading">A freelance Web developer</h2>
                <div className="about__info">
                  <PText>
                    I am from chittagong, Bangladesh. A place of beauty and
                    nature. Since my childhood, i love art and design. I always
                    try to design stuff with my unique point of view. I also love
                    to create things that can be usefull to others.
                    <br /> <br />
                    I started coding since I was in high school. Coding is also an
                    art for me. I love it and now I have the opportunity to design
                    along with the coding. I find it really interesting and I
                    enjoyed the process a lot.
                    <br />
                    <br />
                    My vision is to make the world a better place. Now almost
                    everything is becoming better than ever. It is time for us to
                    create more good stuff that helps the world to become a better
                    place.
                  </PText>
                </div>
                <Button btnText="Download CV" btnLink="#" />
              </div>
              <div className="right">
                <img src={AboutImg} alt="me" />
              </div>
            </div>
            <div className="about__info__items">
              <div className="about__info__item">
                <h1 className="about__info__heading">Education</h1>
  
                <AboutInfoItems
                  title="School"
                  items={['Nasirabad Govt. High School, Chattogram']}
                />
                <AboutInfoItems
                  title="Collage"
                  items={['BAF Shaheen College Chattogram']}
                />
                <AboutInfoItems
                  title="Varsity"
                  items={['University Of Chitiagong']}
                />
              </div>
              <div className="about__info__item">
                <h1 className="about__info__heading">My Skills</h1>
  
                <AboutInfoItems
                  title="FrontEnd"
                  items={['HTML', 'CSS', 'JavaScript', 'REACT']}
                />
                <AboutInfoItems
                  title="BackEnd"
                  items={['Node', 'Express', 'PHP']}
                />
                <AboutInfoItems
                  title="Design"
                  items={['Photoshop', 'After Effects', 'Figma']}
                />
              </div>
              <div className="about__info__item">
                <h1 className="about__info__heading">Experiences</h1>
  
                <AboutInfoItems
                  title="2010-2012"
                  items={['junior developer at web Cifar']}
                />
                <AboutInfoItems
                  title="2012-2016"
                  items={['Front end developer at web Cifar ']}
                />
                <AboutInfoItems
                  title="2016-"
                  items={['Freelance web Developer']}
                />
              </div>
            </div>
          </div>
          <ContactBanner />
        </AboutPageStyles>
      </>
    );
  }

