import {TagValue} from "./TagValue.ts";
import {TagType} from "./TagType.ts";

export class Tag {

    private readonly value: TagValue
    private readonly type: TagType
    private readonly name: string | null

    protected constructor(value: TagValue, type: TagType, name: string | null) {
        if (name == undefined || name.length === 0) new Error("Name must not be undefined or empty");
        if (type == undefined) new Error("Type must not be undefined");
        this.name = name;
        this.type = type;
        this.value = value;
    }

    static withValue(value: TagValue): WithType {
        return new WithType(value);
    }

    getName = () => this.name

    getValue = () => this.value

    getType = () => this.type

    getStringValue = () => this.value.getStringValue()
}

class WithType {

    private readonly value: TagValue

    constructor(value: TagValue) {
        this.value = value;
    }

    withType = (type: TagType) => new Builder(this.value, type)

}

class Builder {

    private readonly value: TagValue
    private readonly type: TagType

    constructor(value: TagValue, type: TagType) {
        this.value = value;
        this.type = type;
    }

    build = () => new Tag(this.value, this.type, null)

    withName = (name: string) => new Tag(this.value, this.type, name)
}