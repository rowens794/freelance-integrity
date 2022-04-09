import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import SubPageHero from "../../components/subpageHeroContact";

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

      <main className="w-full bg-white max-w-7xl px-4 my-12 md:my-24 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 mx-auto">
        <div className="relative bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-200" />
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div className="px-4 py-16 bg-secondary-200 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="max-w-lg mx-auto">
                <h2 className="font-serif text-2xl font-extrabold tracking-tight text-primary-700 sm:text-3xl">
                  Get in touch
                </h2>
                <p className="mt-3 text-lg font-light leading-6 text-gray-500">
                  Call us directly or send us a message though our contact form
                  - it goes directly into our inbox. We&#39;ll reach out and
                  setup a convienient time to talk.
                </p>
                <dl className="mt-8 text-base text-gray-500">
                  <h3 className="font-bold text-secondary-900 underline">
                    Our Office
                  </h3>
                  <div className="my-4">
                    <p className="font-bold">Columbus, OH</p>
                    <p className="font-light">342 Menoff Street</p>
                    <p className="font-light">(614) 581-9870</p>
                  </div>
                </dl>
              </div>
            </div>
            <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <form
                  name="ContactPage"
                  method="POST"
                  data-netlify="true"
                  action="/contact/success"
                  className="grid grid-cols-1 gap-2"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="ContactPage"
                    className="grid grid-cols-1 gap-y-6"
                  />
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="name"
                      className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="w-full px-4 py-4 my-4 font-medium border-2 shadow-sm text-md bg-primary-700 text-white hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 md:my-0"
                    >
                      Deliver Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
