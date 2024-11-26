import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaLinkedin,
  FaLinkedinIn,
  FaGithub,
  FaGithubAlt,
  FaLink,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/naman-doshi-007/",
    icon: <FaLinkedinIn />,
  },
  { href: "https://github.com/DoshiNaman", icon: <FaGithub /> },
  { href: "https://naman-doshi.vercel.app/", icon: <FaLink /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-[#dfdff0]/[.8]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left transition-colors duration-500 ease-in-out hover:text-white">
          ©Naman 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfdff0]/[.8] transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right hover:text-white transition-colors duration-500 ease-in-out"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
