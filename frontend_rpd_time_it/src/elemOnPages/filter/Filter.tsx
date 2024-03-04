import "./Filter.css"
import SelectSearch, { SelectSearchOption } from 'react-select-search';
import 'react-select-search/style.css'
import Block from "../block/Block";
import SuaiButton from "../suaiButton/SuaiButton";
import { useEffect, useState } from "react";
import {SearchRpd, GetAllCritical } from "../../ApiAccess/RpdRepository"
import {searchTempate, Critical, rpd} from "../../interface/interface"

function Filter(props:
    {
        setRpds: React.Dispatch<React.SetStateAction<Array<rpd>>>,
        setLoader: React.Dispatch<React.SetStateAction<boolean>>},

    ) {
    const [facultySearch, setFacultySearch] = useState<string>()
    const [specialtyNumberSearch, setSpecialtyNumberSearch] = useState<string>()
    const [groupNameSearch, setGroupNameSearch] = useState<string>()
    const [nameSearch, setNameSearch] = useState<string>()
    const [numberOfDepartamentSearch, setNumberOfDepartamentSearch] = useState<string>()
    const [typeOfControlSearch, setTypeOfControlSearch] = useState<string>()
    const [formaObuchenuaSearch, setFormaObuchenuaSearch] = useState<string>()
    const [search, setSearch] = useState<searchTempate>({} as searchTempate)
    const createSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        props.setLoader(true)
        let result: Array<rpd> = await SearchRpd({faculty: facultySearch,
            specialtyNumber: specialtyNumberSearch,
            groupName: groupNameSearch,
            name: nameSearch,
            numberOfDepartament: numberOfDepartamentSearch,
            typeOfControl: typeOfControlSearch,
            formaObuchenua: formaObuchenuaSearch
        })
        props.setRpds(result)
        props.setLoader(false)

    }
    const [Faculty, setFaculty] = useState<Array<SelectSearchOption>>([])
    const [Kafedra, setKafedra] = useState<Array<SelectSearchOption>>([])
    const [SpecialtyNumber, setSpecialtyNumber] = useState<Array<SelectSearchOption>>([])
    const [GroupName, setGroupName] = useState<Array<SelectSearchOption>>([])
    const [NamePredmeta, setNamePredmeta] = useState<Array<SelectSearchOption>>([])
    const [FormaObuchenua, setFormaObuchenua] = useState<Array<SelectSearchOption>>([])
    const [TypeofControl, setTypeofControl] = useState<Array<SelectSearchOption>>([])
    
    useEffect(() => {
        const init = async () => {
            let result: Array<Critical> = await GetAllCritical()
            result.map(crit => {
                setFaculty((f: Array<SelectSearchOption>) => {
                    if(f.map(f => f.value).includes(crit.faculty)){
                        return [...f]
                    }
                    return [...f, {value: crit.faculty, name: crit.faculty as string}].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setKafedra((f: Array<SelectSearchOption>) => {
                    if(f.map(f => f.value).includes(crit.numberOfDepartament)){
                        return [...f]
                    }
                    return [...f, {value: crit.numberOfDepartament, name: crit.numberOfDepartament as string}].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setSpecialtyNumber((f: Array<SelectSearchOption>) => {
                    if(f.map(f => f.value).includes(crit.specialtyNumber)){
                        return [...f]
                    }
                    return [...f, {value: crit.specialtyNumber, name: crit.specialtyNumber as string}].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setGroupName((f: Array<SelectSearchOption>) => {
                    if(f.map(f => f.value).includes(crit.groupName)){
                        return [...f]
                    }
                    return [...f, {value: crit.groupName, name: crit.groupName as string}].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setNamePredmeta((f: Array<SelectSearchOption>) => {
                    if(f.map(f => f.value).includes(crit.name)){
                        return [...f]
                    }
                    return [...f, {value: crit.name, name: crit.name as string}].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setFormaObuchenua((f: Array<SelectSearchOption>) => {
                    if(f.map(f => f.value).includes(crit.fo)){
                        return [...f]
                    }
                    return [...f, {value: crit.fo, name: crit.fo as string}].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setTypeofControl((f: Array<SelectSearchOption>) => {
                    if(f.map(f => f.value).includes(crit.typeOfControl)){
                        return [...f]
                    }
                    return [...f, {value: crit.typeOfControl, name: crit.typeOfControl as string}].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
            })
        }
        init()
        
        
    }, [])
    return (
        <Block className="filter">
            <form>
                <div className="div_select">
                    <SelectSearch options={ Array.from(Faculty)} search={true} placeholder="Факультет" value={facultySearch?.toString()} onChange={(e) => { setFacultySearch(n => n = e.toString()) }} />
                    <SelectSearch options={ Array.from(Kafedra)} search={true} placeholder="Кафедра" value={numberOfDepartamentSearch?.toString()} onChange={(e) => { setNumberOfDepartamentSearch(n => n = e.toString()) }} />
                    <SelectSearch options={ Array.from(SpecialtyNumber)} search={true} placeholder="Код специальности" value={specialtyNumberSearch?.toString()} onChange={(e) => { setSpecialtyNumberSearch(n => n = e.toString()) }} />
                    <SelectSearch options={ Array.from(NamePredmeta)} search={true} placeholder="Направление" value={nameSearch?.toString()} onChange={(e) => { setNameSearch(n => n = e.toString()) }} />
                    <SelectSearch options={ Array.from(GroupName)} search={true} placeholder="Номер группы" value={groupNameSearch?.toString()} onChange={(e) => { setGroupNameSearch(n => n = e.toString()) }} />
                    <SelectSearch options={ Array.from(FormaObuchenua)} search={true} placeholder="Форма обучения" value={formaObuchenuaSearch?.toString()} onChange={(e) => { setFormaObuchenuaSearch(n => n = e.toString()) }} />
                    <SelectSearch options={ Array.from(TypeofControl)} search={true} placeholder="Тип аттестации" value={typeOfControlSearch?.toString()} onChange={(e) => { setTypeOfControlSearch(n => n = e.toString()) }} />
                </div>
                <SuaiButton className="SuaiButton_blue" onClick={(e : React.ChangeEvent<HTMLInputElement>) => { createSearch(e) }}>Искать</SuaiButton>
            </form>
        </Block>
    )
}

export default Filter