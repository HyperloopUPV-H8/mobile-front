import {ContentSection} from "./ContentSection.ts";

export class PowerState {

    private readonly sections: ContentSection[]

    private constructor(sections: ContentSection[]) {
        if (sections == undefined || sections.length <= 0) new Error("Sections must not be undefined or empty");
        this.sections = sections;
    }

    static init = (): PowerState => new PowerState([])

    static from = (sections: ContentSection[]): PowerState => new PowerState(sections)

    getSections = () => this.sections
}