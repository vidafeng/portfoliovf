import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vida Feng</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/acloud-icon.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
