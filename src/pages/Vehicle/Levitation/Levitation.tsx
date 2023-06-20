import {
    ColorfulChart,
    LineDescription,
    extractLevitationData,
    isNumericMeasurement,
} from "common";
import { EMS } from "./EMS/EMS";
import { HEMS } from "./HEMS/HEMS";
import styles from "./Levitation.module.scss";
import { useMeasurements } from "hooks/useMeasurements";
import { useMemo } from "react";
import { store } from "store";

function getMeasurementUpdate(boardName: string, id: string): number {
    const board = store.getState().measurements.boards[boardName];

    if (!board) {
        console.error(`board ${boardName} not found`);
        return 0;
    }

    const measurement = board[id];

    if (!measurement) {
        console.error(`measurement ${id} not found`);
        return 0;
    }

    if (isNumericMeasurement(measurement)) {
        return measurement.value.last;
    } else {
        console.error(`measurement ${id} is not numeric`);
        return 0;
    }
}

function getItems(lcuId: string, ids: string[]): LineDescription[] {
    const lcu = store.getState().measurements.boards[lcuId];

    if (!lcu) {
        return [];
    }

    return ids.map((id) => {
        const meas = lcu[id];

        if (!meas || !isNumericMeasurement(meas)) {
            return {
                id: "default",
                color: "red",
                getUpdate: () => 0,
                range: [0, 100],
            };
        }

        return {
            id: id,
            color: "red",
            getUpdate: () => getMeasurementUpdate(lcuId, id),
            range: meas.safeRange,
        };
    });
}

export const Levitation = () => {
    const measurements = useMeasurements();
    const levData = useMemo(
        () => extractLevitationData(measurements),
        [measurements]
    );

    return (
        <div className={styles.levitation}>
            <HEMS
                m1={levData.airgap_1}
                m2={levData.airgap_2}
                m3={levData.airgap_3}
                m4={levData.airgap_4}
            />
            <ColorfulChart
                title="HEMS currents"
                items={getItems("LCU_MASTER", [
                    "airgap_1",
                    "airgap_2",
                    "airgap_3",
                    "airgap_4",
                ])}
                length={100}
            />
            <EMS
                m1={levData.slave_airgap_5}
                m2={levData.slave_airgap_6}
                m3={levData.slave_airgap_7}
                m4={levData.slave_airgap_8}
            />
            <ColorfulChart
                title="EMS currents"
                items={getItems("LCU_MASTER", [
                    "slave_airgap_5",
                    "slave_airgap_6",
                    "slave_airgap_7",
                    "slave_airgap_8",
                ])}
                length={100}
            />
        </div>
    );
};
