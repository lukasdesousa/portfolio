'use client';

import React from "react";
import styled from "styled-components";

type AsteriskProps = {
  title?: string;
  titleSize?: string;
  mTop? : string | number;
};

export default function Asterisk({props} : {props: AsteriskProps}) {
    return (
        <Container mTop={props.mTop || 350} titleSize={props.titleSize}>
            <Star
                src="https://cdn.prod.website-files.com/62cfb3313a1a61a7d399c600/62d65d67f4f174f518af874a_star.svg"
                alt="Spinning Star"
            />
            <span></span>
            <h1>{props.title}</h1>
        </Container>
    );
}

const Container = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'mTop' && prop !== 'titleSize'
}) <{ mTop: string | number, titleSize?: string }> `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 500px;
  margin-top: ${({ mTop }) => mTop}px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: ${({ titleSize }) => titleSize || '6.5vw'};
    color: #d6d1ce;
    font-family: 'Montserrat', 'Jost';
  }

  span {
    height: 800px;
    border: 2px solid #d6d1ce;
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
