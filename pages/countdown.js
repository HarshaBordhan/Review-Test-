import { useEffect } from "react";

export default function Countdown() {
  useEffect(() => {
    let days, hours, mins, sec;

    let hoursNow, minsNow, secNow;

    const pad2Digit = function (num) {
      return num.toString().padStart(2, "0");
    };

    const updateTime = function () {
      const dest = new Date("August 6, 2023 11:59:00").getTime();
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

      // if countdown is completed
      if (diff < 0) {
        clearInterval(interval);
        document.querySelector(".days").innerText = "00" + "d";
        document.querySelector(".hours").innerText = "00" + "h";
        document.querySelector(".mins").innerText = "00" + "m";
        document.querySelector(".secs").innerText = "00" + "s";
      }
    };

    const updateCurrentTime = function () {
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
    const interval2 = setInterval(updateCurrentTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main className="w-screen h-screen bg-black text-white">
        <section className="w-full h-full mx-auto my-0 flex flex-col justify-center items-center gap-2">
          <h2 className="text-3xl">Countdown to Extinction </h2>
          <div className="flex flex-row gap-4 text-2xl">
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

// cloned-memberships
// <!-- REPLACE↓-->

// <!-- Memberstack webflow package -->
//   <script data-memberstack-app="app_cl79ccxwy00a10ufn74rx1319" src="https://static.memberstack.com/scripts/v1/memberstack.js" type="text/javascript"></script>

// <!-- REPLACE↑ -->

// data-ms-price:update = prc_49-yss0l8e
// data-ms-price:update = prc_499-x1t0lfe
