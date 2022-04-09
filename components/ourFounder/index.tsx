import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

import { bios } from "../../pages/[team]";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="max-w-7xl mx-auto py-24 lg:border-t-2 border-secondary-300 px-4">
      <div className="mb-8 lg:hidden mx-auto">
        <h2 className="font-serif text-4xl text-primary-800 text-left ">
          Meet Our Founder
          <span className="font-serif text-2xl text-secondary-800 text-left block">
            John Sloan, CFP
          </span>
        </h2>
        <a
          href="https://brokercheck.finra.org/"
          className="text-sm text-primary-700 font-bold hover:bg-secondary-200 p-2 rounded-sm transition-colors ease-in-out duration-300"
        >
          BrokerCheck
        </a>
      </div>

      <div className="flex lg:flex-row relative gap-24 flex-col-reverse">
        <div className="w-full flex-1">
          <div className="mb-8 hidden lg:block">
            <h2 className="font-serif text-4xl text-primary-800 text-left ">
              Meet Our Founder
              <span className="font-serif text-2xl text-secondary-800 text-left block">
                {bios["ben-burns"].name}
              </span>
            </h2>
            <a
              href="https://brokercheck.finra.org/"
              className="text-sm text-primary-700 font-bold hover:bg-secondary-200 p-2 rounded-sm transition-colors ease-in-out duration-300"
            >
              BrokerCheck
            </a>
          </div>

          {bios["ben-burns"].text.slice(0, 3).map((line, i) => {
            return (
              <p className="text-light text-gray-700 my-2" key={i}>
                {line}
              </p>
            );
          })}

          <div className="flex my-4 justify-start flex-col lg:flex-row">
            <a href="https://www.google.com">
              <button className="flex py-1 mr-4 hover:bg-secondary-200 rounded-sm text-xs  text-secondary-800 font-semibold uppercase ">
                <PhoneIcon width={18} className="text-primary-500 mx-2" />
                <p className="my-auto"> {bios["ben-burns"].phone}</p>
              </button>
            </a>
            <a href="https://www.google.com">
              <button className="flex py-1 mr-4 hover:bg-secondary-200 rounded-sm text-xs  text-secondary-800 font-semibold uppercase ">
                {/* <PhoneIcon width={18} className="text-primary-500 mx-2" /> */}
                <LinkedInIcon />
                <p className="my-auto">LinkedIn</p>
              </button>
            </a>
            <a href="https://www.google.com">
              <button className="flex py-1 mr-4 hover:bg-secondary-200 rounded-sm text-xs  text-secondary-800 font-semibold uppercase ">
                <MailIcon width={18} className="text-primary-500 mx-2" />
                <p className="my-auto"> {bios["ben-burns"].email}</p>
              </button>
            </a>
          </div>

          <Link href="/team">
            <a className="bg-primary-600 w-48 text-center block px-8 py-6 my-6 text-white transition-colors ease-in-out duration-300 hover:bg-primary-800">
              Meet Our Team
            </a>
          </Link>
        </div>
        <div className="relative flex-0 nextImageParent rounded-sm overflow-hidden flex max-w-sm">
          <Image
            src="/ben-burns-headshot.jpg"
            width={500}
            height={500}
            objectFit="cover"
            className=" object-right-top transform "
            alt={`Guidance on Investments`}
          />
          <div className=" bg-primary-700 opacity-25 absolute top-0 w-full h-full " />
        </div>
      </div>
    </div>
  );
}

const LinkedInIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width={16}
      height={16}
      viewBox="0 0 32 32"
      className="mx-2"
    >
      <path
        className="fill-primary-600"
        d="M17.303,14.365c0.012-0.015,0.023-0.031,0.031-0.048v0.048H17.303z M32,0v32H0V0H32L32,0z M9.925,12.285H5.153v14.354   h4.772V12.285z M10.237,7.847c-0.03-1.41-1.035-2.482-2.668-2.482c-1.631,0-2.698,1.072-2.698,2.482   c0,1.375,1.035,2.479,2.636,2.479h0.031C9.202,10.326,10.237,9.222,10.237,7.847z M27.129,18.408c0-4.408-2.355-6.459-5.494-6.459   c-2.531,0-3.664,1.391-4.301,2.368v-2.032h-4.77c0.061,1.346,0,14.354,0,14.354h4.77v-8.016c0-0.434,0.031-0.855,0.157-1.164   c0.346-0.854,1.132-1.746,2.448-1.746c1.729,0,2.418,1.314,2.418,3.246v7.68h4.771L27.129,18.408L27.129,18.408z"
      />
    </svg>
  );
};
