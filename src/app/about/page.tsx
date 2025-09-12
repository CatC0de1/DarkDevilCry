import { cinzelDecorative } from "@/assets/fonts";
import Parallax from "@/components/parallax";
import Profil from "@/components/profil";

export default function About() {
  return (
    <div className="justify-items-center">

      <Parallax 
        title="About"
        imageSrc="/images/160821_3.png"
        imageAlt="Photo of Dark Devil Cry Members"
      />

      <main>
        <h2 className={`${cinzelDecorative.className} mt-5 text-center`}>
          The Devils Shall Cry, Not Us!
        </h2>
        
        <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-9">
          <Profil
            imageSrc="/images/160821_3.png"
            delay={0.2}
            ign="Zulyan I"
            role="Guild Master"
          />
                    <Profil
            imageSrc="/images/160821_3.png"
            delay={0.2}
            ign="Zulyan I"
            role="Guild Master"
          />
                    <Profil
            imageSrc="/images/160821_3.png"
            delay={0.2}
            ign="Zulyan I"
            role="Guild Master"
          />
        </div>

      </main>

    </div>
  );
}
