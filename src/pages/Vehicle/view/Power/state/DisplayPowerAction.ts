import {Action} from "kuasr-flux";
import {PowerState} from "./PowerState.ts";
import {Actions} from "../../../../../Actions.ts";

export class DisplayPowerAction extends Action {

    constructor(state: PowerState) {
        super(Actions.VEHICLE_POWER_DISPLAY, state)
    }

}