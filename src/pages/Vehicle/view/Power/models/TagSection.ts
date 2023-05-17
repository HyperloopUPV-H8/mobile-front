import {ContentSection} from "./ContentSection.ts";
import {Tag} from "./Tag.ts";

export class TagSection implements ContentSection {
    private readonly title: string;
    private readonly tags: Tag[];

    constructor(title: string, tags: Tag[]) {
        if (title == undefined || title.length === 0) new Error("Title must not be null or empty");
        this.title = title;
        this.tags = tags;
    }

    getTitle = () => this.title

    getTags = () => this.tags

}