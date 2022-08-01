import CalenderArea from "./CalenderArea";
import DashboardArea from "./DashboardArea";
import Projects from "./Projects";
import WeeklyLeads from "./WeeklyLeads";
import ProjectList from "./ProjectList";
import RecentActivity from "./RecentActivity"
import Add from "./Add";
function MainBody () {
    return (
        <div className="mainbody-area">
           <DashboardArea>
              <div className="grid grid-cols-10 gap-5 items-center">
                <div className="col-span-3">
                    <Add title="Add Project" description="Create a new project on ProManage. Collaborate your work. Directory to your local projects" />
                </div>
                <div className="col-span-4">
                    <Projects />
                </div>
                <div className="col-span-3 h-full">
                    <WeeklyLeads />
                </div>
                <div className="col-span-7">
                    <ProjectList />
                </div>
                <div className="col-span-3 h-full">
                    <RecentActivity />
                </div>
              </div>
           </DashboardArea>
           <CalenderArea />
        </div>
    )
}
export default MainBody;



