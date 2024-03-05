import { useState } from "react"
import ChangeTamplateForm from "../../elemOnPages/changeTamplateForm/ChangeTamplateForm"
import Header from "../../elemOnPages/header/Header"
import { rpd } from "../../interface/interface"
import "./ChangeTemplatePage.css"

function ChangeTemplatePage(props: {
    setSelectedRpds: React.Dispatch<React.SetStateAction<rpd[]>>,
    selected: Array<rpd>
    setRpds: React.Dispatch<React.SetStateAction<rpd[]>>,
}) {
    const [Loader, setLoader] = useState<boolean>(false)
    return (
        <div className={"ChangeTemplatePage"}>
            <Header/>
            <ChangeTamplateForm  setSelectedRpds={props.setSelectedRpds} setLoader={setLoader} setRpds = {props.setRpds}/>
        </div>
    )
}

export default ChangeTemplatePage