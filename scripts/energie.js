fetch('https://raw.githubusercontent.com/dianebk/studie/main/energie.csv')
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        csvToSeries(text);
    })
    .catch(function (error) {
        //Something went wrong
        console.log(error);
    });



function csvToSeries(text) {
    const stroombedrag = 'Stroom_Euro';
    let dataAsJson = JSC.csv2Json(text);
    let jaar22 = [], jaar21 = [];
    dataAsJson.forEach(function (row) {
        if (row.Jaar === '2022') {
            jaar22.push({ x: row.Jaar, y: row[stroombedrag] })
        } else if (row.Jaar === '2021') {
            jaar21.push({ x: row.Week, y: row[stroombedrag] });
        }
    });
    console.log([jaar22, jaar21]);
    return [
        { name: '2022', points: jaar22 },
        { name: '2021', points: jaar21 }
    ];


    function renderChart(series) {
        JSC.Chart('chartDiv', {
            series: series
        });
    }
}