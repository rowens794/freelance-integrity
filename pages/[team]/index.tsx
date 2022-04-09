import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import SubPageHero from "../../components/subpageHeroTeam";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>Sample Advisory Firm</title>
        <meta name="description" content="Sample Advisory Firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <SubPageHero />

      <main className="w-full bg-white max-w-7xl px-4 my-12 md:my-24  mx-auto">
        <p className="md:text-xl text-secondary-800 font-serif italic max-w-2xl mx-auto">
          Our Team is what sets us apart. We&#39;re small enough that every
          member of our team understands the needs of each client and seasoned
          enough to know how to make a difference in their lives.{" "}
        </p>
        <p className="md:text-xl my-4 text-secondary-800 font-serif italic text-right max-w-2xl mx-auto">
          - Ben Burns, Founder
        </p>
        <div className="grid w-full max-w-5xl grid-cols-1 m-auto my-16 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(bios).map((member: any) => {
            return (
              <Member
                name={member[1].name}
                title={member[1].position}
                photo={member[1].headshot}
                link={`/team/${member[0]}`}
                key={member[1].name}
              />
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

const Member = ({
  name,
  title,
  photo,
  link,
}: {
  name: string;
  title: string;
  photo: string;
  link: string;
}) => {
  return (
    <Link href={link} key={name}>
      <a className="w-64 py-4 mx-auto text-center relative my-4">
        <div className="w-64 h-64 z-10">
          <Image
            className="rounded-sm"
            src={photo}
            layout="fill"
            objectFit="cover"
            alt={`${name} ${title}`}
          />
          <div className=" bg-primary-700 opacity-30 absolute top-0 w-full h-full " />
        </div>

        <div className="relative py-4">
          <p className="font-bold text-white z-30 relative">{name}</p>
          <p className="text-sm font-light text-white z-30 relative">{title}</p>
          <div className=" bg-primary-700 opacity-60 absolute bottom-0 w-full h-full z-20" />
        </div>
      </a>
    </Link>
  );
};

export interface BioInterface {
  [key: string]: {
    text: string[];
    image: string;
    email: string;
    phone: string;
    headshot: string;
    name: string;
    position: string;
  };
}

//to create a heading insert *** in the line

export const bios: BioInterface = {
  "ben-burns": {
    name: "Ben Burns, CFA",
    email: "bburns@smpleml.com",
    phone: "(614) 982-1010",
    position: "Chief Investment Officer",
    image: "/ben-burns-full.jpg",
    headshot: "/ben-burns-headshot.jpg",
    text: [
      `Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.`,
      `Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.`,
      `Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.`,
      `Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.`,
      `Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.`,
      `***How we helped`,
      `Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.`,
      `Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.`,
    ],
  },

  "ray-jones": {
    name: "Ray Jones, CFA",
    position: "Client Advisor",
    email: "rjones@smpleml.com",
    phone: "(614) 982-1010",
    image: "/ray-jones-full.jpg",
    headshot: "/ray-jones-headshot.jpg",
    text: [
      `Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.`,
      `Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.`,
      `Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.`,
      `Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.`,
      `Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.`,
      `***How we helped`,
      `Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.`,
      `Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.`,
    ],
  },

  "susan-blake": {
    name: "Susan Blake, CTFA",
    position: "Investment Analyst",
    email: "sblake@smpleml.com",
    phone: "(614) 982-1010",
    image: "/susan-blake-full.jpg",
    headshot: "/susan-blake-headshot.jpg",
    text: [
      `Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.`,
      `Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.`,
      `Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.`,
      `Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.`,
      `Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.`,
      `***How we helped`,
      `Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.`,
      `Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.`,
    ],
  },
};
