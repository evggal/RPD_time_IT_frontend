import "./Filter.css"
import SelectSearch, { SelectSearchOption } from 'react-select-search';
import 'react-select-search/style.css'
import Block from "../block/Block";
import SuaiButton from "../suaiButton/SuaiButton";
import { useEffect, useState } from "react";
import { SearchRpd, GetAllCritical, GetAllCriticalByCriticals } from "../../ApiAccess/RpdRepository"
import { searchTempate, Critical, rpd } from "../../interface/interface"

function Filter(props:
    {
        setSelectedRpds: React.Dispatch<React.SetStateAction<Array<rpd>>>,
        setRpds: React.Dispatch<React.SetStateAction<Array<rpd>>>,
        setLoader: React.Dispatch<React.SetStateAction<boolean>>
    },

) {
    const [facultySearch, setFacultySearch] = useState<string>()
    const [specialtyNumberSearch, setSpecialtyNumberSearch] = useState<string>()
    const [groupNameSearch, setGroupNameSearch] = useState<string>()
    const [nameSearch, setNameSearch] = useState<string>()
    const [numberOfDepartamentSearch, setNumberOfDepartamentSearch] = useState<string>()
    const [typeOfControlSearch, setTypeOfControlSearch] = useState<string>()
    const [formaObuchenuaSearch, setFormaObuchenuaSearch] = useState<string>()
    const [countOfHourLectureSearch, setCountOfHourLectureSearch] = useState<string>()
    const [countOfHourPracticeSearch, setCountOfHourPracticeSearch] = useState<string>()
    const [countOfHourLabSearch, setCountOfHourLabSearch] = useState<string>()
    const [countOfHourCourseProjectSearch, setCountOfHourCourseProjectSearch] = useState<string>()
    const [countOfHourCourseWorkSearch, setCountOfHourCourseWorkSearch] = useState<string>()

    const createSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setSelectedRpds([])
        e.preventDefault()
        props.setLoader(true)

        let result: Array<rpd> = await SearchRpd({
            faculty: facultySearch == "-1" ? undefined : facultySearch,
            specialtyNumber: specialtyNumberSearch == "-1" ? undefined : specialtyNumberSearch,
            groupName: groupNameSearch == "-1" ? undefined : groupNameSearch,
            name: nameSearch == "-1" ? undefined : nameSearch,
            numberOfDepartament: numberOfDepartamentSearch == "-1" ? undefined : numberOfDepartamentSearch,
            typeOfControl: typeOfControlSearch == "-1" ? undefined : typeOfControlSearch,
            formaObuchenua: formaObuchenuaSearch == "-1" ? undefined : formaObuchenuaSearch,
            countOfHourLecture: countOfHourLectureSearch == "-1" ? undefined : countOfHourLectureSearch,
            countOfHourPractice: countOfHourPracticeSearch == "-1" ? undefined : countOfHourPracticeSearch,
            countOfHourLab: countOfHourLabSearch == "-1" ? undefined : countOfHourLabSearch,
            countOfHourCourseProject: countOfHourCourseProjectSearch == "-1" ? undefined : countOfHourCourseProjectSearch,
            countOfHourCourseWork: countOfHourCourseWorkSearch == "-1" ? undefined : countOfHourCourseWorkSearch
        })
        props.setRpds(result)
        props.setLoader(false)

    }
    const [Faculty, setFaculty] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [Kafedra, setKafedra] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [SpecialtyNumber, setSpecialtyNumber] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [GroupName, setGroupName] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [NamePredmeta, setNamePredmeta] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [FormaObuchenua, setFormaObuchenua] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [TypeofControl, setTypeofControl] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [CountOfHourLecture, setCountOfHourLecture] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [CountOfHourPractice, setCountOfHourPractice] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [CountOfHourLab, setCountOfHourLab] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [CountOfHourCourseProject, setCountOfHourCourseProject] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [CountOfHourCourseWork, setCountOfHourCourseWork] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])

    useEffect(() => {
        
        const init = async () => {
            const data: Critical = {
                faculty: facultySearch,
                numberOfDepartament: numberOfDepartamentSearch,
                specialtyNumber: specialtyNumberSearch,
                groupName: groupNameSearch,
                name: nameSearch,
                fo: formaObuchenuaSearch,
                typeOfControl: typeOfControlSearch,
                countOfHourLecture: countOfHourLectureSearch,
                countOfHourPractice: countOfHourPracticeSearch,
                countOfHourLab: countOfHourLabSearch,
                countOfHourCourseProject: countOfHourCourseProjectSearch,
                countOfHourCourseWork: countOfHourCourseWorkSearch,
            };
            let result: Array<Critical> = await GetAllCriticalByCriticals(data)
            console.log(result, 0)
            if (result.length == 1) {
                setFacultySearch(result[0].faculty)
                setSpecialtyNumberSearch(result[0].specialtyNumber)
                setGroupNameSearch(result[0].groupName)
                setNameSearch(result[0].name)
                setNumberOfDepartamentSearch(result[0].numberOfDepartament)
                setTypeOfControlSearch(result[0].typeOfControl)
                setFormaObuchenuaSearch(result[0].fo)
                setCountOfHourLectureSearch(result[0].countOfHourLecture)
                setCountOfHourPracticeSearch(result[0].countOfHourPractice)
                setCountOfHourLabSearch(result[0].countOfHourLab)
                setCountOfHourCourseProjectSearch(result[0].countOfHourCourseProject)
                setCountOfHourCourseWorkSearch(result[0].countOfHourCourseWork)
            }
            setFaculty([])
            setKafedra([])
            setSpecialtyNumber([])
            setGroupName([])
            setNamePredmeta([])
            setFormaObuchenua([])
            setTypeofControl([])
            setCountOfHourLecture([])
            setCountOfHourPractice([])
            setCountOfHourLab([])
            setCountOfHourCourseProject([])
            setCountOfHourCourseWork([])
            result.map(crit => {
                setFaculty((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.faculty)) {
                        return [...f]
                    }
                    return [...f, { value: crit.faculty, name: crit.faculty as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setKafedra((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.numberOfDepartament)) {
                        return [...f]
                    }
                    return [...f, { value: crit.numberOfDepartament, name: crit.numberOfDepartament as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setSpecialtyNumber((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.specialtyNumber)) {
                        return [...f]
                    }
                    return [...f, { value: crit.specialtyNumber, name: crit.specialtyNumber as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setGroupName((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.groupName)) {
                        return [...f]
                    }
                    return [...f, { value: crit.groupName, name: crit.groupName as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setNamePredmeta((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.name)) {
                        return [...f]
                    }
                    return [...f, { value: crit.name, name: crit.name as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setFormaObuchenua((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.fo)) {
                        return [...f]
                    }
                    return [...f, { value: crit.fo, name: crit.fo as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setTypeofControl((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.typeOfControl)) {
                        return [...f]
                    }
                    return [...f, { value: crit.typeOfControl, name: crit.typeOfControl as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setCountOfHourLecture((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.countOfHourLecture)) {
                        return [...f]
                    }
                    return [...f, { value: crit.countOfHourLecture, name: crit.countOfHourLecture as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setCountOfHourPractice((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.countOfHourPractice)) {
                        return [...f]
                    }
                    return [...f, { value: crit.countOfHourPractice, name: crit.countOfHourPractice as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setCountOfHourLab((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.countOfHourLab)) {
                        return [...f]
                    }
                    return [...f, { value: crit.countOfHourLab, name: crit.countOfHourLab as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setCountOfHourCourseProject((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.countOfHourCourseProject)) {
                        return [...f]
                    }
                    return [...f, { value: crit.countOfHourCourseProject, name: crit.countOfHourCourseProject as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setCountOfHourCourseWork((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.countOfHourCourseWork)) {
                        return [...f]
                    }
                    return [...f, { value: crit.countOfHourCourseWork, name: crit.countOfHourCourseWork as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
            })
        }
        
        init()
       


    }, [facultySearch,
        specialtyNumberSearch,
        groupNameSearch,
        nameSearch,
        numberOfDepartamentSearch,
        typeOfControlSearch,
        formaObuchenuaSearch,
        countOfHourLectureSearch,
        countOfHourPracticeSearch,
        countOfHourLabSearch,
        countOfHourCourseProjectSearch,
        countOfHourCourseWorkSearch,])
    const Reload = () => {
        setFacultySearch("")
        setSpecialtyNumberSearch("")
        setGroupNameSearch("")
        setNameSearch("")
        setNumberOfDepartamentSearch("")
        setTypeOfControlSearch("")
        setFormaObuchenuaSearch("")
        setCountOfHourLectureSearch("")
        setCountOfHourPracticeSearch("")
        setCountOfHourLabSearch("")
        setCountOfHourCourseProjectSearch("")
        setCountOfHourCourseWorkSearch("")
    }
    return (
        <Block className="filter">
            <form>
                <div className="div_select">
                    <SelectSearch options={Array.from(Faculty)} search={true} placeholder="Факультет" value={facultySearch?.toString()} onChange={(e) => { setFacultySearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(Kafedra)} search={true} placeholder="Кафедра" value={numberOfDepartamentSearch?.toString()} onChange={(e) => { setNumberOfDepartamentSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(SpecialtyNumber)} search={true} placeholder="Код специальности" value={specialtyNumberSearch?.toString()} onChange={(e) => { setSpecialtyNumberSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(NamePredmeta)} search={true} placeholder="Направление" value={nameSearch?.toString()} onChange={(e) => { setNameSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(GroupName)} search={true} placeholder="Номер группы" value={groupNameSearch?.toString()} onChange={(e) => { setGroupNameSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(FormaObuchenua)} search={true} placeholder="Форма обучения" value={formaObuchenuaSearch?.toString()} onChange={(e) => { setFormaObuchenuaSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(TypeofControl)} search={true} placeholder="Тип аттестации" value={typeOfControlSearch?.toString()} onChange={(e) => { setTypeOfControlSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(CountOfHourLecture)} search={true} placeholder="Лекции часы" value={countOfHourLectureSearch?.toString()} onChange={(e) => { setCountOfHourLectureSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(CountOfHourPractice)} search={true} placeholder="Практики часы" value={countOfHourPracticeSearch?.toString()} onChange={(e) => { setCountOfHourPracticeSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(CountOfHourLab)} search={true} placeholder="Лабы часы" value={countOfHourLabSearch?.toString()} onChange={(e) => { setCountOfHourLabSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(CountOfHourCourseProject)} search={true} placeholder="Курсовой проект часы" value={countOfHourCourseProjectSearch?.toString()} onChange={(e) => { setCountOfHourCourseProjectSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(CountOfHourCourseWork)} search={true} placeholder="Курсовая работа часы" value={countOfHourCourseWorkSearch?.toString()} onChange={(e) => { setCountOfHourCourseWorkSearch(n => n = e.toString()) }} />

                </div>
                <SuaiButton className="SuaiButton_blue" onClick={(e: React.ChangeEvent<HTMLInputElement>) => { createSearch(e) }}>Искать</SuaiButton>
                <SuaiButton className="SuaiButton_blue" onClick={(e: React.ChangeEvent<HTMLInputElement>) => { e.preventDefault(); Reload()}}>Сбросить</SuaiButton>

            </form>
        </Block>
    )
}

export default Filter