import React from 'react';
import MapImg from '../../assets/images/map.png';
import PText from '../PText';
// import LocalizationMap from '../LocalizationMap'
import {MapStyles} from './ElementsMap'

export default function Map() {
    return (
      <MapStyles>
        <div className="container">
          <div className="map__card">
            <h3 className="map__card__heading">Aqui estou eu</h3>
            <PText>Joinville-SC</PText>
            <a
              className="map__card__link"
              href="https://www.google.com/maps/place/Joinville+-+SC/@-26.2625268,-49.243085,10z/data=!3m1!4b1!4m5!3m4!1s0x94dea3f39db1ab37:0xbc4b989df161e9fa!8m2!3d-26.3043758!4d-48.8463744"
              target="_blank"
              rel="noreferrer"
            >
              Abrir google map
            </a>
          </div>
        </div>
        <img src={MapImg} alt="Map" />
      </MapStyles>
    );
  }
