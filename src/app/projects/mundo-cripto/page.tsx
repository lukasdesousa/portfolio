'use client';

import Projects from "@/pages/projects/Projects";
import Loading from "@/components/loading/Loading";

export default function MundoCripto() {
    return (
        <>
            <Loading>
                <Projects
                title="M. CRIPTO"
                technologies="NEXT"
                src="/images/mc-capa-projeto.png"
                problem="Visto a falta de segurança na compra e venda de criptomoedas, muitos usuários iniciantes caindo em golpes que poderiam ser evitados através de uma análise aprofundada de riscos. Golpes como rug pulls e fraudes são comuns, especialmente em memecoins da rede SOLANA, onde a falta de transparência e informações claras dificulta a tomada de decisões informadas."
                solution="Criar uma plataforma que analisa contratos de criptomoedas, oferecendo segurança e transparência para os usuários. A plataforma contará com uma interface intuitiva, facilitando o acesso às informações necessárias para a compra e venda de criptomoedas. Permitindo que os usuários verifiquem a segurança de memecoins da rede SOLANA somente inserindo o endereço de contrato."
                gallerySrc={[
                    "/images/mundo-c-1.png",
                    "/images/mundo-c-2.png",
                ]}
                galleryTitle={[
                    "ANALYSER",
                    "RESPOSTA",
                ]}
                galleryDescription={[
                    "A página inicial da ferramenta Analyser, onde os usuários podem inserir o endereço do contrato de uma criptomoeda para verificar sua segurança. Com um design amigável e intuitivo, a ferramenta permite que os usuários realizem análises detalhadas de memecoins da rede SOLANA. (imagem com qualidade reduzida).",
                    "As respostas da ferramenta Analyser, que fornecem informações detalhadas sobre a segurança do contrato inserido. A resposta inclui dados sobre a segurança do contrato, como a presença de funções de segurança e a análise de riscos. (imagem com qualidade reduzida).",
                ]}
                hrefTitle="VER PROJETO"
                projectHref="https://mundocripto.vercel.app/analyser"
                />
            </Loading>
        </>
    )
}