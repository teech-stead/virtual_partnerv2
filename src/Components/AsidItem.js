function AsidItem ( props, { onClick } ) {
    return (
        <button onClick={onClick} className={`aside-btn ${props.status}`}>
            <span>
               <img src={require(`../images/icon/aside/${props.icon}`)} alt='icon' width="25" height="25" />
            </span>
            {props.title}
        </button>
    )
}
export default AsidItem;