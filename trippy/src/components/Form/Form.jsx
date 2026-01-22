import { Link } from "react-router"
import "./Form.css"
const Form = ({ title, inputs, textArea, btn, sentens, logBtn }) => {
    return (
        <div className="form">
            <h3> {title} </h3>
            <form className="inputForm">
                {inputs.map((place, index) => {
                    return (
                        <input key={index} type={place?.type} placeholder={place?.name} />
                    )
                })}
                {textArea && <textarea placeholder={textArea} ></textarea>}
                <input type="submit" value={btn} />
                <div className="log">
                    {sentens && <p> {sentens} </p>}
                    <Link to="/logIn">
                        {logBtn && <button> {logBtn} </button>}
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Form
