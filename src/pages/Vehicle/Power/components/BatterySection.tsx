
type Props = {
    tags: [React.ReactNode, React.ReactNode]
}
export const BatterySection = (props: Props) => {

    return (
        <section className={'data-section'}>
            <h2>Battery Packs</h2>
            <div className={'tag-grid'}>
                {props.tags.map(it => it)}
            </div>
        </section>
    )
}