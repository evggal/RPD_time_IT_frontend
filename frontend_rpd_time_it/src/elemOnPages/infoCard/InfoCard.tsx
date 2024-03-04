import { useLocation } from "react-router-dom";
import Block from "../../elemOnPages/block/Block";
import "./InfoCard.css"
import { rpd } from "../../interface/interface";


function InfoCard () {
    const location = useLocation()
    const data : rpd = location.state
    console.log(data)
    return (
        <Block className="InfoCard">
            <h1>{data.criticalInfo.name}</h1>
            <p>{data.criticalInfo.numberOfDepartament}</p>
            <p>{data.criticalInfo.groupName}</p>
            <p>{data.criticalInfo.faculty}</p>
        </Block>
    )
}

export default InfoCard;