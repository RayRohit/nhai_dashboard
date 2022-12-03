import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
export default class Pie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [50, 99.6],
      options: {
        chart: {
          type: "donut",
          // background: "#273143",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100px",
              },
            },
          },
        ],
        legend: {
          // position: "bottom",
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
          type="donut"
          height={220}
        />
      </div>
    );
  }
}
