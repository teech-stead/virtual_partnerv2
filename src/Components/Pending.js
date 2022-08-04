import React, { useRef, useLayoutEffect } from 'react';
import FeatureHd from "./FeatureHd";
import TotalNumberHd from "./TotalNumberHd";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Para from './Headings/Para';
am4core.useTheme(am4themes_animated);
function Pending () {

    const charts = useRef(null);
    const color = '#fff';

    useLayoutEffect(() => {
        let chart = am4core.create("chartdiv", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        
        chart.data = [
          {
            country: "Logo",
            litres: 501.9
          },
          {
            country: "Stationary",
            litres: 301.9
          },
          {
            country: "Website",
            litres: 201.1
          },
          {
            country: "App",
            litres: 165.8
          }
        ];
        
        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(35);
        chart.depth = 65;
        
        chart.legend = new am4charts.Legend();
        chart.legend.position = "right";
        chart.legend.fontSize = 10
        chart.legend.labels.template.fill = am4core.color(color);
        chart.legend.valueLabels.template.disabled = true; 
        chart.legend.markers.template.width = 15
        chart.legend.markers.template.height = 15
        
        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres"; 
        series.dataFields.depthValue = "litres";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 1;
        series.colors.step = 3;
        series.labels.template.disabled = true;
        series.ticks.template.disabled = true;
        
        series.colors.list = [
          am4core.color("#9FDFCD"),
          am4core.color("#D79AD7"),
          am4core.color("#FFAAB9"),
          am4core.color("#A0A2FF")
        ];
  
      charts.current = chart;
  
      return () => {
        chart.dispose();
      };
    }, []);
  
  

 return (
    <div className="feature-wrap">
        <FeatureHd title="PENDING TASKS" />
        <TotalNumberHd title="36" />
        <div className='donut-wrap'>
          <div id="chartdiv" style={{ width: "100%", height: "200px" }}></div>
        </div>
        <Para className="max-w-[220px] mx-auto mb-00" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
    </div>
 )
}
export default Pending;
