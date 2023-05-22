import {MotorTag} from "./MotorTag.tsx";

export const MotorSection = () => {

    return (
        <section className={'data-section'}>
            <h2>Motor consumption</h2>
            <div className={'tag-grid'}>
                <MotorTag value={12.31} />
            </div>
        </section>
    )
}