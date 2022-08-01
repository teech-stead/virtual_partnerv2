import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Btn from "./Btn";
function Add(props) {
  return (
    <div className="add-area">
        <h2 className="primary-hd">{props.title}</h2>
        <h2 className="para">{props.description}</h2>
        <Btn className="create-btn">
            <span><FontAwesomeIcon icon={faPlus} /></span>
            CREATE NEW PROJECT
        </Btn>
    </div>
  )
}
export default Add;