import AsidItem from "./AsidItem";
function AsideList () {
    return (
        <div className="aside-list">
           <AsidItem icon='dashboard-ic.svg' title="dashboard" status="active"/>
           <AsidItem icon='customer.svg' title="customer"/>
           <AsidItem icon='customer.svg' title="customer"/>
           <AsidItem icon='sales.svg' title="sales"/>
           <AsidItem icon='analytics.svg' title="analytics"/>
           <AsidItem icon='ticket.svg' title="tickets"/>
           <AsidItem icon='human-resources.svg' title="human resources"/>
           <AsidItem icon='messaging.svg' title="messages"/>
           <AsidItem icon='setting.svg' title="setting"/>
        </div>
    ) 
}
export default AsideList;