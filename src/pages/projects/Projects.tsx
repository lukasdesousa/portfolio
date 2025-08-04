'use client';

import Gallery from "@/components/gallery/Gallery";
import Header from "@/components/header/Header";
import Image from "next/image";
import styled from "styled-components";

interface Project {
    title?: string;
    technologies?: string;
    problem?: string;
    solution?: string;
    src?: string;
    galleryTitle: string[];
    galleryDescription: string[];
    gallerySrc: string[];
    projectHref?: string;
    hrefTitle?: string;
}

export default function Projects(props: Project) {
    return (
        <>
            <Header />
            <Container>
                <MainTitle>
                    <h1 className="project-title">{props.title}</h1>
                    <StarFlex>
                        <h1>2025</h1>
                        <Star
                            src="https://cdn.prod.website-files.com/62cfb3313a1a61a7d399c600/62d65d67f4f174f518af874a_star.svg"
                            alt="Spinning Star"
                        />
                        <h1>{props.technologies}</h1>
                    </StarFlex>
                </MainTitle>
                <Image
                    src={props.src || '/images/background.png'}
                    alt="background image"
                    width={400}
                    height={500}
                    quality={100}
                    priority
                    style={{width: '80%', height: 'auto', maxWidth: '90%', display: 'block', margin: 'auto'}}
                />
                <SolutionsContainer>
                    <section className="container-01">
                        <h1 className="about">OVERVIEW</h1>
                    </section>
                        <Solutions>
                            <section className="problem">
                                <h1>PROBLEMA</h1>
                                <p>{props.problem}</p>
                            </section>
                            <section className="solution">
                                <h1>SOLUÇÃO</h1>
                                <p>{props.solution}</p>
                            </section>
                        </Solutions>
                    <section className="container-02">
                        <h1>TRABALHO</h1>
                        <span className="line-02"></span>
                            <Star
                            src="https://cdn.prod.website-files.com/62cfb3313a1a61a7d399c600/62d65d67f4f174f518af874a_star.svg"
                            alt="Spinning Star"
                        />
                    </section>
                </SolutionsContainer>
                <Gallery 
                props={
                  {
                    src: props.gallerySrc,
                    title: props.galleryTitle,
                    description: props.galleryDescription,
                    href: props.projectHref,
                    hrefTitle: props.hrefTitle,
                  }
                }
                />
            </Container>
        </>
    )
}

const Container = styled.section`
    
`;

const SolutionsContainer = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1.about {
    font-family: 'Montserrat', 'Jost', sans-serif;
    font-size: 32px;
    line-height: 120%;
    font-weight: 1000;
    color: #d6d1ce;
    margin: 100px auto 20px auto;
  }

  section.container-02 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin: 20px auto;

    img {
        width: 10vw;
        max-width: 80px;
    }

    h1 {
      font-family: 'Montserrat', 'Jost', sans-serif;
      font-size: 32px;
      line-height: 120%;
      font-weight: 1000;
      color: #d6d1ce;
    }

    .line-02 {
      width: 20vw;
      height: 3px;
      margin-top: 58px;
      margin-bottom: 58px;
      border: 2px solid #d6d1ce;
    }
  }
`;

const Solutions = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 100%;
    text-align: center;
  }
  justify-content: space-between;
  align-items: flex-start;
  max-width: 80%;
  gap: 10%;
  margin-top: 40px;

  h1 {
     @media screen and (max-width: 768px) {
      font-size: 8vw;
     }
    font-size: 5vw;
    color: black;
    opacity: 0.5;
    text-shadow:
      -1px -1px 0 white,
      1px -1px 0 white,
      -1px 1px 0 white,
      1px 1px 0 white;
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    line-height: 120%;
    text-align: left;
     @media screen and (max-width: 768px) {
        text-align: center;
     }
    max-width: 100%;
  }

  section.problem,
  section.solution {
     @media screen and (max-width: 768px) {
      width: 90%;
     }
    width: 79%;
  }
`;


const MainTitle = styled.div`
margin: 20px auto 50px auto;
display: flex;
gap: 50px;
flex-direction: column;

    h1 {
        font-size: 13vw;
        text-align: center;
        color: #d6d1ce;
    }

    .project-title {
    display: inline-block;
    opacity: 0;
    transform: rotateX(90deg) translateY(20px) scale(0.95);
    animation: flipIn 1s ease-out forwards;
    transform-origin: bottom center;
    }

     @keyframes flipIn {
    to {
      opacity: 1;
      transform: rotateX(0deg) translateY(0px) scale(1);
    }
  }
`;

const StarFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto 50px;

    h1 {
        font-size: 5vw;
    }
`;

const Star = styled.img`
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
