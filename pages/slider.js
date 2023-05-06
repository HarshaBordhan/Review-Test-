import { useEffect } from "react";

export default function Slider() {
  useEffect(() => {
    // Carousel Slider
    const slides = document.querySelectorAll(".slides");
    const btnLeft = document.querySelector(".prev-btn");
    const btnRight = document.querySelector(".next-btn");

    let curSlide = 0;
    let maxSlide = slides.length;

    const goToSlide = (slide) => {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    // Next slide
    const nextSlide = () => {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
    };

    // Previous slide
    const prevSlide = () => {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
    };

    const init = function () {
      goToSlide(0);
    };

    init();

    // Event handlers
    btnLeft.addEventListener("click", prevSlide);
    btnRight.addEventListener("click", nextSlide);

    // Dragging
    const container = document.querySelector(".sliders");

    let isDragging = false;
    const dragging = (e) => {
      if (!isDragging) return;
      container.scrollLeft -= e.movementX;
    };

    container.addEventListener("mousedown", () => (isDragging = true));
    container.addEventListener("mousemove", () => dragging);

    return () => {
      btnLeft.removeEventListener("click", prevSlide);
      btnRight.removeEventListener("click", nextSlide);
    };
  }, []);

  return (
    <section className="w-full h-screen">
      <div className="max-w-[1440px] h-full mx-auto relative">
        <div className="flex flex-col justify-center h-full">
          <div className="sliders flex flex-row w-[480px] mx-auto my-0 h-32 overflow-x-hidden relative cursor-pointer">
            <div className="slides w-full border rounded-lg bg-slate-100 text-center m-auto absolute">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              accusamus sapiente laudantium? Numquam maxime consequuntur
              inventore fuga maiores ipsum magni quaerat possimus officia?
            </div>
            <div className="slides w-full border rounded-lg bg-lime-100 text-center m-auto absolute">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              accusamus sapiente laudantium? Numquam maxime consequuntur
              inventore fuga maiores ipsum magni quaerat possimus officia?
            </div>
            <div className="slides w-full border rounded-lg bg-red-100 text-center m-auto absolute">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              accusamus sapiente laudantium? Numquam maxime consequuntur
              inventore fuga maiores ipsum magni quaerat possimus officia?
            </div>
            <div className="slides w-full border rounded-lg bg-purple-100 text-center m-auto absolute">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              accusamus sapiente laudantium? Numquam maxime consequuntur
              inventore fuga maiores ipsum magni quaerat possimus officia?
            </div>
            <div className="slides w-full border rounded-lg bg-blue-100 text-center m-auto absolute">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              accusamus sapiente laudantium? Numquam maxime consequuntur
              inventore fuga maiores ipsum magni quaerat possimus officia?
            </div>
          </div>
        </div>
        <div className="buttons">
          {/* Left button */}
          <div className="prev-btn absolute top-[48%] left-0 cursor-pointer z-[1]">
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
          <div className="next-btn absolute top-[48%] right-0 cursor-pointer z-[1]">
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
          {/* Right button */}
        </div>
      </div>
    </section>
  );
}
