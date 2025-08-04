'use client';

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function Loading({ children }: { children: React.ReactNode }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if(showContent) {
        return <ChildrenContainer>{children}</ChildrenContainer>;
    }

    return (
        <Wrapper>
                <CenterText>
                    <h1>LS</h1>
                </CenterText>
        </Wrapper>
    );
}

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Wrapper = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

const CenterText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    h1 {
        color: #d6d1ce;
        font-size: 4rem;
        animation: ${blink} 1s linear infinite;
        font-family: 'Montserrat', 'Jost', sans-serif;
    }
`;

const ChildrenContainer = styled.div`
    animation: opacityFadeIn 1s ease-in-out forwards;
    transition: opacity 1s ease-in-out;

    @keyframes opacityFadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
