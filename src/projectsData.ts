interface project {
  id: number;
  title: string;
  image: string;
  description: string;
  overView: string;
  technologies: string[];
  url: string;
  github: string;
  bright: boolean;
  isPublished: boolean;
}

export const projects: project[] = [
  {
    id: 0,
    title: "Xafora",
    image: "/Work-xafora.png",
    description: "Multi-tenant WhatsApp SAAS Platform",
    overView:
      "Xafora is a SaaS multi-tenant WhatsApp management platform. It includes: a marketing website to promote the app; a customer-facing application to send messages and templates; and a powerful CRM dashboard to manage numbers, users, customers, campaigns, and third-party integrations. Advanced features include AI-powered auto-reply with OpenAI and Botpress, predefined messaging flows, and analytics for customer engagement.",
    technologies: [
      "React",
      "Next.js",
      "Express",
      "PostgreSQL",
      "Meta Cloud API",
      "OpenAI",
      "Botpress",
    ],
    url: "https://xafora.com/",
    github: "",
    bright: true,
    isPublished: true,
  },
  {
    id: 1,
    title: "ChannelManager",
    image: "/Work-channelmanager.png",
    description: "Booking Engine & Multi-Tenant Channel Manager",
    overView:
      "A SaaS multi-tenant booking channel manager with multiple modules: a booking engine to search and reserve properties; a self check-in portal for guests to upload documents and pay deposits; a CRM to manage properties, rooms, rates, availability, restrictions, bookings, guests, reports, and OTA channels (Booking.com, Airbnb, Agoda, etc.); and an admin portal to manage organizations, subscriptions, and statistics.",
    technologies: ["React", "Express", "PostgreSQL", "OTA APIs"],
    url: "",
    github: "",
    bright: true,
    isPublished: false,
  },
  {
    id: 2,
    title: "Liveinhotels",
    image: "/Work-liveinhotels.png",
    description: "Long Stays Booking Engine with CRM & Admin Panel",
    overView:
      "Liveinhotels is a booking platform for long stays. It features: a website to filter and view properties, book, and pay; an admin panel for property owners to add listings and manage reservations; and a CRM system for administrators to monitor statistics and manage users. Built to handle high-volume bookings and long-stay requirements.",
    technologies: ["React", "Express", "MongoDB"],
    url: "https://liveinhotels.com/",
    github: "",
    bright: true,
    isPublished: true,
  },
  {
    id: 3,
    title: "Payment Gateway",
    image: "/Work-payment.png",
    description: "Custom SaaS Payment Gateway",
    overView:
      "A SaaS payment gateway designed to securely collect and manage payments. Includes: a frontend for customers to enter card details; a dashboard for merchants to manage payment sessions, intents, customers, and detailed statistics. Built to provide a Stripe-like experience tailored to custom business needs.",
    technologies: ["React", "Express", "PostgreSQL"],
    url: "",
    github: "",
    bright: true,
    isPublished: false,
  },
  {
    id: 4,
    title: "GPT Driven Chatbot",
    image: "/Work-gptbot.jpg",
    description: "AI Powered Business Chatbot with WhatsApp Integration",
    overView:
      "An AI-driven chatbot fine-tuned for businesses with full WhatsApp integration. Provides predefined conversation flows, context-aware replies using OpenAI models, and support for customer service automation. Designed to improve client engagement and reduce manual workload.",
    technologies: ["React", "Express", "PostgreSQL", "OpenAI", "WhatsApp API"],
    url: "",
    github: "",
    bright: true,
    isPublished: false,
  },
  {
    id: 5,
    title: "Real Estate CRM",
    image: "/Work-myhomeplan.png",
    description: "Real Estate CRM & Installments Manager",
    overView:
      "A SaaS solution for real estate developers and clients. The marketing website showcases the platform, while the CRM handles: managing clients and projects, installments, payments, reminders, file storage, and statistical insights. Tailored for real estate businesses to manage their sales and installment workflows effectively.",
    technologies: ["React", "Next.js", "Express", "MySQL"],
    url: "",
    github: "",
    bright: false,
    isPublished: false,
  },
  {
    id: 6,
    title: "WeFinder",
    image: "/Work-wefinder.png",
    description: "Projects & Developers Finder",
    overView:
      "A platform for discovering real estate projects and developers. Includes: a website to browse projects, their plans, and installment schedules; an admin dashboard to add and edit projects; and a backend with cron jobs to sync with major projects automatically.",
    technologies: ["Next.js", "Express", "MySQL"],
    url: "https://wefinder.ae/",
    github: "",
    bright: false,
    isPublished: true,
  },
  {
    id: 7,
    title: "Employee CRM",
    image: "/Work-azora.webp",
    description: "Multi-Tenant Real Estate CRM",
    overView:
      "Employee CRM is a multi-tenant SaaS platform for real estate businesses. Provides CRM tools to manage leads and lead sheets, process finance workflows (payments, payment links), and handle employee management including payslips and leave tracking.",
    technologies: ["React", "Express", "MySQL"],
    url: "",
    github: "",
    bright: false,
    isPublished: false,
  },
  {
    id: 8,
    title: "Static Website Builder",
    image: "/Work-sitebuilder.png",
    description: "Drag & Drop HTML Builder SaaS",
    overView:
      "A SaaS website builder with drag-and-drop functionality. Allows users to design, build, and host lightweight HTML/CSS websites within the platform. Built as a multi-tenant system supporting user accounts and hosted deployment.",
    technologies: ["React", "Express", "PostgreSQL"],
    url: "",
    github: "",
    bright: false,
    isPublished: false,
  },
  {
    id: 9,
    title: "Storage Manager",
    image: "/Work-storage.png",
    description: "SAAS for Inventory & Product Management",
    overView:
      "A SaaS solution for managing inventory and product categories. Features include inventory tracking, category management, product statistics, and reporting dashboards. Designed to support businesses in organizing and analyzing their stock efficiently.",
    technologies: ["React", "Express", "MySQL"],
    url: "",
    github: "",
    bright: false,
    isPublished: false,
  },
];
