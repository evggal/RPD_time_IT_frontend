import { useLocation } from "react-router-dom";
import Block from "../../elemOnPages/block/Block";
import "./Description.css"
import { rpd } from "../../interface/interface";


function Description () {
    const location = useLocation()
    const data : rpd = location.state
    console.log(data.rpdInfo["RequaredOrNotRequiared"])
    return (
        <Block className="Description">

        </Block>
    )
}

export default Description;