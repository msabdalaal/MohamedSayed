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
}
export const projects: project[] = [
  {
    id: 0,
    title: "Product Page",
    image: "/Work-4.png",
    description: "Ecommerce Online Shop Iteractive Page",
    overView:
      "Ecommerce Online Shop Iteractive Page, With adding products to the shopping cart mechanism",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://msabdalaal.github.io/Ecommerce-Product-Page/",
    github: "https://github.com/msabdalaal/Ecommerce-Product-Page",
    bright: true,
  },
  {
    id: 1,
    title: "Interactive Card",
    image: "/Work-6.png",
    description: "Interactive Card Info Form",
    overView:
      "Front Design Design of an Interactive card that displays what the user is typing in real time",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://msabdalaal.github.io//InteractiveInfoForm/",
    github: "https://github.com/msabdalaal/InteractiveInfoForm",
    bright: true,
  },
  {
    id: 2,
    title: "Calculator",
    image: "/Work-2.png",
    description: "Multitheme calculator App",
    overView:
      "A functional calculator that performs simple calculations and has the ability to change the theme between dark and light theme",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://msabdalaal.github.io/calculator-app/",
    github: "https://github.com/msabdalaal/calculator-app",
    bright: false,
  },
  {
    id: 3,
    title: "Meme Generator",
    image: "/Work-7.png",
    description: "Meme Generator App With Adding Text",
    overView:
      "A meme generator that allows the user to choose between most trending templates and adds text in top of it",
    technologies: ["HTML", "TailwindCSS", "ReactJS"],
    url: "https://msabdalaal.github.io/MemeGeneratorReact/",
    github: "https://github.com/msabdalaal/MemeGeneratorReact",
    bright: true,
  },
  {
    id: 4,
    title: "Rock Paper Scissors",
    image: "/Work-3.png",
    description: "Rock Paper Scissors Fun Game",
    overView:
      "A game of Rick Paper Scissors that generates random choices of Rock Paper Scissors and tells you when did you lose or win.",
    technologies: ["HTML", "TailwindCSS", "ReactJS"],
    url: "https://msabdalaal.github.io/rock-paper-scissors-master/",
    github: "https://github.com/msabdalaal/rock-paper-scissors-master",
    bright: false,
  },
  {
    id: 5,
    title: "Tenzies Game",
    image: "/Work-8.png",
    description: "Tenzies Game With Cool Winning Animation",
    overView:
      "A game of Tenzies that shuffles the numbers each time you hit shuffle and when you complete the numbers you get a cool winning animation",
    technologies: ["HTML", "TailwindCSS", "ReactJS"],
    url: "https://msabdalaal.github.io/TenziesGameReact/",
    github: "https://github.com/msabdalaal/TenziesGameReact",
    bright: true,
  },
  {
    id: 6,
    title: "ToDo",
    image: "/Work-1.png",
    description: "Todo List App",
    overView:
      "A todo-list application that Implements the CRUDS system to add and update and delete and stores them in the local storage",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "LocalStorage"],
    url: "https://msabdalaal.github.io/todo-app/",
    github: "https://github.com/msabdalaal/todo-app",
    bright: false,
  },
  {
    id: 7,
    title: "Quizzical",
    image: "/Work-5.png",
    description: "Trivia Quizz Game",
    overView:
      "A fun game of Quizzical that gives you random questions in a certain topic and gives you the score when you're done.",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "API"],
    url: "https://msabdalaal.github.io/Quizzical/",
    github: "https://github.com/msabdalaal/Quizzical",
    bright: true,
  },
  {
    id: 8,
    title: "IP Address Tracker",
    image: "/Work-9.jpg",
    description: "IP Address Tracker / search for any ip location",
    overView:
      "An application that allows you to get your location based on your IP address and also the ability to search for any IP address to know the location of it",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "API"],
    url: "https://msabdalaal.github.io/IP-Address-Tracker/",
    github: "https://github.com/msabdalaal/IP-Address-Tracker/",
    bright: true,
  },
  {
    id: 9,
    title: "REST Countries API",
    image: "/Work-10.jpg",
    description:
      "App gives you everything you need to know about all countries",
    overView:
      "An implementation of the REST APIs for all countries displaying them whith details each in a standalone page.",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "React Router", "API"],
    url: "https://msabdalaal.github.io/REST-Countries-API/",
    github: "https://github.com/msabdalaal/REST-Countries-API",
    bright: true,
  },
  {
    id: 10,
    title: "Netflix Clone",
    image: "/Work-11.png",
    description: "A Responsive clone for Netflix Website",
    overView:
      "A clone website for the famous Netflix Website with the implementation of the TMDB API",
    technologies: [
      "HTML",
      "TailwindCSS",
      "ReactJS",
      "Typescript",
      "React Router",
      "API",
      "TMDB API",
      "ContextAPI",
    ],
    url: "https://msfakeflix.netlify.app/",
    github: "https://github.com/msabdalaal/Netflix-Clone",
    bright: true,
  },
  {
    id: 11,
    title: "Portofolio Wbesite",
    image: "/Work-13.png",
    description: "A Responsive Portofolio Website",
    overView:
      "A Responsive single page website for displaying portfolio and showcases projects.",
    technologies: ["HTML", "Bootstrap", "ReactJS", "Typescript", "API"],
    url: "https://simone-msabdalaal.netlify.app/",
    github: "https://github.com/msabdalaal/Simone",
    bright: false,
  },
  {
    id: 12,
    title: "FULL STACK - Business Managment System",
    image: "/Work-14.png",
    description:
      "Business Managment System for Managing (Small, Big) Stores and Companies.",
    overView:
      "POS: Make sales, Manage receipts, Refunds. Manage Inventory: Add remove and update them. Add categories, Update Stock levels and Categories. Manage Customers: Add remove and update them. Relate them with their purchases.Manage Employees.Contact info, Salaries, Permissions and Shifts.Employees have got Permissions, Edit & ViewIf employee hasn't got edit permission he can't edit, likewise in the view permission.Manage Suppliers.Contact info, Payment Terms, Orders.Financial Reports.Daily Sales, Monthly Sales, Yearly Sales and Top selling products.Alert Notifications System When Stocks get below minimum stock quantity, Alert gets created. ",
    technologies: [
      "HTML",
      "TailwindCSS",
      "ReactJS",
      "Typescript",
      "React Router",
      "Axios",
      "ContextAPI",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "Bcrypt",
    ],
    url: "https://storefy.vercel.app/",
    github: "https://github.com/msabdalaal/BMS",
    bright: false,
  },
];
