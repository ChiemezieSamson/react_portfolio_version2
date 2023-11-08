import {
	FaDribbble,
	FaFacebook,
	FaLinkedin,
	FaMailBulk,
	FaMapMarked,
	FaMobileAlt,
	FaTwitter,
} from "react-icons/fa";
import project1 from "./asset/images/pnew.jpg";
import project2 from "./asset/images/Nebe-Samson-Portfolio.png";
import project3 from "./asset/images/React App.png";
import project4 from "./asset/images/world_list.jpg";
import project5 from "./asset/images/tribute.jpg";
import project6 from "./asset/images/laptop_repair.jpg";
import Bestplace from "./asset/images/Bestplace.jpg";
import Complete from "./asset/images/Complete.jpg";
import Frontend from "./asset/images/Frontend.jpg";

export const navLinks = [
	{
		id: 0,
		name: "Home",
		number: "00",
		link: "/",
	},
	{
		id: 1,
		name: "About",
		number: "01",
		link: "about",
	},
	{
		id: 2,
		name: "Service",
		number: "02",
		link: "service",
	},
	{
		id: 3,
		name: "Project",
		number: "03",
		link: "project",
	},
	{
		id: 4,
		name: "Blog",
		number: "04",
		link: "blog",
	},
	{
		id: 5,
		name: "Contact",
		number: "05",
		link: "contact",
	},
];

export const socialIcons = [
	{
		id: 0,
		icon: FaDribbble,
		link: "https://twitter.com/SamsonChiemezie",
	},
	{
		id: 1,
		icon: FaFacebook,
		link: "https://twitter.com/SamsonChiemezie",
	},
	{
		id: 2,
		icon: FaLinkedin,
		link: "https://twitter.com/SamsonChiemezie",
	},
	{
		id: 3,
		icon: FaTwitter,
		link: "https://twitter.com/SamsonChiemezie",
	},
];

export const button = [
	{
		id: 0,
		name: "All",
	},
	{
		id: 1,
		name: "Seo",
	},
	{
		id: 2,
		name: "website",
	},
	{
		id: 3,
		name: "App",
	},
];

export const Project_image = [
	{
		id: 1,
		name: "Project title",
		category: "website",
		seo: "seo",
		image: project1,
	},
	{
		id: 2,
		name: "Project title",
		category: "website",
		seo: "seo",
		image: project2,
	},
	{
		id: 3,
		name: "Project title",
		category: "App",
		image: project3,
	},
	{
		id: 4,
		name: "Project title",
		category: "App",
		image: project4,
	},
	{
		id: 5,
		name: "Project title",
		category: "website",
		image: project5,
	},
	{
		id: 6,
		name: "Project title",
		category: "website",
		image: project6,
	},
];

export const Blogs = [
	{
		id: 0,
		author: "By Samson",
		title: "There are Many variation",
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
		ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		aliquip ex ea commodo consequat.`,
		image: Bestplace,
		date: "14 july 2022",
	},
	{
		id: 1,
		author: "By Samson",
		title: "There are Many variation",
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
		ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		aliquip ex ea commodo consequat.`,
		image: Complete,
		date: "14 july 2022",
	},
	{
		id: 2,
		author: "By Samson",
		title: "There are Many variation",
		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
		ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		aliquip ex ea commodo consequat.`,
		image: Frontend,
		date: "14 july 2022",
	},
];

export const contactObj = [
	{
		id: 1,
		icon: FaMobileAlt,
		title: "Call Us On",
		text: "+86-13291396526",
	},
	{
		id: 2,
		icon: FaMailBulk,
		title: "Email Us At",
		text: "samsonchiemezie368@gmail.com",
	},
	{
		id: 3,
		icon: FaMapMarked,
		title: "Visit Office",
		text: "No. 639 Longmei Avenue, Jiangning Campus, Nanjing",
	},
];
