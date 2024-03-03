import { useLocation } from "react-router-dom";
import Block from "../../elemOnPages/block/Block";
import "./InfoCard.css"


function InfoCard () {
    const location = useLocation()
    const data = location.state
    console.log(data)
    return (
        <Block className="InfoCard">
            <h1>{data.subject}</h1>
            <p>{data.department}</p>
            <p>{data.director}</p>
            <p>{data.formOfStudy}</p>
        </Block>
    )
}

export default InfoCard;