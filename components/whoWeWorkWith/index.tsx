import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@heroicons/react/solid";

type Props = {};

export default function index({}: Props) {
  return (
    <section className="max-w-7xl mx-auto py-24 ">
      <h2 className="font-serif text-4xl text-primary-800 text-center px-4">
        Who We Work With
      </h2>
      <p className="max-w-xl mx-auto font-serif text-xl text-secondary-800 px-4 text-center">
        Find out how we can help you with the challeges you face.
      </p>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 my-12 gap-12">
        <div className="relative flex content-end flex-col">
          <div className="relative overflow-hidden rounded-sm block nextImageParent h-[400px]">
            <Image
              src="/family-meeting.jpg"
              objectFit="cover"
              layout="fill"
              className="block"
              alt="We work with indviduals"
            />
            <div className=" bg-primary-700 opacity-50 absolute top-0 w-full h-full" />
          </div>

          <div className="bg-secondary-200 md:w-5/6 md:transform md:-translate-y-6 md:translate-x-4 px-4 py-8 md:p-12 lg:h-96 rounded-sm md:shadow-md">
            <span className="text-3xl font-serif text-primary-700">
              Individuals & Families
            </span>
            <span className="text-xl text-gray-700 font-light block my-2">
              We help individuals and families meet their financial goals.
            </span>
            <ul className="mt-12">
              <li>
                <Link href="/clients?page=individuals">
                  <a className="px-2 text-lg text-primary-700 font-light border-y border-secondary-400 py-2 flex justify-between hover:bg-secondary-300 transition-colors ease-in-out duration-300">
                    <p>Individuals & Families</p>
                    <ArrowRightIcon className="h-6 mt-1 text-primary-400 align-text-left" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex content-end flex-col">
          <div className="relative overflow-hidden rounded-sm block nextImageParent h-[400px]">
            <Image
              src="/board-presentation.jpg"
              objectFit="cover"
              layout="fill"
              className="block"
              alt="We work with indviduals"
            />
            <div className=" bg-primary-700 opacity-40 absolute top-0 w-full h-full" />
          </div>
          <div className="bg-secondary-200 md:w-5/6 md:transform md:-translate-y-6 md:translate-x-4 px-4 py-8 md:p-12 lg:h-96 rounded-sm md:shadow-md">
            <span className="text-3xl font-serif text-primary-700">
              Institutions
            </span>
            <span className="text-xl text-gray-700 font-light block my-2">
              We help companies, retirement plans and nonprofit organizations
              plan for the future and prudently manage asssets.
            </span>
            <ul className="mt-6">
              <li>
                <Link href="/clients?page=companies">
                  <a className="px-2 text-lg text-primary-700 font-light border-y border-secondary-400 py-2 flex justify-between hover:bg-secondary-300 transition-colors ease-in-out duration-300">
                    <p>Companies</p>
                    <ArrowRightIcon className="h-6 mt-1 text-primary-400 align-text-left" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/clients?page=retirement">
                  <a className="px-2 text-lg text-primary-700 font-light border-b border-secondary-400 py-2 flex justify-between hover:bg-secondary-300 transition-colors ease-in-out duration-300">
                    <p>Retirement Plans</p>
                    <ArrowRightIcon className="h-6 mt-1 text-primary-400 align-text-left" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/clients?page=nonprofit">
                  <a className="px-2 text-lg text-primary-700 font-light border-b border-secondary-400 py-2 flex justify-between hover:bg-secondary-300 transition-colors ease-in-out duration-300">
                    <p>Foundations & Endowments</p>
                    <ArrowRightIcon className="h-6 mt-1 text-primary-400 align-text-left" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
