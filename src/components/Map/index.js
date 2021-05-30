import React from 'react';
// import MapImg from '../../assets/images/map.png';
import PText from '../PText';
import {MapStyles} from './ElementsMap'

export default function Map() {
    return (
      <MapStyles>
        <div className="container">
          <div className="map__card">
            <h3 className="map__card__heading">Here is me</h3>
            <PText>GEC circle, Chittagong, Bangladesh</PText>
            <a
              className="map__card__link"
              href="https://www.google.com/maps/place/GEC+More,+Chittagong/@22.3590818,91.8195583,17z/data=!3m1!4b1!4m5!3m4!1s0x30acd89aaa8239cd:0x6e65fa00001dd59f!8m2!3d22.3590715!4d91.8215486"
              target="_blank"
              rel="noreferrer"
            >
              Open in google map
            </a>
          </div>
        </div>
        {/* <img src={MapImg} alt="Map" /> */}
      </MapStyles>
    );
  }
