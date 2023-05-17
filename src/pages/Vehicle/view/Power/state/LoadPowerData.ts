import {Action, ActionThunk} from "kuasr-flux";
import {Actions} from "../../../../../Actions.ts";
import {PodDataClient} from "../../../../../PodDataClient.ts";

const client = new PodDataClient()

export const loadPowerData = new ActionThunk((action: Action) => {
    if (action.type == Actions.VEHICLE_POWER_LOAD) client.loadPowerData()
})