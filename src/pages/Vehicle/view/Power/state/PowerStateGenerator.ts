import {PowerState} from "./PowerState.ts";

export class PowerStateGenerator {

    static fromVehiclePowerDisplay = (state: PowerState, payload: PowerState): PowerState => {
        if (payload == undefined) return PowerState.from(state.getSections())
        return PowerState.from(payload.getSections())
    }


}