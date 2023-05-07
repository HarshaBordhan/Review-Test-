/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Main from "../components/Figma/main";

import React, { useEffect, useRef, useState } from "react";

import Photos from "../components/Figma/photos";

export default function Figma() {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const arrowButtons = document.querySelectorAll(".button");

    // const goToSlide = (scrollValue) => {
    //   let maxScrollableWidth = carousel.scrollWidth - carousel.clientWidth;
    //   arrowButtons[0].parentElement.style.display =
    //     scrollValue <= 0 ? "none" : "block";
    //   arrowButtons[1].parentElement.style.display =
    //     maxScrollableWidth - scrollValue <= 1 ? "none" : "block";
    // };

    arrowButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // let scrollWidth = (carousel.scrollLeft +=
        //   btn.id === "left" ? -340 : 340);
        // goToSlide(scrollWidth);

        carousel.scrollLeft += btn.id === "left" ? -340 : 340;
      });
    });

    let isDragging = false;

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.classList.add("dragging");
      carousel.scrollLeft -= e.movementX;
      // goToSlide(carousel.scrollLeft);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", () => (isDragging = true));
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    return () => {
      carousel.removeEventListener("mousedown", () => (isDragging = true));
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
    };
  }, []);

  return (
    <>
      <header className="navbar w-full bg-[#ffc700] left-0 fixed top-0 z-[5]">
        <div className="max-w-[1440px] h-20 mx-auto flex justify-between items-center text-sm font-bold">
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="border-2 border-[#000000] rounded-2xl px-5 py-1 hover:bg-black transition-all hover:text-[#fff]"
            >
              SHOP
            </Link>
            <Link
              href="#"
              className="border-2 border-[#000000] rounded-2xl px-5 py-1 hover:bg-black transition-all hover:text-[#fff]"
            >
              ABOUT
            </Link>
            {/* <Link href="#">&#128269;</Link> */}
            <Link href="#">
              <svg
                className="hover:opacity-[0.6] transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                // style={{
                //   fill: "rgba(0 , 0, 0, 1)",
                //   transform: "",
                //   msfilter: "",
                // }}
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
              </svg>
            </Link>
          </div>
          <Link href="#" className="uppercase text-2xl">
            The Figma Store
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="selectCountry border-2 border-[#000000] rounded-2xl px-5 py-1 bg-[#000000] outline-none text-[#fff] cursor-pointer appearance-none">
                <option value="">CANADA</option>
                <option value="">JAPAN</option>
                <option value="">UNITED KINGDOM</option>
                <option value="UNITED STATES" defaultValue>
                  UNITED STATES
                </option>
                <option value="">EUROPEAN UNION</option>
                <option value="">I&#39;M JUST BROWSING</option>
              </select>
              <span className="absolute top-[20%] right-[10%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  // stroke="currentColor"
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <button className="border-2 border-[#000000] rounded-2xl px-5 py-1 hover:bg-black transition-all hover:text-[#fff]">
              Cart 0
            </button>
          </div>
        </div>
      </header>

      <main className="">
        <section className="w-full">
          <div className="bg-[#ffc700] border-b-4 border-black relative pt-[82px] pb-[20px]">
            <div className="overflow-hidden relative w-full slide-container">
              <div className="flex w-full mx-auto my-0 overflow-x-hidden scroll-smooth carousel">
                <Main
                  hoverText="Version history coach jacket"
                  className="slide"
                >
                  <svg
                    className="svg-cutout"
                    width={1124}
                    height={612}
                    viewBox="0 0 1124 612"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="188d1671-d29a-4af9-815d-2e775ba8a897"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_01_1000x.jpg?v=1678222214"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <path
                      d="M302.279 498.312L300 493.256L297.721 498.312C266.868 566.765 220.337 609.5 169 609.5C123.66 609.5 82.0782 576.193 51.6874 521.166C21.3451 466.227 2.5 390.159 2.5 306C2.5 221.841 21.3451 145.773 51.6874 90.834C82.0782 35.8068 123.66 2.5 169 2.5C220.337 2.5 266.868 45.2351 297.721 113.688L300 118.744L302.279 113.688C333.132 45.2351 379.663 2.5 431 2.5C482.337 2.5 528.868 45.2351 559.721 113.688L562 118.744L564.279 113.688C595.132 45.2351 641.663 2.5 693 2.5C744.337 2.5 790.868 45.2351 821.721 113.688L824 118.744L826.279 113.688C857.132 45.2351 903.663 2.5 955 2.5C1000.34 2.5 1041.92 35.8068 1072.31 90.834C1102.65 145.773 1121.5 221.841 1121.5 306C1121.5 390.159 1102.65 466.227 1072.31 521.166C1041.92 576.193 1000.34 609.5 955 609.5C903.663 609.5 857.132 566.765 826.279 498.312L824 493.256L821.721 498.312C790.868 566.765 744.337 609.5 693 609.5C641.663 609.5 595.132 566.765 564.279 498.312L562 493.256L559.721 498.312C528.868 566.765 482.337 609.5 431 609.5C379.663 609.5 333.132 566.765 302.279 498.312Z"
                      fill="url(#188d1671-d29a-4af9-815d-2e775ba8a897)"
                    />
                  </svg>
                </Main>

                <Main hoverText="Gridlock washi tape" className="slide">
                  <svg
                    className="svg-cutout"
                    width={658}
                    height={658}
                    viewBox="-2 -2 654 654"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="a2fff064-d150-402f-950f-f53d970c7949"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_02_1000x.jpg?v=1678222214"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M650 0H0V125.496C0 231.179 81.9707 317.718 185.802 325C81.9707 332.282 0 418.821 0 524.504V650H650V524.504C650 418.82 568.029 332.282 464.198 325C568.029 317.718 650 231.179 650 125.496V0Z"
                      fill="url(#a2fff064-d150-402f-950f-f53d970c7949)"
                    />
                  </svg>
                </Main>

                <Main hoverText="Tidy up tee" className="slide">
                  <svg
                    className="svg-cutout"
                    width={650}
                    height={650}
                    viewBox="0 0 650 650"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="4d1b2e4d-d66c-4b87-bbad-d753c62db021"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_03_1000x.jpg?v=1678222214"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <path
                      d="M648 325C648 503.388 503.388 648 325 648C146.612 648 2 503.388 2 325C2 146.612 146.612 2 325 2C503.388 2 648 146.612 648 325Z"
                      fill="url(#4d1b2e4d-d66c-4b87-bbad-d753c62db021)"
                    />
                  </svg>
                </Main>

                <Main hoverText="Design in bloom tee" className="slide">
                  <svg
                    className="svg-cutout"
                    width={1124}
                    height={612}
                    viewBox="0 0 1124 612"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="9ec3ec12-3d86-4315-b660-2cbee1cedb72"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_04_1000x.jpg?v=1678222214"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <path
                      d="M302.279 498.312L300 493.256L297.721 498.312C266.868 566.765 220.337 609.5 169 609.5C123.66 609.5 82.0782 576.193 51.6874 521.166C21.3451 466.227 2.5 390.159 2.5 306C2.5 221.841 21.3451 145.773 51.6874 90.834C82.0782 35.8068 123.66 2.5 169 2.5C220.337 2.5 266.868 45.2351 297.721 113.688L300 118.744L302.279 113.688C333.132 45.2351 379.663 2.5 431 2.5C482.337 2.5 528.868 45.2351 559.721 113.688L562 118.744L564.279 113.688C595.132 45.2351 641.663 2.5 693 2.5C744.337 2.5 790.868 45.2351 821.721 113.688L824 118.744L826.279 113.688C857.132 45.2351 903.663 2.5 955 2.5C1000.34 2.5 1041.92 35.8068 1072.31 90.834C1102.65 145.773 1121.5 221.841 1121.5 306C1121.5 390.159 1102.65 466.227 1072.31 521.166C1041.92 576.193 1000.34 609.5 955 609.5C903.663 609.5 857.132 566.765 826.279 498.312L824 493.256L821.721 498.312C790.868 566.765 744.337 609.5 693 609.5C641.663 609.5 595.132 566.765 564.279 498.312L562 493.256L559.721 498.312C528.868 566.765 482.337 609.5 431 609.5C379.663 609.5 333.132 566.765 302.279 498.312Z"
                      fill="url(#9ec3ec12-3d86-4315-b660-2cbee1cedb72)"
                    />
                  </svg>
                </Main>

                <Main hoverText="Dress code hat" className="slide">
                  <svg
                    className="svg-cutout"
                    width={650}
                    height={650}
                    viewBox="0 0 650 650"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="caed66ad-af6e-4a01-ae43-bde4a813b5b8"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_05_1000x.jpg?v=1678222214"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <path
                      d="M647.629 324.502L649.477 323.737L647.629 324.502L553.485 97.2187C553.353 96.9001 553.1 96.6469 552.781 96.5148L325.498 2.37091C325.179 2.23889 324.821 2.23895 324.502 2.37091L323.737 0.523193L324.502 2.37097L97.2187 96.515C96.9 96.6469 96.6469 96.9001 96.5149 97.2188L2.37092 324.502C2.23893 324.821 2.23893 325.179 2.37093 325.498L96.5149 552.781C96.6469 553.1 96.9 553.353 97.2187 553.485L324.502 647.629C324.821 647.761 325.179 647.761 325.498 647.629L552.781 553.485C553.1 553.353 553.353 553.1 553.485 552.781L647.629 325.498C647.761 325.179 647.761 324.821 647.629 324.502Z"
                      fill="url(#caed66ad-af6e-4a01-ae43-bde4a813b5b8)"
                    />
                  </svg>
                </Main>

                <Main hoverText="Shape up tee" className="slide">
                  <svg
                    className="svg-cutout"
                    width={658}
                    height={658}
                    viewBox="-2 -2 654 654"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="65fbfbbc-a231-4efe-8eb0-2632cf674770"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_06_1000x.png?v=1678222396"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M650 0H0V125.496C0 231.179 81.9707 317.718 185.802 325C81.9707 332.282 0 418.821 0 524.504V650H650V524.504C650 418.82 568.029 332.282 464.198 325C568.029 317.718 650 231.179 650 125.496V0Z"
                      fill="url(#65fbfbbc-a231-4efe-8eb0-2632cf674770)"
                    />
                  </svg>
                </Main>

                <Main hoverText="Toolkit pin" className="slide">
                  <svg
                    className="svg-cutout"
                    width={650}
                    height={650}
                    viewBox="0 0 650 650"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="90bbe729-77e1-4102-8a5f-533992e3c942"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_07_1000x.jpg?v=1678222214"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <rect
                      x={2}
                      y={2}
                      width={646}
                      height={646}
                      rx={103}
                      fill="url(#90bbe729-77e1-4102-8a5f-533992e3c942)"
                    />
                  </svg>
                </Main>

                <Main hoverText="Band together socks" className="slide">
                  <svg
                    className="svg-cutout"
                    width={650}
                    height={650}
                    viewBox="0 0 650 650"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="94e2a6be-8fcd-40c5-b48f-b52866f4b443"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_08_1000x.jpg?v=1678222214"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <path
                      d="M647.629 324.502L649.477 323.737L647.629 324.502L553.485 97.2187C553.353 96.9001 553.1 96.6469 552.781 96.5148L325.498 2.37091C325.179 2.23889 324.821 2.23895 324.502 2.37091L323.737 0.523193L324.502 2.37097L97.2187 96.515C96.9 96.6469 96.6469 96.9001 96.5149 97.2188L2.37092 324.502C2.23893 324.821 2.23893 325.179 2.37093 325.498L96.5149 552.781C96.6469 553.1 96.9 553.353 97.2187 553.485L324.502 647.629C324.821 647.761 325.179 647.761 325.498 647.629L552.781 553.485C553.1 553.353 553.353 553.1 553.485 552.781L647.629 325.498C647.761 325.179 647.761 324.821 647.629 324.502Z"
                      fill="url(#94e2a6be-8fcd-40c5-b48f-b52866f4b443)"
                    />
                  </svg>
                </Main>

                <Main hoverText="Framework tee" className="slide">
                  <svg
                    className="svg-cutout"
                    width={650}
                    height={650}
                    viewBox="0 0 650 650"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="d4d5c9a0-d644-47ad-bcd6-c6bd7f56cb16"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_09_1000x.jpg?v=1678222214"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <path
                      d="M648 325C648 503.388 503.388 648 325 648C146.612 648 2 503.388 2 325C2 146.612 146.612 2 325 2C503.388 2 648 146.612 648 325Z"
                      fill="url(#d4d5c9a0-d644-47ad-bcd6-c6bd7f56cb16)"
                    />
                  </svg>
                </Main>

                <Main hoverText="Design in bloom tee" className="slide">
                  <svg
                    className="svg-cutout"
                    width={658}
                    height={658}
                    viewBox="-2 -2 654 654"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <pattern
                        id="d9dcd03f-4f85-4f3a-aa86-a68d7215ea0b"
                        patternUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <image
                          href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_10_1000x.jpg?v=1678222214"
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          className="pattern-image"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M650 0H0V125.496C0 231.179 81.9707 317.718 185.802 325C81.9707 332.282 0 418.821 0 524.504V650H650V524.504C650 418.82 568.029 332.282 464.198 325C568.029 317.718 650 231.179 650 125.496V0Z"
                      fill="url(#d9dcd03f-4f85-4f3a-aa86-a68d7215ea0b)"
                    />
                  </svg>
                </Main>

                {/* <div className={`pr-[24px] slide relative`}>
                  <Link href="#">
                    <div className="hover-text">
                      Version history coach jacket
                    </div>
                    <div className="">
                      <svg
                        className="svg-cutout"
                        width={1124}
                        height={612}
                        viewBox="0 0 1124 612"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <pattern
                            id="188d1671-d29a-4af9-815d-2e775ba8a897"
                            patternUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <image
                              href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_01_1000x.jpg?v=1678222214"
                              x={0}
                              y={0}
                              width="100%"
                              height="100%"
                              className="pattern-image"
                              preserveAspectRatio="xMidYMid slice"
                            />
                          </pattern>
                        </defs>
                        <path
                          d="M302.279 498.312L300 493.256L297.721 498.312C266.868 566.765 220.337 609.5 169 609.5C123.66 609.5 82.0782 576.193 51.6874 521.166C21.3451 466.227 2.5 390.159 2.5 306C2.5 221.841 21.3451 145.773 51.6874 90.834C82.0782 35.8068 123.66 2.5 169 2.5C220.337 2.5 266.868 45.2351 297.721 113.688L300 118.744L302.279 113.688C333.132 45.2351 379.663 2.5 431 2.5C482.337 2.5 528.868 45.2351 559.721 113.688L562 118.744L564.279 113.688C595.132 45.2351 641.663 2.5 693 2.5C744.337 2.5 790.868 45.2351 821.721 113.688L824 118.744L826.279 113.688C857.132 45.2351 903.663 2.5 955 2.5C1000.34 2.5 1041.92 35.8068 1072.31 90.834C1102.65 145.773 1121.5 221.841 1121.5 306C1121.5 390.159 1102.65 466.227 1072.31 521.166C1041.92 576.193 1000.34 609.5 955 609.5C903.663 609.5 857.132 566.765 826.279 498.312L824 493.256L821.721 498.312C790.868 566.765 744.337 609.5 693 609.5C641.663 609.5 595.132 566.765 564.279 498.312L562 493.256L559.721 498.312C528.868 566.765 482.337 609.5 431 609.5C379.663 609.5 333.132 566.765 302.279 498.312Z"
                          fill="url(#188d1671-d29a-4af9-815d-2e775ba8a897)"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className={`pr-[24px] slide relative`}>
                  <Link href="#">
                    <div className="hover-text">Gridlock washi tape</div>
                    <div className="">
                      {" "}
                      <svg
                        className="svg-cutout"
                        width={658}
                        height={658}
                        viewBox="-2 -2 654 654"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <pattern
                            id="a2fff064-d150-402f-950f-f53d970c7949"
                            patternUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <image
                              href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_02_1000x.jpg?v=1678222214"
                              x={0}
                              y={0}
                              width="100%"
                              height="100%"
                              className="pattern-image"
                              preserveAspectRatio="xMidYMid slice"
                            />
                          </pattern>
                        </defs>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M650 0H0V125.496C0 231.179 81.9707 317.718 185.802 325C81.9707 332.282 0 418.821 0 524.504V650H650V524.504C650 418.82 568.029 332.282 464.198 325C568.029 317.718 650 231.179 650 125.496V0Z"
                          fill="url(#a2fff064-d150-402f-950f-f53d970c7949)"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className={`pr-[24px] slide relative`}>
                  <Link href="#">
                    <div className="hover-text">Design in bloom tee</div>
                    <div className="">
                      <svg
                        className="svg-cutout"
                        width={650}
                        height={650}
                        viewBox="0 0 650 650"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <pattern
                            id="4d1b2e4d-d66c-4b87-bbad-d753c62db021"
                            patternUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <image
                              href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_03_1000x.jpg?v=1678222214"
                              x={0}
                              y={0}
                              width="100%"
                              height="100%"
                              className="pattern-image"
                              preserveAspectRatio="xMidYMid slice"
                            />
                          </pattern>
                        </defs>
                        <path
                          d="M648 325C648 503.388 503.388 648 325 648C146.612 648 2 503.388 2 325C2 146.612 146.612 2 325 2C503.388 2 648 146.612 648 325Z"
                          fill="url(#4d1b2e4d-d66c-4b87-bbad-d753c62db021)"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className={`pr-[24px] slide relative`}>
                  <Link href="#">
                    <div className="hover-text">Hwjoborolo</div>
                    <div className="">
                      {" "}
                      <svg
                        className="svg-cutout"
                        width={1124}
                        height={612}
                        viewBox="0 0 1124 612"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <pattern
                            id="9ec3ec12-3d86-4315-b660-2cbee1cedb72"
                            patternUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <image
                              href="//cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_homepage-hero_04_1000x.jpg?v=1678222214"
                              x={0}
                              y={0}
                              width="100%"
                              height="100%"
                              className="pattern-image"
                              preserveAspectRatio="xMidYMid slice"
                            />
                          </pattern>
                        </defs>
                        <path
                          d="M302.279 498.312L300 493.256L297.721 498.312C266.868 566.765 220.337 609.5 169 609.5C123.66 609.5 82.0782 576.193 51.6874 521.166C21.3451 466.227 2.5 390.159 2.5 306C2.5 221.841 21.3451 145.773 51.6874 90.834C82.0782 35.8068 123.66 2.5 169 2.5C220.337 2.5 266.868 45.2351 297.721 113.688L300 118.744L302.279 113.688C333.132 45.2351 379.663 2.5 431 2.5C482.337 2.5 528.868 45.2351 559.721 113.688L562 118.744L564.279 113.688C595.132 45.2351 641.663 2.5 693 2.5C744.337 2.5 790.868 45.2351 821.721 113.688L824 118.744L826.279 113.688C857.132 45.2351 903.663 2.5 955 2.5C1000.34 2.5 1041.92 35.8068 1072.31 90.834C1102.65 145.773 1121.5 221.841 1121.5 306C1121.5 390.159 1102.65 466.227 1072.31 521.166C1041.92 576.193 1000.34 609.5 955 609.5C903.663 609.5 857.132 566.765 826.279 498.312L824 493.256L821.721 498.312C790.868 566.765 744.337 609.5 693 609.5C641.663 609.5 595.132 566.765 564.279 498.312L562 493.256L559.721 498.312C528.868 566.765 482.337 609.5 431 609.5C379.663 609.5 333.132 566.765 302.279 498.312Z"
                          fill="url(#9ec3ec12-3d86-4315-b660-2cbee1cedb72)"
                        />
                      </svg>
                    </div>
                  </Link>
                </div> */}
              </div>

              <div className="buttons">
                {/* <div className="button-prev-slide group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"> */}
                <div
                  className="button button-prev-slide opacity-0 hover:opacity-100"
                  id="left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>

                {/* <div className="button-next-slide group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"> */}
                <div className="button button-next-slide opacity-0 hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Link href="#" className="about-us-text z-[1]">
              <svg
                width={171}
                height={171}
                viewBox="0 0 171 171"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="badge"
              >
                <g className="animation--rotate">
                  <path
                    d="M85.5 169.5C102.114 169.5 118.354 164.573 132.168 155.343C145.982 146.113 156.748 132.994 163.106 117.645C169.464 102.296 171.127 85.4068 167.886 69.1124C164.645 52.818 156.645 37.8506 144.897 26.103C133.149 14.3554 118.182 6.35517 101.888 3.11402C85.5932 -0.127143 68.7036 1.53633 53.3546 7.89409C38.0056 14.2519 24.8866 25.0183 15.6566 38.8321C6.42652 52.6458 1.5 68.8864 1.5 85.5C1.5 107.778 10.35 129.144 26.103 144.897C41.8561 160.65 63.2218 169.5 85.5 169.5Z"
                    fill="white"
                    stroke="black"
                    strokeWidth={3}
                  />
                  <path
                    d="M86.8502 18.18V16.29C86.5236 16.939 86.0357 17.4932 85.4333 17.8995C84.8309 18.3058 84.1343 18.5504 83.4102 18.61L83.4901 15.37C84.3014 15.3829 85.0975 15.1488 85.7726 14.6987C86.4477 14.2486 86.97 13.6038 87.2701 12.85L90.0702 12.92L89.7602 25.37L86.6302 25.3L86.8502 18.18Z"
                    fill="#231F20"
                  />
                  <path
                    d="M92.5505 19.3C93.3105 15.3 95.9505 13.24 99.0805 13.83C102.211 14.42 104.001 17.25 103.231 21.31C102.461 25.37 99.8305 27.26 96.6605 26.66C93.4905 26.06 91.7805 23.3 92.5505 19.3ZM99.8705 20.62C100.401 17.79 99.7305 16.62 98.5905 16.42C97.4505 16.22 96.4405 17.06 95.9105 19.88C95.3805 22.7 96.0505 23.88 97.1505 24.07C98.2505 24.26 99.3205 23.47 99.8705 20.58V20.62Z"
                    fill="#231F20"
                  />
                  <path
                    d="M105.21 21.85C106.74 18.04 109.731 16.57 112.681 17.76C115.631 18.95 116.831 22.08 115.291 25.91C113.751 29.74 110.801 31.08 107.811 29.91C104.821 28.74 103.66 25.7 105.21 21.85ZM112.131 24.58C113.201 21.9 112.771 20.64 111.701 20.2C110.631 19.76 109.461 20.42 108.401 23.08C107.341 25.74 107.751 27.02 108.791 27.44C109.831 27.86 111.031 27.3 112.131 24.58Z"
                    fill="#231F20"
                  />
                  <path
                    d="M129.77 27.76L131.77 29.13L117.23 34.13L115.23 32.74L129.77 27.76ZM118.71 24.42C120 22.56 121.87 22.06 123.45 23.16C125.03 24.26 125.23 26.16 123.95 28.05C122.67 29.94 120.82 30.36 119.21 29.24C117.6 28.12 117.44 26.24 118.71 24.42ZM122.03 26.69C122.79 25.59 122.89 24.9 122.45 24.59C122.01 24.28 121.45 24.64 120.66 25.73C119.87 26.82 119.8 27.5 120.22 27.79C120.64 28.08 121.27 27.78 122.03 26.69ZM122.89 33.89C124.19 32.03 126.05 31.53 127.63 32.63C129.21 33.73 129.41 35.63 128.12 37.53C126.83 39.43 125 39.83 123.4 38.71C121.8 37.59 121.61 35.73 122.89 33.89ZM126.2 36.17C126.97 35.08 127.06 34.38 126.62 34.08C126.18 33.78 125.62 34.08 124.83 35.22C124.04 36.36 123.98 36.97 124.4 37.22C124.82 37.47 125.44 37.3 126.2 36.17Z"
                    fill="#231F20"
                  />
                  <path
                    d="M135.2 40.96C138.12 38.83 141.89 38.96 144.55 42.61C147.21 46.26 146.17 49.9 143.25 52.02C140.33 54.14 136.67 54.02 133.98 50.29C131.29 46.56 132.28 43.08 135.2 40.96ZM141.2 49.13C143.03 47.81 143.66 45.92 142.41 44.21C141.16 42.5 139.17 42.5 137.34 43.83C135.51 45.16 134.95 47.02 136.2 48.73C137.45 50.44 139.36 50.45 141.17 49.13H141.2Z"
                    fill="#231F20"
                  />
                  <path
                    d="M150.079 51.85L154.079 60.78L151.629 61.87L148.999 55.99L146.499 57.12L148.619 61.88L146.249 62.94L144.129 58.18L140.129 59.97L138.779 56.97L150.079 51.85Z"
                    fill="#231F20"
                  />
                  <path
                    d="M156.58 69.56L157.49 75.43C157.89 78.04 156.65 80.25 154.08 80.64C151.51 81.03 149.66 79.31 149.26 76.72L148.86 74.12L144.77 74.75L144.27 71.46L156.58 69.56ZM151.7 75.72C151.87 76.82 152.58 77.45 153.54 77.3C154.5 77.15 154.96 76.35 154.79 75.24L154.49 73.24L151.39 73.72L151.7 75.72Z"
                    fill="#231F20"
                  />
                  <path
                    d="M158.331 83.56L158.041 90.03C157.911 92.8 156.501 94.41 154.441 94.32C153.573 94.2745 152.755 93.9013 152.151 93.2757C151.548 92.6502 151.205 91.8189 151.191 90.95C150.941 92.65 150.191 93.48 148.281 93.79L145.381 94.24L145.541 90.69L148.421 90.34C149.691 90.2 150.181 89.73 150.241 88.45L150.331 86.53L145.741 86.32L145.891 82.99L158.331 83.56ZM152.611 89.11C152.611 90.11 153.031 90.82 153.981 90.86C154.931 90.9 155.411 90.23 155.461 89.24L155.571 86.76L152.721 86.63L152.611 89.11Z"
                    fill="#231F20"
                  />
                  <path
                    d="M151.36 96.35C154.85 97.3 157.11 100.35 155.93 104.67C154.75 108.99 151.26 110.51 147.77 109.56C144.28 108.61 142.12 105.66 143.32 101.25C144.52 96.84 147.88 95.4 151.36 96.35ZM148.72 106.13C150.91 106.72 152.72 106.03 153.33 103.99C153.94 101.95 152.63 100.38 150.45 99.79C148.27 99.2 146.45 99.92 145.91 101.97C145.37 104.02 146.56 105.54 148.72 106.13Z"
                    fill="#231F20"
                  />
                  <path
                    d="M152.17 114.78L147.7 123.47L145.31 122.24L148.26 116.51L145.79 115.24L143.41 119.88L141.1 118.69L143.48 114.05L139.58 112.05L141.1 109.05L152.17 114.78Z"
                    fill="#231F20"
                  />
                  <path
                    d="M145.9 125.94L143.95 128.71L133.77 121.53L135.77 118.77L145.9 125.94Z"
                    fill="#231F20"
                  />
                  <path
                    d="M137.761 132.3L140.501 129.3L142.371 131.05L134.531 139.39L132.661 137.64L135.431 134.69L128.221 127.91L130.531 125.45L137.761 132.3Z"
                    fill="#231F20"
                  />
                  <path
                    d="M127.769 133.59L125.609 136.22C125.164 135.76 124.562 135.484 123.923 135.446C123.284 135.409 122.654 135.614 122.159 136.02C120.949 136.9 120.829 137.72 121.279 138.34C121.729 138.96 122.279 138.99 123.409 138.4L124.779 137.64C127.199 136.31 129.029 136.37 130.399 138.26C131.769 140.15 131.139 142.54 128.399 144.51C125.659 146.48 123.399 146.28 121.889 145.02L124.049 142.41C124.462 142.753 124.982 142.941 125.519 142.941C126.056 142.941 126.576 142.753 126.989 142.41C128.039 141.65 128.079 140.87 127.689 140.32C127.299 139.77 126.689 139.78 125.809 140.23L124.429 140.99C121.999 142.35 119.809 142.33 118.429 140.51C117.049 138.69 117.569 136.15 120.619 133.93C123.669 131.71 126.139 132.11 127.769 133.59Z"
                    fill="#231F20"
                  />
                  <path
                    d="M115.34 151.92L106.2 155.37L105.25 152.86L111.25 150.58L110.25 147.99L105.37 149.83L104.5 147.4L109.38 145.56L107.83 141.44L110.94 140.27L115.34 151.92Z"
                    fill="#231F20"
                  />
                  <path
                    d="M101.63 149.04L102.79 156.33L99.4704 156.86L98.3703 149.99C98.0603 147.99 97.1203 147.14 95.4903 147.41C93.8603 147.68 93.2503 148.84 93.5603 150.76L94.6503 157.63L91.3303 158.16L90.1704 150.87C89.6104 147.39 91.5303 145.21 95.0503 144.65C98.5703 144.09 101.08 145.61 101.63 149.04Z"
                    fill="#231F20"
                  />
                  <path
                    d="M86.73 158.42L82.29 158.12L78.01 150.46L77.8 153.64L77.5 157.8L74.25 157.58L75.09 145.15L78.43 145.37L83.69 154.85L83.95 151.12L84.31 145.77L87.56 145.99L86.73 158.42Z"
                    fill="#231F20"
                  />
                  <path
                    d="M69.5791 156.64L64.7491 155.16C61.0991 154.05 59.0091 151.03 60.1391 147.32C61.2691 143.61 64.7491 142.14 68.2891 143.22L73.2191 144.72L69.5791 156.64ZM67.7391 145.84C65.6091 145.19 64.1691 146.07 63.4891 148.3C62.8691 150.3 63.4891 152.02 65.5891 152.65L67.1591 153.12L69.2391 146.3L67.7391 145.84Z"
                    fill="#231F20"
                  />
                  <path
                    d="M49.3697 148.78L43.9897 145.17C41.6897 143.62 41.0397 141.58 42.1997 139.86C42.6903 139.142 43.4366 138.639 44.2861 138.453C45.1356 138.267 46.024 138.413 46.7696 138.86C46.1368 138.435 45.6894 137.785 45.5186 137.042C45.3477 136.299 45.4661 135.519 45.8497 134.86L46.9697 132.14L49.9697 134.14L48.7696 136.79C48.6209 136.992 48.5194 137.225 48.4726 137.472C48.4257 137.719 48.4348 137.973 48.4991 138.215C48.5634 138.458 48.6812 138.683 48.844 138.874C49.0068 139.066 49.2103 139.218 49.4397 139.32L51.0397 140.4L53.5997 136.59L56.3596 138.44L49.3697 148.78ZM47.5997 141.01C47.4446 140.867 47.2605 140.759 47.06 140.693C46.8595 140.628 46.6472 140.606 46.4375 140.63C46.2278 140.653 46.0257 140.722 45.8449 140.831C45.6641 140.939 45.5089 141.086 45.3897 141.26C44.8697 142.05 45.1897 142.82 46.0097 143.37L48.0697 144.75L49.6597 142.39L47.5997 141.01Z"
                    fill="#231F20"
                  />
                  <path
                    d="M37.2004 139.99L30.4004 133.15L32.2804 131.28L36.7604 135.79L38.3304 134.23L34.8604 130.75L36.6104 129L40.0804 132.49L41.8304 130.74L37.3504 126.23L39.2304 124.36L46.0404 131.2L37.2004 139.99Z"
                    fill="#231F20"
                  />
                  <path
                    d="M28.01 130.19L22.5 122.12L24.72 120.6L28.36 125.92L30.65 124.35L27.71 120.05L29.85 118.58L32.8 122.88L36.43 120.4L38.31 123.15L28.01 130.19Z"
                    fill="#231F20"
                  />
                  <path
                    d="M26.8203 117.3C23.4903 118.69 19.8203 117.7 18.1103 113.53C16.4003 109.36 18.2203 106.05 21.5603 104.66C24.9003 103.27 28.4103 104.27 30.1803 108.5C31.9503 112.73 30.1603 115.94 26.8203 117.3ZM22.9103 107.96C20.8203 108.83 19.7703 110.52 20.5903 112.47C21.4103 114.42 23.3503 114.89 25.4403 114.02C27.5303 113.15 28.5003 111.47 27.6903 109.52C26.8803 107.57 24.9803 107.12 22.9103 107.99V107.96Z"
                    fill="#231F20"
                  />
                  <path
                    d="M14.7905 103.14L13.7005 96.76C13.2205 94.02 14.2505 92.15 16.2905 91.76C17.1471 91.6127 18.0276 91.799 18.751 92.2807C19.4745 92.7624 19.986 93.5029 20.1805 94.35C20.0574 93.6068 20.2185 92.8445 20.6316 92.2146C21.0448 91.5847 21.6798 91.1332 22.4105 90.95L25.1605 89.89L25.7605 93.39L23.0205 94.39C22.7719 94.4249 22.5341 94.5144 22.3242 94.6522C22.1144 94.7899 21.9376 94.9724 21.8066 95.1865C21.6756 95.4007 21.5937 95.6412 21.5667 95.8908C21.5397 96.1404 21.5683 96.3928 21.6505 96.63L21.9805 98.53L26.5005 97.75L27.0705 101.02L14.7905 103.14ZM19.1905 96.5C19.0305 95.5 18.4105 94.92 17.4905 95.08C16.5705 95.24 16.2205 96 16.3905 96.98L16.8105 99.42L19.6105 98.93L19.1905 96.5Z"
                    fill="#231F20"
                  />
                  <path
                    d="M12.7402 88.3L12.9702 78.66L15.6202 78.72L15.4702 85.07L17.6802 85.12L17.7902 80.21L20.2702 80.27L20.1502 85.18L22.6202 85.24L22.7702 78.89L25.4302 78.95L25.1902 88.6L12.7402 88.3Z"
                    fill="#231F20"
                  />
                  <path
                    d="M21.9595 77.55L21.8295 74.15C22.4673 74.1982 23.0999 74.0049 23.6019 73.6085C24.1038 73.2121 24.4385 72.6416 24.5395 72.01C24.8595 70.55 24.4195 69.85 23.6695 69.69C22.9195 69.53 22.4595 69.9 22.0395 71.06L21.5095 72.53C20.5795 75.13 19.1695 76.3 16.8995 75.8C14.7995 75.34 13.4995 73.09 14.2195 69.8C14.9395 66.51 16.7595 65.18 18.7495 65.11L18.8595 68.49C18.3252 68.5009 17.8114 68.6974 17.4063 69.046C17.0011 69.3945 16.73 69.8733 16.6395 70.4C16.3595 71.67 16.8395 72.29 17.5095 72.4C18.1795 72.51 18.6395 72.12 18.9595 71.23L19.4895 69.74C20.4095 67.12 22.0595 65.68 24.2695 66.16C26.4795 66.64 27.7895 68.85 26.9895 72.54C26.2095 76.1 24.1595 77.58 21.9595 77.55Z"
                    fill="#231F20"
                  />
                  <path
                    d="M20.3795 59.41L18.7995 63.11L16.4395 62.11L20.9494 51.59L23.3094 52.59L21.7195 56.3L30.8094 60.2L29.4995 63.3L20.3795 59.41Z"
                    fill="#231F20"
                  />
                  <path
                    d="M34.2801 49.06L31.6901 52.98L33.3901 55.12L31.5001 57.99L23.5801 47.37L26.0301 43.66L38.9101 46.76L36.9101 49.76L34.2801 49.06ZM31.6901 48.33L29.6001 47.74C28.2501 47.36 27.6001 47.16 26.8501 46.93C27.3301 47.5 27.8501 48.08 28.6801 49.18L30.0101 50.87L31.6901 48.33Z"
                    fill="#231F20"
                  />
                  <path
                    d="M33.5006 38.42L30.7506 41.3L28.8906 39.53L36.7806 31.24L38.6406 33.01L35.8506 35.93L43.0206 42.76L40.6906 45.3L33.5006 38.42Z"
                    fill="#231F20"
                  />
                  <path
                    d="M39.0098 29.62L41.6598 27.52L49.3997 37.3L46.7498 39.4L39.0098 29.62Z"
                    fill="#231F20"
                  />
                  <path
                    d="M47.3792 30.71C45.6292 27.55 46.2192 23.83 50.1692 21.64C54.1192 19.45 57.5992 20.92 59.3492 24.08C61.0992 27.24 60.4992 30.85 56.4992 33.08C52.4992 35.31 49.1292 33.87 47.3792 30.71ZM56.2292 25.79C55.1392 23.79 53.3392 22.95 51.4892 23.98C49.6392 25.01 49.3892 26.98 50.4892 28.98C51.5892 30.98 53.3592 31.74 55.2092 30.71C57.0592 29.68 57.3192 27.75 56.2292 25.79Z"
                    fill="#231F20"
                  />
                  <path
                    d="M60.2402 17.05L64.5302 15.88L71.0902 21.7L70.2502 18.63L69.1502 14.63L72.2903 13.77L75.5802 25.77L72.3503 26.65L64.2702 19.44L65.2702 23.04L66.6802 28.21L63.5403 29.07L60.2402 17.05Z"
                    fill="#231F20"
                  />
                </g>
                <path
                  className="hand"
                  d="M59.3025 96.33C57.4814 95.8676 55.6113 95.6259 53.7325 95.61C52.3073 95.598 50.9015 95.9417 49.6425 96.61C48.9537 96.9961 48.3577 97.5282 47.8965 98.1692C47.4352 98.8101 47.1198 99.5442 46.9725 100.32L48.9725 100.72L46.9725 100.32C46.8004 101.215 46.8099 102.136 47.0006 103.027C47.1913 103.918 47.5593 104.762 48.0826 105.509C48.606 106.255 49.274 106.888 50.047 107.371C50.8201 107.854 51.6823 108.177 52.5825 108.32C54.0325 108.55 55.6425 108.77 57.3225 109.01L57.6025 107.01L57.3225 109.01C62.6325 109.75 68.5025 110.57 72.7625 111.96C76.9333 113.898 81.6107 114.465 86.1238 113.58C90.6369 112.696 94.7538 110.404 97.8842 107.035C101.015 103.666 102.998 99.3921 103.549 94.8263C104.1 90.2605 103.191 85.6374 100.953 81.62L98.2625 76.96L88.5425 60.12C87.8259 58.9357 86.6736 58.0794 85.3328 57.7349C83.9921 57.3905 82.5698 57.5853 81.371 58.2776C80.1723 58.9699 79.2927 60.1045 78.9209 61.4379C78.5492 62.7713 78.7149 64.1974 79.3825 65.41L83.1625 71.96C83.1804 72.0014 83.1822 72.048 83.1673 72.0906C83.1525 72.1332 83.1223 72.1687 83.0825 72.19C83.0495 72.2195 83.0068 72.2358 82.9625 72.2358C82.9183 72.2358 82.8755 72.2195 82.8425 72.19L74.7325 58.19C74.031 56.9766 72.8763 56.0916 71.5223 55.7297C70.1683 55.3677 68.7259 55.5585 67.5125 56.26C66.2992 56.9615 65.4142 58.1163 65.0522 59.4703C64.6903 60.8243 64.881 62.2666 65.5825 63.48L73.6825 77.48C73.701 77.5228 73.703 77.571 73.6883 77.6152C73.6735 77.6595 73.643 77.6968 73.6025 77.72C73.5828 77.7332 73.5608 77.7423 73.5375 77.7469C73.5143 77.7515 73.4904 77.7515 73.4671 77.7469C73.4439 77.7423 73.4218 77.7331 73.4022 77.7199C73.3825 77.7067 73.3656 77.6897 73.3525 77.67L63.0925 59.9C62.3759 58.7157 61.2236 57.8594 59.8829 57.5149C58.5421 57.1705 57.1197 57.3653 55.921 58.0576C54.7223 58.7499 53.8427 59.8845 53.4709 61.2179C53.0991 62.5513 53.2649 63.9774 53.9325 65.19L64.2025 82.96C64.2197 83.0026 64.2199 83.0501 64.2032 83.0929C64.1865 83.1356 64.154 83.1704 64.1125 83.19C64.0807 83.2218 64.0375 83.2396 63.9925 83.2396C63.9476 83.2396 63.9044 83.2218 63.8725 83.19L55.7725 69.19C55.0455 68.0298 53.8969 67.1967 52.5682 66.8659C51.2396 66.535 49.8345 66.7322 48.6482 67.416C47.462 68.0998 46.5871 69.2168 46.2074 70.5324C45.8278 71.8479 45.973 73.2594 46.6125 74.47L59.3025 96.33Z"
                  fill="#FFC809"
                  stroke="black"
                  strokeWidth={4}
                  strokeLinecap="square"
                />
                <g className="highfive">
                  <path
                    className="sparks"
                    d="M107.598 46.4583L103.493 57.7346"
                    stroke="black"
                    strokeWidth={4}
                    strokeLinecap="round"
                  />
                  <path
                    className="sparks"
                    d="M94.6797 46.868L96.7635 58.6857"
                    stroke="black"
                    strokeWidth={4}
                    strokeLinecap="round"
                  />
                  <path
                    className="sparks"
                    d="M117.232 55.0765L108.04 62.7899"
                    stroke="black"
                    strokeWidth={4}
                    strokeLinecap="round"
                  />
                  <path
                    d="M141.197 87.8467L128.504 109.832C130.286 109.411 132.262 109.082 134.079 109.116C135.447 109.142 136.914 109.374 138.171 110.09C139.511 110.853 140.478 112.095 140.833 113.802L138.873 114.209L140.833 113.802C141.62 117.592 138.989 121.237 135.228 121.833C133.776 122.063 132.162 122.288 130.489 122.521L130.476 122.523L130.2 120.54L130.476 122.523C125.166 123.263 119.292 124.088 115.038 125.475C108.845 128.365 101.341 128.266 94.9263 124.562C84.5635 118.579 80.91 105.413 86.8448 95.1332L89.535 90.4737L89.5389 90.4669L89.5453 90.4558L99.2671 73.6171C100.728 71.0874 103.961 70.2735 106.467 71.7206C108.973 73.1676 109.885 76.3745 108.425 78.9042L104.644 85.4525C104.613 85.5061 104.615 85.6191 104.728 85.6841C104.84 85.7491 104.939 85.6945 104.97 85.6409L113.072 71.6088C114.532 69.0791 117.765 68.2652 120.272 69.7122C122.778 71.1593 123.69 74.3662 122.229 76.8959L114.128 90.9281C114.097 90.9816 114.099 91.0946 114.212 91.1595C114.324 91.2245 114.423 91.1699 114.454 91.1164L119.585 82.2293L124.716 73.3423C126.176 70.8126 129.41 69.9987 131.916 71.4457C134.422 72.8927 135.334 76.0996 133.873 78.6294L123.611 96.4035C123.581 96.457 123.583 96.57 123.695 96.6349C123.808 96.6999 123.907 96.6453 123.938 96.5918L132.039 82.5596C133.5 80.0299 136.733 79.216 139.239 80.663C141.745 82.1101 142.657 85.317 141.197 87.8467Z"
                    fill="#C7B9FF"
                    stroke="black"
                    strokeWidth="4.00371"
                    strokeLinecap="square"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </section>

        <section className="w-full pt-[150px] pb-[50px]">
          <div className="max-w-[1280px] mx-auto px-20">
            <h2 className="word-opa-con text-[3em] flex flex-col font-bold max-w-[1100px] cursor-text">
              <div className="flex justify-center">
                <span className="word-opa">FIGMA&#39;S</span>

                <img
                  className="text-image"
                  src="https://cdn.shopify.com/s/files/1/0576/8364/0503/t/9/assets/word-symbol-burst.static.svg?v=34745811441670751621678219731"
                  alt="text-image"
                />

                <span className="word-opa">COLLECTION </span>

                <img
                  className="text-image"
                  src="https://cdn.shopify.com/s/files/1/0576/8364/0503/t/9/assets/word-symbol-hourglass.static.svg?v=133626873782927219541678219731"
                  alt="text-image"
                />
                <span className="word-opa">OF</span>
                <br />
              </div>
              <div className="flex justify-center">
                <span className="underline">LAYERS</span>
                <img
                  className="text-image"
                  src="https://cdn.shopify.com/s/files/1/0576/8364/0503/t/9/assets/word-symbol-zag.static.svg?v=102718930007740203771678219731"
                  alt="text-image"
                />

                <span className="word-opa"> AND </span>
                <img
                  className="text-image"
                  src="https://cdn.shopify.com/s/files/1/0576/8364/0503/t/9/assets/word-symbol-dots.static.svg?v=39142388321885661271678219731"
                  alt="text-image"
                />
                <span className="underline"> COMPONENTS </span>
                <img
                  className="text-image"
                  src="https://cdn.shopify.com/s/files/1/0576/8364/0503/t/9/assets/word-symbol-sun.static.svg?v=163357932534391307201678219731"
                  alt="text-image"
                />
                <span className="word-opa"> FOR</span>
              </div>
              <div className="flex justify-center">
                <span className="word-opa"> YOU </span>
                <img
                  className="text-image"
                  src="https://cdn.shopify.com/s/files/1/0576/8364/0503/t/9/assets/word-symbol-comet.static.svg?v=16892712658856357451678219731"
                  alt="text-image"
                />

                <span className="word-opa"> AND </span>
                <img
                  className="text-image"
                  src="https://cdn.shopify.com/s/files/1/0576/8364/0503/t/9/assets/word-symbol-snake.static.svg?v=34100567131936571961678219731"
                  alt="text-image"
                />
                <span className="word-opa"> YOUR </span>
                <img
                  className="text-image"
                  src="https://cdn.shopify.com/s/files/1/0576/8364/0503/t/9/assets/word-symbol-tri.static.svg?v=32742515804419710851678219731"
                  alt="text-image"
                />
                <span className="word-opa"> FRIENDS </span>
              </div>
            </h2>
          </div>
          <section></section>
        </section>

        <section>
          <div className="max-w-[1440px] mt-[110px] mb-[90px] mx-auto px-[40px]">
            <div className="grid grid-cols-4 gap-10">
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-27_600x.png?v=1651180902"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_design-in-bloom-tee_rollover_600x.png?v=1670516565"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_design-in-bloom-tee_01_600x.jpg?v=1670516592"
                alt="photos"
                href="#"
                title="Design in bloom tee"
                old="New!"
                price="$25"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-25_600x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_washi-tape-green_rollover_02_600x.png?v=1670597359"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_washi-tape-green_01_600x.jpg?v=1670520424"
                alt="photos"
                href="#"
                title="Gridlock washi tape"
                old="New!"
                price="$1"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-1_1e67f092-49de-4857-8ce1-b3185e8566da_600x.png?v=1651180902"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_version-history-jacket.png_rollover_600x.png?v=1670519524"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_version-history-jacket_01_600x.jpg?v=1670519561"
                alt="photos"
                href="#"
                title="Version history coach jacket"
                old="New!"
                price="$45"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-24_600x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_best-bud-pin_rollover_600x.png?v=1670520766"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_best-bud-pin_01_600x.jpg?v=1670520788"
                alt="photos"
                href="#"
                title="Best bud pin"
                old="New!"
                price="$2"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-15_600x.png?v=1636143251"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_tool-kit-pin_rollover_600x.png?v=1670520872"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_tool-kit-pin_01_600x.jpg?v=1670520907"
                alt="photos"
                href="#"
                title="Toolkit pin"
                old="New!"
                price="$2"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-22_600x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_on-brand-hat_rollover_600x.png?v=1670519690"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_on-brand-hat_01_600x.jpg?v=1670519718"
                alt="photos"
                href="#"
                title="On brand hat"
                old="New!"
                price="$25"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-2_1200x.png?v=1636143050"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_shape-up-tee_rollover_1200x.png?v=1670516450"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_shape-up-tee_013_1200x.png?v=1678114580"
                alt="photos"
                href="#"
                className="relative col-span-2 row-span-2"
                title="Shape up tee"
                old="New!"
                price="$20"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-2_1200x.png?v=1636143050"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_band-together-socks_rollover_1200x.png?v=1670519884"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_band-together-socks_01_1200x.jpg?v=1670519923"
                alt="photos"
                href="#"
                className="relative col-span-2 row-span-2"
                title="Band together socks"
                old="New!"
                price="$10"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Hover_-_Pattern_600x.png?v=1641321309"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_dress-code-hat_rollover_600x.png?v=1670519799"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_dress-code-hat_01_600x.png?v=1677707527"
                alt="photos"
                href="#"
                title="Dress code hat"
                old="New!"
                price="$20"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-1_2462bce6-2629-4568-a70d-77d06bddd9e1_600x.png?v=1636143251"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_power-points-pin_rollover_600x.png?v=1670520514"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_power-points-pin_01_600x.jpg?v=1670520537"
                alt="photos"
                href="#"
                title="Power points pin"
                old="New!"
                price="$2"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_framework-tee_rollover_600x.png?v=1670515569"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_framework-tee_01_600x.jpg?v=1670515454"
                alt="photos"
                href="#"
                title="Framework tee"
                old="New!"
                price="$20"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-12_600x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_meet-n-greet-pin_rollover_600x.png?v=1670520645"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_meet-n-greet-pin_01_600x.jpg?v=1670520677"
                alt="photos"
                href="#"
                title="Meetn' great pin"
                old="New!"
                price="$2"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-12_600x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_tool-kit-mug_rollover_600x.png?v=1670520001"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_tool-kit-mug_01_600x.jpg?v=1670520016"
                alt="photos"
                href="#"
                title="Toolkit great mug"
                old="New!"
                price="$35"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-14_600x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_washi-tape-tan_rollover_02_600x.png?v=1670597321"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_washi-tape-tan_01_600x.jpg?v=1670520306"
                alt="photos"
                href="#"
                title="Pick of the bunch washi tape"
                old="New!"
                price="$1"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-14_e1362380-a908-44c4-bc76-e5751953a5de_600x.png?v=1651180902"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-store_tidy-up-tee_rollover_600x.png?v=1670516673"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/figma-store_tidy-up-tee_01_600x.jpg?v=1670516715"
                alt="photos"
                href="#"
                title="Tidy up tee"
                old="New!"
                price="$25"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Rainbow-logo-tee_600x.png?v=1636143026"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1096_600x.jpg?v=1636599836"
                alt="photos"
                href="#"
                title="Rainbow logo tee"
                // old="New!"
                price="$20"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-18_1200x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Notebook_54df7006-77df-4397-a719-c2b49bc9df74_1200x.png?v=1636147218"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-3403_1200x.jpg?v=1636598385"
                alt="photos"
                href="#"
                className="relative col-span-2 row-span-2"
                title="Comments notebook"
                // old="New!"
                price="$10"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-17_1200x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-logo-hat_1200x.png?v=1636145926"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-414-Edit_1200x.jpg?v=1636599254"
                alt="photos"
                href="#"
                className="relative col-span-2 row-span-2"
                title="Figma logo hat"
                // old="New!"
                price="$20"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-12_600x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/rainbow-cursor-pin_517323d3-6aff-4e24-ab7c-94107df5a187_600x.png?v=1636146982"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1616_600x.jpg?v=1636599719"
                alt="photos"
                href="#"
                title="Multicursor pin"
                // old="New!"
                price="$2"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-24_600x.png?v=1636143252"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Flocked-logo-dimensions-tee_600x.png?v=1636143033"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2327_600x.jpg?v=1636599425"
                alt="photos"
                href="#"
                title="Logo dimensions tee"
                // old="New!"
                price="$25"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-9_600x.png?v=1636143251"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/waterbottle_c970529b-0a45-4d21-b0d8-296aeed449c0_600x.png?v=1636146364"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-630_600x.jpg?v=1636598228"
                alt="photos"
                href="#"
                title="Bezier water bottle"
                // old="New!"
                price="$20"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-3_600x.png?v=1636143251"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Hug-contents-tee_e300a456-bdd8-470f-9c15-3031ff12d110_600x.png?v=1636143026"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1224_600x.jpg?v=1636599461"
                alt="photos"
                href="#"
                title="Hug contents tee"
                // old="New!"
                price="$20"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-20_600x.png?v=1636143251"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-logo-pin_d9be32db-3162-4e6b-a1b5-6dce15c40cad_600x.png?v=1636146982"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2091_600x.jpg?v=1636598619"
                alt="photos"
                href="#"
                title="Figma pin"
                // old="New!"
                price="$2"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Elevated-workflows-tee_600x.png?v=1636143031"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-366_600x.jpg?v=1636598498"
                alt="photos"
                href="#"
                title="Elevated workflows tee "
                // old="New!"
                price="$25"
              />
              <Photos
                src1="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-15_600x.png?v=1636143251"
                src2="https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Black-arrow-icon-socks_600x.png?v=1636144149"
                src3="https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2379_600x.jpg?v=1636598272"
                alt="photos"
                href="#"
                title="Black arrow socks"
                // old="New!"
                price="$10"
              />
            </div>
            <div></div>
          </div>
        </section>
      </main>

      <footer className="bg-[rgb(242,78,30)] pt-[60px]">
        <div>
          <div className="grid grid-cols-[auto,2fr,1fr,auto] max-w-[1280px] mx-auto px-3 gap-x-16 gap-y-10">
            <div className="row-span-2">
              <svg
                className="svg-logo current hidden"
                width={250}
                height={273}
                viewBox="0 0 250 273"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M193.125 0H56.875V86.25H8.14125e-06L0 272.5L56.875 272.5H193.125L250 272.5L250 86.25H193.125V0Z"
                  fill="#0FA958"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M103.809 63.3749H99.5594V44.1216H91.6162V40.4932H111.883V44.1216H103.809V63.3749ZM119.422 63.3749H115.173V40.4932H119.422V49.7439H130.144V40.4932H134.394V63.3749H130.144V53.405H119.422V63.3749ZM140.327 63.3749H157.129V59.7465H144.577V53.3723H153.991V49.7766H144.577V44.1216H157.129V40.4932H140.327V63.3749ZM112.296 143.865C116.97 143.865 118.997 141.381 119.879 139.812V143.375H123.802V131.803H111.936V135.464H119.552C119.324 137.72 117.264 140.237 113.146 140.237C109.092 140.237 105.921 137.262 105.921 131.967C105.921 126.639 109.256 123.664 113.276 123.664C116.97 123.664 118.833 125.789 119.781 128.502L123.9 126.933C122.691 123.304 119.356 120.003 113.309 120.003C106.673 120.003 101.476 125.102 101.476 131.999C101.476 139.485 106.216 143.865 112.296 143.865ZM76.1362 143.375H71.8867V120.493H89.048V124.122H76.1362V130.627H86.4003V134.288H76.1362V143.375ZM97.0451 143.375H92.7957V120.493H97.0451V143.375ZM132.989 143.375H128.74V120.493H135.702L140.083 132.457C141.161 135.497 141.554 136.51 141.815 137.099C142.077 136.445 142.436 135.497 143.548 132.457L147.928 120.493H154.662V143.375H150.412V132.915V124.35L143.45 143.375H139.919L132.989 124.35V132.915V143.375ZM176.028 143.375H180.735L172.203 120.493H166.548L157.886 143.375H162.462L164.456 137.72H174.099L176.028 143.375ZM165.731 134.092L167.692 128.567C167.958 127.8 168.182 127.154 168.374 126.601C168.819 125.319 169.088 124.542 169.294 123.926L170.928 128.535L172.824 134.092H165.731ZM79.7355 238.24C85.9463 238.24 88.8555 235.102 88.8555 231.18C88.8555 227.224 85.8155 225.034 81.468 224.315L78.4934 223.792C76.3686 223.4 75.2572 222.517 75.2572 220.948C75.2572 219.314 76.4994 217.908 79.3759 217.908C82.5794 217.908 84.0177 219.837 84.6387 221.7L88.594 220.164C87.7114 217.385 84.9983 214.378 79.5067 214.378C74.0151 214.378 70.9097 217.451 70.9097 221.144C70.9097 225.23 73.5575 227.126 77.6108 227.813L80.52 228.303C83.2985 228.793 84.4426 229.839 84.4426 231.474C84.4426 233.337 83.0043 234.71 79.8009 234.71C76.2052 234.71 74.4073 232.389 73.7863 229.97L69.7656 231.507C70.7136 235.168 73.8843 238.24 79.7355 238.24ZM98.0909 237.75H102.34V218.497H110.414V214.868H90.1477V218.497H98.0909V237.75ZM135.169 226.342C135.169 233.304 130.494 238.24 123.27 238.24C116.046 238.24 111.372 233.304 111.372 226.342C111.372 219.412 116.079 214.378 123.27 214.378C130.429 214.378 135.169 219.412 135.169 226.342ZM115.817 226.342C115.817 231.082 118.596 234.612 123.27 234.612C127.944 234.612 130.69 231.082 130.69 226.342C130.69 221.537 127.944 218.006 123.27 218.006C118.596 218.006 115.817 221.537 115.817 226.342ZM139.625 237.75H143.875V228.728H148.255C151.197 228.728 152.537 229.741 152.962 232.52L153.746 237.75H158.323L157.277 232.16C156.721 229.022 155.152 227.617 152.243 227.257C155.119 226.734 157.93 224.838 157.93 220.981C157.93 217.418 155.119 214.868 150.281 214.868H139.625V237.75ZM143.875 225.165V218.497H149.53C151.785 218.497 153.485 219.543 153.485 221.831C153.485 224.119 151.785 225.165 149.53 225.165H143.875ZM179.666 237.75H162.864V214.868H179.666V218.497H167.114V224.152H176.528V227.747H167.114V234.122H179.666V237.75Z"
                  fill="black"
                />
              </svg>

              <svg
                className="svg-logo"
                width={250}
                height={275}
                viewBox="0 0 250 275"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M200.625 0H0V152.5H49.375V275H250V122.5H200.625V0Z"
                  fill="#FFC700"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.3099 55.2499H37.0604V35.9966H29.1172V32.3682H49.3839V35.9966H41.3099V55.2499ZM56.9233 55.2499H52.6739V32.3682H56.9233V41.6189H67.645V32.3682H71.8945V55.2499H67.645V45.28H56.9233V55.2499ZM77.8284 55.2499H94.6301V51.6215H82.0779V45.2473H91.4921V41.6516H82.0779V35.9966H94.6301V32.3682H77.8284V55.2499ZM135.731 237.43C135.731 241.352 132.822 244.49 126.611 244.49C120.76 244.49 117.59 241.418 116.642 237.757L120.662 236.22C121.283 238.639 123.081 240.96 126.677 240.96C129.88 240.96 131.319 239.587 131.319 237.724C131.319 236.089 130.175 235.043 127.396 234.553L124.487 234.063C120.433 233.376 117.786 231.48 117.786 227.394C117.786 223.701 120.891 220.628 126.383 220.628C131.874 220.628 134.587 223.635 135.47 226.414L131.515 227.95C130.894 226.087 129.455 224.158 126.252 224.158C123.375 224.158 122.133 225.564 122.133 227.198C122.133 228.767 123.245 229.65 125.369 230.042L128.344 230.565C132.691 231.284 135.731 233.474 135.731 237.43ZM149.216 244H144.967V224.747H137.024V221.118H157.29V224.747H149.216V244ZM170.146 244.49C177.37 244.49 182.044 239.554 182.044 232.592C182.044 225.662 177.305 220.628 170.146 220.628C162.955 220.628 158.248 225.662 158.248 232.592C158.248 239.554 162.922 244.49 170.146 244.49ZM170.146 240.862C165.472 240.862 162.693 237.332 162.693 232.592C162.693 227.787 165.472 224.256 170.146 224.256C174.82 224.256 177.566 227.787 177.566 232.592C177.566 237.332 174.82 240.862 170.146 240.862ZM190.751 244H186.501V221.118H197.157C201.995 221.118 204.806 223.668 204.806 227.231C204.806 231.088 201.995 232.984 199.119 233.507C202.028 233.867 203.597 235.272 204.153 238.41L205.199 244H200.622L199.838 238.77C199.413 235.991 198.073 234.978 195.131 234.978H190.751V244ZM190.751 224.747V231.415H196.406C198.661 231.415 200.361 230.369 200.361 228.081C200.361 225.793 198.661 224.747 196.406 224.747H190.751ZM209.74 244H226.542V240.372H213.99V233.997H223.404V230.402H213.99V224.747H226.542V221.118H209.74V244ZM80.7284 107.909L83.7332 110.914L90.1589 104.488L97.4167 111.746L100.005 109.157L92.7476 101.899L97.3473 97.2995L106.477 106.43L109.043 103.864L96.9082 91.729L80.7284 107.909ZM95.5132 122.694L98.518 125.699L114.698 109.519L111.693 106.514L95.5132 122.694ZM117.184 139.325C115.45 139.811 112.26 140.134 108.955 136.829C104.656 132.53 104.402 126.081 109.695 120.788C114.572 115.911 121.853 115.98 126.545 120.672C130.821 124.948 130.844 129.641 129.134 133.061L125.112 131.259C126.36 128.67 126.545 125.85 123.933 123.238C121.09 120.395 116.629 120.141 112.861 123.908C109.117 127.653 109.256 131.998 112.122 134.864C115.034 137.777 118.27 137.453 120.027 136.02L114.641 130.634L117.23 128.046L125.62 136.436L117.438 144.618L114.664 141.845L117.184 139.325ZM120.93 148.11L123.934 151.115L131.331 143.718L137.387 137.663L128.835 156.015L131.331 158.511L149.707 149.982L143.651 156.038L136.254 163.435L139.259 166.44L155.439 150.26L150.677 145.498L139.12 150.861C136.185 152.224 135.26 152.64 134.613 152.918C134.844 152.317 135.283 151.323 136.67 148.411L142.033 136.854L137.109 131.93L120.93 148.11ZM157.696 184.876L154.367 181.548L157.002 176.185L150.183 169.367L144.775 171.955L141.539 168.719L163.844 158.665L167.843 162.663L157.696 184.876ZM158.944 165.183L153.651 167.702L158.666 172.718L161.255 167.448L163.358 163.033C162.777 163.324 162.038 163.682 160.818 164.274C160.291 164.529 159.675 164.828 158.944 165.183Z"
                  fill="black"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">
              OBJECTS
              <br />
              THAT INSPIRE.
            </h3>
            <ul className="col-span-2">
              <li className="hover:underline">
                <Link href="#">Privacy and Terms</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Contact us</Link>
              </li>
            </ul>
            <ul className="col-span-2 text-3xl font-light flex flex-wrap self-center gap-[40px] ">
              <li className="hover:underline">
                <Link href="#">Figma ↗</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Twitter</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Instagram</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Youtube</Link>
              </li>
            </ul>
            <button>
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM26.136 37.416H23.064L23.064 18.792C22.168 19.72 21.304 20.584 20.408 21.48L17.144 24.776L15 22.6L24.6 13L34.2 22.6L32.056 24.776L28.824 21.48C28.5254 21.1814 28.2267 20.8863 27.9281 20.5912C27.3307 20.0009 26.7334 19.4107 26.136 18.792V37.416Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="mt-[60px] pb-[5px] flex max-w-[100vw] text-2xl uppercase font-bold overflow-x-hidden">
              <div className="tape flex whitespace-nowrap items-center gap-2">
                <span>FIGMA&#39;S</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={18}
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.662109 17.3626V6.21266L6.23707 0.637695L15.9933 6.21266L22.962 0.637695V11.7876L15.9933 17.3626L6.23707 11.7876L0.662109 17.3626Z"
                    fill="white"
                  />
                </svg>
                <span>marvelously</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={24}
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.687" cy={12} r="11.1499" fill="white" />
                </svg>
                <span>considered</span>
                <svg
                  className="snippet--ticker-shape"
                  width={19}
                  height={19}
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.199219 0.637695H9.25853C14.2619 0.637695 18.3179 4.69369 18.3179 9.69701C18.3179 14.7003 14.2619 18.7563 9.25853 18.7563C4.25521 18.7563 0.199219 14.7003 0.199219 9.69701V0.637695Z"
                    fill="white"
                  />
                </svg>
                <span>collection</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={20}
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.286133 0.243652H11.4361H22.586C15.6173 5.66375 15.6173 14.3359 22.586 19.756H11.4361H0.286133C7.25484 14.3359 7.25484 5.66375 0.286133 0.243652Z"
                    fill="white"
                  />
                </svg>
                <span>of</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={24}
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="11.3115"
                    y="0.850098"
                    width="15.7684"
                    height="15.7684"
                    transform="rotate(45 11.3115 0.850098)"
                    fill="white"
                  />
                </svg>
                <span>objects</span>
                <svg
                  className="snippet--ticker-shape"
                  width={26}
                  height={24}
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="13.1858"
                    cy="17.2961"
                    rx="5.85371"
                    ry="12.5437"
                    transform="rotate(90 13.1858 17.2961)"
                    fill="white"
                  />
                  <ellipse
                    cx="13.1858"
                    cy="6.70381"
                    rx="5.85371"
                    ry="12.5437"
                    transform="rotate(90 13.1858 6.70381)"
                    fill="white"
                  />
                </svg>
                <span>for</span>
                <svg
                  className="snippet--ticker-shape"
                  width={20}
                  height={24}
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.818 0.850098H0.305664L3.86452 7.8188L0.305664 12L3.86452 16.1812L0.305664 23.15H19.818L16.1365 16.1812L19.818 12L16.1365 7.8188L19.818 0.850098Z"
                    fill="white"
                  />
                </svg>
                <span>our</span>
                <svg
                  className="snippet--ticker-shape"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.180664"
                    y="0.243652"
                    width="19.5124"
                    height="19.5124"
                    rx="5.57496"
                    fill="white"
                  />
                </svg>
                <span>time</span>
                <svg
                  className="snippet--ticker-shape"
                  width={26}
                  height={18}
                  viewBox="0 0 26 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.393555 17.3626V9.00014C0.393555 3.42518 3.18104 0.637695 7.36226 0.637695C12.9372 0.637697 15.7247 6.21266 19.9059 6.21266C22.6934 6.21266 24.0872 4.81892 24.0872 0.637695H25.4809V9.00014C25.4809 14.5751 22.6934 17.3626 18.5122 17.3626C12.9372 17.3626 10.1497 11.7876 5.96852 11.7876C3.45397 11.7876 1.7873 13.3207 1.7873 17.3626H0.393555Z"
                    fill="white"
                  />
                </svg>
                <span>on</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={18}
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.662109 17.3626V6.21266L6.23707 0.637695L15.9933 6.21266L22.962 0.637695V11.7876L15.9933 17.3626L6.23707 11.7876L0.662109 17.3626Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="tape flex whitespace-nowrap items-center gap-2">
                <span>FIGMA&#39;S</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={18}
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.662109 17.3626V6.21266L6.23707 0.637695L15.9933 6.21266L22.962 0.637695V11.7876L15.9933 17.3626L6.23707 11.7876L0.662109 17.3626Z"
                    fill="white"
                  />
                </svg>
                <span>marvelously</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={24}
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.687" cy={12} r="11.1499" fill="white" />
                </svg>
                <span>considered</span>
                <svg
                  className="snippet--ticker-shape"
                  width={19}
                  height={19}
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.199219 0.637695H9.25853C14.2619 0.637695 18.3179 4.69369 18.3179 9.69701C18.3179 14.7003 14.2619 18.7563 9.25853 18.7563C4.25521 18.7563 0.199219 14.7003 0.199219 9.69701V0.637695Z"
                    fill="white"
                  />
                </svg>
                <span>collection</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={20}
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.286133 0.243652H11.4361H22.586C15.6173 5.66375 15.6173 14.3359 22.586 19.756H11.4361H0.286133C7.25484 14.3359 7.25484 5.66375 0.286133 0.243652Z"
                    fill="white"
                  />
                </svg>
                <span>of</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={24}
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="11.3115"
                    y="0.850098"
                    width="15.7684"
                    height="15.7684"
                    transform="rotate(45 11.3115 0.850098)"
                    fill="white"
                  />
                </svg>
                <span>objects</span>
                <svg
                  className="snippet--ticker-shape"
                  width={26}
                  height={24}
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="13.1858"
                    cy="17.2961"
                    rx="5.85371"
                    ry="12.5437"
                    transform="rotate(90 13.1858 17.2961)"
                    fill="white"
                  />
                  <ellipse
                    cx="13.1858"
                    cy="6.70381"
                    rx="5.85371"
                    ry="12.5437"
                    transform="rotate(90 13.1858 6.70381)"
                    fill="white"
                  />
                </svg>
                <span>for</span>
                <svg
                  className="snippet--ticker-shape"
                  width={20}
                  height={24}
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.818 0.850098H0.305664L3.86452 7.8188L0.305664 12L3.86452 16.1812L0.305664 23.15H19.818L16.1365 16.1812L19.818 12L16.1365 7.8188L19.818 0.850098Z"
                    fill="white"
                  />
                </svg>
                <span>our</span>
                <svg
                  className="snippet--ticker-shape"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.180664"
                    y="0.243652"
                    width="19.5124"
                    height="19.5124"
                    rx="5.57496"
                    fill="white"
                  />
                </svg>
                <span>time</span>
                <svg
                  className="snippet--ticker-shape"
                  width={26}
                  height={18}
                  viewBox="0 0 26 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.393555 17.3626V9.00014C0.393555 3.42518 3.18104 0.637695 7.36226 0.637695C12.9372 0.637697 15.7247 6.21266 19.9059 6.21266C22.6934 6.21266 24.0872 4.81892 24.0872 0.637695H25.4809V9.00014C25.4809 14.5751 22.6934 17.3626 18.5122 17.3626C12.9372 17.3626 10.1497 11.7876 5.96852 11.7876C3.45397 11.7876 1.7873 13.3207 1.7873 17.3626H0.393555Z"
                    fill="white"
                  />
                </svg>
                <span>on</span>
                <svg
                  className="snippet--ticker-shape"
                  width={23}
                  height={18}
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.662109 17.3626V6.21266L6.23707 0.637695L15.9933 6.21266L22.962 0.637695V11.7876L15.9933 17.3626L6.23707 11.7876L0.662109 17.3626Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

{
  /*
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Figma() {
  return (
    <>
      <h1>Figma slider</h1>
      <Swiper slidesPerView={3} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
*/
}

/*
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation, FreeMode } from "swiper";

  <Swiper
                  slidesPerView={"auto"}
                  loop={true}
                  freeMode={true}
                  spaceBetween={0}
                  centeredSlides={true}
                  autoHeight={true}
                  navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide",
                  }}
                  modules={[Navigation, FreeMode]}
                  className="mySwiper flex justify-between"
                >
               <SwiperSlide></SwiperSlide> 
               <SwiperSlide></SwiperSlide> 
               <SwiperSlide></SwiperSlide> 
               <SwiperSlide></SwiperSlide> 
               <SwiperSlide></SwiperSlide> 
*/
