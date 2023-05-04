import Link from "next/link";
import Image from "next/image";
import Help from "../components/Abstract/help";

export default function Abstract() {
  return (
    <>
      <header className="w-full bg-[#000000] text-[#fff] text-2xl font-light px-4">
        <div className="flex justify-between items-center w-[90%] max-w-[1900px] h-[88px] m-auto">
          <div className="flex justify-between items-center gap-4">
            <Link href="#" className="flex gap-2 items-center">
              <svg
                className="abstract-logo logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 51"
                preserveAspectRatio="xMinYMid slice"
                width={32}
                height={32}
              >
                <g className="abstract-logo-mark" fill="#fff">
                  <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z" />
                  <circle cx="21.24" cy="29.58" r="4.96" />
                </g>
                <g className="abstract-logo-wordmark" fill="#fff">
                  <path
                    className="abstract-logo-letter-1"
                    d="M70.9 28.81c2.37-6.59 3.32-9.26 4.19-12 1.26 3.92 2.56 7.58 4.08 12zM72.54 12L62.33 38.91h5.22l2.17-6.29h10.63l2.13 6.29h5.26L77.91 12z"
                  />
                  <path
                    className="abstract-logo-letter-2"
                    d="M98.43 35.56c-2.82 0-4.46-2.33-4.46-6.37 0-3.62 1.91-5.9 4.61-5.9 2.55 0 4.12 2.32 4.12 6.13 0 4-1.64 6.14-4.27 6.14m-4.34-13.07V12h-4.46v26.9h4.27v-2.47a6.31 6.31 0 0 0 5.63 2.86c4.69 0 7.81-3.66 7.81-9.87s-2.85-9.87-7.31-9.87a7.3 7.3 0 0 0-5.94 2.94z"
                  />
                  <path
                    className="abstract-logo-letter-3"
                    d="M116.71 22.8a4.77 4.77 0 0 1 4.29 2.67l3.32-2.25a8.44 8.44 0 0 0-7.48-3.82c-4.69 0-7.36 2.75-7.36 5.73s1.87 4.61 4.81 5.53l2 .65c2.86.91 3.51 1.45 3.51 2.71s-1.07 2-3 2a5.34 5.34 0 0 1-4.84-3.09l-3.47 2.29a9.35 9.35 0 0 0 8.12 4.27c4.73 0 7.67-2.56 7.67-6.07 0-3-1.91-4.61-5.26-5.68l-2-.61c-2.44-.76-3-1.3-3-2.44s.92-1.87 2.82-1.87"
                  />
                  <path
                    className="abstract-logo-letter-4"
                    d="M133.3 23.52h3.7V20h-3.7v-6.2h-4.44l-.08 6.2h-3v3.57h3v10.4a5.92 5.92 0 0 0 1.07 4c.77.92 2 1.38 3.9 1.38a13.24 13.24 0 0 0 3.32-.43v-3.59a5.51 5.51 0 0 1-1.83.35c-1.38 0-1.94-.69-1.94-2.64z"
                  />
                  <path
                    className="abstract-logo-letter-5"
                    d="M143.77 20h-4.27v19h4.5v-8.88a7.63 7.63 0 0 1 1-4.36 4.43 4.43 0 0 1 4-1.89 6.15 6.15 0 0 1 1.64.25V20a5.3 5.3 0 0 0-1.64-.3 5.44 5.44 0 0 0-5.26 3.18z"
                  />
                  <path
                    className="abstract-logo-letter-6"
                    d="M163.54 30.93a5.57 5.57 0 0 1-.84 3 4.61 4.61 0 0 1-4 2c-2 0-2.9-1-2.9-2.4a2.34 2.34 0 0 1 1.64-2.33 18.72 18.72 0 0 1 6.07-1.15zm4.25-4c0-3-.4-4.54-1.58-5.65s-3.09-1.83-5.69-1.83c-4.85 0-7.91 2.29-8.21 6.42l4.28.38c.23-2.1 1.26-3.29 3.59-3.29a3.65 3.65 0 0 1 2.63.81 3 3 0 0 1 .73 2.29v1c-3 .19-6.68.72-8.55 1.56a5.25 5.25 0 0 0-3.48 5.08c0 3.4 2.45 5.57 5.92 5.57a7.63 7.63 0 0 0 6.22-2.71c.41 1.9 1.75 2.61 4.14 2.61a6.21 6.21 0 0 0 2-.31V36c-1.73.31-2-.7-2-2.18z"
                  />
                  <path
                    className="abstract-logo-letter-7"
                    d="M175.35 29.31c0-4.23 2-6.17 4.57-6.17 1.8 0 3.17.84 3.7 3.35l4-1.37A7.33 7.33 0 0 0 180 19.4c-5.69 0-9.27 3.78-9.27 10s3.51 10.06 9 10.06c4.31 0 6.83-2.28 7.93-5.45l-4-1.37a3.51 3.51 0 0 1-3.7 3.09c-2.86-.01-4.61-2.22-4.61-6.42z"
                  />
                  <path
                    className="abstract-logo-letter-8"
                    d="M196.23 23.52h3.67V20h-3.67v-6.2h-4.44l-.08 6.2h-3v3.57h3v10.4a5.92 5.92 0 0 0 1.07 4c.77.92 2 1.38 3.9 1.38a13.24 13.24 0 0 0 3.32-.43v-3.59a5.51 5.51 0 0 1-1.83.35c-1.38 0-1.94-.69-1.94-2.64z"
                  />
                </g>
              </svg>
              <h3>Abstract</h3>
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Help Center
            </Link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <button className="border rounded-md px-4 py-1.5">
              Submit a request
            </button>
            <button className="bg-[#4C5FD5] rounded-lg px-4 py-1.5 hover:bg-[#fff] hover:text-[#000000] transition-all">
              Sign in
            </button>
          </div>
        </div>
      </header>

      <main className="w-full">
        <section className="px-[80px] py-[115px] relative overflow-hidden bg-[#DADBF1]">
          <div className="relative z-[2] max-w-[720px] mx-auto my-0 w-[90%]">
            <h1 className="text-[80px] text-center font-normal leading-[-4px] searchBarText">
              How can we help?
            </h1>
            <form
              role="search"
              className="formSearch mx-auto my-auto w-full max-w-[720px] h-[66px]"
              datasearch=""
              datainstant="true"
              autoComplete="off"
              action="/hc/en-us/search"
              acceptCharset="UTF-8"
              method="get"
            >
              <input
                className=""
                name="utf8"
                type="hidden"
                value=""
                autoComplete="off"
              />
              <input
                // className="searchBar border border-[#000000] hover:border-[#4C5FD5] h-full w-full px-[1rem] py-[1rem] rounded-md outline-none text-xl"
                className="searchBar text-xl"
                type="search"
                name="query"
                id="query"
                placeholder="Search"
                autoComplete="off"
                aria-label="Search"
              />
              <input
                className="hidden"
                type="submit"
                name="commit"
                value="Search"
              />
              <svg
                className="arrow-svg"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 612 792"
                style={{ enableBackground: "new 0 0 612 792" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M446.3,417.18c-3.38,0-5.35,0-7.31,0c-107.35,0-214.7-0.02-322.05,0.04c-5.82,0-11.25-0.71-15.99-4.44
		              c-7.12-5.6-10.1-14.87-7.35-23.25c2.83-8.61,10.38-14.41,19.35-14.81c2-0.09,4-0.05,6-0.05c106.68,0,213.36,0,320.05,0
		              c1.96,0,3.92,0,7.21,0c-2.05-2.19-3.29-3.59-4.61-4.92c-35.82-35.85-71.67-71.68-107.48-107.53c-8.92-8.93-10.77-18.21-5.61-27.49
		              c6.34-11.4,21.01-14.53,31.38-6.64c1.85,1.41,3.53,3.05,5.17,4.7c48.34,48.32,96.66,96.66,144.99,145
		              c12.49,12.5,12.49,23.74-0.01,36.25c-48.56,48.58-97.11,97.15-145.68,145.71c-8.95,8.94-18.17,10.82-27.48,5.69
		              c-11.41-6.28-14.6-21-6.74-31.36c1.5-1.98,3.28-3.77,5.04-5.54c35.46-35.5,70.95-70.98,106.42-106.47
		              C442.88,420.82,444.1,419.49,446.3,417.18z"
                  />
                </g>
              </svg>
            </form>
          </div>
        </section>

        <section className="">
          <div className="grid grid-cols-2 max-w-[1280px] gap-y-16 gap-x-8 my-[8rem] mx-auto">
            <Help
              heading="Using Abstract
"
              description="Abstract lets you manage, version, and document your designs in one place."
              img="/images/aed6500f4da41c641f3de5d96247eb6654e9c386.png"
            />
            <Help
              heading="Manage your account"
              description="Configure your account settings, such as your email, profile details, and password."
              img="/images/91588b3d042df901d9b941ccbb57af4f151401c7.png"
            />
            <Help
              heading="Manage organizations, teams, and projects"
              description="Use Abstract organizations, teams, and projects to organize your people and your work."
              img="/images/50d0db451c0e1e66e1caddd142986fcf6792ca05.png"
            />
            <Help
              heading="Manage billing"
              description="Change subscriptions and payment details."
              img="/images/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png"
            />
            <Help
              heading="Authenticate to Abstract"
              description="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
              img="/images/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png"
            />
            <Help
              heading="Abstract support"
              description="Get in touch with a human.
"
              img="/images/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png"
            />
          </div>
        </section>
      </main>

      <footer className="bg-[#000000] text-[#fff] text-base font-extralight">
        <div className="max-w-[1280px] mx-auto py-12 flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-2xl mb-4 font-normal">Abstract</h3>
            <Link href="#" className="hover:underline">
              Start Trial
            </Link>
            <Link href="#" className="hover:underline">
              Pricing
            </Link>
            <Link href="#" className="hover:underline">
              Download
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl mb-4 font-normal">Resources</h3>
            <Link href="#" className="hover:underline">
              Blog
            </Link>
            <Link href="#" className="hover:underline">
              Help Center
            </Link>
            <Link href="#" className="hover:underline">
              Release Notes
            </Link>
            <Link href="#" className="hover:underline">
              Status
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl mb-4 font-normal">Community</h3>
            <Link href="#" legacyBehavior>
              <a target="_blank" className="hover:underline">
                Twitter
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a target="_blank" className="hover:underline">
                Linkdin
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a target="_blank" className="hover:underline">
                Facebook
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a target="_blank" className="hover:underline">
                Dribbble
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a target="_blank" className="hover:underline">
                PodCast
              </a>
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl mb-4 font-normal">Company</h3>
            <Link href="#" className="hover:underline">
              About Us
            </Link>
            <Link href="#" className="hover:underline">
              Career
            </Link>
            <Link href="#" className="hover:underline">
              Legal
            </Link>

            <h3 className="mt-8 font-semibold">Contact Us</h3>
            <Link href="#" legacyBehavior>
              <a target="_blank" className="hover:underline">
                info@abstract.com
              </a>
            </Link>
          </div>
          <div className="flex flex-col mt-[10rem] text-xl">
            <span className="mb-4">
              <svg
                className="abstract-logo logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 51"
                preserveAspectRatio="xMinYMid slice"
                width={32}
                height={32}
              >
                <g className="abstract-logo-mark" fill="#fff">
                  <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z" />
                  <circle cx="21.24" cy="29.58" r="4.96" />
                </g>
                <g className="abstract-logo-wordmark" fill="#fff">
                  <path
                    className="abstract-logo-letter-1"
                    d="M70.9 28.81c2.37-6.59 3.32-9.26 4.19-12 1.26 3.92 2.56 7.58 4.08 12zM72.54 12L62.33 38.91h5.22l2.17-6.29h10.63l2.13 6.29h5.26L77.91 12z"
                  />
                  <path
                    className="abstract-logo-letter-2"
                    d="M98.43 35.56c-2.82 0-4.46-2.33-4.46-6.37 0-3.62 1.91-5.9 4.61-5.9 2.55 0 4.12 2.32 4.12 6.13 0 4-1.64 6.14-4.27 6.14m-4.34-13.07V12h-4.46v26.9h4.27v-2.47a6.31 6.31 0 0 0 5.63 2.86c4.69 0 7.81-3.66 7.81-9.87s-2.85-9.87-7.31-9.87a7.3 7.3 0 0 0-5.94 2.94z"
                  />
                  <path
                    className="abstract-logo-letter-3"
                    d="M116.71 22.8a4.77 4.77 0 0 1 4.29 2.67l3.32-2.25a8.44 8.44 0 0 0-7.48-3.82c-4.69 0-7.36 2.75-7.36 5.73s1.87 4.61 4.81 5.53l2 .65c2.86.91 3.51 1.45 3.51 2.71s-1.07 2-3 2a5.34 5.34 0 0 1-4.84-3.09l-3.47 2.29a9.35 9.35 0 0 0 8.12 4.27c4.73 0 7.67-2.56 7.67-6.07 0-3-1.91-4.61-5.26-5.68l-2-.61c-2.44-.76-3-1.3-3-2.44s.92-1.87 2.82-1.87"
                  />
                  <path
                    className="abstract-logo-letter-4"
                    d="M133.3 23.52h3.7V20h-3.7v-6.2h-4.44l-.08 6.2h-3v3.57h3v10.4a5.92 5.92 0 0 0 1.07 4c.77.92 2 1.38 3.9 1.38a13.24 13.24 0 0 0 3.32-.43v-3.59a5.51 5.51 0 0 1-1.83.35c-1.38 0-1.94-.69-1.94-2.64z"
                  />
                  <path
                    className="abstract-logo-letter-5"
                    d="M143.77 20h-4.27v19h4.5v-8.88a7.63 7.63 0 0 1 1-4.36 4.43 4.43 0 0 1 4-1.89 6.15 6.15 0 0 1 1.64.25V20a5.3 5.3 0 0 0-1.64-.3 5.44 5.44 0 0 0-5.26 3.18z"
                  />
                  <path
                    className="abstract-logo-letter-6"
                    d="M163.54 30.93a5.57 5.57 0 0 1-.84 3 4.61 4.61 0 0 1-4 2c-2 0-2.9-1-2.9-2.4a2.34 2.34 0 0 1 1.64-2.33 18.72 18.72 0 0 1 6.07-1.15zm4.25-4c0-3-.4-4.54-1.58-5.65s-3.09-1.83-5.69-1.83c-4.85 0-7.91 2.29-8.21 6.42l4.28.38c.23-2.1 1.26-3.29 3.59-3.29a3.65 3.65 0 0 1 2.63.81 3 3 0 0 1 .73 2.29v1c-3 .19-6.68.72-8.55 1.56a5.25 5.25 0 0 0-3.48 5.08c0 3.4 2.45 5.57 5.92 5.57a7.63 7.63 0 0 0 6.22-2.71c.41 1.9 1.75 2.61 4.14 2.61a6.21 6.21 0 0 0 2-.31V36c-1.73.31-2-.7-2-2.18z"
                  />
                  <path
                    className="abstract-logo-letter-7"
                    d="M175.35 29.31c0-4.23 2-6.17 4.57-6.17 1.8 0 3.17.84 3.7 3.35l4-1.37A7.33 7.33 0 0 0 180 19.4c-5.69 0-9.27 3.78-9.27 10s3.51 10.06 9 10.06c4.31 0 6.83-2.28 7.93-5.45l-4-1.37a3.51 3.51 0 0 1-3.7 3.09c-2.86-.01-4.61-2.22-4.61-6.42z"
                  />
                  <path
                    className="abstract-logo-letter-8"
                    d="M196.23 23.52h3.67V20h-3.67v-6.2h-4.44l-.08 6.2h-3v3.57h3v10.4a5.92 5.92 0 0 0 1.07 4c.77.92 2 1.38 3.9 1.38a13.24 13.24 0 0 0 3.32-.43v-3.59a5.51 5.51 0 0 1-1.83.35c-1.38 0-1.94-.69-1.94-2.64z"
                  />
                </g>
              </svg>
            </span>
            <span>&#169; Copyright 2023</span>
            <span>Abstract Studio Design, Inc.</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
}
