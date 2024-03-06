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
    const [CharacteristicsOfTheSubjectArea, setCharacteristicsOfTheSubjectArea] = useState<string>("")
    const [LearningGoals, setLearningGoals] = useState<string>("")
    const [RequaredOrNotRequiared, setRequaredOrNotRequiared] = useState<string>("")
    const [DirPosAcadDegree, setDirPosAcadDegree] = useState<string>("")
    const [Initials, setInitials] = useState<string>("")
    const [CreatorInitials, setCreatorInitials] = useState<string>("")
    const [CreatorDegree, setCreatorDegree] = useState<string>("")
    const [HeadDegree, setHeadDegree] = useState<string>("")
    const [HeadInitials, setHeadInitials] = useState<string>("")
    const [RespDegree, setRespDegree] = useState<string>("")
    const [RespInitials, setRespInitials] = useState<string>("")
    const [ViceDegree, setViceDegree] = useState<string>("")
    const [ViceInitials, setViceInitials] = useState<string>("")
    const [Program, setProgram] = useState<string>("")
    const [ZachHours, setZachHours] = useState<string>("")
    const [TheNameOfTheOrientation, setTheNameOfTheOrientation] = useState<string>("")
    const [NameOfTheFieldOfStudy, setNameOfTheFieldOfStudy] = useState<string>("")

    if (rpds.length == 0 || redirect) return <Navigate state={[]} to="/" />
    return (
        <div>
            <Header />

            <Block>
                <h1>У всех выбранных рпд будут заменены ниже приведенные поля </h1>
                <form>
                <div className="form__div">
                        <label className="form__label">Название предметной области</label>
                        <textarea className="form__textarea" value={NameOfTheFieldOfStudy}  onChange={(e : any) => { e.preventDefault(); setNameOfTheFieldOfStudy(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Характеристика предметной области</label>
                        <textarea className="form__textarea" value={CharacteristicsOfTheSubjectArea}  onChange={(e : any) => { e.preventDefault(); setCharacteristicsOfTheSubjectArea(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Цели изучения дисциплины</label>
                        <textarea className="form__textarea"  value={LearningGoals}  onChange={(e: any) => { e.preventDefault(); setLearningGoals(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Обязательная дисциплина или по выбору (Обазательная/Необязательная)</label>
                        <textarea className="form__textarea"  value={RequaredOrNotRequiared}  onChange={(e: any) => { e.preventDefault(); setRequaredOrNotRequiared(e.target.value)}}></textarea>
                </div>
                <div className="form__div">
                        <label className="form__label">Должность, звание директора</label>
                        <textarea className="form__textarea" value={DirPosAcadDegree}  onChange={(e : any) => { e.preventDefault(); setDirPosAcadDegree(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Инициалы фамилия</label>
                        <textarea className="form__textarea"  value={Initials}  onChange={(e: any) => { e.preventDefault(); setInitials(e.target.value)}}></textarea>
                </div>
                <div className="form__div">
                        <label className="form__label">Программу составил Должность, звание директора</label>
                        <textarea className="form__textarea"  value={CreatorDegree}  onChange={(e: any) => { e.preventDefault(); setCreatorDegree(e.target.value)}}></textarea>
                </div>
                    <div className="form__div">
                        <label className="form__label">Программу составил Инициалы фамилия</label>
                        <textarea className="form__textarea"  value={CreatorInitials}  onChange={(e: any) => { e.preventDefault(); setCreatorInitials(e.target.value)}}></textarea>
                </div>
                <div className="form__div">
                        <label className="form__label">Заведующий кафедрой уч. Степень, звание</label>
                        <textarea className="form__textarea" value={HeadDegree}  onChange={(e : any) => { e.preventDefault(); setHeadDegree(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Заведующий кафедрой инициалы</label>
                        <textarea className="form__textarea"  value={HeadInitials}  onChange={(e: any) => { e.preventDefault(); setHeadInitials(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Ответственный за ОП ВО звание, уч. Степень</label>
                        <textarea className="form__textarea"  value={RespDegree}  onChange={(e: any) => { e.preventDefault(); setRespDegree(e.target.value)}}></textarea>
                </div>
                <div className="form__div">
                        <label className="form__label">Ответственный за ОП ВО инициалы фамилия</label>
                        <textarea className="form__textarea" value={RespInitials}  onChange={(e : any) => { e.preventDefault(); setRespInitials(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Заместитель директора института/ декана факультета звание, уч. Степень</label>
                        <textarea className="form__textarea"  value={ViceDegree}  onChange={(e: any) => { e.preventDefault(); setViceDegree(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Заместитель директора института/ декана факультета инициалы фамилия</label>
                        <textarea className="form__textarea"  value={ViceInitials}  onChange={(e: any) => { e.preventDefault(); setViceInitials(e.target.value)}}></textarea>
                </div>
                <div className="form__div">
                        <label className="form__label">Программа </label>
                        <textarea className="form__textarea" value={Program}  onChange={(e : any) => { e.preventDefault(); setProgram(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">кол-во зачетных часов</label>
                        <textarea className="form__textarea"  value={ZachHours}  onChange={(e: any) => { e.preventDefault(); setZachHours(e.target.value)}}></textarea>
                    </div>
                    <div className="form__div">
                        <label className="form__label">Направленность программы</label>
                        <textarea className="form__textarea"  value={TheNameOfTheOrientation}  onChange={(e: any) => { e.preventDefault(); setTheNameOfTheOrientation(e.target.value)}}></textarea>
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
                        let isSuccess = await ChangeRpdInfoByRpd(rpd, {
                            CharacteristicsOfTheSubjectArea: CharacteristicsOfTheSubjectArea,
                            LearningGoals: LearningGoals,
                            RequaredOrNotRequiared: RequaredOrNotRequiared,
                            DirPosAcadDegree,
                            Initials,
                            CreatorInitials,
                            CreatorDegree,
                            HeadDegree,
                            HeadInitials,
                            RespDegree,
                            RespInitials,
                            ViceDegree,
                            ViceInitials,
                            Program,
                            ZachHours,
                            TheNameOfTheOrientation,
                            NameOfTheFieldOfStudy
                            
                        })
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