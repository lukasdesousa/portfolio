'use client';

import React from "react";
import styled from "styled-components";

export default function Footer() {
     const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Container>
            <h1 onClick={scrollToTop}>VOLTAR AO TOPO</h1>
        </Container>
    );
}

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 200px 0px 50px 0px;
    margin: auto;
    
    h1 {
        font-weight: 1000;
        text-align: center;
        cursor: pointer;
        font-size: 9vw;
        color: #d6d1ce;
    }
`;