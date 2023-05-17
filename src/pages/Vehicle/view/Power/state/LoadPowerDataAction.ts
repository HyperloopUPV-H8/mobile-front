import {Action} from "kuasr-flux";
import {Actions} from "../../../../../Actions.ts";

export class LoadPowerDataAction extends Action {

    constructor() {
        super(Actions.VEHICLE_POWER_LOAD, {})
    }

}