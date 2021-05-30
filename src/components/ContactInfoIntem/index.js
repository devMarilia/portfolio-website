import React from 'react'
import { MdPlace } from 'react-icons/md';
import PText from '../PText';
import {ItemStyles} from './ElementsContacInfoItem'

export default function ContactInfoItem({
    icon = <MdPlace />,
    text = 'I need text ',
  }) {
    return (
      <ItemStyles>
        <div className="icon">{icon}</div>
        <div className="info">
          <PText>{text}</PText>
        </div>
      </ItemStyles>
    );
  }
