import Block from "../../elemOnPages/block/Block"
import Header from "../../elemOnPages/header/Header"
import SelectSearch, { SelectSearchOption } from 'react-select-search';
import "./ChangeTamplateForm.css"
import { useEffect, useState } from "react";
import { Critical, rpd } from "../../interface/interface";
import { GetAllCritical, GetAllCriticalByCriticals, SearchRpd } from "../../ApiAccess/RpdRepository";
import SuaiButton from "../suaiButton/SuaiButton";
import { Link } from "react-router-dom";



function ChangeTemplatePage(props:
    {
        setCritical: React.Dispatch<React.SetStateAction<Critical>>,
    },

) {
    const [buttonNextPage, setButtonNextPage] = useState(false)


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
    const [spzSearch, setSpzSearch] = useState<string>()
    const [srsSearch, setSrsSearch] = useState<string>()
    const [examHoursSearch, setExamHoursSearch] = useState<string>()
    const [typeOfCourseProjectSearch, setTypeOfCourseProjectSearch] = useState<string>()

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
    const [Spz, setSpz] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [Srs, setSrs] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [ExamHours, setExamHours] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])
    const [TypeOfCourseProject, setTypeOfCourseProject] = useState<Array<SelectSearchOption>>([{ name: "-", value: "-1" }])

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
                spz: spzSearch,
                srs: srsSearch,
                examHours: examHoursSearch,
                typeOfCourseProject: typeOfCourseProjectSearch
            };
            console.log(1, JSON.stringify(data))
            let result: Array<Critical> = await GetAllCriticalByCriticals(data)
            console.log(result, 0)
            if (result.length == 1) {
                setButtonNextPage(n => n = true)
            }
            setFaculty([{ name: "-", value: "-1" }])
            setFaculty([{ name: "-", value: "-1" }])
            setKafedra([{ name: "-", value: "-1" }])
            setSpecialtyNumber([{ name: "-", value: "-1" }])
            setGroupName([{ name: "-", value: "-1" }])
            setNamePredmeta([{ name: "-", value: "-1" }])
            setFormaObuchenua([{ name: "-", value: "-1" }])
            setTypeofControl([{ name: "-", value: "-1" }])
            setCountOfHourLecture([{ name: "-", value: "-1" }])
            setCountOfHourPractice([{ name: "-", value: "-1" }])
            setCountOfHourLab([{ name: "-", value: "-1" }])
            setCountOfHourCourseProject([{ name: "-", value: "-1" }])
            setCountOfHourCourseWork([{ name: "-", value: "-1" }])
            setSpz([{ name: "-", value: "-1" }])
            setSrs([{ name: "-", value: "-1" }])
            setExamHours([{ name: "-", value: "-1" }])
            setTypeOfCourseProject([{ name: "-", value: "-1" }])
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
                setSpz((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.spz)) {
                        return [...f]
                    }
                    return [...f, { value: crit.spz, name: crit.spz as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setSrs((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.srs)) {
                        return [...f]
                    }
                    return [...f, { value: crit.srs, name: crit.srs as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setExamHours((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.examHours)) {
                        return [...f]
                    }
                    return [...f, { value: crit.examHours, name: crit.examHours as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
                setTypeOfCourseProject((f: Array<SelectSearchOption>) => {
                    if (f.map(f => f.value).includes(crit.typeOfCourseProject)) {
                        return [...f]
                    }
                    return [...f, { value: crit.typeOfCourseProject, name: crit.typeOfCourseProject as string }].sort((a, b) => (a.name > b.name) ? 1 : -1)
                })
            })
        }
        init()

        console.log('useEffect run')
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
        countOfHourCourseWorkSearch,
        spzSearch,
        srsSearch,
        examHoursSearch,
        typeOfCourseProjectSearch,])
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
                    <SelectSearch options={Array.from(Spz)} search={true} placeholder="Spz" value={spzSearch?.toString()} onChange={(e) => { setSpzSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(Srs)} search={true} placeholder="Самостоятельная работа студента часы" value={srsSearch?.toString()} onChange={(e) => { setSrsSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(ExamHours)} search={true} placeholder="Экзамен часы" value={examHoursSearch?.toString()} onChange={(e) => { setExamHoursSearch(n => n = e.toString()) }} />
                    <SelectSearch options={Array.from(TypeOfCourseProject)} search={true} placeholder="Тип курсового проекта" value={typeOfCourseProjectSearch?.toString()} onChange={(e) => { setTypeOfCourseProjectSearch(n => n = e.toString()) }} />

                </div>

                {buttonNextPage ? 
                <Link to="/changeTemplate2">
                    <SuaiButton className="SuaiButton_blue">Далее</SuaiButton>
                </Link> : <></>}

            </form>
        </Block>
    )
}



export default ChangeTemplatePage