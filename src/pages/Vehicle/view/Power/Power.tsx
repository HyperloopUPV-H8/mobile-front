import {useEffect, useReducer, useState} from "react";
import store, {PowerStore} from "./state/PowerStore.ts";
import {ActionGenerator} from "./state/ActionGenerator.ts";
import {DataSection} from "./components/DataSection.tsx";
import {Cache} from "../../../../Cache.ts";

export const Power = () => {

    const cache = new Cache<PowerStore>()
    const [powerStore] = useState(store)
    const [_, forceUpdate] = useReducer(x => x + 1, 0)

    powerStore.addListener(() => forceUpdate())

    useEffect(() => {
        if (!cache.compareAndUpdate(powerStore)) ActionGenerator.loadPowerData()
    })

    const renderSections = () => powerStore.getSections().map((it, index) => <DataSection key={index} section={it} />)

    return (
        <main>
            {renderSections()}
        </main>
    )
}