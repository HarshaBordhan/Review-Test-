import { useEffect } from "react";

export default function Countdown() {
  useEffect(() => {
    let days;
    let hours;
    let mins;
    let sec;

    let hoursNow;
    let minsNow;
    let secNow;

    const pad2Digit = function (num) {
      return num.toString().padStart(2, "0");
    };

    const updateTime = function () {
      const dest = new Date("June 7, 2023 10:15:00").getTime();
      const now = new Date().getTime();

      const diff = dest - now;

      days = Math.floor(diff / (1000 * 60 * 60 * 24));
      hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      sec = Math.floor((diff % (1000 * 60)) / 1000);

      // console.log(dest, now, diff);
      // console.log(days, hours, mins, sec);

      if (days < 10) {
        days = "0" + days;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }

      document.querySelector(".days").innerText = days + "d";
      document.querySelector(".hours").innerText = hours + "h";
      document.querySelector(".mins").innerText = mins + "m";
      document.querySelector(".secs").innerText = sec + "s";

      // DATES AND TIMES now

      const nowTime = new Date();
      secNow = nowTime.getSeconds();
      minsNow = nowTime.getMinutes();
      hoursNow = nowTime.getHours();

      // console.log(secNow, minsNow, hoursNow);
      document.querySelector(".currentHours").innerText = `${pad2Digit(
        hoursNow
      )}`;
      document.querySelector(".currentMins").innerText = `${pad2Digit(
        minsNow
      )}`;
      document.querySelector(".currentSec").innerText = `${pad2Digit(secNow)}`;
    };

    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main className="w-screen h-screen bg-black text-white">
        <section className="max-w-[640px] mx-auto my-0 flex flex-col justify-center items-center">
          <h2>Countdown to Extinction </h2>
          <div className="flex flex-row gap-4">
            <span className="days"></span>:<span className="hours"></span>:
            <span className="mins"></span>:<span className="secs"></span>
          </div>
        </section>
        <div className="mt-5 absolute bottom-4 right-4 flex gap-4">
          {/* <h2>The current time</h2> */}
          <div className="flex flex-row gap-1">
            <span className="currentHours"></span>:
            <span className="currentMins"></span>:
            <span className="currentSec"></span>
          </div>
        </div>
      </main>
    </>
  );
}