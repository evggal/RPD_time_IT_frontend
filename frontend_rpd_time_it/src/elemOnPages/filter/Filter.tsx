import { Form } from "react-bootstrap"
import "./Filter.css"
import FormSelect from 'react-bootstrap/FormSelect'
import { Type } from "typescript"
import SelectSearch, { SelectSearchOption}  from 'react-select-search';
import 'react-select-search/style.css'
import Block from "../block/Block";
import SuaiButton from "../suaiButton/SuaiButton";

function Filter() {
    const Kafedra: Array<SelectSearchOption> = [
        {name: "Кафедра 1", value: 1},
        {name: "Кафедра 2", value: 2},
        {name: "Кафедра 3", value: 3},
        {name: "Кафедра 11", value: 11},
        {name: "Кафедра 12", value: 12},
        {name: "Кафедра 21", value: 21},
        {name: "Кафедра 22", value: 22},
        {name: "Кафедра 31", value: 31},
        {name: "Кафедра 32", value: 32},
        {name: "Кафедра 33", value: 33},
        {name: "Кафедра 41", value: 41},
        {name: "Кафедра 42", value: 42},
        {name: "Кафедра 43", value: 43}
    ]
    const NamePredmeta: Array<SelectSearchOption> = [
        {name: "Приклодная информатика", value: 1},
        {name: "Прикладная математика и информатика", value: 2},
        {name: "Направлени 3", value: 3},
        {name: "Направлени 11", value: 11},
        {name: "Направлени 12", value: 12},
        {name: "Направлени 21", value: 21},
        {name: "Направлени 22", value: 22},
        {name: "Направлени 31", value: 31},
        {name: "Направлени 32", value: 32}
    ]
    const FormaObuchenua: Array<SelectSearchOption> = [
        {name: "Очная", value: 1},
        {name: "Вечерняя", value: 0}
    ]
    const Year: Array<SelectSearchOption> = [
        {name: "2024", value: 2024},
        {name: "2023", value: 2023},
        {name: "2022", value: 2022},
        {name: "2021", value: 2021}
    ]
    
    return (
        <Block className="filter">
            <form>
                <div className="div_select">
                
                <SelectSearch  options={Kafedra} search={true} placeholder="Кафедра" />
                <SelectSearch  options={NamePredmeta} search={true} placeholder="Направление" />
                <SelectSearch  options={FormaObuchenua} search={true} placeholder="Форма обучения" />
                <SelectSearch  options={Year} search={true} placeholder="Год" />
                

                
                
                
                </div>
                <SuaiButton className="SuaiButton_blue">Искать</SuaiButton>
            </form>
            
        </Block>
    )
}

export default Filter