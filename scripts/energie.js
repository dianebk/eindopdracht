
function makeChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            fontFamily: "'Roboto', Arial, Helvetica', sans-serif",
            fontWeight: "bold",
            text: "Energiekosten per week",
        },
        axisX: {
            title: "Week nummer",
            interval: 1,
        },
        axisY: {
            title: "Euro",
            valueFormatString: "€#0",
            gridColor: "#B6B1A8",
            tickColor: "#B6B1A8",
            interval: 5,
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            fontWeight: "200",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "stackedColumn",
            showInLegend: true,
            name: "gas 2022",
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
            name: "stroom afgenomen 2022",
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
            name: "stroom teruggeleverd 2022",
            color: "#99FF99",
            showInLegend: true,
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
            name: "totaalbedrag 2022",
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
            {
                type: "line",
                showInLegend: true,
                name: "totaalbedrag 2021 (tarief '22)",
                color: "#FF0000",
                dataPoints: [
                    { y: 4.70, x: 17 },
                    { y: 44.07, x: 16 },
                    { y: 8.26, x: 15 },
                    { y: 35.52, x: 14 },
                    { y: 12.47, x: 13 },
                    { y: 21.35, x: 12 },
                    { y: 43.37, x: 11 },
                    { y: 40.42, x: 10 },
                    { y: 21.12, x: 9 },
                    { y: 35.71, x: 8 }
                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "totaalbedrag 2021 (tarief '21)",
                color: "#9933FF",
                dataPoints: [
                    { y: 4.70, x: 17 },
                    { y: 44.07, x: 16 },
                    { y: 8.26, x: 15 },
                    { y: 35.52, x: 14 },
                    { y: 12.47, x: 13 },
                    { y: 21.35, x: 12 },
                    { y: 43.37, x: 11 },
                    { y: 40.42, x: 10 },
                    { y: 21.12, x: 9 },
                    { y: 35.71, x: 8 }
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
                    dataSeries.dataPoints[j].color = '#99FF99';
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