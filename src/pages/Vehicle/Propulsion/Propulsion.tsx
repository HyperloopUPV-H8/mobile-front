import styles from "./Propulsion.module.scss";
import { Title } from "components/Title/Title";
import { Text } from "components/Text/Text";
import { ColorfulChart } from "common";
import { DoubleGauge } from "components/DoubleGauge/DoubleGauge";

export const Propulsion = () => {
    return (
        <div className={styles.propulsion}>
            <Title title="Propulsion ON" />
            <DoubleGauge
                firstGauge={{
                    id: "123",
                    name: "curernt",
                    safeRange: [10, 20],
                    type: "uint8",
                    units: "A",
                    value: { average: 10, last: 10 },
                    warningRange: [10, 20],
                }}
                secondGauge={{
                    id: "123",
                    name: "curernt",
                    safeRange: [10, 20],
                    type: "uint8",
                    units: "A",
                    value: { average: 10, last: 10 },
                    warningRange: [10, 20],
                }}
            />
            <Text text="These are the currents inside the vehicle's motor. Together, they propulse Kénos. " />
            <ColorfulChart
                className={styles.chart}
                title="Motor 1"
                length={100}
                measurements={[]}
                getMeasurement={() => {
                    return {
                        id: "sdfs",
                        name: "sadf",
                        safeRange: [12, 12],
                        type: "float32",
                        units: "asd",
                        value: { average: 23, last: 23 },
                        warningRange: [12, 12],
                    };
                }}
            ></ColorfulChart>
            <ColorfulChart
                className={styles.chart}
                title="Motor 2"
                length={100}
                measurements={[]}
                getMeasurement={() => {
                    return {
                        id: "sdfs",
                        name: "sadf",
                        safeRange: [12, 12],
                        type: "float32",
                        units: "asd",
                        value: { average: 23, last: 23 },
                        warningRange: [12, 12],
                    };
                }}
            ></ColorfulChart>
        </div>
    );
};
