import {Action, Dispatcher} from "kuasr-flux";
import {loadPowerData} from "./LoadPowerData.ts";

class PowerDispatcher extends Dispatcher<Action> {
    constructor() {
        super();
    }
}

const dispatcher: PowerDispatcher = new PowerDispatcher();
const loadPowerDataThunk: string = dispatcher.register(loadPowerData);

export {loadPowerDataThunk};
export default dispatcher;