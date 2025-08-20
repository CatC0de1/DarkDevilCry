import Image from "next/image";
import { cinzelDecorative } from "@/assets/fonts";

export default function Home() {
  return (
    <div className="justify-items-center mt-20 ">
      <h1 className={`${cinzelDecorative.className}`}>
        Dark Devil Cry
      </h1>
    </div>
  );
}
