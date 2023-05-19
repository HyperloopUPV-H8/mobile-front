import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Vehicle } from "pages/Vehicle/Vehicle.tsx";
import { Levitation } from "pages/Vehicle/Levitation/Levitation.tsx";
import {Power} from "./pages/Vehicle/Power/Power.tsx";
import {PodDataClient} from "./PodDataClient.ts";

const backendClient = new PodDataClient()

const power = await backendClient.loadPowerData()

//TODO: make /vehicle/levitation appear on / route.
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "vehicle",
                element: <Vehicle />,
                children: [
                    {
                        path: "levitation",
                        element: <Levitation />,
                    },
                    {
                        path: "propulsion",
                        element: <div>Propulsion</div>,
                    },
                    {
                        path: "power",
                        element: <Power state={power} />,
                    },
                ],
            },
            {
                path: "tube",
                element: <div>Tube</div>,
            },
            {
                path: "cameras",
                element: <div>Cameras</div>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
