import Bio from "@/components/bio";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh p-2">
      <Bio
        name="Saad"
        bio="Fullstack Developer and Teacher Assistant in Pakistan's largest IT class, skilled in Next.js, Node.js, TypeScript, and Python for building modern web apps."
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
        resumeLink="https://docs.google.com/document/d/1pF2V1SJlKJWsIUARQiJ6rf6X-uFd3kVxMd8ZS30ruZ4/edit?usp=sharing"
        portfolioLink="https://saadfarhan.vercel.app"
      />
    </div>
  );
}
