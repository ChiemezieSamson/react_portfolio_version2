import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./Components/HomeRoute";
import Index from "./Components/pages/Index";
import About from "./Components/pages/About";
import Service from "./Components/pages/Service";
import Projects from "./Components/pages/Projects";
import Blog from "./Components/pages/Blog";
import Contact from "./Components/pages/Contact";
import NotFound from "./Components/notFound/NotFound";

const App = createBrowserRouter([
	{
		path: "/",
		element: <HomeRoute />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "service",
				element: <Service />,
			},
			{
				path: "project",
				element: <Projects />,
			},
			{
				path: "blog",
				element: <Blog />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
		],
	},
]);

export default App;
