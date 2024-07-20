import "./style.css"

export const Input = ({ id, type, labelName }) => {
    return <form action="">
        <div>
            <label htmlFor={id}>{labelName}</label>
        </div>
        <div>
            <input className="input" type={type} id={id} />
        </div>
    </form>
}