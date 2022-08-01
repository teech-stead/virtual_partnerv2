import Avator from "./Avator";
import AsideList from "./AsideList";
function Aside () {
    return (
          <aside className="side-bar">
            <img src={require('../images/logo.png')} alt="logo" className="logo" />
            <AsideList />
            <Avator />
          </aside>
    )
}
export default Aside;