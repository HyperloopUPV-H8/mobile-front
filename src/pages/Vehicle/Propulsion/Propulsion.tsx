import styles from "./Propulsion.module.scss";
import { Title } from "components/Title/Title";
import { Text } from "components/Text/Text";
import { ColorfulChart, NumericMeasurement, extractPCUData } from "common";
import { DoubleGauge } from "components/DoubleGauge/DoubleGauge";
import { useMemo } from "react";
import { useMeasurements } from "hooks/useMeasurements";

export const Propulsion = () => {
    const measurements = useMeasurements();
    const propulData = useMemo(
        () => extractPCUData(measurements),
        [measurements]
    );

    return (
        <div className={styles.propulsion}>
            <Title title="Propulsion ON" />
            <DoubleGauge
                firstGauge={propulData.velocity}
                secondGauge={propulData.acceleration}
            />
            <Text text="These are the currents inside the vehicle's motor. Together, they propulse Kénos. " />
            <ColorfulChart
                className={styles.chart}
                title="Motor 1"
                length={100}
                measurements={[
                    propulData.motor_1_current_u,
                    propulData.motor_1_current_v,
                    propulData.motor_1_current_w,
                ]}
                getMeasurement={(id) => {
                    return measurements[id] as NumericMeasurement;
                }}
            ></ColorfulChart>
            <ColorfulChart
                className={styles.chart}
                title="Motor 2"
                length={100}
                measurements={[
                    propulData.motor_2_current_u,
                    propulData.motor_2_current_v,
                    propulData.motor_2_current_w,
                ]}
                getMeasurement={(id) => {
                    return measurements[id] as NumericMeasurement;
                }}
            ></ColorfulChart>
        </div>
    );
};
