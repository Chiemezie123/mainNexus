import ArrowDiagonal from "@/components/icons/arrowDiagonal";
import ArrowRight from "@/components/icons/arrowRight";

export const firstCardArray = [
  {
    id: 1,
    icon: "🌎",
    header: "Remote-Friendly: ",
    description:
      "Work from anywhere or at our offices. We provide the flexibility and tools you need to thrive.",
    bgColor: "#E8F2EF",
  },
  {
    id: 2,
    icon: "	🚀",
    header: "Great Benefits:",
    description:
      "Access mentorship, learning programs, and career advancement opportunities.",
    bgColor: "#E6EBF3",
  },
  {
    id: 3,
    icon: "💡",
    header: "Career Growth:",
    description:
      "Build innovative solutions that solve real-world problems and shape the future of tech.",
    bgColor: "#EFEBF2",
  },
  {
    id: 4,
    icon: "❤️",
    header: "Impact-Driven Work:",
    description:
      "Competitive salary, wellness programs, paid time off, and flexible work hours.",
    bgColor: "#F2ECE8",
  },
];

export const secondCardArray = [
  {
    number: "01.",
    header: "Health Insurance",
    description:
      "Company name is simply dummy text of the printing andtypesetting industry: Lorer ipsum dolor sit amet, consectetur.",
  },
  {
    number: "02.",
    header: "Vacation Time",
    description:
      "Company name is simply dummy text of the printing andtypesetting industry: Lorer ipsum dolor sit amet, consectetur.",
  },
  {
    number: "03.",
    header: "Parental Leave",
    description:
      "Company name is simply dummy text of the printing andtypesetting industry: Lorer ipsum dolor sit amet, consectetur.",
  },
  {
    number: "04.",
    header: "Learning Budget",
    description:
      "Company name is simply dummy text of the printing andtypesetting industry: Lorer ipsum dolor sit amet, consectetur.",
  },
  {
    number: "05.",
    header: "Team Retreats",
    description:
      "Company name is simply dummy text of the printing and typesetting industry: Lorer ipsum dolor sit amet, consectetur.",
  },
  {
    number: "06.",
    header: "Holiday Rest",
    description:
      "Company name is simply dummy text of the printing andtypesetting industry: Lorer ipsum dolor sit amet, consectetur.",
  },
];

export const roleCardArray = [
  {
    jobTitle: "Business Development",
    location: "Onsite - Fulltime",
    icon: <ArrowRight />,
  },
  {
    jobTitle: "Senior UI Designer",
    location: "Onsite - Fulltime",
    icon: <ArrowDiagonal />,
  },
  {
    jobTitle: "HR Generalist",
    location: "Onsite - Fulltime",
    icon: <ArrowDiagonal />,
  },
  {
    jobTitle: "3D Designer",
    location: "Onsite - Fulltime",
    icon: <ArrowDiagonal />,
  },
  {
    jobTitle: "Graphic Designer",
    location: "Onsite - Fulltime",
    icon: <ArrowDiagonal />,
  },
];

export const AnimationCards = [
  {
    step: "Step 1",
    header: "Apply Online",
    description: "Submit your application in just a few minutes.",
    rotation: "rotate(-7.977deg)",
  },
  {
    step: "Step 2",
    header: "Meet Our Team",
    description: "A casual chat with HR and your future teammates.",
    rotation: "rotate(6.368deg)",
  },
  {
    step: "Step 3",
    header: "Technical Interview",
    description:
      "A challenge or problem-solving session to showcase your skills.",
    rotation: "rotate(-7.721deg)",
  },
  {
    step: "Step 4",
    header: "Offer & Onboarding",
    description:
      " If it’s a match, we’ll send your offer and welcome you to Nexus!",
    rotation: "rotate(6.182deg)",
  },
];

export const imagePathArray = [
  {
    id: 1,
    name: "blackMan",
    path: "/images/blackman3.png",
  },
  {
    id: 2,
    name: "blackwoman",
    path: "/images/blackwoman3.png",
  },
  {
    id: 3,
    name: "asiaMan",
    path: "/images/kungfu3.png",
  },
  {
    id: 4,
    name: "indianMan",
    path: "/images/indianMan3.png",
  },
  {
    id: 5,
    name: "shinningteethwoman",
    path: "/images/smile3.png",
  },
  {
    id: 6,
    name: "spanishwoman",
    path: "/images/mexicowoman3.png",
  },
];

export const descriptionSwiper = [
  {
    description:
      "At Nexus, I feel truly valued. The team’s support and the challenging work make every day exciting.",
    name: "Alex Carter",
    title: "Lead Software Engineer",
    photo: "/images/engineer.png",
  },
  {
    description:
      "Working at Nexus has been an incredible journey. The collaborative environment and cutting-edge projects constantly push me to grow",
    name: "Maria Chen",
    title: "Product Designer",
    photo: "/images/designerChick.png",
  },
  {
    description:
      "Every project at Nexus is an opportunity to create real impact. It’s amazing to be part of such a forward-thinking team.",
    name: "Isaac Onyemah",
    title: "UX Researcher",
    photo: "/images/UXresearcher.png",
  },
];





export const fixedPositions = [
  {
    id: "position1",
    desktop: { top: 150, left: 50, width: 220, height: 220 },
    mxl: { top: 150, left: 0, width: 229, height: 227 },
    mlg: { top: 120, left: -20, width: 200, height: 200 },
    initial: { opacity: 1,x: -300, y: -300,},
    animate: {opacity: 1, x: 50, y: 50 },
  },
  {
    id: "position2",
    desktop: { top: 150, left: 1100, width: 220, height: 220 },
    mxl: { top: 150, left: 950, width: 229, height: 227 },
    mlg: { top: 120, left: 750, width: 200, height: 200 },
    initial: { x: 500, y: -100},
    animate: { x: 10, y: 50},
  },
  {
    id: "position3",
    desktop: { top: 400, left: 150, width: 220, height: 220 },
    mxl: { top: 400, left: 80, width: 193.3, height: 193.3 },
    mlg: { top: 400, left: 50, width: 180, height: 180 },
    initial: { x: -400, y: -50},
    animate: { x: 50, y: 50 }, 
  },
  {
    id: "position4",
    desktop: { top: 600, left: 1170, width: 220, height: 220 },
    mxl: { top: 600, left: 1000, width: 200, height: 200 },
    mlg: { top: 600, left: 800, width: 200, height: 200 },
    initial: { x: 300, y: 300},
    animate: { x: 50, y: 0},
  },
  {
    id: "position5",
    desktop: { top: 650, left: -100, width: 220, height: 220 },
    mxl: { top: 650, left: -100, width: 193.3, height: 193.3 },
    mlg: { top: 650, left: -100, width: 180, height: 180 },
    initial: { x: -200, y: -200},
    animate: { x: 20, y: 20},
  },
  {
    id: "position6",
    desktop: { top: 750, left: 600, width: 220, height: 220 },
    mxl: { top: 750, left: 430, width: 200, height: 200 },
    mlg: { top: 750, left: 400, width: 200, height: 200 },
    initial: { opacity: 1, y: 50, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
];

export const images = [
  { id: 1, src: "/images/blackmna5.png", alt: "blackMan" },
  { id: 2, src: "/images/blackwoman4.png", alt: "blackwoman" },
  { id: 3, src: "/images/smilingWoman4.png", alt: "mexicoWoman" },
  { id: 4, src: "/images/indianMan4.png", alt: "indianMan" },
  { id: 5, src: "/images/kungfu4.png", alt: "koreaMan" },
  { id: 6, src: "/images/spanishwoman4.png", alt: "spainishWoman" },
];