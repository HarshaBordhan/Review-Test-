import Link from "next/link";

export default function Image({ hoverText, children, className }) {
  return (
    <div className={`pr-[24px] slide`}>
      <Link href="#">
        <div className="hover-text">{hoverText}</div>
        <div className="">{children}</div>
      </Link>
    </div>
  );
}
