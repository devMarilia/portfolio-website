import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from '../ContactForm';
import ContactInfoItem from '../ContactInfoIntem';
import SectionTitle from '../SectionTitle';
import {ContactSectionStyle} from "./ElementsContactSection"

export default function ContactSection() {
    return (
      <ContactSectionStyle>
        <div className="container">
          <SectionTitle heading="contact" subheading="get in touch" />
          <div className="contactSection__wrapper">
            <div className="left">
              <ContactInfoItem icon={<MdLocalPhone />} text="+8801231" />
              <ContactInfoItem icon={<MdEmail />} text="webcifar@gmail.com" />
              <ContactInfoItem text="Chittagong, Bangladesh" />
            </div>
            <div className="right">
              <ContactForm />
            </div>
          </div>
        </div>
      </ContactSectionStyle>
    );
  }
