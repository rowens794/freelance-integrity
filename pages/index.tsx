import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ExperienceBar from "../components/experienceBar";
import HowWeHelp from "../components/howWeHelp";
import WhoWeWorkWith from "../components/whoWeWorkWith";
import OurFounder from "../components/ourFounder";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Sample Advisory Firm</title>
        <meta name="description" content="Sample Advisory Firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="w-full min-h-screen bg-white">
        <Hero />

        <ExperienceBar />
        <HowWeHelp />
        <WhoWeWorkWith />
        <OurFounder />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
