import React from 'react'
import FooterCol from '../FooterCol';
import PText from '../PText';
import {FooterStyle} from './ElementFooter'

export default function Footer() {
    return (
      <FooterStyle>
        <div className="container">
          <div className="footer__col1">
            <h1 className="footer__col1__title">Ayan Khan</h1>
            <PText>
              A freelance web designer and developer from Chittagong, Bangladesh.
              I always make websites that have unique designs and also has a good
              performance rate.
            </PText>
          </div>
          <div className="footer__col2">
            <FooterCol
              heading="Important Links"
              links={[
                {
                  title: 'Home',
                  link: '/',
                  type: 'Link',
                },
                {
                  type: 'Link',
                  title: 'About',
                  link: '/about',
                },
                {
                  type: 'Link',
                  title: 'Projects',
                  link: '/projects',
                },
                {
                  type: 'Link',
                  title: 'Contact',
                  link: '/contact',
                },
              ]}
            />
          </div>
          <div className="footer__col3">
            <FooterCol
              heading="Contact Info"
              links={[
                {
                  title: '+88012312',
                  link: 'tel:+88012312',
                },
                {
                  title: 'webcifar@gmail.com',
                  link: 'mailto:webcifar@gmail.com',
                },
                {
                  title: 'GEC Circle, Chittagong, Bangladesh',
                  link: 'http://google.com/maps',
                },
              ]}
            />
          </div>
          <div className="footer__col4">
            <FooterCol
              heading="social Links"
              links={[
                {
                  title: 'Facebook',
                  link: 'http://facebook.com',
                },
                {
                  title: 'Twitter',
                  link: 'http://twitter.com',
                },
                {
                  title: 'Instagram',
                  link: 'http://instagram.com',
                },
              ]}
            />
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <PText>
              © 2021 - Ayan Khan | Designed By{' '}
              <a target="_blank" rel="noreferrer" href="http://webcifar.com">
                web cifar
              </a>{' '}
            </PText>
          </div>
        </div>
      </FooterStyle>
    );
  }
