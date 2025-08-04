'use client';

import HomePage from "@/pages/home/Home";
import Loading from "@/components/loading/Loading";

export default function Home() {
  return (
   <>
    <Loading>
      <HomePage />
    </Loading>
   </>
  );
}
