function ProjectNumber (props) {
    let color = props.color ? props.color : ""
    return (
        <div className={`outer-circle ${props.item}`} style={{ borderColor: color }}>
            <div className="inner-circle">
                <h2 className="project-number" style={{ color: color }}>{props.number}</h2>
            </div>
        </div>
    )
}
export default ProjectNumber;