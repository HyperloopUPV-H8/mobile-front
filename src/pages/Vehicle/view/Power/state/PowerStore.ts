import {Action, Dispatcher, Store} from "kuasr-flux";
import {PowerState} from "./PowerState.ts";
import {Actions} from "../../../../../Actions.ts";
import {PowerStateGenerator} from "./PowerStateGenerator.ts";
import dispatcher from "./PowerDispatcher.ts";

type Reducer = (state: PowerState, payload: PowerState) => PowerState

export class PowerStore extends Store<PowerState> {

    private readonly actions: Map<Actions, Reducer> = new Map<Actions, Reducer>([
        [Actions.VEHICLE_POWER_DISPLAY, PowerStateGenerator.fromVehiclePowerDisplay]
    ])

    constructor(dispatcher: Dispatcher<Action>) {
        super(dispatcher);
    }

    getInitialState(): PowerState {
        return PowerState.init();
    }

    reduce(state: PowerState, action: Action): PowerState {
        for (const [actionType, reducer] of this.actions) {
            if (action.type === actionType) return  reducer(state, action.payload as PowerState)
        }
        return state;
    }

    hasInitialState = () => this.getState().getSections().length == 0

    getSections = () => this.getState().getSections()

}

export default new PowerStore(dispatcher);