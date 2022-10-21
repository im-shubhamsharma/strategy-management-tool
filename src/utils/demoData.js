import { HiChevronDoubleUp } from "react-icons/hi";
import { FaChevronUp } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

export const demoData = [
  {
    type: "green",
    name: "Objective One",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    goal: "Setting up new working environment",
    fromDate: "09/14/2022",
    dueDate: "09/14/2022",
    priority: {
      Icon: HiChevronDoubleUp,
      type: "Urgent",
      color: "#30A9D9",
    },
    status: {
      type: "completed",
      bgColor: "rgb(238, 255, 248)",
      color: "rgb(85, 181, 131)",
    },
    assigned: {
      avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      name: "Michael Dowlanski",
    },
    score: {
      curr: 7,
      total: 30,
    },
  },
  {
    type: "yellow",
    name: "Objective Two",
    goal: "Setting up new working environment",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    fromDate: "09/18/2022",
    dueDate: "09/18/2022",
    priority: {
      Icon: FaChevronUp,
      type: "High",
      bgColor: "rgb(238, 255, 248)",
      color: "rgb(85, 181, 131)",
    },
    status: {
      type: "In Progress",
      bgColor: "rgb(240, 248, 255)",
      color: "rgb(29, 89, 178)",
    },
    assigned: {
      avatar: "https://randomuser.me/api/portraits/thumb/men/81.jpg",
      name: "Steven Gerard",
    },
    score: {
      curr: 15,
      total: 30,
    },
  },
  {
    type: "green",
    name: "Objective Three",
    goal: "Setting up new working environment",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    fromDate: "09/24/2022",
    dueDate: "09/24/2022",
    priority: {
      Icon: FaChevronUp,
      type: "High",
      color: "rgb(85, 181, 131)",
    },
    status: {
      type: "At Risk",
      bgColor: "rgb(255, 240, 240)",
      color: "rgb(178, 41, 41)",
    },
    assigned: {
      avatar: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
      name: "Dusko Dugousko",
    },
    score: {
      curr: 28,
      total: 30,
    },
  },
  {
    type: "yellow",
    name: "Objective Four",
    goal: "Setting up new working environment",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    fromDate: "09/29/2022",
    dueDate: "09/29/2022",
    priority: {
      Icon: FaCircle,
      type: "Medium",
      color: "rgb(255, 158, 25)",
    },
    status: {
      type: "Draft",
      bgColor: "rgb(240, 241, 242)",
      color: "rgb(48, 48, 48)",
    },
    assigned: {
      avatar: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
      name: "Mila Mitrovic",
    },
    score: {
      curr: 17,
      total: 30,
    },
  },
];
