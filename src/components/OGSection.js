import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import OGForm from './OGForm';
import OGInfoItem from './OGInfoItem';
import SectionTitle from './SectionTitle';

const OGSectionStyle = styled.div`
  padding: 8rem 0;
  .OGSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .OGSection__wrapper::after {
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
    .OGSection__wrapper {
      flex-direction: column;
    }
    .OGSection__wrapper::after {
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

export default function OGSection() {
  return (
    <OGSectionStyle>
      <div className="container">
        <SectionTitle
          heading="OG Form"
          subheading="Become An OG and Early Supporter"
        />
        <div className="OGSection__wrapper">
          <div className="left">
            <OGInfoItem
              icon={null}
              text="Become A Part of History, Apply to be an OG and Early supporter of Civilized Ape. Help these apes reveal themselves."
            />
            <OGInfoItem
              icon={<AiOutlineCheckCircle />}
              text="You must be an active twitter user with atleast 250 followers and a decent engagement."
            />
            <OGInfoItem
              icon={<AiOutlineCheckCircle />}
              text="There would be Special Rewards."
            />
          </div>
          <div className="right">
            <OGForm />
          </div>
        </div>
      </div>
    </OGSectionStyle>
  );
}
