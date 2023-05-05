import { useState, useEffect } from "react";

export default function Opacity() {
  /* First try
  useEffect(() => {
    window.addEventListener(scroll, () => {
      const sectionOpa = document.querySelector(".opa");

      const mainOpa = window.scrollY / 1000;
      console.log(mainOpa);
      if (mainOpa === 0) {
        sectionOpa.style.opacity = 1;
      }
      if (mainOpa > 0) {
        sectionOpa.style.opacity = `${1 - mainOpa}`;
      }
    });
  }, []);
*/

  // Second try
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height = window.innerHeight;
      const newOpacity = 1 - scrollTop / height;
      setOpacity(newOpacity);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-[#fff] relative h-[200vh]">
      <div
        className={`w-screen h-screen mx-auto flex flex-col justify-center items-center opa fixed top-0 ${opacity}`}
      >
        <p className="max-w-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusamus
          sapiente laudantium? Numquam maxime consequuntur inventore fuga
          maiores ipsum magni quaerat possimus officia?
        </p>
      </div>
      {/* <div className="w-screen h-screen mx-auto flex flex-col justify-center items-center fixed top-0">
        <p className="max-w-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusamus
          sapiente laudantium? Numquam maxime consequuntur inventore fuga
          maiores ipsum magni quaerat possimus officia?
        </p>
      </div> */}
    </div>
  );
}
