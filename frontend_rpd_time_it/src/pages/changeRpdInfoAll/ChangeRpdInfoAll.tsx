import { Navigate, useLocation } from "react-router-dom";
import { rpd, rpdinfo } from "../../interface/interface";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../elemOnPages/header/Header";
import SuaiButton from "../../elemOnPages/suaiButton/SuaiButton";
import Block from "../../elemOnPages/block/Block";
import eye from "./../../images/eye.svg"
import { Audio } from 'react-loader-spinner'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { ChangeRpdInfoByRpd } from "../../ApiAccess/RpdRepository";
import "./ChangeRpdInfoAll.css"



function ChangeRpdInfoAll() {
    const location = useLocation()
    const rpds: Array<rpd> = location.state
    const [rpdInfo, setRpdInfo] = useState<rpdinfo>({} as rpdinfo)
    const [redirect, setRedirect] = useState<boolean>(false)

    if (rpds.length == 0 || redirect) return <Navigate state={[]} to="/" />
    return (
        <div>
            <Header />

            <Block>
                <h1>У всех выбранных рпд будут заменены ниже приведенные поля </h1>
                <form>
                    <div className="form__div">
                        <label className="form__label">Характеристика предметной области</label>
                        <textarea className="form__textarea" value={rpdInfo.CharacteristicsOfTheSubjectArea}  onChange={(e: any) => { e.preventDefault(); setRpdInfo({ ...rpdInfo, CharacteristicsOfTheSubjectArea: e.target.value }) }}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Цели изучения дисциплины</label>
                        <textarea className="form__textarea"  value={rpdInfo.LearningGoals}  onChange={(e: any) => { e.preventDefault(); setRpdInfo({ ...rpdInfo, LearningGoals: e.target.value }) }}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Обязательная дисциплина или по выбору (Обазательная/Необязательная)</label>
                        <textarea className="form__textarea"  value={rpdInfo.RequaredOrNotRequiared}  onChange={(e: any) => { e.preventDefault(); setRpdInfo({ ...rpdInfo, RequaredOrNotRequiared: e.target.value }) }}></textarea>
                    </div>
                </form>
                {/*<Form>
                    <InputGroup>
                        <InputGroup.Text className="" style={{ width: "20wv" }}>Характеристика предметной области</InputGroup.Text>
                        <Form.Control value={rpdInfo.CharacteristicsOfTheSubjectArea} as="textarea" aria-label="With textarea" onChange={(e: any) => { e.preventDefault(); setRpdInfo({ ...rpdInfo, CharacteristicsOfTheSubjectArea: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text >Цели изучения дисциплины</InputGroup.Text>
                        <Form.Control value={rpdInfo.LearningGoals} as="textarea" aria-label="With textarea" onChange={(e: any) => { e.preventDefault(); setRpdInfo({ ...rpdInfo, LearningGoals: e.target.value }) }} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text >Обязательная дисциплина или по выбору (Обазательная/Необязательная)</InputGroup.Text>
                        <Form.Control value={rpdInfo.RequaredOrNotRequiared} as="textarea" aria-label="With textarea" onChange={(e: any) => { e.preventDefault(); setRpdInfo({ ...rpdInfo, RequaredOrNotRequiared: e.target.value }) }} />
                    </InputGroup>
    </Form>*/}
                <SuaiButton onClick={(e: Event) => {
                    e.preventDefault();



                    rpds.map(async rpd => {
                        let isSuccess = await ChangeRpdInfoByRpd(rpd, rpdInfo)
                        if (!isSuccess)
                            return

                    })
                    alert("Рпд изменены")
                    location.state = []
                    setRedirect(true)

                }} >Изменить все</SuaiButton>
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
                        {rpds.map((elem, index) =>
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

export default ChangeRpdInfoAll;