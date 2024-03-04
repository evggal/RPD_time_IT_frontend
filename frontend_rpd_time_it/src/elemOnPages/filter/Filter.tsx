import { Form } from "react-bootstrap"
import "./Filter.css"
import FormSelect from 'react-bootstrap/FormSelect'
import { Type } from "typescript"
import SelectSearch, { SelectSearchOption } from 'react-select-search';
import 'react-select-search/style.css'
import Block from "../block/Block";
import SuaiButton from "../suaiButton/SuaiButton";
import { useEffect, useState } from "react";

interface searchTempate {
    faculty?: string;
    specialtyNumber?: string;
    groupName?: string;
    name?: string;
    numberOfDepartament?: string;
    typeOfControl?: string;
    formaObuchenua?: string
}

function Filter() {
    const [facultySearch, setFaculty] = useState<string>()
    const [specialtyNumberSearch, setSpecialtyNumber] = useState<string>()
    const [groupNameSearch, setGroupName] = useState<string>()
    const [nameSearch, setName] = useState<string>()
    const [numberOfDepartamentSearch, setNumberOfDepartament] = useState<string>()
    const [typeOfControlSearch, setTypeOfControl] = useState<string>()
    const [formaObuchenuaSearch, setFormaObuchenua] = useState<string>()

    const [search, setSearch] = useState<searchTempate>({} as searchTempate)
    
    const createSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearch(s => {
            return {
                ...s,
                faculty: facultySearch,
                specialtyNumber: specialtyNumberSearch,
                groupName: groupNameSearch,
                name: nameSearch,
                numberOfDepartament: numberOfDepartamentSearch,
                typeOfControl: typeOfControlSearch,
                formaObuchenua: formaObuchenuaSearch
            }
        })
    }

    const Faculty: Array<SelectSearchOption> = [
        { name: "Институт 1", value: 1 },
        { name: "Институт 2", value: 2 },
        { name: "Институт 3", value: 3 },
        { name: "Институт 4", value: 4 },
        { name: "Институт МФТИ", value: "M" },
        { name: "Институт 6", value: 6 },
        { name: "Институт 8", value: 8 }
    ]
    const Kafedra: Array<SelectSearchOption> = [
        { name: "Кафедра 1", value: 1 },
        { name: "Кафедра 2", value: 2 },
        { name: "Кафедра 3", value: 3 },
        { name: "Кафедра 11", value: 11 },
        { name: "Кафедра 12", value: 12 },
        { name: "Кафедра 21", value: 21 },
        { name: "Кафедра 22", value: 22 },
        { name: "Кафедра 31", value: 31 },
        { name: "Кафедра 32", value: 32 },
        { name: "Кафедра 33", value: 33 },
        { name: "Кафедра 41", value: 41 },
        { name: "Кафедра 42", value: 42 },
        { name: "Кафедра 43", value: 43 }
    ]
    const SpecialtyNumber: Array<SelectSearchOption> = [
        { name: "09.03.01", value: 1 },
        { name: "09.03.02", value: 2 },
        { name: "09.03.03", value: 3 },
        { name: "09.03.04", value: 11 },
        { name: "09.03.05", value: 12 },
        { name: "09.03.06", value: 21 },
        { name: "09.03.07", value: 22 },
        { name: "09.03.08", value: 31 },
        { name: "09.03.09", value: 32 }
    ]
    const GroupName: Array<SelectSearchOption> = [
        { name: "4215", value: 1 },
        { name: "4216", value: 2 },
        { name: "4217", value: 3 },
        { name: "4218", value: 11 },
        { name: "4219", value: 12 },
        { name: "M222", value: 21 },
        { name: "M211", value: 22 },
        { name: "M212", value: 31 },
        { name: "1212", value: 32 }
    ]
    const NamePredmeta: Array<SelectSearchOption> = [
        { name: "Прикладная информатика", value: 1 },
        { name: "Прикладная математика и информатика", value: 2 },
        { name: "Направлени 3", value: 3 },
        { name: "Направлени 11", value: 11 },
        { name: "Направлени 12", value: 12 },
        { name: "Направлени 21", value: 21 },
        { name: "Направлени 22", value: 22 },
        { name: "Направлени 31", value: 31 },
        { name: "Направлени 32", value: 32 }
    ]
    const FormaObuchenua: Array<SelectSearchOption> = [
        { name: "Очная", value: 1 },
        { name: "Вечерняя", value: 2 }
    ]
    const Year: Array<SelectSearchOption> = [
        { name: "2024", value: 2024 },
        { name: "2023", value: 2023 },
        { name: "2022", value: 2022 },
        { name: "2021", value: 2021 }
    ]
    const TypeofControl: Array<SelectSearchOption> = [
        { name: "Экзамен", value: "exam" },
        { name: "Зачёт", value: "test" },
        { name: "Диф. зачёт", value: "diffTest" }
    ]
    useEffect(()=>{
        console.log(search)
    }, [createSearch])
    return (
        <Block className="filter">
            <form>
                <div className="div_select">
                    <SelectSearch options={Faculty} search={true} placeholder="Факультет" value={facultySearch?.toString()} onChange={(e) => { setFaculty(n => n = e.toString()) }} />
                    <SelectSearch options={Kafedra} search={true} placeholder="Кафедра" value={numberOfDepartamentSearch?.toString()} onChange={(e) => { setNumberOfDepartament(n => n = e.toString()) }} />
                    <SelectSearch options={SpecialtyNumber} search={true} placeholder="Код специальности" value={specialtyNumberSearch?.toString()} onChange={(e) => { setSpecialtyNumber(n => n = e.toString()) }} />
                    <SelectSearch options={NamePredmeta} search={true} placeholder="Направление" value={nameSearch?.toString()} onChange={(e) => { setName(n => n = e.toString()) }} />
                    <SelectSearch options={GroupName} search={true} placeholder="Номер группы" value={groupNameSearch?.toString()} onChange={(e) => { setGroupName(n => n = e.toString()) }} />
                    <SelectSearch options={FormaObuchenua} search={true} placeholder="Форма обучения" value={formaObuchenuaSearch?.toString()} onChange={(e) => { setFormaObuchenua(n => n = e.toString()) }} />
                    <SelectSearch options={TypeofControl} search={true} placeholder="Тип аттестации" value={typeOfControlSearch?.toString()} onChange={(e) => { setTypeOfControl(n => n = e.toString()) }} />
                </div>
                <SuaiButton className="SuaiButton_blue" onClick={(e : React.ChangeEvent<HTMLInputElement>) => { createSearch(e) }}>Искать</SuaiButton>
            </form>

        </Block>
    )
}

export default Filter