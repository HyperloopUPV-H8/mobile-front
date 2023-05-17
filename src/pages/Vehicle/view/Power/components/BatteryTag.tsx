import {Tag} from "../models/Tag.ts";
import {TagType} from "../models/TagType.ts";
import '../styles/BatteryTag.scss'

type Props = {tag: Tag}

export const BatteryTag = (props: Props) => {

    const tag = props.tag

    const isNotBatteryTag = () => tag.getType() !== TagType.BATTERY

    const renderTag = () => {
        if (isNotBatteryTag()) throw new Error('Tag is not a battery tag')
        return renderBatteryTag()
    }

    const renderBatteryTag = () => (
        <div className={'battery-tag'}>
            <h3>{tag.getName()}</h3>
            <div>
                <span>icon</span>
                <p>{tag.getStringValue()}</p>
            </div>
        </div>
    )

    return (renderTag())
}