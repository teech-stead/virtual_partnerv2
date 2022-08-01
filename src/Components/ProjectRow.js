import SmallHd from "./SmallHd";
function ProjectRow (props) {
    let status = props.status ? "OPEN" : 'IN PROGRESS'
    let statusDesign = props.status ? "compelete" : 'in-progress'
    return (
        <tr className="table-row">
                    <td className="pl-[15px] flex items-center gap-x-4 h-[50px]"> 
                         <img src={require(`../images/logos/${props.logo}`)} alt={props.logo} /> 
                         <SmallHd title={props.projectName} /> 
                    </td>
                    <td className="text-center w-[20%]"> <SmallHd title={props.create} />  </td>
                    <td><SmallHd title={props.reporter}/>  </td>
                    <td className="text-center pr-[40px] w-[120px]"> <SmallHd title={props.due}/> </td>
                    <td className="text-center pr-[15px] w-[90px] "> <span className={statusDesign + " status"}>{status}</span> </td>
        </tr>
    )
}
export default ProjectRow;