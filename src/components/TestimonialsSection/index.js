import React, { useState } from 'react';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PText from '../PText';
import SectionTitle from '../SectionTitle';
import testimonials from '../../assets/data/testimonials';
import {TestimonialSectionStyles} from './ElementsTestimonialsSection'


export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = testimonials[activeIndex];
  
    function handleNext() {
      if (activeIndex >= testimonials.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((oldIndex) => oldIndex + 1);
      }
    }
    function handlePrev() {
      if (activeIndex === 0) {
        setActiveIndex(testimonials.length - 1);
      } else {
        setActiveIndex((oldIndex) => oldIndex - 1);
      }
    }
  
    return (
      <TestimonialSectionStyles>
        <div className="container">
          <SectionTitle
            subheading="see what our clients say about us"
            heading="Testimonials"
          />
          <div className="testimonial__wrapper">
            <SwitchTransition component={null}>
              <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
                <div className="testimonial__info">
                  <div className="testimonial__desc">
                    <PText>{activeSlide.desc}</PText>
                  </div>
                  <h2 className="testimonial__name">{activeSlide.name}</h2>
                  <p className="testimonial__title">
                    {activeSlide.title}, <br /> {activeSlide.org}
                  </p>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
  
          <div className="arrows">
            <div
              className="prev"
              onClick={handlePrev}
              role="button"
              tabIndex={0}
              onKeyDown={handlePrev}
            >
              <MdArrowBack />
            </div>
            <div
              className="next"
              onClick={handleNext}
              role="button"
              tabIndex={0}
              onKeyDown={handleNext}
            >
              <MdArrowForward />
            </div>
          </div>
        </div>
      </TestimonialSectionStyles>
    );
  }
  