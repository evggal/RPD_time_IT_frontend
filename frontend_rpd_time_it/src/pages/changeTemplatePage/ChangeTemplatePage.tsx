import { useState } from "react"
import ChangeTamplateForm from "../../elemOnPages/changeTamplateForm/ChangeTamplateForm"
import Header from "../../elemOnPages/header/Header"
import { Critical, rpd } from "../../interface/interface"
import "./ChangeTemplatePage.css"

function ChangeTemplatePage(props: {
}) {
    const [critical, setCritical] = useState<Critical>({} as Critical);
    return (
        <div className={"ChangeTemplatePage"}>
            <Header/>
            <ChangeTamplateForm setCritical={setCritical} />
        </div>
    )
}

export default ChangeTemplatePage