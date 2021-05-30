import React from 'react'
import { Link } from 'react-router-dom';
import {ColStyle} from './ElementsFooterCol'
export default function FooterCol({
    heading = 'Col Heaing',
    links = [
      {
        type: 'Links',
        title: 'Home',
        link: '/home',
      },
      {
        type: 'Links',
        title: 'About',
        link: '/about',
      },
    ],
  }) {
    return (
      <ColStyle>
        <h2 className="heading">{heading}</h2>
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              {item.type === 'Link' ? (
                <Link to={item.link}>{item.title}</Link>
              ) : (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </ColStyle>
    );
  }
