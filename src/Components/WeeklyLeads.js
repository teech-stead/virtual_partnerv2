import FeatureHd from "./FeatureHd";
import TotalNumberHd from "./TotalNumberHd";
import Icon from "./Icon"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



function WeeklyLeads () {
return (
    <div className="feature-wrap leads">
     <FeatureHd title="Weekly"/>
     <div className="flex items-center gap-x-2">
        <TotalNumberHd title="4000" />
        <Icon icon="triangle.svg" />
     </div>
     <AreaChart
          width={340}
          height={225}
          data={data}
          margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
        >
            {/* <Tooltip  dot={false} /> */}
            <CartesianGrid vertical={false} stroke="#D5E3D6"/>
          <XAxis dataKey="name" fontSize={8} width={30} height={15} />
          <YAxis fontSize={8} width={25}  />
          <Tooltip />
          <Area type="" dataKey="uv" stroke="#69BABA" fill="#66b4b4c4" dot={true} />
        </AreaChart>
    </div>
)
   

    // return (
    //     <div className="feature-wrap">
    //       <FeatureHd title="WEEKLY LEADS" />
    //     </div>
    // )
}
export default WeeklyLeads;