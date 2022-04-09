import React from "react";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-flow-col border-b-2 border-secondary-300">
        <ElementContainer
          headline="$50 mln"
          line1="assets"
          line2="managed"
          hide={false}
        />
        <ElementContainer
          headline="3"
          line1="experienced"
          line2="advisors"
          hide={false}
        />
        <ElementContainer
          headline="75 yrs"
          line1="Investing"
          line2="Experience"
          hide={true}
        />
        <ElementContainer
          headline="56"
          line1="Thrilled"
          line2="Clients"
          hide={true}
        />
      </div>
    </div>
  );
}

const ElementContainer = ({
  headline,
  line1,
  line2,
  hide,
}: {
  headline: string;
  line1: string;
  line2: string;
  hide: boolean;
}) => {
  return (
    <div className={`py-4  mx-auto ${hide ? "hidden md:flex" : "flex"}`}>
      <p className="text-lg sm:text-2xl lg:text-3xl text-secondary-700 font-extralight border-r border-secondary-500 px-2 mx-2">
        {headline}
      </p>
      <div className="flex flex-col">
        <p className="font-light text-xs lg:text-sm uppercase text-secondary-900">
          {line1}
        </p>
        <p className="font-light text-xs lg:text-sm uppercase text-secondary-900">
          {line2}
        </p>
      </div>
    </div>
  );
};
