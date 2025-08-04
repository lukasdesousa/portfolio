'use client';

import styled from "styled-components";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <Container>
                <SubContainer>
                    <Link href={'/'} style={{ textDecoration: 'none' }}>
                        <h1>LS</h1>
                    </Link>
                </SubContainer>
            </Container>
        </>
    )
}

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 30px;
    `;

const SubContainer = styled.menu`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    
    h1 {
        font-size: 3rem;
        font-weight: bolder;
        color: #d6d1ce;
        font-family: 'montserrat', 'Jost';
    }
`;