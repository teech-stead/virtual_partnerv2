import Header from "./Header";
import MainBody from "./MainBody";
import Aside from "./Aside";
function MainWrap() {    
    return ( 
      <div className="main">
        <Header />
        <div className="mainBody">
          <Aside />
          <MainBody />
        </div>
      </div>
     );
}
export default MainWrap;