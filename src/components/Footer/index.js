import React from 'react'
import FooterCol from '../FooterCol';
import PText from '../PText';
import {FooterStyle} from './ElementFooter'

export default function Footer() {
    return (
      <FooterStyle>
        <div className="container">
          <div className="footer__col1">
            <h1 className="footer__col1__title">Marília Augusta</h1>
            <PText>
              Desevolvedora front-end developer
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
              heading="Informações de Contato"
              links={[
                {
                  title: '(11)99920-0921',
                  link: 'tel:(11)9920-0921',
                },
                {
                  title: 'devmarilia.frontend@gmail.com',
                  link: 'marilia:devmarilia.frontend@gmail.com',
                },
                {
                  title: 'Joinville-SC',
                  link: 'https://www.google.com/maps/place/Joinville+-+SC/@-26.2625268,-49.243085,10z/data=!3m1!4b1!4m5!3m4!1s0x94dea3f39db1ab37:0xbc4b989df161e9fa!8m2!3d-26.3043758!4d-48.8463744',
                },
              ]}
            />
          </div>
          <div className="footer__col4">
            <FooterCol
              heading="social Links"
              links={[
                {
                  title: 'Linkedin',
                  link: 'https://www.linkedin.com/in/mar%C3%ADlia-augusta-b2565316a/',
                },
                {
                  title: 'Medium',
                  link: 'https://devmarilia-frontend.medium.com/',
                },
                {
                  title: 'Instagram',
                  link: 'https://www.instagram.com/marilia_leemos/',
                },
              ]}
            />
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <PText>
              © 2021 - Marília Augusta
            </PText>
          </div>
        </div>
      </FooterStyle>
    );
  }
