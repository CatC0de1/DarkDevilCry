import Link from "next/link";
import { cinzelDecorative } from "@/assets/fonts";

function Navbar() {

  return (
    <nav className="w-[60%] fixed top-0 left-1/2 -translate-x-1/2 bg-black">
      <div className="flex w-[100%] flex-row items-center py-3 px-9 shadow-md">
        <h1 className="basis-3/5">
          <Link href="/" className={`${cinzelDecorative.className} text-lg`}>Dark Devil Cry</Link>
        </h1>
        <ul className="basis-2/5 flex flex-row justify-between w-[100%]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;