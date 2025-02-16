// ProjectData.ts
import {
    SiTypescript, SiMysql, SiExpress, SiChakraui, SiVite,
    SiReact, SiRedux, SiFirebase, SiTailwindcss,
    SiFigma
} from "react-icons/si";
import { FaGolang, FaNodeJs, FaPython, FaSass } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import NesiaTravel from '../../assets/public/img/projectimg/nesiatravel.png';
import Ruanga23 from '../../assets/public/img/projectimg/ruanga23.png';
import Noblelife from '../../assets/public/img/projectimg/noblelifemission.png';
import Youtzmedia from '../../assets/public/img/projectimg/youtzmedia.png';
import Ecommerce from '../../assets/public/img/projectimg/ecommerce.png';

// Data proyek yang akan ditampilkan
export const ProjectFlex = [
    {
        id: 1,
        projectIMG: Ruanga23,
        nameproject: "Ruang A23",
        descriptionproject: "Interior Design web",
        techStack: [
            { icon: <SiMysql />, href: "https://www.mysql.com/" },
            { icon: <SiExpress />, href: "https://expressjs.com/" },
            { icon: <SiChakraui />, href: "https://chakra-ui.com/" },
            { icon: <SiVite />, href: "https://vitejs.dev/" },
            { icon: <FaSass />, href: "https://sass-lang.com/" },
        ],
        Overview: "As a self-taught fullstack developer, I was always interested in building my own version of popular web applications. Recently, I decided to tackle the challenge of building a Twitter clone using a combination of modern technologies.",
        Techstackdescription: [
            "TypeScript for static type checking",
            "Tailwind CSS for styling",
            "Firebase for the backend (database, authentication, and hosting)",
            "Headless UI for the modal, menu, and popover components",
            "React Hot Toast for interactive action notifications",
            "Framer Motion for smooth animations",
        ],
        features: [
            "User authentication (sign up, login, log out)",
            "Like and unlike tweets",
            "Follow and unfollow users",
            "View user profiles and tweet lists",
            "Real-time updates for likes, follows, and tweets",
            "Responsive design for mobile devices",
        ],
        conclusion: "Overall, building this Twitter clone was a rewarding and educational experience. I learned a lot about using Next.js, TypeScript, and Firebase together, as well as various other tools and libraries.",
    },
    {
        id: 2,
        projectIMG: NesiaTravel,
        nameproject: "NesiaTravel",
        descriptionproject: "A platform for Touring and Traveling Booking",
        techStack: [
            { icon: <SiReact />, href: "https://reactjs.org/" },
            { icon: <FaNodeJs />, href: "https://nodejs.org/" },
            { icon: <SiMysql />, href: "https://www.postgresql.org/" },
            { icon: <SiChakraui />, href: "https://chakra-ui.com/" },
            { icon: <SiTypescript />, href: "https://golang.org/" },
            { icon: <SiFirebase />, href: "https://golang.org/" },
        ],
        Overview: "Developed a robust e-learning platform with user enrollment, course progress tracking, and certification management.",
        Techstackdescription: [
            "React for front-end",
            "Node.js for server-side logic",
            "PostgreSQL for data storage",
            "Chakra UI for design components",
            "AWS S3 for media storage",
        ],
        features: [
            "User registration and course enrollment",
            "Progress tracking and certification on completion",
            "Admin dashboard for course management",
            "Interactive quizzes and assignments",
            "Responsive UI design for multiple devices",
        ],
        conclusion: "The project enhanced my knowledge of developing large-scale applications and integrating various components to deliver an effective learning experience.",
    },
    {
        id: 3,
        projectIMG: Ecommerce,
        nameproject: "Ecommerce",
        descriptionproject: "A web app for buying and selling various products",
        techStack: [
            { icon: <SiReact />, href: "https://reactjs.org/" },
            { icon: <SiRedux />, href: "https://redux.js.org/" },
            { icon: <SiFirebase />, href: "https://firebase.google.com/" },
            { icon: <SiChakraui />, href: "https://chakra-ui.com/" },
            { icon: <SiTypescript />, href: "https://golang.org/" },
        ],
        Overview: "Built a weather application that fetches real-time data and displays it in a user-friendly format.",
        Techstackdescription: [
            "React with Redux for state management",
            "Firebase for backend services",
            "Chakra UI for flexible styling",
            "Chart.js for data visualization",
        ],
        features: [
            "Real-time weather updates",
            "7-day weather forecast",
            "User location-based weather data",
            "Hourly weather updates with graphs",
        ],
        conclusion: "This project deepened my understanding of API integration and handling asynchronous data in a front-end application.",
    },
    {
        id: 4,
        projectIMG: Noblelife,
        nameproject: "NoblelifeMission",
        descriptionproject: "A Community Branding Web showcasing projects and skills.",
        techStack: [
            { icon: <RiNextjsFill />, href: "https://nextjs.org/" },
            { icon: <SiChakraui />, href: "https://tailwindcss.com/" },
            { icon: <FaGolang />, href: "https://golang.org/" },
            { icon: <FaPython />, href: "https://golang.org/" },
            { icon: <FaNodeJs />, href: "https://golang.org/" },
            { icon: <SiTypescript />, href: "https://golang.org/" },
        ],
        Overview: "Created a responsive portfolio site to display my work, skills, and background in web development.",
        Techstackdescription: [
            "Next.js for server-side rendering",
            "Tailwind CSS for flexible styling",
            "Golang for the backend API",
        ],
        features: [
            "Project showcase with links and descriptions",
            "Contact form for inquiries",
            "Responsive design for mobile and desktop",
            "Smooth animations on page transitions",
        ],
        conclusion: "Developing this portfolio allowed me to explore design practices and responsive layouts.",
    },
    {
        id: 5,
        projectIMG: Youtzmedia,
        nameproject: "YoutzMedia Agency",
        descriptionproject: "An online store with product listing, shopping cart, and payment integration.",
        techStack: [
            { icon: <SiReact />, href: "https://reactjs.org/" },
            { icon: <SiFigma />, href: "https://nodejs.org/" },
        ],
        Overview: "Built an e-commerce store with a modern tech stack, including a shopping cart and secure payment processing.",
        Techstackdescription: [
            "React for the front-end",
            "Node.js and MySQL for backend and data storage",
            "Python for analytics and machine learning integration",
            "Stripe for payment gateway",
        ],
        features: [
            "Product search and filter",
            "Add to cart and checkout process",
            "User authentication and order history",
            "Secure payment integration with Stripe",
        ],
        conclusion: "Building this application taught me a lot about handling transactions and managing a shopping cart's state in the front-end.",
    },
    {
        id: 6,
        projectIMG: Youtzmedia,
        nameproject: "Chat Application",
        descriptionproject: "A real-time chat app supporting multiple channels.",
        techStack: [
            { icon: <SiReact />, href: "https://reactjs.org/" },
            { icon: <SiFigma />, href: "https://firebase.google.com/" },
            { icon: <SiTailwindcss />, href: "https://tailwindcss.com/" }
        ],
        Overview: "Developed a chat application supporting real-time messaging across different channels.",
        Techstackdescription: [
            "React for front-end development",
            "Firebase for real-time database and authentication",
            "Tailwind CSS for custom design",
        ],
        features: [
            "Real-time messaging",
            "User authentication",
            "Multiple chat channels",
            "User online/offline status",
        ],
        conclusion: "This project gave me hands-on experience with Firebase and real-time data updates.",
    },
    {
        id: 7,
        projectIMG: Ruanga23,
        nameproject: "To-Do List App",
        descriptionproject: "A productivity app to track daily tasks.",
        techStack: [
            { icon: <SiTypescript />, href: "https://www.typescriptlang.org/" },
            { icon: <SiReact />, href: "https://reactjs.org/" },
            { icon: <SiChakraui />, href: "https://chakra-ui.com/" }
        ],
        Overview: "Built a to-do list application with task management and notification features.",
        Techstackdescription: [
            "React and TypeScript for static type checking",
            "Chakra UI for responsive design",
            "LocalStorage for task persistence",
        ],
        features: [
            "Add, edit, and delete tasks",
            "Task prioritization",
            "Due date notifications",
            "Responsive design",
        ],
        conclusion: "Developing this app helped me improve my understanding of state management with Redux.",
    }
];
