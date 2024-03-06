import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { rpd } from "../../interface/interface";
import eye from "./../../images/eye.svg"
import Header from "../../elemOnPages/header/Header";
import Block from "../../elemOnPages/block/Block";
import SuaiButton from "../../elemOnPages/suaiButton/SuaiButton";


function ManagePage(props: { selected: Array<rpd> }) {
    return (
        <div>
            <Header />
            <Block>
                <SuaiButton className="SuaiButton_white">Изменить критические поля у выбранных РПД</SuaiButton>
                <Link state={props.selected} to="/ChangeRpdInfo">
                <SuaiButton className="SuaiButton_white">Изменить заполняемые поля у выбранных РПД</SuaiButton>
                </Link>
                <SuaiButton className="SuaiButton_white">Скачать все</SuaiButton>
                <SuaiButton className="SuaiButton_white">Удалить выбранные</SuaiButton>
            </Block>
            <Block>
                <Table striped bordered hover style={{ textAlign: "center" }}>

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
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Block>
        </div>
    )
}

export default ManagePage;