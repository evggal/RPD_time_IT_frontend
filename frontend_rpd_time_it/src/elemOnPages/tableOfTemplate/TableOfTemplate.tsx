import "./TableOfTemplate.css"
import Table from 'react-bootstrap/Table';
import eye from "./../../images/eye.svg"
import Block from "../block/Block";
import { Link } from "react-router-dom";
import { rpd } from "../../interface/interface";
import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner'
import SuaiButton from "../suaiButton/SuaiButton";

function TableOfTemplate(props:
    {
        rpds: Array<rpd>,
        Loader: boolean
        setSelectedRpds: React.Dispatch<React.SetStateAction<rpd[]>>
        selected: Array<rpd>
    }) {
    console.log(props.Loader)
    if (props.Loader) {
        return <Block className="TableOfTemplate">
            <Audio
                height="200"
                width="200"
                color="#3498db"
                ariaLabel="loading"

            />

        </Block>
    }
    console.log(props.selected)
    const a = { criticalInfo: { name: "name", numberOfDepartament: "numberOfDepartament", fo: "fo", typeOfControl: "typeOfControl" } }
    return (
        <Block className="TableOfTemplate">

            {props.selected.length === props.rpds.length
                ? <SuaiButton onClick={() => props.setSelectedRpds([])}>Убрать все</SuaiButton>
                : <SuaiButton onClick={() => props.setSelectedRpds(prev => [...prev, ...props.rpds.map((elem, index) => elem)])}>Выбрать все</SuaiButton>}
            <Link to="/manage" state={props.rpds}><SuaiButton className="SuaiButton_white">Управлять выбранными</SuaiButton></Link>
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
                    <tr>
                        <td><Link to="/changeTemplate"><img src={eye} alt="Скачать" /></Link> </td>
                        <td colSpan={4}>Создать новый РПД</td>
                    </tr>
                    {props.rpds.map((elem, index) =>
                        <tr>
                            <td>
                                <input type="checkbox" checked={props.selected.includes(elem)} onChange={(value) => {
                                    if (value.target.checked) {
                                        props.setSelectedRpds([...props.selected, elem])
                                    }
                                    else {
                                        props.setSelectedRpds(props.selected.filter(item => item !== elem))
                                    }
                                }}></input>
                            </td>
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