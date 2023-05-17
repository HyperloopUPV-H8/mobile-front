import {ContentSection} from "../models/ContentSection.ts";
import {TextSection} from "../models/TextSection.ts";
import {TagSection} from "../models/TagSection.ts";
import {Tag} from "../models/Tag.ts";
import {BatteryTag} from "./BatteryTag.tsx";
import {TagType} from "../models/TagType.ts";

type Props = {section: ContentSection}

export const DataSection = (props: Props) => {

    const section = props.section

    const renderTags = () => {
        if (section instanceof TextSection) return renderTextSection(section as TextSection)
        return renderTagSection(section as TagSection)
    }

    const renderTextSection = (section: TextSection) => (
        <p>section</p> // TODO: Create component
    )

    const renderTagSection = (section: TagSection) => section.getTags().map((it, index) => renderTag(it, index))

    const renderTag = (tag: Tag, index: number) => {
        if (tag.getType() == TagType.BATTERY) return (<BatteryTag key={index} tag={tag} />)
        return (<></>)
    }

    return (
        <section>
            <h2>{section.getTitle()}</h2>
            {renderTags()}
        </section>
    )
}