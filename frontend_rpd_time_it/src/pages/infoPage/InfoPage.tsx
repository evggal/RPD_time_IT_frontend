import Description from "../../elemOnPages/description/Description";
import Header from "../../elemOnPages/header/Header";
import InfoCard from "../../elemOnPages/infoCard/InfoCard";
import RezTable from "../../elemOnPages/rezTable/RezTable";
import "./InfoPage.css"


function InfoPage () {
    return (
        <div className="InfoPage">
        
        <InfoCard/>
        <Description/>
        <RezTable/>
        </div>
    )
}

export default InfoPage;