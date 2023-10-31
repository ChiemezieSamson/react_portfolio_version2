import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./Components/HomeRoute";
import Index from "./Components/pages/Index";

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
		],
	},
]);

export default App;
