import "@/assets/styles/cinematic.css";
import { cinzelDecorative } from "@/assets/fonts";

export default function Home() {
  return (
      <div className="fixed h-screen w-screen bg-black overflow-hidden">

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
                  x="50%" y="30%"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white"
                  className="text-[56px] font-bold"
                >
                  Welcome to
                </text>

                <text
                  x="50%" y="45%"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white"
                  className={`${cinzelDecorative.className} text-[145px]`}
                  // style={{ fontFamily: cinzelDecorative.style.fontFamily, fontSize: "120px" }}
                >
                  DARK DEVIL CRY
                </text>

                <text
                  x="50%" y="65%"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white"
                  className="text-[90px]"
                >
                  Powerfull and solid guild in Toram Online
                </text>

              </svg>

            </mask>
          </defs>
        </svg>

        <div className="cinematic absolute inset-0 w-full h-full">
          <video preload="none" autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/0822.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

  );
}
