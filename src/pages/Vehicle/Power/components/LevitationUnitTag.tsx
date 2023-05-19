import {Tag} from "../models/Tag.ts";
import {TagType} from "../models/TagType.ts";

type Props = {tag: Tag}

export const LevitationUnitTag = (props: Props) => {

    const tag = props.tag

    const levitationUnitTagTypes = new Set([TagType.HEMS, TagType.EMS])

    const isNotLevitationUnitTag = () => !levitationUnitTagTypes.has(tag.getType())

    const renderTag = () => {
        if (isNotLevitationUnitTag()) throw new Error('Tag is not a levitation unit tag')
        return renderLevitationUnitTag()
    }

    const getIcon = () => tag.getType() === TagType.HEMS ? 'hems-icon' : 'ems-icon'

    const renderLevitationUnitTag = () => (
        <div className={'levitation-unit-tag'}>
            <h3>{tag.getName()}</h3>
            <div>
                <span>{getIcon()}</span>
                <p>{tag.getStringValue()}</p>
            </div>
        </div>
    )

    return (renderTag())
}