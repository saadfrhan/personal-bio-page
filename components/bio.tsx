import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoDocument, IoMail } from "react-icons/io5";
import { IconType } from "react-icons";
import { CgWebsite } from "react-icons/cg";

export default function Bio({
  name,
  bio,
  pic,
  socialLinks,
  email,
  resumeLink,
  availableForWork,
  languages,
  portfolioLink,
}: {
  name: string;
  bio: string[];
  pic: string;
  socialLinks: { name: string; url: string }[];
  email: string;
  resumeLink: string;
  availableForWork: boolean;
  languages: IconType[];
  portfolioLink: string;
}) {
  const icons: {
    [key: string]: JSX.Element;
  } = {
    GitHub: <BsGithub />,
    LinkedIn: <BsLinkedin />,
    Discord: <BsDiscord />,
  };

  return (
    <div className="flex items-start flex-col gap-y-2">
      <Avatar className="w-20 h-20 relative overflow-visible">
        <AvatarImage src={pic} alt={name} className="z-10 rounded-full" />
        <div
          className={`flex items-center justify-center gap-x-1 p-1 rounded-full absolute bottom-0.5 w-5 h-5 right-0.5 ${
            availableForWork
              ? "bg-green-500"
              : "border-4 border-gray-600 bg-gray-400"
          } z-20`}
        ></div>
        <AvatarFallback className="z-10">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col max-w-sm mx-auto space-y-2">
        <p className="font-semibold items-center justify-between text-lg flex gap-x-1">
          {name}
          <div className="flex gap-x-1 flex-wrap">
            {languages.map((Lang, key) => (
              <Lang key={key} />
            ))}
          </div>
        </p>

        {bio.map((b, key) => (
          <p key={key} className="text-sm">
            {b}
          </p>
        ))}
        <div className="flex flex-wrap gap-x-2">
          {socialLinks.map((link, key) => (
            <a
              href={link.url}
              key={key}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1"
            >
              {icons[link.name]} {link.name}
            </a>
          ))}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1"
          >
            <IoDocument /> Resume
          </a>
          <a
            href={portfolioLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1"
          >
            <CgWebsite /> Portfolio
          </a>
          <p className="flex items-center gap-x-1">
            <IoMail /> {email}
          </p>
        </div>
      </div>
    </div>
  );
}
