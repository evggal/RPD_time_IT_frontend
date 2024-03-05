import "./TableOfTemplate.css"
import Table from 'react-bootstrap/Table';
import eye from "./../../images/eye.svg"
import Block from "../block/Block";
import { Link } from "react-router-dom";
import { rpd } from "../../interface/interface";
import { useEffect, useState } from "react";

function TableOfTemplate(props:
    {
        rpds: Array<rpd>,
        Loader: boolean
    }) {
    console.log(props.Loader)
    if (props.Loader) {
        return <h1>LOAD</h1>
    }
    return (
        <Block className="TableOfTemplate">
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
                <tr>
                        <td><Link to="/info" state={{criticalInfo:{name:"Информатика",numberOfDepartament:"Кафедра 41",fo:"О",typeOfControl:"Экзамен"}}}><img src={eye} alt="Скачать" /></Link> </td>
                        <td>Информатика</td>
                        <td>Кафедра 41</td>
                        <td>О</td>
                        <td>Экзамен</td>
                    </tr>
                    {props.rpds.map((elem) => 
                    <tr>
                        <td><Link to="/info" state={elem}><img src={eye} alt="Скачать" /></Link> </td>
                        <td>{elem.criticalInfo.name}</td>
                        <td>Кафедра {elem.criticalInfo.numberOfDepartament}</td>
                        <td>{elem.criticalInfo.fo}</td>
                        <td>{elem.criticalInfo.typeOfControl}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </Block>
    )
}

export default TableOfTemplate;