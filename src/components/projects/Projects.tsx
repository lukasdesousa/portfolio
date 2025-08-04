'use client';

import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

export default function Projects() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [src, setSrc] = useState('');
    const [subVisibility, setSubVisibility] = useState(0);
    const isDesktop = useMediaQuery('(min-width: 1200px)');

    function handleMouseMove(e: React.MouseEvent) {
        setPos({ x: e.clientX, y: e.clientY });
    };

    return (
        <Container>
            {isDesktop && src && (
                <FlImage
                    src={`${src}`}
                    alt="Project image"
                    width={600}
                    height={400}
                    style={{ width: 'auto', height: 'auto', maxWidth: 800, maxHeight: 600 }}
                    clientX={pos.x}
                    clientY={pos.y}
                    $visible={visible}
                />
            )}
            <TickerWrapper>
                <Link href={'/projects/loveverse'} style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <TickerContent>
                        <Ticker $animate="scroll">
                            <Text onMouseEnter={() => {
                                setSrc('/images/loveverse.png');
                                setSubVisibility(1)
                                setVisible(true);
                            }} onMouseLeave={() => {
                                setSubVisibility(0)
                                setVisible(false)
                            }
                            } onMouseMove={handleMouseMove}>LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE </Text>
                            <Text aria-hidden="true" onMouseEnter={() => {
                                setSrc('/images/loveverse.png');
                                setSubVisibility(1)
                                setVisible(true);
                            }} onMouseLeave={() => {
                                setSubVisibility(0)
                                setVisible(false)
                            }} onMouseMove={handleMouseMove}>LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE LOVEVERSE </Text>
                        </Ticker>
                        <SubTitle $animate="scrollReverse" style={{ opacity: subVisibility === 1 ? 1 : 0 }}>
                            <h2>* VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE * </h2>
                            <h2 aria-hidden={true}>VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE * VER PROJETO * LOVEVERSE </h2>
                        </SubTitle>
                    </TickerContent>
                </Link>
            </TickerWrapper>

            <TickerWrapper>
                <Link href={'/projects/mundo-cripto'} style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <TickerContent>
                        <Ticker $animate="scrollReverse">
                            <Text onMouseEnter={() => {
                                setSrc('/images/mundo-cripto.png');
                                setSubVisibility(2)
                                setVisible(true);
                            }} onMouseLeave={() => {
                                setSubVisibility(0)
                                setVisible(false)
                            }} onMouseMove={handleMouseMove}>MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO </Text>
                            <Text aria-hidden="true" onMouseEnter={() => {
                                setSrc('/images/mundo-cripto.png');
                                setSubVisibility(2)
                                setVisible(true);
                            }} onMouseLeave={() => {
                                setSubVisibility(0)
                                setVisible(false)
                            }} onMouseMove={handleMouseMove}>MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO MUNDO CRIPTO </Text>
                        </Ticker>
                        <SubTitle $animate="scroll" style={{ opacity: subVisibility === 2 ? 1 : 0 }}>
                            <h2>* VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO * </h2>
                            <h2 aria-hidden={true}>VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO * VER PROJETO * MUNDO CRIPTO </h2>
                        </SubTitle>
                    </TickerContent>
                </Link>
            </TickerWrapper>

            <TickerWrapper>
                <Link href={'/projects/mc-api'} style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <TickerContent>
                        <Ticker $animate="scroll">
                            <Text onMouseEnter={() => {
                                setSrc('/images/mundo-cripto-api.png');
                                setSubVisibility(3)
                                setVisible(true);
                            }} onMouseLeave={() => {
                                setSubVisibility(0)
                                setVisible(false)
                            }} onMouseMove={handleMouseMove}>MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API </Text>
                            <Text onMouseEnter={() => {
                                setSrc('/images/mundo-cripto-api.png');
                                setSubVisibility(3)
                                setVisible(true);
                            }} onMouseLeave={() => {
                                setSubVisibility(0)
                                setVisible(false)
                            }} onMouseMove={handleMouseMove} aria-hidden="true">MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API MC API </Text>
                        </Ticker>
                        <SubTitle $animate="scrollReverse" style={{ opacity: subVisibility === 3 ? 1 : 0 }}>
                            <h2>* VER PROJETO * MC API * VER PROJETO * MC API * VER PROJETO * MC API * VER PROJETO * MC API * VER PROJETO * MC API * VER PROJETO * MC API * </h2>
                            <h2 aria-hidden={true}>VER PROJETO * MC API * VER PROJETO * MC API * VER PROJETO * MC API * VER PROJETO * MC API * VER PROJETO * MC API * VER PROJETO * MC API </h2>
                        </SubTitle>
                    </TickerContent>
                </Link>
            </TickerWrapper>
        </Container>
    );
}

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollReverse = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const FlImage = styled(Image).withConfig({
    shouldForwardProp: (prop) => prop !== 'clientX' && prop !== 'clientY'
}) <{ clientX: number; clientY: number, $visible: boolean }>`
  position: fixed;
  left: ${({ clientX }) => clientX}px;
  top: ${({ clientY }) => clientY}px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 999;
  transition: opacity 0.8s ease, visibility 0.8s ease;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: black;
`;

const TickerContent = styled.div`
  position: relative;
  width: 100%;
`;

const SubTitle = styled.section<{ $animate: "scroll" | "scrollReverse" }>`
  display: flex;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-3deg);
  background: black;
  color: #ffffffac;
  font-size: 1rem;
  padding: 7px;
  z-index: 10;
  white-space: nowrap;
  pointer-events: none;
  transition: 1s ease;
  
  h2 {
      font-weight: 300;
       ${({ $animate }) =>
        $animate === "scroll"
            ? css`animation: ${scroll} 20s linear infinite;`
            : css`animation: ${scrollReverse} 20s linear infinite;`}
  }
`;

const TickerWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  `;

const Ticker = styled.div<{ $animate: "scroll" | "scrollReverse" }>`
  display: flex;
  white-space: nowrap;

  ${({ $animate }) =>
        $animate === "scroll"
            ? css`animation: ${scroll} 20s linear infinite;`
            : css`animation: ${scrollReverse} 20s linear infinite;`}
`;

const Text = styled.h1`
  display: inline-block;
  font-family: 'Montserrat', 'Jost';
  font-size: 15vw;
  font-weight: 900;
  color: black;
  opacity: 0.7;
  line-height: 1;
  text-shadow:
    -1px -1px 0 white,
    1px -1px 0 white,
    -1px 1px 0 white,
    1px 1px 0 white;
    padding: 0px;
  transition: 0.7s ease;
  cursor: pointer;
  &:hover {
    color: white;
    text-shadow: none;
  }
`;
