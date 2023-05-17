import {PowerState} from "./PowerState.ts";
import dispatcher from "./PowerDispatcher.ts";
import {DisplayPowerAction} from "./DisplayPowerAction.ts";
import {LoadPowerDataAction} from "./LoadPowerDataAction.ts";

export class ActionGenerator {

    static displayVehiclePower = (state: PowerState) => dispatcher.dispatch(new DisplayPowerAction(state))

    static loadPowerData = () => {
        dispatcher.dispatch(new LoadPowerDataAction())
    }

}