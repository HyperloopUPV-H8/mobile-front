import "./styles/styles.scss";
import styles from "./App.module.scss";
import { Dock } from "components/Dock/Dock";
import { Outlet } from "react-router-dom";
import { ReactComponent as Wheel } from "assets/icons/wheel.svg";
import { ReactComponent as Tube } from "assets/icons/tube.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { DockItemData } from "components/Dock/DockItem/DockItem";
import {
    Loader,
    WsHandlerProvider,
    config,
    createWsHandler,
    fetchBack,
} from "common";
import { useDispatch } from "react-redux";
import { initPodData } from "slices/podDataSlice";
import { initMeasurements } from "slices/measurementsSlice";

const dockItems: DockItemData[] = [
    { icon: <Wheel />, path: "/vehicle" },
    { icon: <Tube />, path: "/tube" },
    { icon: <Camera />, path: "/cameras" },
];

const SERVER_URL = import.meta.env.PROD
    ? `${config.prodServer.ip}:${config.prodServer.port}/${config.paths.websocket}`
    : `${config.devServer.ip}:${config.devServer.port}/${config.paths.websocket}`;

function App() {
    const dispatch = useDispatch();

    return (
        <Loader
            LoadingView={<div>Loading</div>}
            FailureView={<div>Failure</div>}
            promises={[
                createWsHandler(SERVER_URL),
                fetchBack(
                    import.meta.env.PROD,
                    config.paths.podDataDescription
                ).then((adapter) => {
                    dispatch(initPodData(adapter));
                    dispatch(initMeasurements(adapter));
                }),
            ]}
        >
            {([handler]) => (
                <WsHandlerProvider handler={handler}>
                    <div className={styles.app}>
                        <main className={styles.content}>
                            <Outlet />
                        </main>
                        <Dock items={dockItems} />
                    </div>
                </WsHandlerProvider>
            )}
        </Loader>
    );
}

export default App;
