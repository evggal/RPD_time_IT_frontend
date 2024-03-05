import Block from "../block/Block";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ChangeTemplateNoCritical.css"
import { CreateRpd, GetAllCriticalByCriticals } from "../../ApiAccess/RpdRepository";
import { Critical, rpdinfo, rpd } from "../../interface/interface";
import SuaiButton from "../suaiButton/SuaiButton";
import { Audio } from 'react-loader-spinner'

export default function ChangeTemplateNoCritical() {
    const location = useLocation()
    const data : Critical = location.state
    const [testProp, setTestProp] = useState<string>("")
    const [Load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        
        const init = async () => {
            setLoad(true)
            const status: Critical[] = await GetAllCriticalByCriticals(data)
            setLoad(false)
            if (status.length == 0) {
                alert("idi otsuda")
                return <>IDI OTSUDA</>
            }
        }
        init()

    },[])
    const CreateRpdAsync = async () => {
        let rpd: rpd = {
            criticalInfo: data,
            rpdInfo: {
                testProp: testProp
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
                    <InputGroup.Text>Тест</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" onChange={(e) => setTestProp(n => n=e.target.value)}/>
                </InputGroup>
            </Form>
            <SuaiButton onClick = {CreateRpdAsync} >Создать</SuaiButton>
        </Block>
    )
}


