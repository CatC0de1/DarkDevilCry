import { cinzelDecorative } from "@/assets/fonts";
import Parallax from "@/components/parallax";

export default function About() {
  return (
    <div className="justify-items-center">

      <Parallax 
        title="About"
        imageSrc="/images/160821_3.png"
        imageAlt="Photo of Dark Devil Cry Members"
      />

      <h2 className={`${cinzelDecorative.className} mt-5`}>
        The Devils Shall Cry, Not Us!
      </h2>

    </div>
  );
}
