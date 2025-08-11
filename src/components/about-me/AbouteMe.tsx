'use client';

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function AboutMe() {
    const [anim, setAnim] = useState(false);

    return (
        <>  <Container>
            <TextContainer>
                <Link href={"/about-me"} style={{ textDecoration: 'none' }}>
                    <BallContainer>
                    <h1 onMouseEnter={() => setAnim(true)} onMouseLeave={() => setAnim(false)}>/ SOBRE MIM</h1>
                        <Ball className={`${anim ? 'anim-on' : ''}`}>
                        </Ball>
                    </BallContainer>
                </Link>
            </TextContainer>
        </Container>
        </>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    right: 20%;
    top: 100px;

    @media (max-width: 1350px) {
        top: 240px;
        left: 3%;
    }

    @media (min-width: 1350px) {
        left: 200px;
    }
`;

const TextContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const BallContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    justify-content: left;

    h1 {
        cursor: pointer;
        @media (max-width: 768px) {
        font-size: clamp(1.2rem, 2vw, 13rem);
        font-family: 'montserrat', 'Jost';
        -webkit-user-select: none;
        -moz-user-select: none;  
        -ms-user-select: none;    
        user-select: none;
    }
        font-size: clamp(2rem, 2vw, 13rem);
        color: #d6d1ce;
    }
`;

const Ball = styled.div`
    cursor: pointer;
    width: 60px;
    height: 60px;
      @media (max-width: 968px) {
        width: 50px;
        height: 50px;
    }
    border-radius: 50%;
    border-top: 4px solid #d6d1ce;
    border-bottom: 4px solid #d6d1ce;
    border-left: 4px solid transparent;
    border-right: 4px solid #d6d1ce;

    transition:
        transform 1s ease,
        border-color 0.5s ease,
        border-width 0.5s ease;

    &.anim-on {
        transform: rotate(360deg);
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #d6d1ce;
        border-bottom: 4px solid #d6d1ce;
    }
`;
