import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 8rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle
          heading="OG Form"
          subheading="Become An OG and Early Supporter"
        />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={null}
              text="Become A Part of History, Apply to be an OG and Early supporter of Civilized Apes. Help these apes reveal themselves"
            />
            <ContactInfoItem
              icon={<AiOutlineCheckCircle />}
              text="You must be an active twitter user with atleast 250 followers and a decent engagement."
            />
            <ContactInfoItem
              icon={<AiOutlineCheckCircle />}
              text="There would be Special Rewards."
            />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
