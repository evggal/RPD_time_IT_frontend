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
        
            <Form>
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
            </Form>
            <SuaiButton onClick = {CreateRpdAsync} >Создать</SuaiButton>
        </Block>
    )
}


