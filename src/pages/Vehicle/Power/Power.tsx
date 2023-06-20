import "./Power.scss";
import { PowerSection } from "./components/PowerSection.tsx";
import { BatterySection } from "./components/BatterySection.tsx";
import { BatteryTag } from "./components/BatteryTag.tsx";
import { LevitationUnitTag } from "./components/LevitationUnitTag.tsx";
import { LevitationSection } from "./components/LevitationSection.tsx";
import { TagType } from "./models/TagType.ts";
import { useMeasurements } from "hooks/useMeasurements.ts";
import { NumericMeasurement } from "common";

const BmslId = "BMSL";
const ObccuId = "OBCCU";
const LcuMasterId = "LCU_MASTER";

export const Power = () => {
    const measurements = useMeasurements();

    return (
        <div className={"power-section"}>
            <PowerSection />
            <BatterySection
                tags={[
                    <BatteryTag
                        name={"High voltage pack - 220 V"}
                        value={
                            (
                                measurements.boards[ObccuId][
                                    "power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                    />,
                    <BatteryTag
                        name={"Low voltage pack - 24 V"}
                        value={
                            (
                                measurements.boards[BmslId][
                                    "power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                    />,
                ]}
            />
            {/* <MotorSection /> */}
            <LevitationSection
                tags={[
                    <LevitationUnitTag
                        value={
                            (
                                measurements.boards[LcuMasterId][
                                    "hems_1_power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                        name={"HEMS 1"}
                        type={TagType.HEMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (
                                measurements.boards[LcuMasterId][
                                    "hems_2_power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                        name={"HEMS 2"}
                        type={TagType.HEMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (
                                measurements.boards[LcuMasterId][
                                    "hems_3_power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                        name={"HEMS 3"}
                        type={TagType.HEMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (
                                measurements.boards[LcuMasterId][
                                    "hems_4_power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                        name={"HEMS 4"}
                        type={TagType.HEMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (
                                measurements.boards[LcuMasterId][
                                    "ems_1_power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                        name={"EMS 1"}
                        type={TagType.EMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (
                                measurements.boards[LcuMasterId][
                                    "ems_2_power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                        name={"EMS 2"}
                        type={TagType.EMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (
                                measurements.boards[LcuMasterId][
                                    "ems_3_power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                        name={"EMS 3"}
                        type={TagType.EMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (
                                measurements.boards[LcuMasterId][
                                    "ems_4_power"
                                ] as NumericMeasurement
                            ).value.average
                        }
                        name={"EMS 4"}
                        type={TagType.EMS}
                    />,
                ]}
            />
        </div>
    );
};
