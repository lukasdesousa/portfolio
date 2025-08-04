'use client';

import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function AsteriskContact() {
    return (
        <>
        <BgContainer>
           <Image
                      className="bg"
                      src="https://cdn.prod.website-files.com/62cfb3313a1a61a7d399c600/62d69ebbb05a0cbf3e8cc816_low_opac_star.svg"
                      alt="Spinning Star"
                      width={800}
                      height={800}
                      priority
                  />

          <Container>
              <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '50px'}}>
                  <Star
                      src="https://cdn.prod.website-files.com/62cfb3313a1a61a7d399c600/62d65d67f4f174f518af874a_star.svg"
                      alt="Spinning Star"
                  />
                  <span></span>
              </section>
              <h1>CONTATO</h1>
              <section className="contact-opt">
                <h1><span>01.</span> LINKEDIN</h1>
                <h1><span>02.</span> S.LUKAS.DEV@GMAIL.COM</h1>
                <h1><span>03.</span> +55 88 9 9706-3343</h1>
              </section>
          </Container>
          <Address>
              <section>
                <h1>MONSENHOR TABOSA,</h1>
                <h1>CEARÁ,</h1>
                <h1>BRAZIL.</h1>
              </section>
          </Address>
        </BgContainer>
        </>
    );
}

const BgContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
    position: relative;


    .bg {
      position: absolute;
      left: -35%;
      top: 45%;
      transform: translate(-50%, -50%);
      z-index: -1;
      width: 80vw;
      animation: rotateStar 60s linear infinite;
      transform-style: preserve-3d;
      will-change: transform;
    @keyframes rotateStar {
      0% {
        transform: rotateZ(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1);
      }
      100% {
        transform: rotateZ(360deg) translate3d(0, 0, 0) scale3d(1, 1, 1);
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: start;
  gap: 50px;
  margin: 100px 0px 50px 20px;
  overflow: hidden;

  h1 {
    font-size: 2.5rem;
    color: #d6d1ce;
    font-weight: 1000;
    font-family: 'Montserrat', 'Jost';
  }

  span {
    height: 300px;
    border: 2px solid #d6d1ce;
  }

  .contact-opt {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    h1 {
      font-size: 5vw;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }

    span {
      height: auto;
      border: none;
      font-size: 3vw;
      font-weight: 700;
    }
  }
`;

const Address = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: end;
  margin: 30px;

  section {
     display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: right;

     h1 {
      color: #d6d1ce;
      font-weight: 790;
      font-family: 'Montserrat', 'Jost';
      font-size: 4vw;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Star = styled.img`
  width: 100px;
  height: 100px;
  animation: rotateStar 15s linear infinite;
  transform-style: preserve-3d;
  will-change: transform;
@keyframes rotateStar {
  0% {
    transform: rotateZ(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1);
  }
  100% {
    transform: rotateZ(360deg) translate3d(0, 0, 0) scale3d(1, 1, 1);
  }
}

`;
