import MonthlyState from "./MonthlyState";
import ProgressArea from "./ProgressArea"
function TargetArea (props) {
   return (
    <div className="feature-wrap">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-4"> 
              <ProgressArea />
            </div>
            <div className="col-span-8"> 
             <MonthlyState />
            </div>
        </div>
    </div>
   )
}
export default TargetArea;