import React from 'react'
import {SectionTitleStyle} from './ElementsSectionTitle'

export default function SectionTitle({
    subheading = 'Need Subheading',
    heading = 'need heading',
  }) {
    return (
      <SectionTitleStyle className="section-title">
        <p>{subheading}</p>
        <h2>{heading}</h2>
      </SectionTitleStyle>
    );
  }
