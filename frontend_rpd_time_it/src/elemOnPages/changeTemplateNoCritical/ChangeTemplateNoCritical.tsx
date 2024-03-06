import Block from "../block/Block";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ChangeTemplateNoCritical.css"
import { CreateRpd, GetAllCriticalByCriticals } from "../../ApiAccess/RpdRepository";
import { Critical, rpdinfo, rpd } from "../../interface/interface";
import SuaiButton from "../suaiButton/SuaiButton";
import { Audio } from 'react-loader-spinner'

export default function ChangeTemplateNoCritical() {
    const location = useLocation()
    const data : Critical = location.state
    const [CharacteristicsOfTheSubjectArea, setCharacteristicsOfTheSubjectArea] = useState<string>("")
    const [LearningGoals, setLearningGoals] = useState<string>("")
    const [RequaredOrNotRequiared, setRequaredOrNotRequiared] = useState<string>("")
    const [DirPosAcadDegree, setDirPosAcadDegree] = useState<string>("")
    const [Initials, setInitials] = useState<string>("")
    const [CreatorInitials, setCreatorInitials] = useState<string>("")
    const [CreatorDegree, setCreatorDegree] = useState<string>("")
    const [HeadDegree, setHeadDegree] = useState<string>("")
    const [HeadInitials, setHeadInititials] = useState<string>("")
    const [RespDegree, setRespDegree] = useState<string>("")
    const [RespInitials, setRespInitials] = useState<string>("")
    const [ViceDegree, setViceDegree] = useState<string>("")
    const [ViceInitials, setViceInitials] = useState<string>("")
    const [Program, setProgram] = useState<string>("")
    const [ZachHours, setZachHours] = useState<string>("")
    const [TheNameOfTheOrientation, setTheNameOfTheOrientation] = useState<string>("")
    const [NameOfTheFieldOfStudy, setNameOfTheFieldOfStudy] = useState<string>("")

    const [Load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        
        const init = async () => {
            setLoad(true)
            const status: Critical[] = await GetAllCriticalByCriticals(data)
            setLoad(false)
            if (status.length == 0) {
                alert("idi otsuda")
                return <Navigate to="/TableOfTemplate" />
            }
        }
        init()

    },[])
    const CreateRpdAsync = async () => {
        let rpd: rpd = {
            criticalInfo: data,
            rpdInfo: {
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
                
            }
        }
        await CreateRpd(rpd)
    }
    if(Load){
        return <Block className="TableOfTemplate">
        <Audio
            height="200"
            width="200"
            color="#3498db"
            ariaLabel="loading"

        />

    </Block>
    }
    return (
        <Block>
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
                        <textarea className="form__textarea"  value={HeadInitials}  onChange={(e: any) => { e.preventDefault(); setHeadInititials(e.target.value)}}></textarea>
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
                    <InputGroup.Text >Характеристика предметной области</InputGroup.Text>
                        <Form.Control value={CharacteristicsOfTheSubjectArea} as="textarea" aria-label="With textarea" onChange={(e : any) => { e.preventDefault(); setCharacteristicsOfTheSubjectArea(e.target.value)}}/>
                    </InputGroup>
                    <InputGroup>
                    <InputGroup.Text >Цели изучения дисциплины</InputGroup.Text>
                        <Form.Control value={LearningGoals} as="textarea" aria-label="With textarea" onChange={(e: any) => { e.preventDefault(); setLearningGoals(e.target.value)}}/>
                    </InputGroup>
                    <InputGroup>
                    <InputGroup.Text >Обязательная дисциплина или по выбору (Обазательная/Необязательная)</InputGroup.Text>
                        <Form.Control value={RequaredOrNotRequiared} as="textarea" aria-label="With textarea" onChange={(e: any) => { e.preventDefault(); setRequaredOrNotRequiared(e.target.value)}}/>
                </InputGroup>
    </Form>*/}
            <SuaiButton onClick = {CreateRpdAsync} >Создать</SuaiButton>
        </Block>
    )
}


