'use client';

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Header from "@/components/header/Header";
import { useMediaQuery } from "@mui/material";
import AboutMe from "@/components/about-me/AbouteMe";
import AsteriskAnim from "@/components/asterisk/AsteriskAnim";
import Projects from "@/components/projects/Projects";
import AsteriskContact from "@/components/asterisk/asterisk-contact/AsteriskContact";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  const isSmall = useMediaQuery('(max-width: 1350px)');

  return (
    <>
      <Header />
      <Main>
        <Container>
          <DescriptionContainer>
            <SubDescContainer>
              <h1 className="desc-h1">SOBRE</h1>
            </SubDescContainer>
            <h1 className="name" style={{ zIndex: '1000' }}>/ LUKAS S.</h1>
            <p style={{ zIndex: '1000' }}>Me chamo Lukas de Souza. Dedicado à alcançar os meus objetivos, sou fortemente responsável e dedicado. Missão dada é missão cumprida!</p>
          </DescriptionContainer>
          <TextContainer>
            <TextOne>
              {isSmall ? (
                <>
                  <span className="text-01-small">SOFTWARE</span>
                </>
              ) : (
                <>
                  <span className="text-01-large">SOFT</span> <br />
                  <span className="text-02-large">WARE</span>
                </>
              )}
            </TextOne>
            <Image
              src="/images/background.png"
              alt="background image"
              width={400}
              height={500}
              quality={100}
              loading="lazy"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 500px"
              style={{
                objectFit: "contain",
                width: "clamp(300px, 40vw, 500px)",
                height: "clamp(800px, 60vw, 700px)",

              }}
            />
            <div className="bottom-shadow"></div>
            <TextTwo>
              {isSmall ? (
                <>
                  <span className="text-01">ENGINEER</span>
                </>
              ) : (
                <>
                  <span className="text-01-large">ENGI</span> <br />
                  <span className="text-02-large">NEER</span>
                </>
              )}

            </TextTwo>
          </TextContainer>
          <AboutMe />
        </Container>
        <section style={{ overflow: 'hidden' }}>
          <AsteriskAnim props={{
            title: 'PROJETOS',
          }} />
          <Projects />
        </section>
        <AsteriskContact />
        <Footer />
      </Main>
    </>
  );
}

const Main = styled.main`
    padding-bottom: 20px;
`

const Container = styled.section`
    width: 80%;
    padding: 30px;
    @media screen and (max-width: 1350px) {
        padding: 20px;
    }

    .bottom-shadow {
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 45%;
    background-image: -webkit-gradient(linear, left bottom, left top, from(#000), color-stop(100%, #000), to(transparent));
    @media screen and (max-width: 768px) {
        background-image: linear-gradient(0deg, #000, #000 45%, transparent);
        height: 70%;
        left: 0%;
    }
    @media screen and (min-width: 1350px) {
      top: 55%;
      height: 55%;
    }
      
    background-image: linear-gradient(0deg, #000, #000 43%, transparent);
    }
`;

const TextContainer = styled.section`
    display: flex;
    flex-direction: row;
    @media (max-width: 1350px) {
        flex-direction: column;
        align-items: start;
        gap: 0px;
    }
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 290px;

     img {
    position: static;
    margin: 0;
    top: auto;
    left: auto;
    transform: none;
    @media (max-width: 1350px) {
      align-self: center;
    }

    @media (min-width: 1350px) {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  }
    `;


const DescriptionContainer = styled.section`
    display: flex;
    @media (max-width: 1350px) {
        display: none;
    }
    flex-direction: column;
    align-items: start;
    justify-content: right;
    padding-top: 50px;
    position: absolute;
    gap: 10px;
    left: 65%;
    top: 80px;

    h1.name {
    opacity: 0;
    transform: rotateX(90deg) translateY(20px) scale(0.95);
    animation: flipIn-desc 1s ease-out forwards;
    animation-delay: 0.5s;
    transform-origin: bottom center;
    backface-visibility: hidden;
    perspective: 1000px;
    }

    p {
    width: 70%;
    text-align: left;
    color: #ffffffb3;
    opacity: 0;
    transform: rotateX(90deg) translateY(20px) scale(0.95);
    animation: flipIn-desc 1s ease-out forwards;
    animation-delay: 0.5s;
    transform-origin: bottom center;
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes flipIn-desc {
    0% {
      opacity: 0;
      transform: rotateX(90deg) translateY(20px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg) translateY(0px) scale(1);
    }
  }
`;

const SubDescContainer = styled.section`
  position: absolute;
  top: 50%;
  padding-top: 50px;
  left: 30%;
  transform: translate(-50%, -50%);

  h1.desc-h1 {
    font-size: 12rem;
    color: black;
    text-shadow:
      -2px -2px 0 white,
      2px -2px 0 white,
      -2px 2px 0 white,
      2px 2px 0 white;

    opacity: 0;
    transform: rotateX(90deg) translateY(20px) scale(0.95);
    animation: flipIn-sub-desc 1s ease-out forwards;
    animation-delay: 0.5s;

    transform-origin: bottom center;
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes flipIn-sub-desc {
    0% {
      opacity: 0;
      transform: rotateX(90deg) translateY(20px) scale(0.95);
    }
    100% {
      opacity: 0.2;
      transform: rotateX(0deg) translateY(0px) scale(1);
    }
  }
`;

const TextOne = styled.h1`
  width: 50%;
  font-size: 15vw;
  font-weight: bolder;
  line-height: 1;
  color: #d6d1ce;

  @media (min-width: 1350px) {
    font-size: clamp(5rem, 14vw, 13rem);
  }

  @media (max-width: 1350px) {
    margin-bottom: -210px;
  }

  span {
    display: inline-block;
    opacity: 0;
    transform: rotateX(90deg) translateY(20px) scale(0.95);
    animation: flipIn 1s ease-out forwards;
    transform-origin: bottom center;
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .text-02-large {
    animation-delay: 0.3s;
    margin-left: 60px;
  }

  @keyframes flipIn {
    to {
      opacity: 1;
      transform: rotateX(0deg) translateY(0px) scale(1);
    }
  }
`;

const TextTwo = styled.h1`
  font-size: 15vw;
  font-weight: bolder;
  line-height: 1;
  color: #d6d1ce;
  position: relative;
  top: 210px;

  @media (min-width: 1350px) {
    font-size: clamp(5rem, 14vw, 13rem);
    top: 200px;
  }

  @media (max-width: 1350px) {
    margin-top: -440px;
  }

  span {
    display: inline-block;
    opacity: 0;
    transform: rotateX(90deg) translateY(20px) scale(0.95);
    animation: flipIn 1s ease-out forwards;
    transform-origin: bottom center;
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .text-01,
  .text-01-large {
    animation-delay: 0.6s;
  }

  .text-02-large {
    animation-delay: 0.8s;
    margin-left: -60px;
  }

  @keyframes flipIn {
    to {
      opacity: 1;
      transform: rotateX(0deg) translateY(0px) scale(1);
    }
  }
`;