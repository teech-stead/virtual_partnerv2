import FeatureHd from "./FeatureHd";
import ProjectRow from "./ProjectRow";
function ProjectList() {

    function setHeader(e) {
        let scroll = e.target.scrollTop
        console.log(scroll)
     if (scroll >= 60){
        e.target.classList.add('active')
    }else {
         e.target.classList.remove('active')
     }
    }

    return(
        <div className="pt-[30px] project-tabel-wrap" onScroll={setHeader}>
            <table className="project-tabel">
                <thead>
                    <tr>
                        <th className="text-left w-[230px] "> <FeatureHd title="RECENT PROJECTS" /> </th>
                        <th className="" ><FeatureHd title="CREATED" /> </th>
                        <th className="text-left"><FeatureHd title="REPORTER" /> </th>
                        <th className="w-[120px] pr-[40px]"> <FeatureHd title="DUE" /></th>
                        <th className="w-[110px] pr-[15px]"> <FeatureHd title="STATUS" /></th>
                    </tr>
                    </thead>
                    <tbody>
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={true} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                    <ProjectRow projectName="Google" create='Thu, 26 Oct' reporter="Christian Matthews" due="Thu, 26 Oct" status={false} logo="google.png" />
                </tbody>
            </table>
        </div>
    )
}
export default ProjectList;