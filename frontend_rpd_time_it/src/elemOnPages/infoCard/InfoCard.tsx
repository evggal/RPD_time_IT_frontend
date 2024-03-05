import { useLocation } from "react-router-dom";
import Block from "../../elemOnPages/block/Block";
import "./InfoCard.css"
import { rpd } from "../../interface/interface";


function InfoCard () {
    const location = useLocation()
    const data : rpd = location.state
    console.log(data)
    return (
        <Block className="InfoCard">
            <h1>{data.criticalInfo.name}</h1>
            <p>Кафедра - {data.criticalInfo.numberOfDepartament}</p>
            <p>группа - {data.criticalInfo.groupName}</p>
            <p>факультет - {data.criticalInfo.faculty}</p>
            <p>номер специальности - {data.criticalInfo.specialtyNumber}</p>
            <p>количество часов по курсовому проекту - {data.criticalInfo.countOfHourCourseProject}</p>
            <p>количество часов по курсовой работе - {data.criticalInfo.countOfHourCourseWork}</p>
            <p>количество часов по лекциям- {data.criticalInfo.countOfHourLecture}</p>
            <p>количество часов по практикам - {data.criticalInfo.countOfHourPractice}</p>
            <p>количество часов по лабораторным работам - {data.criticalInfo.countOfHourLab}</p>
            <p>количество часов по лабораторным работам - {data.criticalInfo.countOfHourLab}</p>
            <p>тип контроля - {data.criticalInfo.typeOfControl}</p>
            <p>форма обучения - {data.criticalInfo.fo}</p>
            <p>СРС - {data.criticalInfo.srs}</p>
            <p>СПЗ - {data.criticalInfo.spz}</p>
            
        </Block>
    )
}

export default InfoCard;