
function Btn ({ onClick, children, text, type, className }) {
   let innerBtn = text ? text : children
    return(
        <button className={className} type={type} onClick={onClick}> { innerBtn } </button>
    )
}
export default Btn;
