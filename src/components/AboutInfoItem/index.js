import React from 'react'
import PText from '../PText';
import {AboutItemStyles} from '../AboutInfoItem/ElementsAboutInfoIntem'

export default function AboutInfoItem({
    title = 'Title',
    items = ['HTML', 'CSS'],
  }) {
    return (
      <AboutItemStyles>
        <h1 className="title">{title}</h1>
        <div className="items">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <PText>{item}</PText>
            </div>
          ))}
        </div>
      </AboutItemStyles>
    );
  }
