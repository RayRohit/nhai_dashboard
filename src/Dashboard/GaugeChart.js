import React from "react";
import ReactApexChart from "react-apexcharts";

export default class sGaugeChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [75],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          // background: "#273143",
          toolbar: {
            show: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#ffdde1",
            //   strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                // blur: 4,
                // opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: "#E4E6E9",
                fontSize: "17px",
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: "#E4E6E9",
                fontSize: "36px",
                show: true,
              },
            },
          },
        },
        // fill: {
        //   type: "gradient",
        //   gradient: {
        //     // shade: "dark",
        //     type: "horizontal",
        //     // shadeIntensity: 0.5,
        //     gradientToColors: ["#DE9EA0"],
        //     inverseColors: false,
        //     opacityFrom: 1,
        //     opacityTo: 1,
        //     stops: [0, 100],
        //   },
        // },
        fill:{
            colors:['#F15F79'],
            type: 'solid',
        },
        stroke: {
        //   lineCap: "round",
          colors:"#ee9ca7"
        },
        labels: ["ERI"],
      },
    };
  }

  render() {
    return (
      <div id="card">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={220}
          />
        </div>
      </div>
    );
  }
}
