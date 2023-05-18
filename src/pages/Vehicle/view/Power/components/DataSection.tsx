import {ContentSection} from "../models/ContentSection.ts";
import {TextSection} from "../models/TextSection.ts";
import {TagSection} from "../models/TagSection.ts";
import {Tag} from "../models/Tag.ts";
import {BatteryTag} from "./BatteryTag.tsx";
import {TagType} from "../models/TagType.ts";
import {TextDataSection} from "./TextDataSection.tsx";
import {MotorTag} from "./MotorTag.tsx";
import {LevitationUnitTag} from "./LevitationUnitTag.tsx";

type Props = {section: ContentSection}

export const DataSection = (props: Props) => {

    const section = props.section

    const tagComponentMapping = new Map([
        [TagType.BATTERY, (tag: Tag, index: number) => <BatteryTag key={index} tag={tag} />],
        [TagType.MOTOR,   (tag: Tag, index: number) => <MotorTag key={index} tag={tag} />],
        [TagType.HEMS,    (tag: Tag, index: number) => <LevitationUnitTag key={index} tag={tag} />],
        [TagType.EMS,     (tag: Tag, index: number) => <LevitationUnitTag key={index} tag={tag} />]
    ])

    const renderTags = () => {
        if (section instanceof TextSection) return renderTextSection(section as TextSection)
        return renderTagSection(section as TagSection)
    }

    const renderTextSection = (section: TextSection) => (<TextDataSection section={section} />)

    const renderTagSection = (section: TagSection) => section.getTags().map((it, index) => renderTag(it, index))

    const renderTag = (tag: Tag, index: number) => tagComponentMapping.get(tag.getType())?.(tag, index)

    return (
        <section>
            <h2>{section.getTitle()}</h2>
            {renderTags()}
        </section>
    )
}