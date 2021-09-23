import React from "react";
import { Line, Radar, Bar, Pie, Scatter, Chart } from "react-chartjs-2";
class ChartsPage extends React.Component {
    state = {
        dataLine: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(184, 185, 210, .3)",
                    borderColor: "rgb(35, 26, 136)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(35, 26, 136)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    };
    Rastate = {
        dataRadar: {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "rgba(194, 116, 161, 0.5)",
                    borderColor: "rgb(194, 116, 161)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    backgroundColor: "rgba(71, 225, 167, 0.5)",
                    borderColor: "rgb(71, 225, 167)",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        }

    }

    Bastate = {
        dataBar: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "% of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 134,159,0.4)",
                        "rgba(98,  182, 239,0.4)",
                        "rgba(255, 218, 128,0.4)",
                        "rgba(113, 205, 205,0.4)",
                        "rgba(170, 128, 252,0.4)",
                        "rgba(255, 177, 101,0.4)"
                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(255, 134, 159, 1)",
                        "rgba(98,  182, 239, 1)",
                        "rgba(255, 218, 128, 1)",
                        "rgba(113, 205, 205, 1)",
                        "rgba(170, 128, 252, 1)",
                        "rgba(255, 177, 101, 1)"
                    ]
                }
            ]
        },
        barChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }
    Piestate = {
        dataPie: {
            labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
            datasets: [
                {
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: [
                        "#F7464A",
                        "#46BFBD",
                        "#FDB45C",
                        "#949FB1",
                        "#4D5360",
                        "#AC64AD"
                    ],
                    hoverBackgroundColor: [
                        "#FF5A5E",
                        "#5AD3D1",
                        "#FFC870",
                        "#A8B3C5",
                        "#616774",
                        "#DA92DB"
                    ]
                }
            ]
        }
    }
    SCstate = {
        dataScatter: {
            labels: ['Scatter'],
            datasets: [
                {
                    borderColor: 'rgba(99,0,125, .2)',
                    backgroundColor: 'rgba(99,0,125, .5)',
                    label: 'V(node2)',
                    data: [
                        {
                            x: 1,
                            y: -1.711e-2
                        },
                        {
                            x: 1.26,
                            y: -2.708e-2
                        },
                        {
                            x: 1.58,
                            y: -4.285e-2
                        },
                        {
                            x: 2.0,
                            y: -6.772e-2
                        },
                        {
                            x: 2.51,
                            y: -1.068e-1
                        },
                        {
                            x: 3.16,
                            y: -1.681e-1
                        },
                        {
                            x: 3.98,
                            y: -2.635e-1
                        },
                        {
                            x: 5.01,
                            y: -4.106e-1
                        },
                        {
                            x: 6.31,
                            y: -6.339e-1
                        },
                        {
                            x: 7.94,
                            y: -9.659e-1
                        },
                        {
                            x: 10.0,
                            y: -1.445
                        },
                        {
                            x: 12.6,
                            y: -2.11
                        },
                        {
                            x: 15.8,
                            y: -2.992
                        },
                        {
                            x: 20.0,
                            y: -4.102
                        },
                        {
                            x: 25.1,
                            y: -5.429
                        },
                        {
                            x: 31.6,
                            y: -6.944
                        },
                        {
                            x: 39.8,
                            y: -8.607
                        },
                        {
                            x: 50.1,
                            y: -1.038e1
                        },
                        {
                            x: 63.1,
                            y: -1.223e1
                        },
                        {
                            x: 79.4,
                            y: -1.413e1
                        },
                        {
                            x: 100.0,
                            y: -1.607e1
                        },
                        {
                            x: 126,
                            y: -1.803e1
                        },
                        {
                            x: 158,
                            y: -2e1
                        },
                        {
                            x: 200,
                            y: -2.199e1
                        },
                        {
                            x: 251,
                            y: -2.398e1
                        },
                        {
                            x: 316,
                            y: -2.597e1
                        },
                        {
                            x: 398,
                            y: -2.797e1
                        },
                        {
                            x: 501,
                            y: -2.996e1
                        },
                        {
                            x: 631,
                            y: -3.196e1
                        },
                        {
                            x: 794,
                            y: -3.396e1
                        },
                        {
                            x: 1000,
                            y: -3.596e1
                        }
                    ]
                }
            ]
        },
        optionsScatter: {
            title: {
                display: true,
                text: 'Scatter Chart - Logarithmic X-Axis'
            },
            scales: {
                xAxes: [
                    {
                        type: 'logarithmic',
                        position: 'bottom',
                        ticks: {
                            userCallback: function (tick) {
                                var remain =
                                    tick / Math.pow(10, Math.floor(Chart.helpers.log10(tick)));
                                if (remain === 1 || remain === 2 || remain === 5) {
                                    return tick.toString() + 'Hz';
                                }
                                return '';
                            }
                        },
                        scaleLabel: {
                            labelString: 'Frequency',
                            display: true
                        }
                    }
                ],
                yAxes: [
                    {
                        type: 'linear',
                        ticks: {
                            userCallback: function (tick) {
                                return tick.toString() + 'dB';
                            }
                        },
                        scaleLabel: {
                            labelString: 'Voltage',
                            display: true
                        }
                    }
                ]
            }
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-3 py-3">
                    <center><h3>Here is your reports in diagram representation </h3></center>
                    <div className="col-lg-4 ">
                        <h3 className="mt-5">Line chart of sales report</h3>
                        <Line data={this.state.dataLine} options={{ responsive: true }} />
                    </div>
                    <div className="col-lg-4 ">
                    <center>  <h3 className="mt-5">Radar chart</h3></center>
                        <Radar data={this.Rastate.dataRadar} options={{ responsive: true }} />
                    </div>
                    <div className="col-lg-4">
                    <center>  <h3 className="mt-5">Bar chart</h3></center>
                        <Bar data={this.Bastate.dataBar} options={this.state.barChartOptions} />
                    </div>
                    <div className="col-lg-4">
                       <center> <h3 className="mt-5">Pie chart</h3></center>
                        <Pie data={this.Piestate.dataPie} options={{ responsive: true }} />
                    </div>
                    <div className="col-lg-4">
                       <center> <h3 className='mt-5'>Bar chart</h3></center>
                        <Scatter
                            data={this.SCstate.dataScatter}
                            options={this.SCstate.optionsScatter}
                        />
                    </div>
                </div>
            </div>


        );
    }
}

export default ChartsPage;