import {DataSection} from "./components/DataSection.tsx";
import {PowerState} from "./models/PowerState.ts";
import './Power.scss'

type Props = {state: PowerState}

export const Power = (props: Props) => {

    const state = props.state

    const renderSections = () => state.getSections().map((it, index) => <DataSection key={index} section={it} />)

    return (
        <div className={'power-section'}>
            {renderSections()}
        </div>
    )
}