import Image from "next/image";
import Link from "next/link";

export default function Help({ heading, description, img }) {
  return (
    <div className="w-full flex gap-6 max-w-[720px] mx-auto my-auto">
      <span className="w-[80px] h-[80px]">
        <Image
          src={img}
          alt="divlogo"
          className="w-auto h-auto object-cover inset-0"
          width={100}
          height={100}
        />
      </span>

      <div className="flex flex-col justify-between gap-4 text-2xl font-light">
        <h3 className="font-bold">{heading}</h3>
        <p>{description}</p>
        <Link className="text-xl text-[#4C5FD5] hover:underline" href="#">
          Learn more &#8594;
        </Link>
      </div>
    </div>
  );
}
