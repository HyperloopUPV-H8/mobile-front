import { Title } from "components/Title/Title";
import styles from "./Propulsion.module.scss";
import { GaugeTag } from "components/GaugeTag/GaugeTag";
import { Text } from "components/Text/Text";
import { ColorfulChart } from "common";

export const Propulsion = () => {
    return (
        <div className={styles.propulsion}>
            <Title title="Propulsion ON" />
            <div className={styles.gauges}>
                <GaugeTag
                    className=""
                    min={0}
                    max={100}
                    strokeWidth={150}
                    measurement={{
                        id: "123",
                        name: "curernt",
                        safeRange: [10, 20],
                        type: "uint8",
                        units: "A",
                        value: { average: 10, last: 10 },
                        warningRange: [10, 20],
                    }}
                />
                <GaugeTag
                    className=""
                    min={0}
                    max={100}
                    strokeWidth={150}
                    measurement={{
                        id: "123",
                        name: "curernt",
                        safeRange: [10, 20],
                        type: "uint8",
                        units: "A",
                        value: { average: 10, last: 10 },
                        warningRange: [10, 20],
                    }}
                />
            </div>
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
