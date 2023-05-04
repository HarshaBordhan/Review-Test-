/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Photos({
  href,
  alt,
  src1,
  src2,
  src3,
  className,
  title,
  old,
  price,
}) {
  return (
    <div className={`${className}`}>
      <Link href={href}>
        <div className="image-sizer relative hover:border-black rounded-3xl w-full h-0 pt-[150%]">
          <img
            src={src1}
            alt={alt}
            className="image1 imgHover rounded-3xl absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-0"
          />
          <img
            src={src2}
            alt={alt}
            className="image2 imgHover rounded-3xl absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-0"
          />
          <img
            src={src3}
            alt={alt}
            className="z-[1] image3 rounded-3xl absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full"
          />
        </div>
        <div className="info flex justify-between text-[1.375rem] mt-4 text-left">
          <div>
            <div className="new text-[#0fa958] font-normal mb-0">{old}</div>
            <span className="title font-bold">{title}</span>
          </div>
          <span>{price}</span>
        </div>
      </Link>
    </div>
  );
}
