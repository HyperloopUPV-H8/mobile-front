import "./Power.scss";
import { PowerSection } from "./components/PowerSection.tsx";
import { BatterySection } from "./components/BatterySection.tsx";
import { BatteryTag } from "./components/BatteryTag.tsx";
import { MotorSection } from "./components/MotorSection.tsx";
import { LevitationUnitTag } from "./components/LevitationUnitTag.tsx";
import { LevitationSection } from "./components/LevitationSection.tsx";
import { TagType } from "./models/TagType.ts";
import { useMeasurements } from "hooks/useMeasurements.ts";
import { NumericMeasurement } from "common";

export const Power = () => {
    const measurements = useMeasurements();

    return (
        <div className={"power-section"}>
            <PowerSection />
            <BatterySection
                tags={[
                    <BatteryTag
                        name={"High pack"}
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                    />,
                    <BatteryTag
                        name={"High pack"}
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                    />,
                ]}
            />
            <MotorSection />
            <LevitationSection
                tags={[
                    <LevitationUnitTag
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                        name={"HEMS 1"}
                        type={TagType.HEMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                        name={"HEMS 2"}
                        type={TagType.HEMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                        name={"HEMS 3"}
                        type={TagType.HEMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                        name={"HEMS 4"}
                        type={TagType.HEMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                        name={"EMS 1"}
                        type={TagType.EMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                        name={"EMS 2"}
                        type={TagType.EMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                        name={"EMS 3"}
                        type={TagType.EMS}
                    />,
                    <LevitationUnitTag
                        value={
                            (measurements["airgap_1"] as NumericMeasurement)
                                .value.average
                        }
                        name={"EMS 4"}
                        type={TagType.EMS}
                    />,
                ]}
            />
        </div>
    );
};
