import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./Components/HomeRoute";
import Index from "./Components/pages/Index";
import About from "./Components/pages/About";
import Service from "./Components/pages/Service";
import Projects from "./Components/pages/Projects";

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
		],
	},
]);

export default App;
