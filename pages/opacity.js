import { useState, useEffect, useRef } from "react";
import React from "react";

export default function Opacity() {
  const headerRef = useRef();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const range = 300;
    const offset = headerHeight / 2;

    const didScrollPage = () => {
      const count = (window.scrollY - offset + range) / (range * 2);
      let calc = 1 - count;

      if (calc >= 1) {
        calc = 1;
      } else if (calc <= 0) {
        calc = 0;
      }

      // console.log(count);
      // console.log(calc);
      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  return (
    <div className="bg-black text-[#fff] relative h-[200vh]">
      <div
        className={`w-screen h-screen mx-auto flex flex-col justify-center items-center fixed top-0`}
        ref={headerRef}
        style={{ opacity: opacity }}
      >
        <p className="max-w-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusamus
          sapiente laudantium? Numquam maxime consequuntur inventore fuga
          maiores ipsum magni quaerat possimus officia?
        </p>
      </div>
      {/* <div
        className="w-screen h-screen mx-auto flex flex-col justify-center items-center fixed top-0"
        ref={headerRef}
        style={{ opacity: opacity }}
      >
        <p className="max-w-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusamus
          sapiente laudantium? Numquam maxime consequuntur inventore fuga
          maiores ipsum magni quaerat possimus officia?
        </p>
      </div> */}
    </div>
  );
}
