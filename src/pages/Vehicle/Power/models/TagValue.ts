export class TagValue {

    private readonly value: number
    private readonly unit: string

    constructor(value: number, unit: string) {
        if (value == null) new Error("Value must not be null");
        if (unit == null || unit.length === 0) new Error("Unit must not be null or empty");
        this.value = value;
        this.unit = unit;
    }

    getValue = () => this.value

    getUnit = () => this.unit

    getStringValue = () => this.value.toString() + " " + this.unit

}