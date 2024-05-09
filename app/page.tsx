import Bio from "@/components/bio";
import { SiJavascript, SiPython, SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2">
      <Bio
        name="Saad Farhan"
        bio="I like Next.js. Currently building Next.js projects, exploring FastAPI and CLI stuff. Always up for learning new things!"
        pic="https://github.com/saadfrhan.png"
        email="saadfarhan347@gmail.com"
        socialLinks={[
          {
            name: "GitHub",
            url: "https://github.com/saadfrhan",
          },
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/saadfarhan/",
          },
          {
            name: "Discord",
            url: "https://discordapp.com/users/saadfrhan",
          },
        ]}
        availableForWork={false}
        resumeLink="https://www.canva.com/design/DAFb3337tIA/nh3rOWE5EiM7U2QB5yQK5A/edit"
        languages={[SiJavascript, SiTypescript, SiPython]}
        portfolioLink="https://saadfarhan.vercel.app"
        location="Karachi, PK"
      />
    </div>
  );
}
