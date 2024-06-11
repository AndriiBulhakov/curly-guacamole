export const navLinks = [
  {
    id: 1,
    name: "Interview Copilot®️",
    href: "/#interview-copilot",
    icon: true,
  },
  {
    id: 2,
    name: "AI Resume Builder",
    href: "/#ai-resume-builder",
    icon: false,
  },
  {
    id: 3,
    name: "Question Bank",
    href: "/#question-bank",
    icon: false,
  },
  {
    id: 4,
    name: "Testimonials",
    href: "/#testimonials",
    icon: false,
  },
  {
    id: 5,
    name: "Scholarships",
    href: "/#scholarships",
    icon: false,
  },
  {
    id: 6,
    name: "Log in",
    href: "https://accounts.finalroundai.com/sign-in",
    icon: false,
    mobileOnly: true,
  },
  {
    id: 7,
    name: "Get Started Free",
    href: "https://accounts.finalroundai.com/sign-up",
    icon: false,
    mobileOnly: true,
    type: "button",
  },
]

export const heroContent = {
  title: "Crushing job interviews with AI. Meet your Interview Copilot®",
  description:
    "Interview Copilot®️ generating actionable guidance for interviews in real-time",
  stats: [
    {
      id: 1,
      value: "250K+ Offers Received",
    },
    {
      id: 2,
      value: "1.2M+ Interviews Aced",
    },
  ],
  button: {
    text: "Unlock AI Superpower",
    href: "https://accounts.finalroundai.com/sign-up",
  },
  videoTitle1: "Generating answer",
  videoTitle2: "Transcribing",
  videoDescription1:
    "Last year, during a particularly challenging project at work, our team was facing tight deadlines and mounting pressure.",
  videoDescription2:
    "Describe a time when you used your leadership skills to motivate your team or colleagues?",
  videoIcon1: "/assets/images/generating-answer.png",
  videoIcon2: "/assets/images/transcribing.svg",
}

export const tabContent = [
  {
    title: "Software Engineering",
    interviewer: {
      video: "/assets/video/Chat-1.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        { text: "Let's start from some basics.", time: "12:55:10" },
        { text: "Hhhhhm...", time: "12:55:20" },
        {
          text: "Describe a time when you used your leadership skills to motivate your team.",
          time: "12:55:30",
        },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "During a particularly challenging project at work, our team was facing tight deadlines and mounting pressure. It was a critical project for the company, and tensions were running high. Sensing the need for motivation and cohesion, I decided to step up and utilize my leadership skills to rally the team.",
          time: "12:54:59",
        },
        {
          text: "Throughout the project, I made sure to lead by example, demonstrating resilience, determination, and a willingness to roll up my sleeves and tackle challenges alongside my team. I provided continuous support and guidance, offering constructive feedback and celebrating small victories along the way. During my time as the Lead Designer, I used my leadership skills to motivate my team and colleagues in several instances:",
          list: [
            "I implemented a collaborative work environment, where all team members felt valued and heard.",
            "I developed and communicated a clear design vision and strategy aligned with Google's.  This is a great question indeed. So I think...",
          ],
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hi", time: "12:54:59" },
        {
          text: "This is a great question indeed. So I think the best thing about me is that I’m funny and inspire people.",
          time: "12:55:15",
        },
      ],
      icon: false,
    },
  },
  {
    title: "Product Management",
    interviewer: {
      video: "/assets/video/Chat-3.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        { text: "Let's start from some basics.", time: "12:55:10" },
        { text: "Hhhhhm...", time: "12:55:20" },
        {
          text: "Describe a time when you used your leadership skills to motivate your team.",
          time: "12:55:30",
        },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "I have a Bachelor's degree in Marketing and have been working in the marketing field for the past five years. I started my career as a marketing assistant at Google, where I gained experience in various aspects of marketing, including social media management, and content creation.",
          time: "12:54:59",
        },
        {
          text: "One campaign that comes to mind is a social media campaign I led for GoogleMeets. We identified an opportunity to target a specific demographic on YouTube, so I developed a creative strategy centered around engaging visuals and user-generated content. We launched the campaign with a series of sponsored posts and influencer partnerships, which resulted in a 30% increase in brand awareness and a 20% lift in sales within the first month.I attribute the success of this campaign to our data-driven approach and focus on building authentic connections with our target audience.I'm a firm believer in lifelong learning, so I make it a priority to stay informed about industry trends and emerging technologies. I regularly attend...",
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hi!", time: "12:54:59" },
        {
          text: "This is a great question indeed. So I think the best thing about me is that I’m funny and inspire people.",
          time: "12:55:15",
        },
      ],
      icon: false,
    },
  },
  {
    title: "Consulting",
    interviewer: {
      video: "/assets/video/Chat-6.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        { text: "Let's start from some basics.", time: "12:55:10" },
        { text: "Hhhhhm...", time: "12:55:20" },
        {
          text: "Describe a time when you used your leadership skills to motivate your team.",
          time: "12:55:30",
        },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "One project I managed was the development of a customer relationship management (CRM) platform for a software company. To ensure its success, I started by conducting thorough market research and user interviews to understand the needs and pain points of our target audience.",
          time: "12:54:59",
        },
        {
          text: "Based on this feedback, I defined a clear product roadmap and prioritized features that would provide the most value to our users. Throughout the development process, I maintained open communication with cross-functional teams, ensuring alignment on goals and timelines. After launch, I monitored user feedback and usage metrics closely, iteratively improving the product based on insights gathered from real-world usage. I possessed a combination of strategic vision, strong communication skills, and the ability to collaborate effectively with cross-functional teams. Regular communication and collaboration are essential for keeping everyone on the same page and ensuring that decisions are made with the best interests of our users and the business in mind. Additionally, I was proactive in problem solving...",
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hello.", time: "12:54:59" },
        {
          text: "Nice to meet you too. Sure, I can you tell you about a product I've managed for the last year.",
          time: "12:55:15",
        },
      ],
      icon: false,
    },
  },
  {
    title: "Marketing",
    interviewer: {
      video: "/assets/video/Chat-2.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        {
          text: "Let's start by discussing your approach to product management.",
          time: "12:55:10",
        },
        { text: "...and the impact it had on the business?", time: "12:55:20" },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "My team utilized data-driven insights to identify key demographics and psychographics of our target audience. This allowed us to create highly personalized ad content that resonated with potential customers.",
          time: "12:54:59",
        },
        {
          text: "This holistic approach not only increased web traffic by 40% and sales by 25% over three months but also strengthened our brand presence and customer base. The campaign's success was underpinned by a strategic blend of technology, creativity, and data analytics, ensuring every marketing dollar spent contributed to measurable returns.",
          time: "12:55:15",
        },
        {
          text: "Recognizing the importance of engaging content, we crafted a content calendar that included a mix of educational, informational, and entertaining posts tailored to the interests of our audience. Implementation: We used rich media formats such as videos, infographics, and interactive posts to increase user interaction. Regular posting and responding to comments and messages fostered a lively community. Our social media engagement rates soared, leading to increased brand...",
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hello...", time: "12:54:59" },
        {
          text: "Sure, I managed a digital marketing campaign that increased our web traffic by 40%...",
          time: "12:55:15",
        },
      ],
      icon: false,
    },
  },
  {
    title: "Finance",
    interviewer: {
      video: "/assets/video/Chat-4.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        {
          text: "Let's start by discussing the basic questions? So, yeap...",
          time: "12:55:10",
        },
        {
          text: "How do you manage financial risks? Tell me what an effective financial risk management is for you?",
          time: "12:55:20",
        },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "My approach begins with a thorough analysis of the financial environment and internal risk factors. This involves evaluating market conditions, credit risk, and operational risks. I use various financial tools and models, such as Value at Risk (VaR) and stress testing, to predict and quantify risk levels.",
          time: "12:54:59",
        },
        {
          text: "Once risks are identified, I develop a comprehensive risk management strategy tailored to the organization's specific needs. This includes setting risk limits and controls that align with the company's risk appetite and business objectives. I also advocate for a strong culture of risk awareness throughout the organization, ensuring that all team members understand their roles in managing risk.To manage market risk, I employ techniques such as hedging, using derivatives like futures and options to offset potential losses. For credit risk, it involves conducting rigorous credit assessments and setting appropriate credit limits for customers.Liquidity risk is another critical area, managed by maintaining sufficient cash reserves and ensuring access to credit. Operational risks are mitigated by improving internal processes and controls...",
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hi!", time: "12:54:59" },
        {
          text: "Effective financial risk management is integral to maintaining the stability and profitability, I guess...",
          time: "12:55:15",
        },
      ],
      icon: false,
    },
  },
]

export const companies = [
  {
    name: "Airbnb",
    logo: "/assets/images/companies/airbnb_logo.svg",
  },
  {
    name: "Bain & Company",
    logo: "/assets/images/companies/bain__company_logo.svg",
  },
  {
    name: "Boston Consulting Group (BCG)",
    logo: "/assets/images/companies/boston_consulting_group_bcg_logo.svg",
  },
  {
    name: "Canva",
    logo: "/assets/images/companies/canva_logo.svg",
  },
  {
    name: "Cisco",
    logo: "/assets/images/companies/cisco_id1sjFyzeF.svg",
  },
  {
    name: "Citicom",
    logo: "/assets/images/companies/citicom_logo.svg",
  },
  {
    name: "Deloitte",
    logo: "/assets/images/companies/deloitte_logo.svg",
  },
  {
    name: "Discord",
    logo: "/assets/images/companies/discord_logo.svg",
  },
  {
    name: "Expedia Group",
    logo: "/assets/images/companies/expedia_group_logo.svg",
  },
  {
    name: "EY",
    logo: "/assets/images/companies/ey_logo.svg",
  },
  {
    name: "Goldman Sachs",
    logo: "/assets/images/companies/goldman_sachs_logo.svg",
  },
  {
    name: "Instacart",
    logo: "/assets/images/companies/instacart_logo.svg",
  },
  {
    name: "JP Morgan",
    logo: "/assets/images/companies/jp_morgan_logo.svg",
  },
  {
    name: "KPMG",
    logo: "/assets/images/companies/kpmg_logo.svg",
  },
  {
    name: "Lockheed Martin",
    logo: "/assets/images/companies/lockheed_martin_logo.svg",
  },
  {
    name: "McKinsey & Company",
    logo: "/assets/images/companies/mckinsey__company_logo.svg",
  },
  {
    name: "Morgan Stanley",
    logo: "/assets/images/companies/morgan_stanley_logo.svg",
  },
  {
    name: "PwC",
    logo: "/assets/images/companies/pwc_logo.svg",
  },
  {
    name: "Stripe",
    logo: "/assets/images/companies/stripe_logo.svg",
  },
  {
    name: "Tesla",
    logo: "/assets/images/companies/tesla_logo.svg",
  },
  {
    name: "TikTok",
    logo: "/assets/images/companies/tiktok_logo.svg",
  },
  {
    name: "Twitch",
    logo: "/assets/images/companies/twitch_logo.svg",
  },
  {
    name: "UBS",
    logo: "/assets/images/companies/ubs_logo.svg",
  },
]

export const featureContent = [
  {
    image: "/assets/images/features/Icons.png",
    title: "Plan ahead",
    description:
      "Master your Resume, create Cover Letter, test yourself with the help of Mock Interview.",
  },
  {
    image: "/assets/images/features/Icons-1.png",
    title: "Ace an interview",
    description:
      "Feel confident with the help of Interview and Coding Copilot®, with real-time transcription and personalised support.",
  },
  {
    image: "/assets/images/features/Icons-2.png",
    title: "Stay in touch",
    description:
      "Stay in a loop by auto followup, go through the summary of an interview and negotiate on the salary.",
  },
]

export const resumeBuilderContent = [
  {
    title: "ATS Optimized",
    description:
      "Designed to ensure ATS optimization so your credentials stand out to top employers and pass machine screening process.",
  },
  {
    title: "Personalization with AI",
    description:
      "Customize your document with intelligent suggestions tailored to your career goals. Stand out from the crowd with a resume that's uniquely yours, yet professionally appealing.",
  },
]

export const mockInterviewContent = [
  {
    title: "Industry-Specific Scenarios",
    description:
      "Get a competitive edge by practicing with questions designed to reflect the latest industry trends and expectations.",
    image: "/images/ats-optimized.svg",
  },
  {
    title: "Real-Time Feedback",
    description:
      "Facilitates accessibility by allowing individuals with hearing impairments to follow along with spoken content in real-time, enhancing inclusivity and understanding.",
    image: "/images/personalization-with-ai.svg",
  },
]

export const questionBankContent = [
  {
    title: "Verified Question Database",
    description:
      "featuring real interview questions collected directly from recruiters and successful candidates. Ensure you’re prepared for what employers really ask, backed by insights from industry experts.",
    image: "/images/ats-optimized.svg",
  },
  {
    title: "AI-enabled best practices",
    description:
      "Get optimal answers for each question in our verified database. Get expert-level guidance on crafting responses that align with industry standards and impress your interviewers.",
    image: "/images/personalization-with-ai.svg",
  },
]

export const interviewReportContent = [
  {
    title: "Detailed Performance Analysis",
    description:
      "Discover your strengths and areas for improvement with metrics and feedback that help you refine your approach.",
  },
  {
    title: "Customized Improvement Recommendations",
    description:
      "Get tailored advice on communication skills, technical question handling, and behavioral responses to ensure you're fully prepared for the real thing.",
  },
]

export const testimonialsContent = [
  {
    subtitleBackgroundColor: "bg-pink-primary",
    subtitle: "Entertainment",
    title:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Michael, Software Engineer",
    image: "/assets/images/testimonials/Image2.png",
  },
  {
    subtitleBackgroundColor: "bg-pink-primary",
    subtitle: "Entertainment",
    title:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Michael, Software Engineer",
    image: "/assets/images/testimonials/Image.png",
  },
  {
    subtitleBackgroundColor: "bg-pink-primary",
    subtitle: "Entertainment",
    title:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Michael, Software Engineer",
    image: "/assets/images/testimonials/Image2.png",
  },
  {
    subtitleBackgroundColor: "bg-pink-primary",
    subtitle: "Entertainment",
    title:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Michael, Software Engineer",
    image: "/assets/images/testimonials/Image.png",
  },
  {
    subtitleBackgroundColor: "bg-pink-primary",
    subtitle: "Entertainment",
    title:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Michael, Software Engineer",
    image: "/assets/images/testimonials/Image2.png",
  },
  {
    subtitleBackgroundColor: "bg-pink-primary",
    subtitle: "Entertainment",
    title:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Michael, Software Engineer",
    image: "/assets/images/testimonials/Image.png",
  },
  {
    subtitleBackgroundColor: "bg-pink-primary",
    subtitle: "Entertainment",
    title:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Michael, Software Engineer",
    image: "/assets/images/testimonials/Image2.png",
  },
  {
    subtitleBackgroundColor: "bg-pink-primary",
    subtitle: "Entertainment",
    title:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Michael, Software Engineer",
    image: "/assets/images/testimonials/Image.png",
  },
  {
    subtitleBackgroundColor: "bg-pink-primary",
    subtitle: "Entertainment",
    title:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Michael, Software Engineer",
    image: "/assets/images/testimonials/Image2.png",
  },
]

export const faqsContent = [
  {
    title:
      "What are the system requirements for running the Final Round AI WebApp?",
    content:
      "Final Round AI provides a comprehensive suite of AI-driven solutions designed to assist candidates during challenging recruitment periods. Our platform is accessible via an integrated Web App experience, optimized for use with the latest version of the Chrome browser to ensure the best possible user experience. While many of our AI tools, including AI Resume Revision and AI Cover Letter Generation, are compatible with various browsers, the Interview Copilot feature specifically requires the Chrome browser. To download the latest version of Chrome, please visit https://www.google.com/chrome/",
  },
  {
    title: "Which online meeting platforms are supported by Final Round AI?",
    content:
      "For optimal performance of Final Round AI, we recommend using the platform on the latest version of the Chrome browser. The Interview Copilot feature is compatible with major online meeting platforms, including Zoom, WebEx, Microsoft Teams, Google Meet, and Chime, among others. For detailed instructions on how to configure the Interview Copilot for successful use, please visit our tutorial at https://www.finalroundai.com/blog/how-to-set-up-interview-copilot.",
  },
  {
    title: "What payment methods are available?",
    content:
      "Our goal is to ensure a smooth and convenient experience for our customers. We offer a wide range of payment options through our payment processing partner, Stripe. Accepted payment methods include major credit cards such as Visa, MasterCard, American Express, and Discover, as well as ACH transfers. For those interested in using cryptocurrencies, we kindly ask you to reach out to our customer support for further assistance.",
  },
  {
    title: "Which domains/industries are supported by Final Round AI?",
    content:
      "Our services offer extensive coverage across a variety of domains and industries. We are actively developing domain-specific knowledge bases to supercharge domain knowledges, encompassing areas such as Finance, Consulting, Marketing, Customer Success, Sales, Product Management, IT, Cyber Security, Data Analytics, Software Engineering, among others. For additional details or inquiries about specific domains, please reach out to our customer support.",
  },
  {
    title: "What is the policy for the free trial?",
    content:
      "Our free trial offers users limited access to select product features, including AI resume revision and cover letter generation, among others. For the Interview Copilot feature, users are entitled to unlimited access to 5-minute free trial sessions. This means users can initiate the Interview Copilot as often as they wish, with each session being valid for up to 5 minutes.",
  },
  {
    title: "What is the cancellation policy?",
    content:
      "Our policy does not permit refunds. While unused credits do not expire, please note that an active subscription is required to access premium features, including unlimited resume revisions and the Interview Copilot. Visit https://www.finalroundai.com/terms for terms and conditions.",
  },
  {
    title: "Is interview transcription available?",
    content:
      "In adherence to data privacy protection standards, Final Round AI does not retain interview transcriptions. However, users have the option to access an Interview Report immediately following each session. It is important to note that if the 'View Interview Report' option is not selected upon session completion, retrieval of the report will not be possible at a later time.",
  },
]

export const mentionsContent = [
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
]

export const tutorialsContent = [
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-1.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-2.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-3.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-1.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-2.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-3.png",
  },
]

export const footerSocials = [
  {
    name: "Twitter",
    icon: "/assets/images/socials/icon-twitter.svg",
    alt: "Twitter",
    href: "https://twitter.com/FinalRoundAI",
    id: 1,
  },
  {
    name: "YouTube",
    icon: "/assets/images/socials/icon-youtube.svg",
    alt: "YouTube",
    href: "https://www.youtube.com/channel/UCJv7J7Vn8j7zVvZ6u3t8v7Q",
    id: 2,
  },
  {
    name: "Discord",
    icon: "/assets/images/socials/icon-discord.svg",
    alt: "Twitch",
    href: "https://www.twitch.tv/finalroundai",
    id: 3,
  },
  {
    name: "TikTok",
    icon: "/assets/images/socials/icon-tiktok.svg",
    alt: "TikTok",
    href: "https://www.tiktok.com/@finalroundai",
    id: 4,
  },
]
type FooterLink = {
  href: string
  name: string
}

type FooterLinks = {
  Products: FooterLink[]
  Resources: FooterLink[]
  Other: FooterLink[]
}
export const footerLinks: FooterLinks = {
  Products: [
    {
      href: "/",
      name: "Interview Copilot®️",
    },
    {
      href: "/",
      name: "AI Material Generator",
    },
    {
      href: "/",
      name: "Mock Interview α",
    },
    {
      href: "/",
      name: "Coding Copilot β",
    },
  ],
  Resources: [
    {
      href: "/",
      name: "Tutorials",
    },
    {
      href: "/",
      name: "Change Log",
    },
    {
      href: "/",
      name: "Contact Us",
    },
  ],
  Other: [
    {
      href: "/",
      name: "Affiliate Partnership",
    },
    {
      href: "/",
      name: "Share Success Stories",
    },
    {
      href: "/",
      name: "Privacy Policy",
    },
    {
      href: "/",
      name: "Terms & Conditions",
    },
  ],
}
