import SmallHd from "./SmallHd";
import Icon from "./Icon";
function RecentActivityRow (props) {
    let statusLogo = props.status ? "checked" : 'cancel'
    return (
        <tr className="activity-table-row">
                    <td className="pl-[10px] w-[240px] h-[45px]"> 
                         <span className="flex items-center gap-x-1">
                            <img src={require(`../images/profile/${props.profile}`)} alt={props.profile} /> 
                            <span>
                               <SmallHd title={props.userName} /> 
                               <SmallHd className="light" title={props.userDesignation} /> 
                            </span>
                         </span>
                    </td>
                    <td className="text-center w-[70px] "> <Icon icon={`${statusLogo}.svg`} className="mx-auto" /> </td>
                    <td className="text-center  w-[120px]"> <SmallHd title={props.time}/> <SmallHd className="light" title={props.month}/> </td>
        </tr>
    )
}
export default RecentActivityRow