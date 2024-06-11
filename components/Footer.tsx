import { CenteredFooter } from "./ui/CenteredFooter"
import { Logo } from "./ui/Logo"
import { footerSocials } from "@/data"
import Image from "next/image"

const Footer = () => (
  <footer className="sm:px-5 sm:pb-5 xs:px-4 xs:pb-4">
    <CenteredFooter
      logo={<Logo type="footer" />}
      iconList={
        <>
          {footerSocials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className="sm:w-[8.5rem] sm:h-[8.5rem] xs:w-[4.20925rem] xs:h-[4.20925rem] rounded-full bg-[#E7E3FF] overflow-hidden without-underline flex items-center justify-center"
              target="_blank"
            >
              <Image
                src={social.icon}
                loading="lazy"
                alt={social.name}
                width={136}
                height={136}
                className="sm:max-w-10 sm:max-h-10 xs:max-w-6 xs:max-h-6"
              />
            </a>
          ))}
        </>
      }
    ></CenteredFooter>
  </footer>
)

export { Footer }
