import "./PageTable.css"
import Filter from "../../elemOnPages/filter/Filter";
import Header from "../../elemOnPages/header/Header";
import TableOfTemplate from "../../elemOnPages/tableOfTemplate/TableOfTemplate";
import { useState } from "react";
import { rpd } from "../../interface/interface";

function PageTable(props: {
    setSelectedRpds: React.Dispatch<React.SetStateAction<rpd[]>>,
    selected: Array<rpd>
    setRpds: React.Dispatch<React.SetStateAction<rpd[]>>,
    rpds: Array<rpd>
}) {
    const [Loader, setLoader] = useState<boolean>(false)
    return (
        <div className="PageTable">
        
        <Filter setSelectedRpds={props.setSelectedRpds} setLoader={setLoader} setRpds = {props.setRpds}/>
        <TableOfTemplate selected={props.selected} setSelectedRpds={props.setSelectedRpds} Loader={Loader} rpds = {props.rpds} />
        </div>
    )
}

export default PageTable;