import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./Components/HomeRoute";
import Index from "./Components/pages/Index";
import About from "./Components/pages/About";

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
		],
	},
]);

export default App;
