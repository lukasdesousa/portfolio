'use client';

import Projects from "@/pages/projects/Projects";
import Loading from "@/components/loading/Loading";

export default function LoveVerse() {
    return (
        <>
            <Loading>
                <Projects
                title="LOVEVERSE"
                technologies="NEXT"
                src="/images/loveverse-capa-projeto.webp"
                problem="Sites concorrentes com preços abusivos e falta de personalização. Com zero empatia com o cliente, não entendem suas necessidades. Sem UX adequada, dificultam a criação de mensagens personalizadas."
                solution="Criar um site que crie gratuitamente mensagens personalizadas para casais, com uma interface intuitiva e fácil de usar, permitindo que os usuários expressem seus sentimentos de forma única."
                gallerySrc={[
                    "/images/loveverse-home.png",
                    "/images/loveverse-create.png",
                ]}
                galleryTitle={[
                    "HOME",
                    "CRIAR",
                ]}
                galleryDescription={[
                    "A página inicial do LoveVerse, onde os usuários podem começar a criar suas mensagens personalizadas. Estilizada com um design amigavel e colorido. Com animações em Lottie para uma experiência interativa. (imagem com qualidade reduzida).",
                    "A página de criação de mensagens, onde os usuários podem personalizar suas mensagens para casais. Com mensagens interativas e um layout intuitivo com custo zero. Acompanhando o usuário em cada etapa do processo. (imagem com qualidade reduzida).",
                ]}
                hrefTitle="VER PROJETO"
                projectHref="https://loveverse.space/"
                />
            </Loading>
        </>
    )
}