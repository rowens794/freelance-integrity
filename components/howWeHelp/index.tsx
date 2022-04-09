import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function index({}: Props) {
  return (
    <section className="max-w-7xl mx-auto py-24 ">
      <h2 className="font-serif text-3xl sm:text-4xl text-primary-800 text-center px-4">
        How We Can Help You
      </h2>
      <p className="max-w-lg mx-auto font-serif text-lg sm:text-xl text-secondary-800 text-center px-4">
        Find out how we can help you with the challeges you face.{" "}
      </p>
      <div className="max-w-4xl flex mx-auto my-8 flex-col md:flex-row">
        <div
          className={`relative h-56 md:h-96 w-full mx-auto flex flex-col justify-end hover:transform hover:scale-[1.02] hover:z-50 transition-transform ease-in-out duration-150`}
        >
          <div className="z-50">
            <h3 className="text-2xl font-light text-white text-center my-4">
              Investments
            </h3>
            <p className="text-sm text-white text-center font-light px-2 h-10 md:h-20">
              Create an investment plan that will help you meet your goals.
            </p>

            <Link href="/services#individual">
              <a className="w-full mx-auto text-center my-0 md:my-4 block">
                <button className="bg-primary-700 mx-auto px-8 py-4 my-4 text-white transition-colors ease-in-out duration-300 hover:bg-primary-800">
                  Learn More
                </button>
              </a>
            </Link>
          </div>

          <div
            className={`bg-primary-600 opacity-70 z-20 h-full w-full absolute top-0`}
          />
          <div
            className={`z-30 h-full w-full absolute top-0 bg-gradient-to-t from-primary-600 to-transparent`}
          />

          <Image
            src="/geo-hall.jpg"
            layout="fill"
            objectFit="cover"
            alt={`Guidance on Investments`}
            className="z-10 absolute top-0"
          />
        </div>

        <div
          className={`relative h-56 md:h-96 w-full mx-auto flex flex-col justify-end hover:transform hover:scale-[1.02] hover:z-50 transition-transform ease-in-out duration-150`}
        >
          <div className="z-50">
            <h3 className="text-2xl font-light text-white text-center my-4">
              Retirement
            </h3>
            <p className="text-sm text-white text-center font-light px-2 h-10 md:h-20">
              Helping you to achieve the retirement lifestyle you want and
              deserve.
            </p>

            <Link href="/services#individual">
              <a className="w-full mx-auto text-center my-0 md:my-4 block">
                <button className="bg-primary-700 mx-auto px-8 py-4 my-4 text-white transition-colors ease-in-out duration-300 hover:bg-primary-800">
                  Learn More
                </button>
              </a>
            </Link>
          </div>

          <div
            className={`bg-secondary-600 opacity-70 z-20 h-full w-full absolute top-0`}
          />
          <div
            className={`z-30 h-full w-full absolute top-0 bg-gradient-to-t from-secondary-600 to-transparent`}
          />

          <Image
            src="/geo-home.jpg"
            layout="fill"
            objectFit="cover"
            alt={`Guidance on Investments`}
            className="z-10 absolute top-0"
          />
        </div>

        <div
          className={`relative h-56 md:h-96 w-full mx-auto flex flex-col justify-end hover:transform hover:scale-[1.02] hover:z-50 transition-transform ease-in-out duration-150`}
        >
          <div className="z-50">
            <h3 className="text-2xl font-light text-white text-center my-4">
              Estate Planning
            </h3>
            <p className="text-sm text-white text-center font-light px-2 h-10 md:h-20">
              Passing on an inheritance, making gifts and managing an
              Inheritance Tax bill.
            </p>

            <Link href="/services#individual">
              <a className="w-full mx-auto text-center my-0 md:my-4 block">
                <button className="bg-primary-700 mx-auto px-8 py-4 my-4 text-white transition-colors ease-in-out duration-300 hover:bg-primary-800">
                  Learn More
                </button>
              </a>
            </Link>
          </div>

          <div
            className={`bg-primary-500 opacity-70 z-20 h-full w-full absolute top-0`}
          />
          <div
            className={`z-30 h-full w-full absolute top-0 bg-gradient-to-t from-primary-500 to-transparent`}
          />

          <Image
            src="/geo-stairs.jpg"
            layout="fill"
            objectFit="cover"
            alt={`Guidance on Investments`}
            className="z-10 absolute top-0"
          />
        </div>

        <div
          className={`relative h-56 md:h-96 w-full mx-auto flex flex-col justify-end hover:transform hover:scale-[1.02] hover:z-50 transition-transform ease-in-out duration-150`}
        >
          <div className="z-50">
            <h3 className="text-2xl font-light text-white text-center my-4">
              Tax Management
            </h3>
            <p className="text-sm text-white text-center font-light px-2 h-10 md:h-20">
              Using your tax allowances and structuring your finances so that
              you don&#39;t pay more tax than necessary.
            </p>

            <Link href="/services#individual">
              <a className="w-full mx-auto text-center my-0 md:my-4 block">
                <button className="bg-primary-700 mx-auto px-8 py-4 my-4 text-white transition-colors ease-in-out duration-300 hover:bg-primary-800">
                  Learn More
                </button>
              </a>
            </Link>
          </div>

          <div
            className={`bg-secondary-800 opacity-70 z-20 h-full w-full absolute top-0`}
          />
          <div
            className={`z-30 h-full w-full absolute top-0 bg-gradient-to-t from-secondary-800 to-transparent`}
          />

          <Image
            src="/geo-windows.jpg"
            layout="fill"
            objectFit="cover"
            alt={`Guidance on Investments`}
            className="z-10 absolute top-0"
          />
        </div>
      </div>
    </section>
  );
}
