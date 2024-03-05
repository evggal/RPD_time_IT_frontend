import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { rpd } from "../../interface/interface";
import eye from "./../../images/eye.svg"


function ManagePage(props: { selected: Array<rpd> }) {
    return (
        <div>

            <button>Изменить критические поля у выбранных РПД</button>
            <button>Изменить заполняемые поля у выбранных РПД</button>
            <button>Скачать все</button>
            <button>Удалить выбранные</button>
            <Table striped bordered hover style={{textAlign:"center"}}>
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Предмет</th>
                        <th>Кафедра</th>
                        <th>Форма обучения</th>
                        <th>Тип контроля</th>
                    </tr>
                </thead>
                <tbody>
                    {props.selected.map((elem, index) => 
                        <tr>
                        <td><Link to="/info" state={elem}><img src={eye} alt="Скачать" /></Link> </td>
                        <td>{elem.criticalInfo.name}</td>
                        <td>{elem.criticalInfo.numberOfDepartament}</td>
                        <td>{elem.criticalInfo.fo}</td>
                            <td>{elem.criticalInfo.typeOfControl}</td>
                            <td>{elem.rpdInfo.testProp}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
       </div>
    )
}

export default ManagePage;