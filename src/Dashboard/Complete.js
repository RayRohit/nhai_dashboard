
import React from 'react'
import ReactApexChart from 'react-apexcharts';
export default class Complete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Points Obtained',
                data: [33]
            }, {
                name: 'Points Deducted',
                data: [2]
            }, {
                name: 'Non Analyzed',
                data: [10]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                    // background: "#2F394C",
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            total: {
                                enabled: true,
                                offsetX: 0,
                                style: {
                                    fontSize: '1px',
                                    fontWeight: 900,
                                }
                            }
                        }
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    style: {
                        color: '#e4e6e9'
                    }
                },
                xaxis: {
                    categories: [2022],
                    // labels: {
                    //     formatter: function (val) {
                    //         return val + "K"
                    //     }
                    // }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        // formatter: function (val) {
                        //     return val + "K"
                        // }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40,
                    labels: {
                        colors: ["#E4E6E9",],
                        useSeriesColors: false
                    },
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={200} />
            </div>


        );
    }
}