import FeatureHd from "./FeatureHd"
import ProjectNumber from "./ProjectNumber"
function Projects(){
    return(
        <div className="feature-wrap">
           <FeatureHd title="PROJECTS" />
           <div className="grid grid-cols-12 gap-x-[0.93rem] pt-2 project-wrap relative">
               <img src={require(`../images/graphs/circle-graph.png`)} alt="graph"  className="graph-back"/>
               <div className="col-span-4">
                <FeatureHd title="NOT STARTED" className="text-center" />
                <ProjectNumber number="50" color="#ACAFFF" item="one" />
               </div>
               <div className="col-span-4">
                <FeatureHd title="IN PROGRESS" className="text-center" />
                <ProjectNumber number="50" color="#F3A64E" />
               </div>
               <div className="col-span-4">
                <FeatureHd title="DELIVERED" className="text-center" />
                <ProjectNumber number="50" color="#9FDFCD" />
               </div>
               <div className="col-span-4 col-start-3 mt-[-13px]">
                <ProjectNumber number="50" color="#FFAAB9" />
                <FeatureHd title="URGENT" className="text-center mt-2 mb-00" />
               </div>
               <div className="col-span-4 col-start-7 mt-[-13px]">
                <ProjectNumber number="50" color="#D79AD7" />
                <FeatureHd title="COMPLETED" className="text-center mt-2 mb-00" />
               </div>
           </div>
        </div>
    )
}
export default Projects