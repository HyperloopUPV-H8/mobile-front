import {PowerState} from "./pages/Vehicle/Power/models/PowerState.ts";
import {TextSection} from "./pages/Vehicle/Power/models/TextSection.ts";
import {TagSection} from "./pages/Vehicle/Power/models/TagSection.ts";
import {Tag} from "./pages/Vehicle/Power/models/Tag.ts";
import {TagValue} from "./pages/Vehicle/Power/models/TagValue.ts";
import {TagType} from "./pages/Vehicle/Power/models/TagType.ts";

export class PodDataClient {

    async loadPowerData() {
        // TODO
        // Here we will call the backend or use the library or commons or whatever
        // to get the data about the power, then we map it to our internal state object

        // const clientRawData = this.client.getPowerData()
        // const powerData = powerDataMapper.map(clientRawData)

        const powerData = await this.mockedData()
        return Promise.resolve(powerData)
    }

    private mockedData = async (): Promise<PowerState> => {
        const sections = [
            new TextSection("Power", "Kénos uses up to 5 Wats, the same as a domestic refrigerator. That is all it needs to freely move inside Atlas."),
            new TagSection("Battery Packs", this.mockedBatteryTags()),
            new TagSection("Motor consumption", this.mockedMotorTags()),
            new TagSection("Levitation Units consumption", this.mockedLevUnitTags()),
        ]
        return Promise.resolve(PowerState.from(sections))
    }

    private mockedBatteryTags = () => this.mockedBatteryNames.map(name => this.mockedTag(TagType.BATTERY, name))

    private mockedMotorTags = () => [Tag.withValue(new TagValue(12.32, "W")).withType(TagType.MOTOR).build()]

    private mockedLevUnitTags = () => this.mockedHemsNames.map(name => this.mockedTag(TagType.HEMS, name))
        .concat(this.mockedEmsNames.map(name => this.mockedTag(TagType.HEMS, name)))

    private mockedTag = (type: TagType, name: string) => Tag.withValue(new TagValue(12.32, "W")).withType(type).withName(name)

    private mockedBatteryNames = ["High pack", "Low pack"]
    private mockedHemsNames = ["HEMS 1", "HEMS 2", "HEMS 3", "HEMS 4"]
    private mockedEmsNames = ["EMS 1", "EMS 2", "EMS 3", "EMS 4"]
}