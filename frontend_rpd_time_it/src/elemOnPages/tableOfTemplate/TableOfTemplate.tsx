import "./TableOfTemplate.css"
import Table from 'react-bootstrap/Table';
import eye from "./../../images/eye.svg"
import Block from "../block/Block";
import { Link } from "react-router-dom";

function TableOfTemplate () {
    interface elemTemplate {
        subject:String,
        director:String,
        department:Number,
        formOfStudy:String,
        year:Number,
    }
    interface Critical {
        Faculty: string,
        SpecialtyNumber: string,
        SPZ?: string,
        GroupName: string,
        Name: string,
        NumberOfDepartament: string,
        CountOfHourLecture: number,
        CountOfHourPractice: number,
        CountOfHourLab: number,
        CountOfHourCourseProject: number,
        CountOfHourCourseWork: number,
        SRS: number,
        ExamHours: number,
        Exam: boolean,
        Test: boolean,
        DiffTest: boolean,
        KandExam: boolean,
        TypeOfCourseProject: string,
        }
    const masOfTemplate: Array<elemTemplate> = [
        {
            subject:"Математика",
            director:"Иванов Иван Иванович",
            department:21,
            formOfStudy:"очная",
            year:2023
        },
        {
            subject:"Информатика",
            director:"Самойлов Иван Иванович",
            department:43,
            formOfStudy:"вечерняя",
            year:2024
        },
        {
            subject:"Математика",
            director:"Иванов Иван Иванович",
            department:21,
            formOfStudy:"очная",
            year:2023
        },
        {
            subject:"Информатика",
            director:"Самойлов Иван Иванович",
            department:43,
            formOfStudy:"вечерняя",
            year:2024
        },
        {
            subject:"Математика",
            director:"Иванов Иван Иванович",
            department:21,
            formOfStudy:"очная",
            year:2023
        },
        {
            subject:"Информатика",
            director:"Самойлов Иван Иванович",
            department:43,
            formOfStudy:"вечерняя",
            year:2024
        },
        {
            subject:"Математика",
            director:"Иванов Иван Иванович",
            department:21,
            formOfStudy:"очная",
            year:2023
        },
        {
            subject:"Информатика",
            director:"Самойлов Иван Иванович",
            department:43,
            formOfStudy:"вечерняя",
            year:2024
        }
    ]
    return (
        <Block className="TableOfTemplate">
            <Table striped bordered hover style={{textAlign:"center"}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Предмет</th>
                        <th>Руководитель направления</th>
                        <th>Кафедра</th>
                        <th>Форма обучения</th>
                        <th>Год</th>
                    </tr>
                </thead>
                <tbody>
                    {masOfTemplate.map((elem) => 
                    <tr>
                        <td><Link to="/info" state={elem}><img src={eye} alt="Скачать" /></Link> </td>
                        <td>{elem.subject}</td>
                        <td>{elem.director}</td>
                        <td>{elem.department.toString()}</td>
                        <td>{elem.formOfStudy}</td>
                        <td>{elem.year.toString()}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </Block>
    )
}

export default TableOfTemplate;