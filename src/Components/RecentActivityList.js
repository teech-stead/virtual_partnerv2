import FeatureHd from "./FeatureHd";
import RecentActivityRow from "./RecentActivityRow";
function RecentActivityList() {
  return (
    <table className="activity-tabel">
            <thead>
                <tr>
                    <th className="text-left w-[150px] pl-[15px]"> <FeatureHd title="RECENT " /> </th>
                    <th className="w-[70px]"> <FeatureHd title="STATUS" /></th>
                    <th className="pr-[15px]" ><FeatureHd title="TIME" /> </th>
                </tr>
            </thead>
            <tbody>
                <RecentActivityRow profile="talha.png" userName="Muhammad Talha" userDesignation="Project Manager" time="6:00 PM" month="19 July 2021" status={true} />
                <RecentActivityRow profile="talha.png" userName="Muhammad Talha" userDesignation="Project Manager" time="6:00 PM" month="19 July 2021"/>
                <RecentActivityRow profile="talha.png" userName="Muhammad Talha" userDesignation="Project Manager" time="6:00 PM" month="19 July 2021" status={true} />
                <RecentActivityRow profile="talha.png" userName="Muhammad Talha" userDesignation="Project Manager" time="6:00 PM" month="19 July 2021"/>
            </tbody>
        </table>
  )
}
export default RecentActivityList;