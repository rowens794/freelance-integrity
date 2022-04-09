import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { ArrowRightIcon } from "@heroicons/react/solid";

import Navigation from "../components/navigation";
import Footer from "../components/footer";
import SubPageHero from "../components/subpageHeroServices";

const Home: NextPage = () => {
  const { query } = useRouter();
  let [activePage, setActivePage] = useState(0);

  useEffect(() => {
    if (query.page === "individuals") setActivePage(0);
    if (query.page === "companies") setActivePage(1);
    if (query.page === "retirement") setActivePage(2);
    if (query.page === "nonprofit") setActivePage(3);
  }, [query]);

  return (
    <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>Sample Advisory Firm</title>
        <meta name="description" content="Sample Advisory Firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <SubPageHero />

      <main className="w-full bg-white max-w-7xl px-4 my-12 md:my-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 mx-auto">
        <div>
          <ul className="flex lg:flex-col justify-evenly border-y border-secondary-400 lg:justify-start min-w-[250px] text-center">
            <Button
              title="Individuals & Families"
              activePage={activePage}
              setActivePage={() => setActivePage(0)}
              target={0}
            />
            <Button
              title="Companies"
              activePage={activePage}
              setActivePage={() => setActivePage(1)}
              target={1}
            />
            <Button
              title="Retirement Plans"
              activePage={activePage}
              setActivePage={() => setActivePage(2)}
              target={2}
            />
            <Button
              title="Foundations & Endowments"
              activePage={activePage}
              setActivePage={() => setActivePage(3)}
              target={3}
            />{" "}
          </ul>
        </div>
        <div>
          {activePage === 0 ? <Families /> : null}
          {activePage === 1 ? <Companies /> : null}
          {activePage === 2 ? <RetirementPlans /> : null}
          {activePage === 3 ? <FoundationsAndEndowments /> : null}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

const Button = ({
  title,
  target,
  activePage,
  setActivePage,
}: {
  title: string;
  target: number;
  activePage: number;
  setActivePage: any;
}) => {
  return (
    <li className="">
      <button
        className={`px-2 w-full h-full text-xs sm:text-sm md:text-base lg:text-lg text-primary-700 font-light lg:border-y border-secondary-400 py-2 flex justify-between hover:bg-secondary-300 transition-colors ease-in-out duration-300 items-center  ${
          activePage === target ? "bg-secondary-200" : ""
        }`}
        onClick={() => setActivePage(0)}
      >
        <span>{title}</span>
      </button>
    </li>
  );
};

const Families = () => {
  return (
    <section className="text-secondary-900 font-light " id="indvidual">
      <h3 className="text-primary-800 text-3xl mb-4">Individual & Families</h3>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 my-4">
        <ServiceBox
          name="Investments"
          desc="Assistance constructing an investment portfolio to take you to the next stage of life."
        />
        <ServiceBox
          name="Retirement"
          desc="Develop a plan to create an engaging and comfortable retirement."
        />
        <ServiceBox
          name="Estate Planning"
          desc="Take steps to cement your legacy for future generations, and do good after your gone."
        />
        <ServiceBox
          name="Tax Management"
          desc="Plan ahead to minimize current and future tax exposure"
        />
      </div>
      <p className="py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices neque
        ornare aenean euismod elementum nisi quis. Id faucibus nisl tincidunt
        eget nullam non. Ut sem viverra aliquet eget sit amet tellus.
      </p>
      <p className="py-2">
        Vulputate odio ut enim blandit. Nibh ipsum consequat nisl vel pretium
        lectus quam id leo. Porttitor eget dolor morbi non arcu risus quis
        varius. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
      </p>
      <p className="py-2">
        A pellentesque sit amet porttitor eget dolor. Dolor purus non enim
        praesent elementum facilisis leo. Venenatis lectus magna fringilla urna.
        Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
        Aliquam sem et tortor consequat id porta.
      </p>
      <p className="py-2">
        Aliquam nulla facilisi cras fermentum odio. Imperdiet massa tincidunt
        nunc pulvinar sapien. Morbi leo urna molestie at elementum. Posuere
        sollicitudin aliquam ultrices sagittis orci a scelerisque. Placerat orci
        nulla pellentesque dignissim enim.
      </p>
      <p className="py-2">
        Integer feugiat scelerisque varius morbi. Neque ornare aenean euismod
        elementum nisi quis. Donec adipiscing tristique risus nec feugiat in
        fermentum posuere urna. Nibh tortor id aliquet lectus proin. Mauris
        commodo quis imperdiet massa. Rhoncus aenean vel elit scelerisque mauris
        pellentesque pulvinar. At elementum eu facilisis sed odio morbi quis
        commodo. Id diam maecenas ultricies mi. Volutpat diam ut venenatis
        tellus in metus vulputate. Eget arcu dictum varius duis at consectetur
        lorem.
      </p>
    </section>
  );
};

const Companies = () => {
  return (
    <section className="text-secondary-900 font-light" id="company">
      <h3 className="text-primary-800 text-3xl mb-4">Companies</h3>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 my-4">
        <ServiceBox
          name="Working Capital Mgmt."
          desc="Put idle cash to work and maximize short-term investment returns."
        />
        <ServiceBox
          name="Rainy Day Funds"
          desc="Invest safe-haven assests in low risk strategies to counteract the effects of inflation."
        />
        <ServiceBox
          name="Project Planning"
          desc="Invest cash earmarked for project payments and earn safe returns while you wait."
        />
      </div>
      <p className="py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices neque
        ornare aenean euismod elementum nisi quis. Id faucibus nisl tincidunt
        eget nullam non. Ut sem viverra aliquet eget sit amet tellus.
      </p>
      <p className="py-2">
        Vulputate odio ut enim blandit. Nibh ipsum consequat nisl vel pretium
        lectus quam id leo. Porttitor eget dolor morbi non arcu risus quis
        varius. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
      </p>
      <h3 className="text-primary-800 text-xl mt-4 mb-2">Sub Heading</h3>
      <p className="py-2">
        A pellentesque sit amet porttitor eget dolor. Dolor purus non enim
        praesent elementum facilisis leo. Venenatis lectus magna fringilla urna.
        Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
        Aliquam sem et tortor consequat id porta.
      </p>
      <p className="py-2">
        Aliquam nulla facilisi cras fermentum odio. Imperdiet massa tincidunt
        nunc pulvinar sapien. Morbi leo urna molestie at elementum. Posuere
        sollicitudin aliquam ultrices sagittis orci a scelerisque. Placerat orci
        nulla pellentesque dignissim enim.
      </p>
      <p className="py-2">
        Integer feugiat scelerisque varius morbi. Neque ornare aenean euismod
        elementum nisi quis. Donec adipiscing tristique risus nec feugiat in
        fermentum posuere urna. Nibh tortor id aliquet lectus proin. Mauris
        commodo quis imperdiet massa. Rhoncus aenean vel elit scelerisque mauris
        pellentesque pulvinar. At elementum eu facilisis sed odio morbi quis
        commodo. Id diam maecenas ultricies mi. Volutpat diam ut venenatis
        tellus in metus vulputate. Eget arcu dictum varius duis at consectetur
        lorem.
      </p>
    </section>
  );
};

const RetirementPlans = () => {
  return (
    <section className="text-secondary-900 font-light" id="retirement">
      <h3 className="text-primary-800 text-3xl mb-4">Retirement Plans</h3>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 my-4">
        <ServiceBox
          name="Pension Management"
          desc="Invest pension assets to keep up with actuarial rates of return."
        />
        <ServiceBox
          name="401k Disc. Advisor"
          desc="Delegate the fiduciary responsibility for your plan design to the pros."
        />
        <ServiceBox
          name="401k Non-Disc. Advisor"
          desc="Recieve trusted and thoughtful advise on manager selection & plan design."
        />
      </div>
      <p className="py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices neque
        ornare aenean euismod elementum nisi quis. Id faucibus nisl tincidunt
        eget nullam non. Ut sem viverra aliquet eget sit amet tellus.
      </p>
      <p className="py-2">
        Vulputate odio ut enim blandit. Nibh ipsum consequat nisl vel pretium
        lectus quam id leo. Porttitor eget dolor morbi non arcu risus quis
        varius. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
      </p>
      <p className="py-2">
        A pellentesque sit amet porttitor eget dolor. Dolor purus non enim
        praesent elementum facilisis leo. Venenatis lectus magna fringilla urna.
        Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
        Aliquam sem et tortor consequat id porta.
      </p>
      <h3 className="text-primary-800 text-xl mt-4 mb-2">Sub Heading</h3>

      <p className="py-2">
        Aliquam nulla facilisi cras fermentum odio. Imperdiet massa tincidunt
        nunc pulvinar sapien. Morbi leo urna molestie at elementum. Posuere
        sollicitudin aliquam ultrices sagittis orci a scelerisque. Placerat orci
        nulla pellentesque dignissim enim.
      </p>
      <p className="py-2">
        Integer feugiat scelerisque varius morbi. Neque ornare aenean euismod
        elementum nisi quis. Donec adipiscing tristique risus nec feugiat in
        fermentum posuere urna. Nibh tortor id aliquet lectus proin. Mauris
        commodo quis imperdiet massa. Rhoncus aenean vel elit scelerisque mauris
        pellentesque pulvinar. At elementum eu facilisis sed odio morbi quis
        commodo. Id diam maecenas ultricies mi. Volutpat diam ut venenatis
        tellus in metus vulputate. Eget arcu dictum varius duis at consectetur
        lorem.
      </p>
    </section>
  );
};

const FoundationsAndEndowments = () => {
  return (
    <section className="text-secondary-900 font-light" id="nonprofit">
      <h3 className="text-primary-800 text-3xl mb-4">
        Foundations & Endowments
      </h3>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 my-4">
        <ServiceBox
          name="Cash Management"
          desc="Put idle cash to work and maximize short-term investment returns."
        />
        <ServiceBox
          name="Investment Management"
          desc="Invest long-term assets in a manner that allows you to meet your future goals."
        />
        <ServiceBox
          name="Endowment Management"
          desc="Invest endowed assets to ensure your organization meets provides for its mission."
        />
      </div>
      <p className="py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices neque
        ornare aenean euismod elementum nisi quis. Id faucibus nisl tincidunt
        eget nullam non. Ut sem viverra aliquet eget sit amet tellus.
      </p>
      <p className="py-2">
        Vulputate odio ut enim blandit. Nibh ipsum consequat nisl vel pretium
        lectus quam id leo. Porttitor eget dolor morbi non arcu risus quis
        varius. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
      </p>
      <p className="py-2">
        A pellentesque sit amet porttitor eget dolor. Dolor purus non enim
        praesent elementum facilisis leo. Venenatis lectus magna fringilla urna.
        Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
        Aliquam sem et tortor consequat id porta.
      </p>
      <h3 className="text-primary-800 text-xl mt-4 mb-2">Sub Heading</h3>

      <p className="py-2">
        Aliquam nulla facilisi cras fermentum odio. Imperdiet massa tincidunt
        nunc pulvinar sapien. Morbi leo urna molestie at elementum. Posuere
        sollicitudin aliquam ultrices sagittis orci a scelerisque. Placerat orci
        nulla pellentesque dignissim enim.
      </p>
      <p className="py-2">
        Integer feugiat scelerisque varius morbi. Neque ornare aenean euismod
        elementum nisi quis. Donec adipiscing tristique risus nec feugiat in
        fermentum posuere urna. Nibh tortor id aliquet lectus proin. Mauris
        commodo quis imperdiet massa. Rhoncus aenean vel elit scelerisque mauris
        pellentesque pulvinar. At elementum eu facilisis sed odio morbi quis
        commodo. Id diam maecenas ultricies mi. Volutpat diam ut venenatis
        tellus in metus vulputate. Eget arcu dictum varius duis at consectetur
        lorem.
      </p>
    </section>
  );
};

const ServiceBox = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <div className="p-3 border rounded-sm border-secondary-300 hover:transform hover:scale-[1.02] hover:bg-secondary-200">
      <span className="text-sm font-bold">{name}</span>
      <p className="text-xs font-light">{desc}</p>
    </div>
  );
};
