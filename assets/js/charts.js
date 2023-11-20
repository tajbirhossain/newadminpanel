// chart functionality
var options = {
    chart: {
        height: 150,
        type: 'radialBar',
    },
    series: [70],
    labels: ['ff'],
    colors: ['#0080EF',],

    plotOptions: {
        radialBar: {
            hollow: {
                size: "40%",
            },
            track: {
                background: "#F0F0FA",
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: 5,
                    show: true
                }
            }
        },
    },
    fill: {
        type: "solid",
        colors: ["#0080EF"]
    }
}
var options2 = {
    chart: {
        height: 150,
        type: 'radialBar',
    },
    series: [70],
    labels: ['ff'],
    colors: ['#0080EF',],

    plotOptions: {
        radialBar: {
            hollow: {
                size: "40%",
            },
            track: {
                background: "#F0F0FA",
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: 5,
                    show: true
                }
            }
        },
    },
    fill: {
        type: "solid",
        colors: ["#FF6F61"]
    }
}
var options3 = {
    chart: {
        height: 150,
        type: 'radialBar',
    },
    series: [70],
    labels: ['ff'],
    colors: ['#0080EF',],

    plotOptions: {
        radialBar: {
            hollow: {
                size: "40%",
            },
            track: {
                background: "#F0F0FA",
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: 5,
                    show: true
                }
            }
        },
    },
    fill: {
        type: "solid",
        colors: ["#06D6A0"]
    }
}

var chart = new ApexCharts(document.querySelector(".progressRedial"), options);
var chart2 = new ApexCharts(document.querySelector(".progressRedial2"), options2);
var chart3 = new ApexCharts(document.querySelector(".progressRedial3"), options3);
var chart4 = new ApexCharts(document.querySelector(".bigRedial"), options);
var chart5 = new ApexCharts(document.querySelector(".bigRedial2"), options2);
var chart6 = new ApexCharts(document.querySelector(".bigRedial3"), options3);
var chart7 = new ApexCharts(document.querySelector(".bigRedial4"), options3);

chart.render();
chart2.render();
chart3.render();
chart4.render();
chart5.render();
chart6.render();
chart7.render();











var areaOptions = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 57, 19]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 47, 33]
    }],
    chart: {
        height: 120,
        type: 'area',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        },
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    colors: ['#0080EF', '#FF6F61'],
    xaxis: {
        labels: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        x: {
            enabled: false,
            format: 'dd/MM/yy HH:mm',
        },
    },
    legend: {
        show: false
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: [0, 0.7],
            opacityTo: [0, 0.4],  // Adjust this value to reduce opacity
            stops: [0, 90, 100]
        },
    },
};
var areaOptions2 = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 57, 19]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 47, 33]
    }],
    chart: {
        height: 120,
        type: 'area',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        },
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    colors: ['#0080EF', '#FF6F61'],
    xaxis: {
        labels: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        x: {
            enabled: false,
            format: 'dd/MM/yy HH:mm',
        },
    },
    legend: {
        show: false
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: [0.7, 0],
            opacityTo: [0.4, 0],  // Adjust this value to reduce opacity
            stops: [0, 90, 100]
        },
    },
};

var areaChart = new ApexCharts(document.querySelector(".areaChart"), areaOptions);
var areaChart2 = new ApexCharts(document.querySelector(".areaChart2"), areaOptions2);
areaChart.render();
areaChart2.render();













var barOptions = {
    series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30, 40, 10, 12, 35]
    }],
    chart: {
        height: 350,
        type: 'bar',
        events: {
            click: function (chart, w, e) {
                // console.log(chart, w, e)
            }
        },
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: false
        }
    },
    grid: {
        show: false
    },
    colors: ["#0080EF"],
    plotOptions: {
        bar: {
            columnWidth: '45%',
            distributed: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        labels: {
            style: {
                colors: ["#0080EF"],
                fontSize: '12px'
            }
        }
    }
};



var barChart = new ApexCharts(document.querySelector(".barChartBig"), barOptions);
barChart.render();