import {TextSection} from "../models/TextSection.ts";

type Props = {section: TextSection}

export const TextDataSection = (props: Props) => {

    const section = props.section

    return (
        <section>
            <p>{section.getInfoText()}</p>
        </section>
    )

}