
function makeChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Energie kosten Euro",
        },
        axisX: {
            title: "Week nummer",
            interval: 1,
        },
        axisY: {
            title: "Euro",
            valueFormatString: "€#0",
            gridColor: "#B6B1A8",
            tickColor: "#B6B1A8"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "stackedColumn",
            showInLegend: true,
            name: "gas",
            color: "#99CCFF",
            dataPoints: [
                { y: 0, x: 17 },
                { y: 0, x: 16 },
                { y: 0, x: 15 },
                { y: 0, x: 14 },
                { y: 0, x: 13 },
                { y: 0, x: 12 },
                { y: 8.71, x: 11 },
                { y: 28.27, x: 10 },
                { y: 33.77, x: 9 },
                { y: 31.89, x: 8 },
            ]
        },
        {
            type: "stackedColumn",
            showInLegend: true,
            name: "stroom afgenomen",
            color: "#FFCC99",
            dataPoints: [
                { y: 1.43, x: 17 },
                { y: 20.79, x: 14 },
                { y: 32.80, x: 13 },
                { y: 12.73, x: 11 },
                { y: 3.40, x: 8 },
            ]
        },
        {
            type: "stackedColumn",
            showInLegend: true,
            name: "stroom teruggeleverd",
            color: "#99CCFF",
            dataPoints: [
                { y: -18.73, x: 16 },
                { y: -6.26, x: 15 },
                { y: -8.44, x: 12 },
                { y: -12.68, x: 10 },
                { y: -5.21, x: 9 },
            ]
        },
        {
            type: "line",
            showInLegend: true,
            name: "totaalbedrag",
            color: "#000000",
            dataPoints: [
                { y: 1.43, x: 17 },
                { y: -18.73, x: 16 },
                { y: -6.26, x: 15 },
                { y: 20.79, x: 14 },
                { y: 32.80, x: 13 },
                { y: -8.44, x: 12 },
                { y: 21.44, x: 11 },
                { y: 15.59, x: 10 },
                { y: 28.56, x: 9 },
                { y: 35.29, x: 8 }
            ]
        },
        ]
    });

    setNegativeColor(chart);
    chart.render();

    function setNegativeColor(chart) {
        for (var i = 0; i < chart.options.data.length; i++) {
            dataSeries = chart.options.data[i];
            for (var j = 0; j < dataSeries.dataPoints.length; j++) {
                if (dataSeries.dataPoints[j].y <= 0)
                    dataSeries.dataPoints[j].color = 'rgb(75, 205, 10)';
            }
        }
    }

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
}