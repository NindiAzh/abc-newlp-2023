import Link from "next/link";

export default function Button({ children }: { children?: string }) {
  return (
    <Link href='/contact' legacyBehavior>
      <a className="rounded-[10px] text-white font-semibold bg-grey-900 text-base px-[25px] py-[14px] cursor-pointer">
        {children}
      </a>
    </Link>
  );
}
