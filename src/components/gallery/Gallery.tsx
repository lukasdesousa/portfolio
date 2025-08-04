'use client';

import styled from "styled-components";
import Image from "next/image";
import Footer from "../footer/Footer";
import AsteriskContact from "../asterisk/asterisk-contact/AsteriskContact";
import Link from "next/link";

type GalleryProps = {
  src?: string[];
  title?: string[];
  isAboutMe?: boolean;
  description?: string[];
  hrefTitle?: string;
  href?: string;
}; 

export default function Gallery({props}: {props: GalleryProps}) {
  return (
    <>
      <section style={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}>
        <GalleryContainer>
          <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <section className="star-container" style={{ padding: '20px 20px 90px 20px', zIndex: 3, backgroundColor: 'black', display: 'flex', alignItems: 'start', justifyContent: 'center', marginTop: '-10px' }}>
              <Star
                src="https://cdn.prod.website-files.com/62cfb3313a1a61a7d399c600/62d65d67f4f174f518af874a_star.svg"
                alt="Spinning Star"
              />
            </section>
            <Line />
            <Text>GALERIA</Text>
          </section>
          <section>
            <ImagesContainer>
              <Image
                src={props.src ? props.src[0] : '/images/background.png'}
                alt="background image"
                width={400}
                height={500}
                quality={100}
                priority
                style={{ width: '90vw', height: 'auto', maxWidth: '90%', display: 'block', margin: 'auto' }}
              />
              <ImageInfo>
                <h1>/ {props.title ? props.title[0] : ''}</h1>
                <p>{props.description ? props.description[0] : ''}</p>
              </ImageInfo>
            </ImagesContainer>
            <ImagesContainer>
              <Image
                src={props.src ? props.src[1] : '/images/background.png'}
                alt="background image"
                width={400}
                height={500}
                quality={100}
                priority
                style={{ width: '90vw', height: 'auto', maxWidth: '90%', display: 'block', margin: 'auto' }}
              />
              <ImageInfo>
                <h1>/ {props.title ? props.title[1] : ''}</h1>
                <p>{props.description ? props.description[1] : ''}</p>
              </ImageInfo>
            </ImagesContainer>
          </section>
        </GalleryContainer>


      </section>
        <ToProject>
          <Link style={{textDecoration: 'none'}} href={props.href || ''} target="_blank" rel="noopener noreferrer">
            <ToProjectStar>
              <Star
                src="https://cdn.prod.website-files.com/62cfb3313a1a61a7d399c600/62d65d67f4f174f518af874a_star.svg"
                alt="Spinning Star"
              />
              <div className="line"></div>
              <h1>{props.hrefTitle}</h1>
            </ToProjectStar>
          </Link>
        </ToProject>
        {props.isAboutMe && (
          <AsteriskContact />
          )}
      <Footer />
    </>
  );
}

const ToProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 50px 0;
    position: relative;
    overflow: hidden;

    h1 {
      font-size: 3.8vw;
      color: #d6d1ce;
    }

    .line {
      width: 40vw;
      height: 2px;
      background-color: #d6d1ce;
    }

    .two {
      width: 2px;
      height: 40vw;
    }
    
`;

const ToProjectStar = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 20px;
  gap: 25px;

  img {
    width: 10vw;
    max-width: 100px;
  }
`;


const GalleryContainer = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
`;

const ImagesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    z-index: 5;
  }

`;

const ImageInfo = styled.section`
  display: flex;
  justify-content: space-between;
   @media screen and (max-width: 768px){
      flex-direction: column;
      align-items: start;
      gap: 20px;
    }
  align-items: center;
  margin: 20px auto;
  width: 90%;

  h1 {
    font-size: 4vw;
    font-weight: 1000;
    color: #d6d1ce;
  }

  p {
    opacity: 0.5;
    @media screen and (min-width: 768px){
      width: 50%;
    }
  }
`;

const Star = styled.img`
  width: 60px;
  z-index: 3;
  animation: rotateStar 15s linear infinite;

  @keyframes rotateStar {
    0%   { transform: rotateZ(0deg); }
    100% { transform: rotateZ(360deg); }
  }
`;

const Line = styled.div`
position: sticky;
bottom: 0px;
  width: 2px;
  min-height: 85vw; 
  background-color: #d6d1ce;
`;

const Text = styled.h1`
position: sticky;
font-weight: 1000;
padding: 50px 10px 20px 10px;
background-color: #000000;
z-index: 2;
bottom: 0px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 30px;
  color: #d6d1ce;

`;