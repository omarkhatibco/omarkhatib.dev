import { Icons } from "components";
import { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => (
  <>
    <Head>
      <title>Omar Khatib | Front-End & Fullstack JavaScript Developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="min-h-screen">
      <div className="container min-h-screen flex justify-center items-center">
        <div className="text-[#020122] text-center">
          <h1 className="text-3xl md:text-6xl">
            Hi, I'm <span className="italic text-[#FF521B]">Omar Khatib</span>
          </h1>
          <p className="italic">Front-End & Fullstack JavaScript Developer</p>
          <Icons />
        </div>
      </div>
    </main>
  </>
);

export default Page;
