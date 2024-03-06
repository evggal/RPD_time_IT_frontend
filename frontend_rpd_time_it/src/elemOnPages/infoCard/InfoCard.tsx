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
            <h2 className="InfoCard__h2">
                {data.criticalInfo.name}
                <span className="InfoCard__span"> ({data.criticalInfo.specialtyNumber})</span>
            </h2>
            <div className="InfoCard__KafInfo">
                <p className="InfoCard__p">Факультет: {data.criticalInfo.faculty}</p>
                <p className="InfoCard__p">Кафедра: {data.criticalInfo.numberOfDepartament}</p>
                <p className="InfoCard__p">Группа: {data.criticalInfo.groupName}</p>
                <p className="InfoCard__p">Форма обучения: {data.criticalInfo.fo}</p>
                <p className="InfoCard__p">СПЗ: {data.criticalInfo.spz}</p>
            </div>
            
            <table  className="InfoCard__Table">
                <tr>
                    <td className="InfoCard__td">Кол. часов по курсовому проекту</td>
                    <td className="InfoCard__td InfoCard__td_text-align-center">{data.criticalInfo.countOfHourCourseProject}</td>
                </tr>
                <tr>
                    <td className="InfoCard__td">Кол. часов по курсовой работе</td>
                    <td className="InfoCard__td InfoCard__td_text-align-center">{data.criticalInfo.countOfHourCourseWork}</td>
                </tr>
                <tr>
                    <td className="InfoCard__td">Кол. часов по лекциям</td>
                    <td className="InfoCard__td InfoCard__td_text-align-center">{data.criticalInfo.countOfHourLecture}</td>
                </tr>
                <tr>
                    <td className="InfoCard__td">Кол. часов по практикам</td>
                    <td className="InfoCard__td InfoCard__td_text-align-center">{data.criticalInfo.countOfHourPractice}</td>
                </tr>
                <tr>
                    <td className="InfoCard__td">Кол. часов по лабораторным работам</td>
                    <td className="InfoCard__td InfoCard__td_text-align-center">{data.criticalInfo.countOfHourLab}</td>
                </tr>
                <tr>
                    <td className="InfoCard__td">Самостоятельная работа студентов</td>
                    <td className="InfoCard__td InfoCard__td_text-align-center">{data.criticalInfo.srs}</td>
                </tr>
                <tr>
                    <td className="InfoCard__td">Тип контроля</td>
                    <td className="InfoCard__td InfoCard__td_text-align-center">{data.criticalInfo.typeOfControl}</td>
                </tr>
            </table>
            
            
            
        </Block>
    )
}

export default InfoCard;