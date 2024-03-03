import { Link, useLocation } from "react-router-dom"
import "./RezTable.css"
import Block from "../block/Block"
import { Table } from "react-bootstrap"
import SuaiButton from "../suaiButton/SuaiButton"

function RezTable(props: any) {
    const location = useLocation()
    const data = location.state
    return (
        <Block className={"RezTable " + props.className}>
            <Table striped bordered hover style={{textAlign:"center"}}>
                <thead>
                    <tr>
                        <th>Предмет</th>
                        <th>Руководитель направления</th>
                        <th>Кафедра</th>
                        <th>Форма обучения</th>
                        <th>Год</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.subject}</td>
                        <td>{data.director}</td>
                        <td>{data.department.toString()}</td>
                        <td>{data.formOfStudy}</td>
                        <td>{data.year.toString()}</td>
                        <td style={{width:"15vw"}}>
                            <div className="table__button">
                                <SuaiButton className="table__buttonTD1" href="/" select={true} options={[{name: ".pdf", value: "pdf"}, {name: ".doc", value: "doc"}]}>Скачать </SuaiButton>
                                <SuaiButton className="SuaiButton_white table__buttonTD2">Изменить</SuaiButton>
                                <SuaiButton className="SuaiButton_white table__buttonTD3">Удалить</SuaiButton>
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Block>
    )
}

export default RezTable