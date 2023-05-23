type Props = {
    tags: [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode]
}
export const LevitationSection = (props: Props) => {

    return (
        <section className={'data-section'}>
            <h2>Levitation Units consumption</h2>
            <div className={'tag-grid'}>
                {props.tags.map(it => it)}
            </div>
        </section>
    )
}