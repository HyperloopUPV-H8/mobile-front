import {ContentSection} from "./ContentSection.ts";

export class TextSection implements ContentSection {

    private readonly title: string;
    private readonly infoText: string;

    constructor(title: string, infoText: string) {
        if (title == undefined || title.length === 0) new Error("Title must not be undefined or empty");
        if (infoText == undefined || infoText.length === 0) new Error("InfoText must not be undefined or empty");
        this.title = title;
        this.infoText = infoText;
    }

    getTitle = () => this.title

    getInfoText = () => this.infoText

}