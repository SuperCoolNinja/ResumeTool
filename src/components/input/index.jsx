export const Input = ({id, type, labelName}) =>
{
    return <form action="">
        <label htmlFor={id}>{labelName}</label>
        <input type={type} id={id}/>
    </form>
}