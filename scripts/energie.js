fetch('https://raw.githubusercontent.com/dianebk/eindopdracht/main/data/energie.csv?token=GHSAT0AAAAAABUHGU7CSS75ZKKUMAB3FODWYTS2ILQ')

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
    let dataAsJson = JSC.csv2Json(text);
    console.log(dataAsJson)
}