"use client"

import { heroContent } from "@/data"
import { useInView } from "react-intersection-observer"
import { useEffect, useRef } from "react"
import VideoIcon from "./ui/VideoIcon"
import VideoDescription from "./ui/VideoDescription"
import Video from "./ui/Video"

const Hero = () => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1, // Adjust this value to your needs
    triggerOnce: false,
  })
  const headerRef = useRef(null)

  const setRefs = (node) => {
    inViewRef(node)
    headerRef.current = node
  }

  useEffect(() => {
    const header = headerRef.current
    if (header) {
      if (inView) {
        header.classList.add("in--view")
      } else {
        header.classList.remove("in--view")
      }
    }
  }, [inView])

  return (
    <header
      ref={setRefs}
      className="flex flex-col justify-center items-center text-center overflow-hidden max-w-[48rem] lg:h-[100dvh] xs:h-auto lg:max-h-[53.125rem] xs:max-h-none mx-auto sm:px-5 xs:px-4 sm:pb-5xl lg:pb-[12svh] xs:pb-[12.44rem] lg:pt-[14svh] sm:pt-[12.5rem] xs:pt-[9.75rem]"
    >
      <div className="flex justify-center gap-3 text-left text-xs lg:mb-10 sm:mb-[8.69rem] xs:mb-[4rem] sm:h-[15.6rem] sm:w-[14.5rem] xs:w-[9.875rem] xs:h-[10.625rem] relative">
        <div className="video-description md:flex flex-col gap-2 self-end xs:hidden sm:mb-[1.56rem] xs:mb-0 absolute sm:left-[-0.75rem] xs:left-[1rem] sm:translate-x-[-100%] sm:translate-y-0 xs:translate-y-[100%] xs:translate-x-[-50%] tracking-[-0.015rem] max-w-[11.0625rem] w-full text-gray-primary">
          <VideoDescription
            src={heroContent.videoIcon1}
            title={heroContent.videoTitle1}
            description={heroContent.videoDescription1}
          />
        </div>
        <div className="relative w-full z-[-1] self-stretch">
          <VideoIcon
            color="bg-white-background"
            className="absolute top-[1.38rem] right-[1.38rem] z-10"
          />
          <div className="absolute z-[-1] w-[270.259%] h-[250.8%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center blur">
            <img
              src="/assets/images/star-small.svg"
              alt="Hero"
              className="hero-star w-[66.507%] absolute h-[66.507%] object-contain"
              width={627}
              height={627}
            />
            <img
              src="/assets/images/star-big.svg"
              alt="Hero"
              className="hero-star w-full h-full object-contain"
              width={417}
              height={417}
            />
          </div>
          <Video
            className="w-full h-full object-cover rounded-[1.88rem]"
            src="/assets/video/Hero-1.mp4"
            poster="/assets/images/video-posters/6.webp"
          />
          <Video
            className="small-video w-full h-full object-cover absolute inset-x-0 inset-y-0 rounded-[1.88rem]"
            src="/assets/video/Hero-2.mp4"
            poster="/assets/images/video-posters/7.webp"
          />
        </div>
        <div className="video-description md:flex flex-col gap-2 xs:hidden mt-[1.56rem] right-[-3.38rem] absolute translate-x-[100%] tracking-[-0.015rem] max-w-[11.0625rem] text-gray-primary">
          <VideoDescription
            src={heroContent.videoIcon2}
            title={heroContent.videoTitle2}
            description={heroContent.videoDescription2}
          />
        </div>
      </div>
      <h1 className="text-headlines/h1 mb-6">{heroContent.title}</h1>
      <div className="text-body/large text-gray-quaternary max-w-[27.375rem]">
        {heroContent.description}
      </div>
      <ul className="hero-stats flex justify-center lg:my-8 sm:my-16 xs:my-8">
        {heroContent.stats.map((stat) => (
          <li key={stat.id} className="px-5 border-r border-gray-primary/10">
            {stat.value}
          </li>
        ))}
      </ul>
      <a href={heroContent.button.href} className="btn btn-secondary">
        {heroContent.button.text}
      </a>
    </header>
  )
}

export { Hero }
