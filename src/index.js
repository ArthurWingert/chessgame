import React from "react";
import "./index.css";

// router
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Home from "./pages/Home/Home";
import Peao from "./pages/Peao/Peao";
import Torre from "./pages/Torre/Torre";
import Cavalo from "./pages/Cavalo/Cavalo";
import Bispo from "./pages/Bispo/Bispo";
import Rei from "./pages/Rei/Rei";
import Rainha from "./pages/Rainha/Rainha";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/peao",
		element: <Peao />,
	},
	{
		path: "/torre",
		element: <Torre />,
	},
  {
		path: "/cavalo",
		element: <Cavalo />,
	},
  {
		path: "/bispo",
		element: <Bispo />,
	},
  {
		path: "/rei",
		element: <Rei />,
	},
  {
		path: "/rainha",
		element: <Rainha />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);