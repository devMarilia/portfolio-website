import React from 'react'
import { Link } from 'react-router-dom';
import {ButtonStyle} from './ElementsButton'

export default function Button({
    btnText = 'test',
    btnLink = 'test',
    outline = false,
  }) {
    return (
      <ButtonStyle outline={outline} className="button-wrapper">
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      </ButtonStyle>
    );
  }
