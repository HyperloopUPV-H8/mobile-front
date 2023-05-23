import "common/dist/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Propulsion } from "pages/Vehicle/Propulsion/Propulsion.tsx";
import { GlobalTicker } from "common";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { Vehicle } from "pages/Vehicle/Vehicle.tsx";
import { Levitation } from "pages/Vehicle/Levitation/Levitation.tsx";
import { Propulsion } from "pages/Vehicle/Propulsion/Propulsion.tsx";
import { GlobalTicker } from "common";
import { Tube } from "pages/Tube/Tube.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Navigate to={"vehicle"} /> },
            {
                path: "vehicle",
                element: <Vehicle />,
                children: [
                    { path: "", element: <Navigate to={"levitation"} /> },
                    {
                        path: "levitation",
                        element: <Levitation />,
                    },
                    {
                        path: "propulsion",
                        element: <Propulsion />,
                    },
                    {
                        path: "power",
                        element: <Power />,
                    },
                ],
            },
            {
                path: "tube",
                element: <Tube />,
            },
            {
                path: "cameras",
                element: <div>Cameras</div>,
            },
        ],
    },
    { path: "*", element: <Navigate to={"/"} /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <GlobalTicker>
            <RouterProvider router={router}></RouterProvider>
        </GlobalTicker>
    </React.StrictMode>
);
