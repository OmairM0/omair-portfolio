import { Facebook, Github, Linkedin, Send } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center text-center">
        <div>
          <Image
            className="dark:invert rounded-full h-[200px] w-[200px]"
            src="/omair.jpg"
            alt="Omair Mohammed"
            width={200}
            height={200}
          />
        </div>
        <div>
          Hello, I&apos;m <b>Omair Mohammed</b>, a Front-End Developer
          passionate about crafting interactive and user-friendly web
          experiences.
        </div>
        <div className="flex gap-4">
          <a href="http://facebook.com/omairm0">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/in/omairm0">
            <Linkedin />
          </a>
          <a href="https://t.me/Xz_Ye">
            <Send />
          </a>
          <a href="https://github.com/OmairM0/">
            <Github />
          </a>
        </div>
      </main>
    </div>
  );
}
