import { useLocation } from "react-router-dom";
import Block from "../../elemOnPages/block/Block";
import "./Description.css"


function Description () {
    const location = useLocation()
    const data = location.state
    console.log(data)
    return (
        <Block className="Description">
            <p>Тестовое поле - {data.rpdInfo.testProp}</p>
        </Block>
    )
}

export default Description;