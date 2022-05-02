import React from 'react';
import styled from 'styled-components';
import Herovid from '../assets/images/apeTown.mp4';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 900px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 1000px;
    width: 100%;
    height: 562px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  video {
    max-width: 988px;
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 700px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -1.5rem;
      .hero__name {
        font-size: 3rem;
      }
    }
    .hero__img {
      height: 304px;
      width: 537px;
    }
    video {
      height: 300px;
      width: 533px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>You're About to Enter</span>
            <span className="hero__name">Civilized Apes Town</span>
          </h1>
          <div className="hero__img">
            <video autoPlay loop muted>
              <source src={Herovid} type="video/mp4" />
            </video>
          </div>
          <div className="hero__info">
            <PText>
              Deep in the heart of Brocéliande Forest roam a troop of 10,000
              Apes. These are not regular apes, however. These are Civilized
              Apes, teeming with life, and all that accompanies it. They
              symbolize freedom and the possibility of a life truly lived.
            </PText>
            <Button btnText="Enter" btnLink="/#" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="http://discord.gg/CivilizedApeTown"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DC
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/CivilizedApeNFT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
