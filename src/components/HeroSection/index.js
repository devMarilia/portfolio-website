import React from 'react'
import { HeroStyles } from './ElementsHeroSection'
import HeroImg from '../../assets/images/perfilMarilia.jpeg';
import Button from '../Button';
import SocialMediaArrow from '../../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../../assets/images/scroll-down-arrow.svg'
import PText from '../PText';


export default  function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
            <div className="container">
                <h1 className="hero__heading">
                <span>Olá, Eu sou</span>
                <span className="hero__name typing-animation">Marília Augusta</span>
                </h1>
                <div className="hero__img">
                    <img src={HeroImg} alt="foto de perfil" />
                </div>
                <div className="hero__info">
                    <PText>
                    Trabalho como web designer e desenvolvedora front-end. 
                    Amo projetar interfaceis uteis e fazer novas experiências na web para as pessoas. 
                    </PText>
                    <Button btnText="see my works" btnLink="/projects" />
                </div>
                <div className="hero__social">
                <div className="hero__social__indicator">
                    <p>Follow</p>
                    <img src={SocialMediaArrow} alt="icon" />
                </div>
                <div className="hero__social__text">
                    <ul>
                    <li>
                        <a
                        href="http://facebook.com/webcifar"
                        target="_blank"
                        rel="noreferrer"
                        >
                        FB
                        </a>
                    </li>
                    <li>
                        <a
                        href="http://twitter.com/webcifar"
                        target="_blank"
                        rel="noreferrer"
                        >
                        TW
                        </a>
                    </li>
                    <li>
                        <a
                        href="http://isntagram.com/web_cifar"
                        target="_blank"
                        rel="noreferrer"
                        >
                        IG
                        </a>
                    </li>
                    <li>
                        <a
                        href="http://webcifar.com"
                        target="_blank"
                        rel="noreferrer"
                        >
                        LI
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="hero__scrollDown">
                    <p>Scroll</p>
                    <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
                </div>
            </div>
            </div>
      </HeroStyles>
    );
  }




