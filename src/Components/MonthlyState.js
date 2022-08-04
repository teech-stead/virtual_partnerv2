import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import baricon from "../images/icon/circle.png"
function MonthlyState () {
    useLayoutEffect(() => {
    
        let root = am5.Root.new("monthly-state");
    
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
    
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none"
          }));
          
          // Add cursor
          // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
          let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
          cursor.lineY.set("visible", false);
          
          // Create axes
          // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
          let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
          
          let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0,
            categoryField: "name",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
          }));
          
          xRenderer.grid.template.set("visible", false);
          
          let yRenderer = am5xy.AxisRendererY.new(root, {});
          let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0,
            min: 0,
            extraMax: 0.1,
            renderer: yRenderer
          }));
          
          yRenderer.grid.template.setAll({
            strokeDasharray: [2, 2]
          });
          
          // Create series
          // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
          let series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "name",
            tooltip: am5.Tooltip.new(root, { dy: -25, labelText: "{valueY}" })
          }));
          
          
          series.columns.template.setAll({
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
          });
          
          series.columns.template.adapters.add("fill", (fill, target) => {
            return '#C0B0FF';
          });
          
          series.columns.template.adapters.add("stroke", (stroke, target) => {
            return '#93AEFF';
          });


          chart.label = new am5.Label();
          chart.label.fontSize = 10
          
          // Set data
          let data = [
            {
              name: "John",
              value: 35654,
              bulletSettings: { src: baricon }
            },
            {
              name: "Damon",
              value: 65456,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/C02.png" }
            },
            {
              name: "fdg",
              value: 23423,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "dfg",
              value: 43544,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "cvbdf",
              value: 54333,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "rfg",
              value: 45433,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "jhj",
              value: 54333,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "fghg",
              value: 55344,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "fghfg",
              value: 23424,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "dfgg",
              value: 23433,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "rtyf",
              value: 34232,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "gdfg",
              value: 23423,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "er",
              value: 4545,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "etf",
              value: 454,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "ds",
              value: 534,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "sdf",
              value: 56454,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "we",
              value: 4566,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "xc",
              value: 4456,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "xdf",
              value: 2344,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "hj",
              value: 234,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "ghj",
              value: 3423,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "bcv",
              value: 3432,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "zxc",
              value: 3432,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "xcv",
              value: 3432,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "sed",
              value: 3432,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "wer",
              value: 3432,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "sdf",
              value: 3432,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "sdf",
              value: 3432,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "xcv",
              value: 3432,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
            },
            {
              name: "Mark",
              value: 13654,
              bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/E01.png" }
            }
          ];
          
          series.bullets.push(function() {
            return am5.Bullet.new(root, {
              locationY: 1,
              sprite: am5.Picture.new(root, {
                templateField: "bulletSettings",
                width: 15,
                height: 15,
                centerX: am5.p50,
                centerY: am5.p50,
                shadowColor: am5.color(0x000000),
                shadowBlur: 4,
                shadowOffsetX: 4,
                shadowOffsetY: 4,
                shadowOpacity: 0.6
              })
            });
          });
          
          xAxis.data.setAll(data);
          series.data.setAll(data);
          
          // Make stuff animate on load
          // https://www.amcharts.com/docs/v5/concepts/animations/
          series.appear(1000);
          chart.appear(1000, 100);
    
        return () => {
          root.dispose();
        };
      }, []);
    
      return (
        <div id="monthly-state" style={{ width: "100%", height: "260px" }}></div>
      );
}
export default MonthlyState