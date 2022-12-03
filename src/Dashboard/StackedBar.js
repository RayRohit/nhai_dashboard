import React from "react";
import ReactApexChart from "react-apexcharts";
export default class StackedBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Service Road",
          data: [3, 2.996],
        },
        {
          name: "Carriageway Width ",
          data: [1, 0],
        },
      ],

      options: {
        colors: ["#FF9800", "#3D9EED"],
        chart: {
          type: "bar",
          height: 150,
          stacked: true,
          // background: "#273143",
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              total: {
                enabled: true,
                offsetX: 0,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                  color: "#E4E6E9",
                },
              },
            },
          },
        },
        stroke: {
          width: 1,
          colors: ["#E4E6E9"],
        },
        title: {
          style: {
            color: "#E4E6E9",
          },
        },
        xaxis: {
          categories: ["Analyzed Points", "Achieved Points"],
          labels: {
            show: true,
            style: {
              colors: ["#E4E6E9", "#E4E6E9"],
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: ["#E4E6E9", "#E4E6E9"],
            },
          },
        },

        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetX: 40,
          labels: {
            colors: ["#e4e6e9"],
            useSeriesColors: false,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={200}
        />
      </div>
    );
  }
}
