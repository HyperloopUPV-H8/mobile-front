import { extractLevitationData } from "common";
import { EMS } from "./EMS/EMS";
import { HEMS } from "./HEMS/HEMS";
import styles from "./Levitation.module.scss";
import { useMeasurements } from "hooks/useMeasurements";
import { useMemo } from "react";

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
            <EMS
                m1={levData.slave_airgap_5}
                m2={levData.slave_airgap_6}
                m3={levData.slave_airgap_7}
                m4={levData.slave_airgap_8}
            />
        </div>
    );
};
