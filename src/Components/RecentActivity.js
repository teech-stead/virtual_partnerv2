import FeatureHd from "./FeatureHd";
import RecentActivityList from "./RecentActivityList"
import Btn from "./Btn";
function RecentActivity () {
    return (
        <div className="feature-wrap">
            <div className="flex justify-between items-center mb-[20px]">
                <FeatureHd title="RECENT ACTIVITY"/>
                <Btn className='secondary-btn' text="See All" />
            </div>
            <div className="activity-tabel-wrap">
                <RecentActivityList />
            </div>
        </div>
    )
}
export default RecentActivity;