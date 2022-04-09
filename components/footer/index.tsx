import React from "react";
import Link from "next/link";
import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";

type Props = {};

export default function index({}: Props) {
  return (
    <footer className="">
      {/* Top Section */}
      <div className="w-full">
        <div className="w-full  justify-between max-w-7xl mx-auto border-t-2 border-secondary-300 py-2 hidden md:flex">
          <div className="flex">
            <LinkButton
              text="342 Menoff Street Columbus, OH"
              href="https://www.google.com/maps/place/Columbus,+OH/@39.9831302,-83.1309118,11z/data=!3m1!4b1!4m5!3m4!1s0x883889c1b990de71:0xe43266f8cfb1b533!8m2!3d39.9611755!4d-82.9987942"
              Icon={LocationMarkerIcon}
            />
          </div>

          <div className="flex">
            <LinkButton
              text="(304) 231-7428"
              href="tel:(304) 231-7428"
              Icon={PhoneIcon}
            />
          </div>
        </div>
        <div className=" bg-secondary-300 max-w-7xl mx-auto">
          <div className="w-full bg-secondary-200 h-8 border-t-8 border-secondary-300 "></div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full bg-secondary-300 ">
        <div className=" bg-secondary-300 max-w-7xl mx-auto">
          <div className="w-full bg-secondary-200 pb-8 px-4 xl:px-8 flex flex-col md:flex-row justify-between">
            <div className="max-w-xl">
              <p className=" text-secondary-900 font-serif text-xl tracking-widest py-4">
                Let&#39;s Start a Conversation
              </p>
              <p className=" text-secondary-900 font-serif">
                If you would like to learn more about the services we offer or
                how we can help you, please contact us to set up an introductory
                meeting.
              </p>
            </div>
            <div className="flex items-center my-6">
              <button className="bg-primary-600 px-8 py-6 text-white transition-colors ease-in-out duration-300 hover:bg-primary-800">
                Chat With Us
              </button>
            </div>
          </div>

          <p className="text-sm py-12 text-secondary-900 font-serif px-4">
            Securities offered through LPL Financial, member FINRA/SIPC.
            Investment advice offered through Sample Advisor, a registered
            investment advisor. Sample Advisor and Other Entity are separate
            entities from LPL Financial. The LPL Financial Representatives
            associated with this site may only discuss and/or transact
            securities business with residents of the following states: AZ, CA,
            CO, ME, NC, NH, NJ, NM, NY, OH, PA, SC, TX, VA, VT, and WI.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-secondary-200  ">
        <div className="max-w-7xl m-auto flex justify-between px-4">
          <p className=" font-extralight text-secondary-800 text-sm font-serif py-2">
            Copyright © {new Date().getFullYear()} |{" "}
            <Link href="/privacy">
              <a className="transition-colors ease-in-out duration-300 hover:bg-secondary-300 rounded-sm px-2 py-1">
                Privacy Policy
              </a>
            </Link>
            {" | "}
            <Link href="/">
              <a className="transition-colors ease-in-out duration-300 hover:bg-secondary-300 rounded-sm px-2 py-1">
                Form ADV
              </a>
            </Link>
            {" | "}
            <Link href="/">
              <a className="transition-colors ease-in-out duration-300 hover:bg-secondary-300 rounded-sm px-2 py-1">
                Form CRS
              </a>
            </Link>
          </p>
          <p className=" font-extralight text-secondary-800 text-sm font-serif py-2"></p>
        </div>
      </div>
    </footer>
  );
}

const LinkButton = ({
  text,
  href,
  Icon,
}: {
  text: string;
  href: string;
  Icon: any;
}) => {
  return (
    <a href={href}>
      <button className="flex py-1 px-2 mx-2 hover:bg-secondary-200 rounded-sm text-xs  text-secondary-800 font-semibold uppercase ">
        <Icon width={18} className="text-primary-500 mx-2" />
        <p className="my-auto">{text}</p>
      </button>
    </a>
  );
};
