import "./styles/styles.scss";
import styles from "./App.module.scss";
import { Dock } from "components/Dock/Dock";
import { Outlet } from "react-router-dom";
import { ReactComponent as Wheel } from "assets/icons/wheel.svg";
import { ReactComponent as Tube } from "assets/icons/tube.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { DockItemData } from "components/Dock/DockItem/DockItem";

const dockItems: DockItemData[] = [
    { icon: <Wheel />, path: "/vehicle" },
    { icon: <Tube />, path: "/tube" },
    { icon: <Camera />, path: "/cameras" },
];

function App() {
    return (
        <div className={styles.app}>
            <main className={styles.content}>
                <Outlet />
            </main>
            <Dock items={dockItems} />
        </div>
    );
}

export default App;
