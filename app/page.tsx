import Bio from "@/components/bio";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh p-2">
      <Bio
        name="Saad Farhan"
        bio={[
          "With 5 years of development experience, I specialize in cutting-edge technologies and frameworks. Currently, I'm building a Pomodoro productivity app, adding features like customizable timers, task organization, and progress tracking.",

          "Additionally, as a Teaching Assistant in AI & Artificial Intelligence, I'm passionate about sharing knowledge and empowering students. Proficient in Next.js, Node.js, TypeScript, and Python.",
        ]}
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
        resumeLink="https://www.canva.com/design/DAFb3337tIA/nh3rOWE5EiM7U2QB5yQK5A/edit"
        portfolioLink="https://saadfarhan.vercel.app"
      />
    </div>
  );
}
