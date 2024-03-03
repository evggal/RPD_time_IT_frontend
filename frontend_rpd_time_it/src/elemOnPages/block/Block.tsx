import "./Block.css"

function Block(props: any) {
    const { children } = props
    return (
        <div className={"block " + props.className}>
            {children}
        </div>
    )
}

export default Block