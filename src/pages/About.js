import React from 'react'

import PText from '../components/PText';
//import Button from '../components/Button';
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
                  Olá, Eu sou<span>Marília</span>
                </p>
                <h2 className="about__heading">Desenvolvedora Web developer</h2>
                <div className="about__info">
                  <PText>
                    Somos o criador consciente das nossas vidas, e que somos 100% responsável por tudo que acontece nela.
                    E com o intuito de impactar no mundo e em tudo que nele há, me dedico a programação!
                    <br /> <br />
                    Adoro criar produtos incríveis que facilitem a vida das pessoas. Há mais de 4 anos,
                    projetando interfaces do usuário úteis e acessíveis para startups e grandes marcas.

                    Estou sempre em busca das melhores práticas de design em constante aprendizado de experiência do usuário
                    e em constante desenvolvimento profissional e busco sempre me atualizar com as tecnologias do mercado.
                    <br />
                    <br />
                    Minha visão é tornar o mundo um lugar melhor!
                    Agora quase tudo está se tornando melhor do que nunca com a tecnologia.
                    É hora de criarmos juntos produtos incríveis que facilitem a vida das pessoas.
                  </PText>
                </div>
                {/* <Button btnText="Download CV" btnLink="#" /> */}
              </div>
              <div className="right">
                <img src={AboutImg} alt="me" />
              </div>
            </div>
            <div className="about__info__items">
              <div className="about__info__item">
                <h1 className="about__info__heading">Educação</h1>
  
                <AboutInfoItems
                  title="Escola"
                  items={['Braz Cubas']}
                />
                <AboutInfoItems
                  title="Técnico"
                  items={['Análise e desenvolvimento de sistemas']}
                />
              </div>
              <div className="about__info__item">
                <h1 className="about__info__heading">Skills</h1>
            
                <AboutInfoItems
                  title="FrontEnd"
                  items={['HTML', 'CSS', 'JavaScript', 'REACT', 'React-Native' , 'Nextjs']}
                />
                <AboutInfoItems
                  title="Adcionais"
                  items={['Styled-Components', 'Material UI']}
                />
                <AboutInfoItems
                  title="Design"
                  items={['Photoshop', 'Figma']}
                />
              </div>
              <div className="about__info__item">
                <h1 className="about__info__heading">Experiences</h1>

                <AboutInfoItems
                  title="2017-"
                  items={[' Freelancer Front-end developer']}
                />
                <AboutInfoItems
                  title="2018-2019"
                  items={[' (De setembro 2018 à janeiro 2019) Junior developer KInterativa']}
                /><br/>
                <AboutInfoItems
                  title="2019-2021"
                  items={['(De julho de 2019 à janeiro 2021) Front-end developer Kobel Software ']}
                /><br/>
                  <AboutInfoItems
                  title="2021-2021"
                  items={[' (De janeiro 2021 à abril 2021) Front-end developer 1M2 Loteamentos']}
                />
                <AboutInfoItems
                  title="2021-"
                  items={['Front-end developer Go2Go Solutions']}
                />
              </div>
            </div>
          </div>
          <ContactBanner />
        </AboutPageStyles>
      </>
    );
  }

