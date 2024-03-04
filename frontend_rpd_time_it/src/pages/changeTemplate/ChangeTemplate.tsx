import "./ChangeTemplate.css"

function ChangeTemplate(props: any) {
    const { children } = props
    return (
        <div className={"ChangeTemplate " + props.className}>
            {children}
        </div>
    )
}

export default ChangeTemplate