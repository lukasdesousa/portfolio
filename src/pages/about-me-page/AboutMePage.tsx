'use client';

import Header from "@/components/header/Header";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Gallery from "@/components/gallery/Gallery";
import Asterisk from "@/components/asterisk/AsteriskAnim";
import { useMediaQuery } from "@mui/material";

export default function AboutMePage() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Header />
            <Main>
                <PictureContainer>
                    <section>
                        <div>
                            <h1>
                                LUKAS DE
                            </h1>
                            <h1 className="text-02">SOUZA</h1>
                            <p>Me chamo Lukas, atualmente estou cursando Engenharia de Software no 4º semestre. Minhas principais qualidades são: responsabilidade, pontualidade, sou participativo e dentre muitas outras. Sou dedicado para alcançar minhas metas, estou sempre em constante evolução, aprendendo cada vez mais. Missão dada é missão cumprida.</p>
                        </div>
                        <section className="image-container">
                            <Image
                                src="/images/background.png"
                                alt="background image"
                                width={400}
                                height={500}
                                quality={100}
                                priority
                                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 500px"
                                style={{
                                    objectFit: "contain",
                                    width: "clamp(250px, 40vw, 500px)",
                                    height: "clamp(800px, 60vw, 700px)",
                                }}
                            />
                            <div className="bottom-shadow"></div>
                        </section>
                    </section>
                </PictureContainer>
                <Asterisk props={{
                    title: 'CERTIFICAÇÕES',
                    titleSize: '2.5rem',
                    mTop: isMobile ? -600 : 10,
                }} />
                    <Gallery props={
                        {
                            isAboutMe: true,
                            src: [
                              '/images/certificado-js-ts.jpg',
                                '/images/generative-ai.png',  
                            ],
                            title: [
                                'JS + TS',
                                'GEN AI',
                            ],
                            description: [
                                'Certificado de conclusão do curso de JavaScript e TypeScript da Udemy. Além do básico ao avançado, o curso abrangeu conceitos de POO, SOLID, React, Next Js, boas práticas de desenvolvimento e dentre varias outras áreas.',
                                'Certificado de conclusão do curso de Generative AI da SOA. O curso abrangeu conceitos de IA generativa, desde o inicio da era IA, abordando muitos conceitos utilizados.',
                            ],
                            hrefTitle: 'SAIBA MAIS',
                            href: 'https://github.com/lukasdesousa'
                        }
                    } />
            </Main>
        </>
    )
}

const Main = styled.main`
    
`;

const PictureContainer = styled.div`
    display: flex;

    .image-container {
        position: relative;
        @media screen and (max-width: 768px) {
            bottom: 400px;
            right: 50%;    
        }
    }

    .bottom-shadow {
    position: absolute;
    bottom: 0px;
    width: 100%;
    left: 0%;
    height: 50%;
    background-image: -webkit-gradient(linear, left bottom, left top, from(#000), color-stop(100%, #000), to(transparent));
    @media screen and (max-width: 768px) {
        background-image: linear-gradient(0deg, #000, #000 45%, transparent);
        width: 90%;
        height: 65%;
        bottom: 100px;
        left: 10%;
    }
    @media screen and (min-width: 1350px) {
      top: 40%;
      height: 55%;
    }
      
    background-image: linear-gradient(0deg, #000, #000 43%, transparent);
    }

    section {
        display: flex;
        flex-direction: row-reverse;
        @media screen and (max-width: 768px) {
            flex-direction: column;
            margin: 0px 30px;
        }
        justify-content: space-between;
        margin: auto;
    }  
    
    div {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: right;
        line-height: 1;

        @media screen and (min-width: 768px) {
            margin-right: 50px;
        }

        p {
            z-index: 3;

            @media screen and (min-width: 768px) {
                font-size: 1.5vw;
                width: 80%;
            }
            opacity: 0.7;
            margin-top: 35px;
            width: 75%;
            text-align: right;
            @keyframes flipInP {
            to {
            opacity: 0.7;
            transform: rotateX(0deg) translateY(0px) scale(1);
            }
            }
        }
    }

    h1 {
    display: inline-block;
    opacity: 0;
    transform: rotateX(90deg) translateY(20px) scale(0.95);
    animation: flipIn 1s ease-out forwards;
    transform-origin: bottom center;
    font-size: 10vw;
    color: #d6d1ce;
    }

    .text-02 {
        animation-delay: 0.5s;
    }

    @keyframes flipIn {
to {
 opacity: 1;
 transform: rotateX(0deg) translateY(0px) scale(1);
}
}
    `;