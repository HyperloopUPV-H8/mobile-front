import {Tag} from "../models/Tag.ts";
import {TagType} from "../models/TagType.ts";

type Props = {tag: Tag}

export const MotorTag = (props: Props) => {

    const tag = props.tag

    const isNotMotorTag = () => tag.getType() !== TagType.MOTOR

    const renderTag = () => {
        if (isNotMotorTag()) throw new Error('Tag is not a motor tag')
        return renderMotorTag()
    }

    const renderMotorTag = () => (
        <div className={'motor-tag'}>
            <h3>{tag.getName()}</h3>
            <div>
                <span>motor-image</span>
                <p>{tag.getStringValue()}</p>
            </div>
        </div>
    )

    return (renderTag())
}