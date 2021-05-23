import React from 'react'
import {PStyle} from './ElementsPTex'

export default function PText({ children }) {
    return (
      <PStyle className="para">
        <p>{children}</p>
      </PStyle>
    );
  }
