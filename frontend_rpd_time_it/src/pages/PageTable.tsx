import "./PageTable.css"
import Filter from "../elemOnPages/filter/Filter";
import Header from "../elemOnPages/header/Header";
import TableOfTemplate from "../elemOnPages/tableOfTemplate/TableOfTemplate";

function PageTable () {
    return (
        <div className="PageTable">
        <Header/>
        <Filter/>
        <TableOfTemplate/>
        </div>
    )
}

export default PageTable;