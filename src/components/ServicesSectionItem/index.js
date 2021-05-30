import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import PText from '../PText';
import {ItemStyles} from './ElementsServicesSectionItem'


export default function ServicesSectionItem({
    icon = <MdDesktopMac />,
    title = 'Web Design',
    desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
  }) {
    return (
      <ItemStyles className="servicesItem">
        <div className="servicesItem__icon">{icon}</div>
        <div className="servicesItem__title">{title}</div>
        <PText>{desc}</PText>
      </ItemStyles>
    );
  }