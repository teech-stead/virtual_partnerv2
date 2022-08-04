import { useState, useEffect } from "react";
import {  CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import BaseHd from "./Headings/BaseHd";
function ProgressArea () {
    const [target, setTarget] = useState(0) 
    const [progress, setPregress] = useState(0) 
    const progressValue = progress;
   console.log(progress)
      useEffect(() => {
            setTarget(100)
            setPregress(80 / 2)
        },[]);

    return (
        <div className="progress-area">
            <BaseHd title="Monthly Target" className="text-center mb-3" />
            <div className="progress-wrap">
                <div className="meter-text-area">
                    <h4 className="hd-lg">78%</h4>
                    <BaseHd title="Target $15,1000" className="text-center target-text" />
                </div>
                <CircularProgressbarWithChildren
                        value={progressValue}
                        circleRatio={0.5}
                        strokeWidth={10}
                        styles={buildStyles({
                        strokeLinecap: "butt",
                        rotation: 0.75,
                        pathColor: (progress <=  target / 3.3) ? "#ED7179" : (progress <=  target / 1.5) ? '#F3A64E' : '#73C155',
                        trailColor: "#F0EFF7"
                        })}
                    >
                </CircularProgressbarWithChildren>
            </div>
                <h4 className="base-hd text-center border max-w-[85%] mx-auto mt-[22px]">Achieved : <span style={{ color: `${(progress <=  target / 3.3) ? "#ED7179" : (progress <=  target / 1.5) ? '#F3A64E' : '#73C155'}` }}>$12,010</span></h4>
        </div>
    ) 
}
export default ProgressArea;