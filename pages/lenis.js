import { useEffect } from "react";

export default function Lenis() {
  useEffect(() => {
    // Spread operator
    const nums = [1, 2, 3, 4, 5];

    return () => {
      console.log(...nums);
    };
  });

  return (
    <>
      <div>Auto Scroll</div>
      <div>
        <h2>Smoth Scroll</h2>
        <p>
          This is lenis scroll. Lenis is a open source library built to
          standarize
        </p>
        <p>
          This is lenis scroll. Lenis is a open source library built to
          standarize
        </p>
        <p>
          This is lenis scroll. Lenis is a open source library built to
          standarize
        </p>
        <p>
          This is lenis scroll. Lenis is a open source library built to
          standarize
        </p>
        <p>
          This is lenis scroll. Lenis is a open source library built to
          standarize
        </p>
        <p>
          This is lenis scroll. Lenis is a open source library built to
          standarize
        </p>
        <p>
          This is lenis scroll. Lenis is a open source library built to
          standarize
        </p>
        <p>
          This is lenis scroll. Lenis is a open source library built to
          standarize
        </p>
        <p>
          This is lenis scroll. Lenis is a open source library built to
          standarize
        </p>
      </div>
    </>
  );
}
