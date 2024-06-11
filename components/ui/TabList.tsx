import { useState } from "react"

type TabTypes = {
  tabContent: any[]
  activeTab: number
  setActiveTab: (index: number) => void
}

function TabList({ tabContent, activeTab, setActiveTab }: TabTypes) {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  let buttonIcon = showDropdown ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M5.5 15L12.5 8L19.5 15"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M19.5 8L12.5 15L5.5 8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <>
      <div className="tab-list lg:flex xs:hidden lg:justify-center xs:justify-start gap-2 sm:mb-8 xs:mb-6 overflow-x-auto sm:px-5 xs:px-4">
        {tabContent.map((tab, index) => (
          <button
            key={index}
            className={`py-5 px-7 rounded-[2.5rem] text-nowrap outline-none border-none ${
              index === activeTab
                ? "bg-red-primary text-white-background"
                : "bg-white-background text-gray-primary"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="dropdown lg:hidden xs:block xs:mb-6 sm:mb-12 relative z-10 sm:w-auto xs:w-full sm:px-5 xs:px-4">
        <button
          className="bg-red-primary text-white-primary py-5 px-7 rounded-[2.5rem] outline-none border-none min-w-[14.9rem] sm:w-auto xs:w-full flex gap-2 justify-center"
          onClick={toggleDropdown}
        >
          {tabContent[activeTab].title} {buttonIcon}
        </button>
        <div
          className={`dropdown-content absolute sm:left-0 sm:right-0 xs:left-5 xs:right-5 top-[100%] pt-6 flex flex-col gap-1 transition-opacity duration-300 ${
            showDropdown ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="p-[0.63rem] bg-white-background rounded-2xl overflow-hidden w-full">
            {tabContent.map((tab, index) => (
              <button
                key={index}
                className={`py-4 px-4 rounded text-sm w-full text-gray-primary text-left ${
                  index === activeTab
                    ? "bg-red-primary bg-opacity-15"
                    : "bg-white-background"
                }`}
                onClick={() => {
                  setActiveTab(index)
                  toggleDropdown()
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TabList
