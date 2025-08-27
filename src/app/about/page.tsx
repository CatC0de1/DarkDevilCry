import { cinzelDecorative } from "@/assets/fonts";

export default function About() {
  return (
    <div className="justify-items-center mt-25">
      <h1 className={`${cinzelDecorative.className}`}>
        About
      </h1>

      <h2 className={`${cinzelDecorative.className} mt-5`}>
        The Devils Shall Cry, Not Us!
      </h2>
    </div>
  );
}
