import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./Components/HomeRoute";
import Index from "./Components/pages/Index";
import About from "./Components/pages/About";
import Service from "./Components/pages/Service";
import Projects from "./Components/pages/Projects";
import Blog from "./Components/pages/Blog";
import Contact from "./Components/pages/Contact";

const App = createBrowserRouter([
	{
		path: "/",
		element: <HomeRoute />,
		errorElement: "",
		children: [
			{
				index: true,
				element: <Index />,
				errorElement: "",
			},
			{
				path: "about",
				element: <About />,
				errorElement: "",
			},
			{
				path: "service",
				element: <Service />,
				errorElement: "",
			},
			{
				path: "project",
				element: <Projects />,
				errorElement: "",
			},
			{
				path: "blog",
				element: <Blog />,
				errorElement: "",
			},
			{
				path: "contact",
				element: <Contact />,
				errorElement: "",
			},
		],
	},
]);

export default App;
