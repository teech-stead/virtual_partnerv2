import Btn from "./Btn";
function Avator () {
    return (
        <div className="avator-area">
            <div className="avator-wrap text-center">
                <div className="avator-profile relative">
                    <img src={require(`../images/avator.png`)} alt='avator' height="90" width="90" />
                    <span className="avator-status"></span>
                </div>
                <h5 className="avator-name">Usama Ovais Kapadia</h5>
                <h6 className="avator-designation">Founder</h6>
                <Btn className="primary-btn" text="Logout" onClick={() =>  console.log('working') } />
            </div>
        </div>
    )
}
export default Avator;