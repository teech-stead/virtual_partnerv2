import Icon from "./Icon"
function HeaderOptions () {
    return(
      <div className="mr-16 flex items-center">
        <div className="mx-3">
           <Icon icon="home.svg"/>
         </div>
         <div className="mx-3">
         <Icon icon="messaging.svg"/>
         </div>
         <div className="mx-3">
         <Icon icon="notification.svg"/>
         </div>
         <div className="mx-3">
         <Icon icon="query.svg"/>
         </div>
         <div className="mx-3">
         <Icon icon="setting.svg"/>
         </div>
      </div>
    ) 
}
export default HeaderOptions