import './Power.scss'
import {PowerSection} from "./components/PowerSection.tsx";
import {BatterySection} from "./components/BatterySection.tsx";
import {BatteryTag} from "./components/BatteryTag.tsx";
import {MotorSection} from "./components/MotorSection.tsx";
import {LevitationUnitTag} from "./components/LevitationUnitTag.tsx";
import {LevitationSection} from "./components/LevitationSection.tsx";
import {TagType} from "./models/TagType.ts";

export const Power = () => {

    return (
        <div className={'power-section'}>
            <PowerSection />
            <BatterySection tags={[
                <BatteryTag name={'High pack'} value={12.31} />,
                <BatteryTag name={'High pack'} value={12.31} />
            ]} />
            <MotorSection />
            <LevitationSection tags={[
                <LevitationUnitTag value={12.31} name={'HEMS 1'} type={TagType.HEMS} />,
                <LevitationUnitTag value={12.31} name={'HEMS 2'} type={TagType.HEMS} />,
                <LevitationUnitTag value={12.31} name={'HEMS 3'} type={TagType.HEMS} />,
                <LevitationUnitTag value={12.31} name={'HEMS 4'} type={TagType.HEMS} />,
                <LevitationUnitTag value={12.31} name={'EMS 1'} type={TagType.EMS} />,
                <LevitationUnitTag value={12.31} name={'EMS 2'} type={TagType.EMS} />,
                <LevitationUnitTag value={12.31} name={'EMS 3'} type={TagType.EMS} />,
                <LevitationUnitTag value={12.31} name={'EMS 4'} type={TagType.EMS} />
            ]} />
        </div>
    )
}