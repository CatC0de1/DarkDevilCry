import Link from "next/link";

import "@/assets/styles/cinematic.css";
import "@/assets/styles/button.css";
import { cinzelDecorative } from "@/assets/fonts";

export default function Home() {
  return (
    <main>
      <div className="fixed h-screen w-screen bg-[#000] overflow-hidden">

        <svg xmlns="http://www.w3.org/1999/xhtml" className="absolute w-full h-full">
          <defs>
            <mask id="mask">
              <rect width="100%" height="100%" fill="black" />

              <svg
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
              
                <text
                  x="50%" y="20%"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white"
                  className="text-[56px] font-bold lg:translate-y-[5%]"
                >
                  Welcome to
                </text>

                <text
                  x="50%" y="35%"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white"
                  className={`${cinzelDecorative.className} text-[220px] lg:translate-y-[5%]`}
                >
                  DARK DEVIL CRY
                </text>

                <text
                  x="50%" y="55%"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white"
                  className="text-[85px] lg:translate-y-[5%]"
                >
                  Powerfull and solid guild in Toram Online
                </text>

              </svg>

            </mask>
          </defs>
        </svg>

        <div className="cinematic absolute inset-0 w-full h-full">
          <video preload="none" autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/0827.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

      <div 
        className="
			    fixed bottom-[15%] left-1/2 transform -translate-x-1/2 
    			flex flex-col lg:flex-row items-center justify-center gap-5
	    		w-[45%] md:w-[30%] md:gap-10 lg:w-[35%]
          mobile-landscape-home
        "
      >
        <Link href="/gallery" className="basis-1/2 w-full button">
          <span>
            See Our Journey
          </span>
        </Link>
        <Link href="/about" className="basis-1/2 w-full button">
          <span>
            See About Us
          </span>
        </Link>
      </div>

    </main>
  );
}
