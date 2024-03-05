import "./TableOfTemplate.css"
import Table from 'react-bootstrap/Table';
import eye from "./../../images/eye.svg"
import Block from "../block/Block";
import { Link } from "react-router-dom";
import { rpd } from "../../interface/interface";
import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner'

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
            color="green"
            ariaLabel="loading"

            />
        </Block>
    }
    console.log(props.selected)
    return (
        <Block className="TableOfTemplate">
            
            {props.selected.length === props.rpds.length
                ? <button onClick={() => props.setSelectedRpds([])}>убрать все</button>
                : <button onClick={() => props.setSelectedRpds(prev => [...prev, ...props.rpds.map((elem, index) => elem)])}>Выбрать все</button>}
            <Link to="/manage" state={props.rpds}>Управлять выбранными</Link>
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

                    {props.rpds.map((elem, index) => 
                        <tr>
                            <td><input type="checkbox" checked={props.selected.includes(elem)} onChange={(value) => {
                                if (value.target.checked) {
                                    props.setSelectedRpds([...props.selected, elem])
                                }
                                else {
                                    props.setSelectedRpds(props.selected.filter(item => item !== elem))
                                }
                            }}></input></td>


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