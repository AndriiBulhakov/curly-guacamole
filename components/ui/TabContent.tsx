import React, { useEffect, useState, useRef } from "react"
import tabStyles from "./TabContent.module.css"
import VideoIcon from "./VideoIcon"
import Video from "./Video"
import SplitType from "split-type"
import gsap from "gsap"
import { SteppedEase } from "gsap"

type TabContentProps = {
  tabs: {
    interviewer: {
      video: string
      messages: Message[]
    }
    copilot: {
      messages: Message[]
    }
    you: {
      messages: Message[]
    }
  }[]
  activeTab: number
}

type Message = {
  text: string
  time: string
  list?: string[]
}

const TabContent: React.FC<TabContentProps> = ({ tabs, activeTab }) => {
  const [video, setVideo] = useState<string>(tabs[activeTab].interviewer.video)
  const [videoPlayed, setVideoPlayed] = useState(false)
  const copilotRef = useRef<HTMLUListElement>(null)
  const [screenWidth, setScreenWidth] = useState<number>(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    const debounceResize = debounce(handleResize, 200)
    window.addEventListener("resize", debounceResize)

    return () => {
      window.removeEventListener("resize", debounceResize)
    }
  }, [])

  useEffect(() => {
    setVideo(tabs[activeTab].interviewer.video)
    setVideoPlayed(false)
  }, [activeTab, tabs])

  useEffect(() => {
    const interviewerItems = gsap.utils.toArray<HTMLElement>(".interviewer li")
    const youItems = gsap.utils.toArray<HTMLElement>(".you li")
    const copilotListItems =
      gsap.utils.toArray<HTMLElement>(".copilot>div>ul>li")
    const copilotItems = gsap.utils.toArray<HTMLElement>(
      ".copilot .copilot-message"
    )
    const mobileBlocks = gsap.utils.toArray<HTMLElement>(
      ".interviewer, .copilot"
    )

    const text = new SplitType([copilotItems], { types: "words" })

    gsap.set([interviewerItems, youItems], {
      autoAlpha: 0,
      y: 20,
    })

    gsap.set(copilotListItems, {
      autoAlpha: 0,
      display: "none",
    })

    gsap.set(text.words, {
      autoAlpha: 0,
      display: "none",
    })

    gsap.set(mobileBlocks, {
      x: 0,
    })

    const timeline = gsap.timeline({ defaults: { ease: "power1.inOut" } })

    if (screenWidth < 767) {
      timeline
        .to(interviewerItems, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.3,
          delay: 0.5,
        })
        .to(mobileBlocks, { x: "-100%", delay: 1 }, "-=0.2")
        .to(text.words, {
          autoAlpha: 1,
          display: "inline-block",
          ease: SteppedEase.config(10),
          duration: 0.3,
          delay: 0.5,
          stagger: { amount: 1 },
          onStart: () => {
            gsap.to(copilotListItems, {
              autoAlpha: 1,
              display: "inline-table",
              duration: 0.1,
              delay: 0.1,
              stagger: 0.3,
            })
          },
        })
    } else {
      timeline
        .to(interviewerItems, { autoAlpha: 1, y: 0, stagger: 0.3, delay: 0.5 })
        .to(youItems, { autoAlpha: 1, y: 0, stagger: 0.3 }, "-=0.2")
        .to(text.words, {
          autoAlpha: 1,
          display: "inline-block",
          ease: SteppedEase.config(10),
          duration: 0.3,
          delay: 0.7,
          stagger: { amount: 1 },
          onStart: () => {
            gsap.to(copilotListItems, {
              autoAlpha: 1,
              display: "inline-table",
              duration: 0.1,
              delay: 0.1,
              stagger: 0.3,
            })
          },
        })
    }

    return () => {
      timeline.kill()
    }
  }, [activeTab, tabs, screenWidth])

  return (
    <div className="tab-list w-full px-5" key={activeTab}>
      <div
        className={`flex justify-between md:gap-2 xs:gap-0 lg:min-h-[42.875rem] ${tabStyles["tab-content"]} overflow-hidden relative`}
      >
        <div className="interviewer flex lg:basis-[25.614%] md:basis-[37.642%] md:min-w-[auto] xs:min-w-[100%]">
          <span className="relative">
            Interviewer
            <VideoIcon
              color="bg-gray-primary"
              className="absolute right-[-0.5rem] top-[50%] translate-y-[-50%] translate-x-[100%]"
            />
          </span>

          <div>
            <ul>
              <li>
                <Video src={video} key={video} className="w-full" />
              </li>
              {tabs[activeTab].interviewer.messages.map(
                (message: Message, i: number) => (
                  <li key={i + 1} className="relative">
                    <span>{message.text}</span>
                    <span className={tabStyles["message-time"]}>
                      {message.time}
                    </span>
                    {i === tabs[activeTab].interviewer.messages.length - 1 && (
                      <img
                        src="/assets/images/tail.png"
                        alt="Arrow"
                        className="absolute bottom-0 left-[-0.25rem] w-5 h-[0.875rem]"
                      />
                    )}
                  </li>
                )
              )}
              <div className="flex flex-raw gap-2 absolute left-[0.63rem] bottom-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="animate-spin-slow"
                >
                  <path
                    d="M8.29685 2.18341C10.1053 1.78938 11.9943 2.03457 13.6422 2.87722C15.2901 3.71987 16.5949 5.10784 17.3341 6.80463C18.0734 8.50142 18.2015 10.402 17.6965 12.1827C17.1915 13.9633 16.0848 15.5137 14.5648 16.5698C13.0448 17.6259 11.2057 18.1223 9.36079 17.9744C7.51587 17.8265 5.7793 17.0435 4.44697 15.7588C3.11465 14.4741 2.269 12.7671 2.05411 10.9288C1.83923 9.09048 2.26841 7.23452 3.26852 5.67715"
                    stroke="#1C1D20"
                    strokeOpacity="0.3"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-gray-quaternary text-[0.875rem]">
                  Transcribing...
                </p>
              </div>
            </ul>
          </div>
        </div>
        <div className="copilot flex lg:basis-[46.503%] md:basis-[61.222%] md:min-w-[auto] xs:min-w-[100%]">
          <span>Interview Copilot®️</span>

          <div>
            {" "}
            <ul ref={copilotRef}>
              {tabs[activeTab].copilot.messages.map(
                (message: Message, i: number) => (
                  <li key={i + 1} className="relative">
                    <div>
                      <span
                        className={`copilot-message ${tabStyles["copilot-message"]}`}
                      >
                        {message.text}
                      </span>
                      {message.list && (
                        <ul
                          className={`flex flex-col gap-6 mt-6 ${tabStyles["message-list"]}`}
                        >
                          {message.list.map((item: string, j: number) => (
                            <li key={j + 1}>
                              <span className="copilot-message">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <span className={tabStyles["message-time"]}>
                      {message.time}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="you lg:flex xs:hidden basis-[25.614%]">
          <span>You</span>
          <div>
            <ul>
              {tabs[activeTab].you.messages.map(
                (message: Message, i: number) => (
                  <li key={i + 1} className="relative z-1">
                    {i === tabs[activeTab].you.messages.length - 1 && (
                      <img
                        src="/assets/images/red-tail.png"
                        alt="Arrow"
                        className="absolute z-[-2] bottom-0 right-[-0.25rem] w-5 h-[0.875rem]"
                      />
                    )}
                    <span>{message.text}</span>
                    <span className={tabStyles["message-time"]}>
                      {message.time}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

export default TabContent
