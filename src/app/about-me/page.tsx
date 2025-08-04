'use client';

import AboutMePage from "@/pages/about-me-page/AboutMePage";
import Loading from "@/components/loading/Loading";

export default function AboutMe() {
    return (
        <>
            <Loading>
                <AboutMePage />
            </Loading>
        </>
    )
}