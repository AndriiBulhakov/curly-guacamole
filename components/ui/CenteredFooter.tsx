import { ReactNode } from "react"
import { FooterCopyright } from "./FooterCopyright"
import { FooterIconList } from "./FooterIconList"
import { footerLinks } from "@/data"

type ICenteredFooterProps = {
  logo: ReactNode
  iconList: ReactNode
}

type FooterLink = {
  href: string
  name: string
}

type FooterLinks = {
  Products: FooterLink[]
  Resources: FooterLink[]
  Other: FooterLink[]
}

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="bg-white-background rounded-[2rem] md:p-12 xs:p-8 flex justify-between flex-wrap xl:gap-0 sm:gap-24 xs:gap-12">
    <div className="flex flex-col lg:gap-20 sm:gap-14 xs:gap-6 max-w-[18.7rem] w-full">
      <a
        href="/"
        className="without-underline sm:w-[18.7rem] sm:h-11 xs:w-[15.3rem] xs:h-[2.25rem]"
      >
        {props.logo}
      </a>
      <a
        href="https://www.producthunt.com/posts/interview-copilot-by-final-round-ai"
        target="_blank"
        id="elzFsCrTr"
        className="product-hunt-badge"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=interview-copilot-by-final-round-ai&theme=light"
          alt="Product Hunt Badge"
          width="250"
          height="54"
          loading="lazy"
        />
      </a>
    </div>
    <div className="max-w-[46.1rem] w-full">
      <nav className="flex items-start justify-between md:flex-row xs:flex-col md:gap-0 xs:gap-16 xl:px-8">
        {(Object.keys(footerLinks) as Array<keyof FooterLinks>).map((key) => (
          <ul key={key} className="flex flex-col justify-center gap-3">
            <li>{key}</li>
            {footerLinks[key].map((link: FooterLink) => (
              <li key={link.href}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        ))}
      </nav>
      <div className="lg:mt-32 md:mt-16 xs:mt-10 lg:ml-4 xl:mb-[-2.25rem]">
        <FooterIconList>{props.iconList}</FooterIconList>
      </div>
    </div>

    <div className="w-full text-body/small">
      <FooterCopyright />
    </div>
  </div>
)

export { CenteredFooter }
