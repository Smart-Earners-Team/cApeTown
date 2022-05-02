import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import SuccessImg from '../assets/images/success.svg';

const OgsSectionStyles = styled.div`
  padding: 10rem 0;
  .section-container {
    width: 1200px;
    margin: auto;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .ogsSection__left,
  .ogsSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .ogsSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .successImg {
    width: 400px;
    padding: 3rem;
  }
  @media only screen and (max-width: 950px) {
    .ogsSection__left {
      flex: 3;
    }
    .ogsSection__right {
      flex: 4;
    }
    .successImg {
      width: 300px;
      padding: 3rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .section-container {
      width: 90%;
      margin: auto;
      text-align: center;
    }
    .container {
      flex-direction: column;
      text-align: center;
    }
    .ogsSection__left,
    .ogsSection__right {
      width: 100%;
    }
    .ogsSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .successImg {
      width: 300px;
      padding: 4rem;
    }
  }
`;

export default function OGSuccess() {
  return (
    <OgsSectionStyles>
      <div className="section-container">
        <SectionTitle
          subheading="We Received Your Applications"
          heading="Congratulations"
        />
        <div className="container">
          <div className="ogsSection__left">
            <img className="successImg" src={SuccessImg} alt="Success" />
          </div>
          <div className="ogsSection__right">
            <PText>
              Your Application has been received, keep an eye on your email. we
              would reach you soon. <br /> Do you know anyone who would be
              interested in this? <br /> please share this form with them.
            </PText>
          </div>
        </div>
      </div>
    </OgsSectionStyles>
  );
}
