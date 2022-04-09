import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { PhoneIcon, UserIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

type Props = {};

export default function Index({}: Props) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-0 absolute top-0 z-50">
      <ul className="bg-primary-800 flex py-2 gap-4 justify-end px-3">
        <li className="hidden md:block">
          <a
            href="/about/"
            className="flex gap-1 hover:bg-primary-800 p-2 rounded-sm"
          >
            <UserIcon className="h-4 text-primary-400 align-text-left" />
            <span className="text-xs text-primary-50 font-semibold uppercase tracking-wider ">
              Client Login
            </span>
          </a>
        </li>

        <li className="">
          <a
            href="/about/"
            className="flex gap-1 hover:bg-primary-800 p-2 rounded-sm"
          >
            <PhoneIcon className="h-4 text-primary-400 align-text-left" />
            <span className="text-xs text-primary-50 font-semibold uppercase tracking-wider ">
              (304) 231-7428
            </span>
          </a>
        </li>
      </ul>

      <div className="flex justify-between mx-4 lg:mx-12">
        <Image src="/logo.svg" alt="logo" width={150} height={75} />
        <ul className="md:flex justify-end hidden ">
          <LinkItem name="Home" href="/" />
          <LinkItem name="Our Clients" href="/clients" />
          <LinkItem name="Services" href="/services" />
          <LinkItem name="Our Team" href="/team" />
          <LinkItem name="Contact" href="/contact" />
        </ul>
        <ul className="md:hidden flex justify-end">
          <li className="flex items-center">
            <MenuIcon
              className="h-12 text-primary-100 align-text-left"
              onClick={() => setIsOpen(true)}
            />
          </li>
        </ul>
      </div>

      {isOpen ? <MobileMenu close={() => setIsOpen(false)} /> : null}
    </nav>
  );
}

const LinkItem = ({ name, href }: { name: string; href: string }) => {
  return (
    <li className="flex items-center">
      <Link href={href}>
        <a className="px-4 lg:px-8 py-8  transition-colors ease-in-out  hover:bg-primary-700 uppercase duration-300 text-white text-xs tracking-widest font-bold">
          {name}
        </a>
      </Link>
    </li>
  );
};

const MobileMenu = ({ close }: { close: any }) => {
  return (
    <div className="w-screen h-screen fixed top-0 bg-primary-800 p-8 flex justify-between flex-col">
      <XIcon
        className="h-12 text-primary-100 fixed top-4 right-4"
        onClick={close}
      />
      <ul className="text-2xl text-white font-serif">
        <Item href="/" name="Home" close={close} />
        <Item href="/clients" name="Our Clients" close={close} />
        <Item href="/services" name="Services" close={close} />
        <Item href="/team" name="Our Team" close={close} />
        <Item href="/contact" name="Contact" close={close} />
      </ul>

      <ul className="text-2xl text-white font-serif">
        <Button
          href="tel:(304) 231-7428"
          name="Call Us: (304) 231-7428"
          close={close}
        />
        <Button href="/clients" name="Get Directions" close={close} />
      </ul>
    </div>
  );
};

const Item = ({
  name,
  href,
  close,
}: {
  name: string;
  href: string;
  close: any;
}) => {
  return (
    <li className="my-8">
      <Link href={href}>
        <a onClick={close}>{name}</a>
      </Link>
    </li>
  );
};

const Button = ({
  name,
  href,
  close,
}: {
  name: string;
  href: string;
  close: any;
}) => {
  return (
    <li className="my-8 bg-primary-600 p-4 text-center">
      <a onClick={close} href={href}>
        {name}
      </a>
    </li>
  );
};
