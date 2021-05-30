import React from 'react';
import Button from '../Button';
import PText from '../PText';
import SectionTitle from '../SectionTitle';
import AboutImg from '../../assets/images/about-sec-img.jpg';
import {AboutSectionStyles} from './ElementAboutSection'

export default function AboutSection() {
    return (
      <AboutSectionStyles>
        <div className="container">
          <div className="aboutSection__left">
            <SectionTitle
              subheading="Deixa eu me apresentar"
              heading="Sobre mim"
            />
            <PText>
            Sou desenvolvedora front-end developer apaixonada por tecnologia e por tudo que nela existe, 
            e estou em constante aprendizado para adquirir técnicas de desenvolvimento web e interfaces de usuário úteis e acessíveis.
            </PText>
            <div className="aboutSection__buttons">
              <Button btnText="Works" btnLink="/projects" />
              <Button btnText="Saiba mais" btnLink="/about" outline />
            </div>
          </div>
          <div className="aboutSection__right">
            <img className="aboutImg" src={AboutImg} alt="Img" />
          </div>
        </div>
      </AboutSectionStyles>
    );
  }