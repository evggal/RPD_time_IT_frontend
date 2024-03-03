import SelectSearch from "react-select-search";
import "./SuaiButton.css"
import { Link } from "react-router-dom";

function SuaiButton(props: any) {
    const { children } = props;
    console.log(props.options)
    if (props.select) {
        return (
            <div className={"SuaiButtonSelect " + props.className}>
                <Link to={props.href} className={"SuaiButton SuaiButton_white SuaiButtonSelect__button "}>
                    {children}
                </Link>
                <select className="SuaiButton SuaiButton_blue SuaiButtonSelect__select">
                    {props.options.map((elem: any) => 
                    <option value={elem.value}>{elem.name}</option>
                    )}
                </select>
            </div>

        )
    } else {
        return (
            <button className={"SuaiButton " + props.className}>
                {children}
            </button>

        )
    }

}

export default SuaiButton