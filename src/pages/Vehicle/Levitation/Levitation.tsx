import {
    ColorfulChart,
    LineDescription,
    selectLcuMeasurements,
    isNumericMeasurement,
} from "common";
import { EMS } from "./EMS/EMS";
import { HEMS } from "./HEMS/HEMS";
import styles from "./Levitation.module.scss";
import { useMeasurements } from "hooks/useMeasurements";
import { useMemo } from "react";
import { store } from "store";
import { getLines } from "../getLines";

export const Levitation = () => {
    const measurements = useMeasurements();
    const levData = useMemo(
        () => selectLcuMeasurements(measurements),
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
                items={getLines([
                    "LCU_MASTER/current_coil_1",
                    "LCU_MASTER/current_coil_2",
                    "LCU_MASTER/current_coil_3",
                    "LCU_MASTER/current_coil_4",
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
                items={getLines([
                    "LCU_MASTER/slave_current_coil_5",
                    "LCU_MASTER/slave_current_coil_6",
                    "LCU_MASTER/slave_current_coil_7",
                    "LCU_MASTER/slave_current_coil_8",
                ])}
                length={100}
            />
        </div>
    );
};
