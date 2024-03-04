import "./PageTable.css"
import Filter from "../../elemOnPages/filter/Filter";
import Header from "../../elemOnPages/header/Header";
import TableOfTemplate from "../../elemOnPages/tableOfTemplate/TableOfTemplate";
import { useState } from "react";
import { rpd } from "../../interface/interface";

function PageTable() {
    const [rpds, setRpds] = useState<Array<rpd>>([])
    const [Loader, setLoader] = useState<boolean>(false)


    return (
        <div className="PageTable">
        <Header/>
        <Filter setLoader={setLoader} setRpds = {setRpds}/>
        <TableOfTemplate Loader={Loader} rpds = {rpds} />
        </div>
    )
}

export default PageTable;