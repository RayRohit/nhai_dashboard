import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

export default class LineCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "one",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "two",
          data: [12, 23, 16, 18, 17, 27, 22],
        },
      ],
      options: {
        chart: {
          height: 200,
          type: "line",
          background: "#32325d",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Average High & Low Temperature",
          align: "left",
          style: {
            color: "#E4E6E9",
          },
        },
        grid: {
          // borderColor: '#e7e7e7',
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
          },
          labels: {
            show: true,
            style: {
              colors: [
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
              ],
            },
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
            style: {
              color: "#E4E6E9",
            },
          },
          labels: {
            show: true,
            style: {
              colors: [
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
              ],
            },
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
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
          type="line"
          height={200}
        />
      </div>
    );
  }
}
