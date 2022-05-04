fetch('https://raw.githubusercontent.com/dianebk/eindopdracht/cc887d5ca4d25208811c954abf0e6c1bb0011256/data/energie.csv?token=GHSAT0AAAAAABUHGU7DRDYK3U4YVSYKWJSWYTS23KQ')

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