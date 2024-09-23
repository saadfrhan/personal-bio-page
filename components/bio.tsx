import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoDocument, IoMail } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";

export default function Bio({
  name,
  bio,
  socialLinks,
  email,
  resumeLink,
  portfolioLink,
}: {
  name: string;
  bio: string;
  socialLinks: { name: string; url: string }[];
  email: string;
  resumeLink: string;
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
      <div className="flex flex-col max-w-sm mx-auto space-y-2">
      <h2 className="text-3xl font-bold text-heading tracking-tight flex max-sm:flex-col gap-2">
        Hey, <p>I am {name}. 👋</p>
      </h2>

          <p className="text-sm font-light">
            {bio}
          </p>
        <div className="flex flex-wrap gap-x-2 font-light">
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
