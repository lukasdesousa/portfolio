'use client';

import Projects from "@/pages/projects/Projects";
import Loading from "@/components/loading/Loading";

export default function MundoCriptoApi() {
    return (
        <>
            <Loading>
                <Projects
                title="MC. API"
                technologies="NODE"
                src="/images/mc-api-capa-projeto.png"
                problem="Com a necessidade de uma API que forneça informações sobre criptomoedas, muitos desenvolvedores enfrentam dificuldades para encontrar dados confiáveis e atualizados. APIs existentes podem ser limitadas ou não atender às necessidades específicas de análise de contratos de criptomoedas. A API do rugcheck nem sempre é fácil de utilizar e acaba sendo confusa em sua documentação."
                solution="Criar uma API que forneça informações detalhadas sobre contratos de criptomoedas, incluindo segurança, análise de riscos e dados relevantes. A API será fácil de usar, com documentação clara, permitindo que desenvolvedores integrem facilmente as informações em seus projetos. Criando uma ponte entre a API existente (rugcheck) e facilitando o acesso a dados confiáveis e atualizados."
                gallerySrc={[
                    "/images/mc-api-01.png",
                    "/images/mc-api-02.png",
                ]}
                galleryTitle={[
                    "HOME",
                    "RESPOSTA",
                ]}
                galleryDescription={[
                    "A página inicial da API Analyser, onde os usuários podem inserir o endereço em '/tokens/{endereço}/report'. A home da API encontra-se em '/v1'. (imagem com qualidade reduzida).",
                    "As respostas da API Analyser, que fornecem informações detalhadas sobre a segurança do contrato inserido. A resposta inclui dados sobre a segurança do contrato, como: quantidade de holders, liquidez, holders com mais de 70% do supply, entre vários outros. A resposta é retornada em formato JSON. (imagem com qualidade reduzida).",
                ]}
                hrefTitle="VER PROJETO"
                projectHref="https://github.com/lukasdesousa/MundoCriptoAnalyserAPI"
                />
            </Loading>
        </>
    )
}