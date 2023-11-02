import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import project1 from "./asset/images/pnew.jpg";
import project2 from "./asset/images/Nebe-Samson-Portfolio.png";
import project3 from "./asset/images/React App.png";
import project4 from "./asset/images/world_list.jpg";
import project5 from "./asset/images/tribute.jpg";
import project6 from "./asset/images/laptop_repair.jpg";

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
	},
	{
		id: 1,
		icon: FaFacebook,
	},
	{
		id: 2,
		icon: FaLinkedin,
	},
	{
		id: 3,
		icon: FaTwitter,
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
