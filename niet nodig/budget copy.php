<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script defer src="budget.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budget</title>
</head>

<body>
    <h1>Budget verdelen</h1>

    <h3>Hoe ga ik mijn &euro; 10.000 besteden</h3>
    <form method="post" action="budget.php">
        <table>
            <tr>
                <td>vloerverwarming</td>
                <td><input type="submit" id="vloerverwarming" name="vloerverw" value="1300"><br></td>
            </tr>
            <tr>
                <td>vloerisolatie (uitbesteed)</td>
                <td><input type="submit" id="vloerisolatie" name="vloeriso" value="2495"><br></td>
            </tr>
            <tr>
                <td>subsidie vloerisolatie (uitbesteed) 39m2 x &euro; 11</td>
                <td>-429</td>
            </tr>
            <tr>
                <td>vloerisolatie zelf doen</td>
                <td><input type="submit" id="vloerisozelf" name="vloerisozelf" value="663"><br></td>
            </tr>
            <tr>
                <td>glas door glaszetter</td>
                <td><input type="submit" id="glaszetter" name="glaszet" value="2000"><br></td>
            </tr>
            <tr>
                <td>subsidie glas (uitbesteed) 11m2 x &euro; 35</td>
                <td>-385</td>
            </tr>
            <tr>
                <td>glas zelf doen</td>
                <td><input type="submit" id="glas" name="glaszelf" value="757"><br></td>
            </tr>
            <tr>
                <td>warmtepomp hybride en nieuwe cv-ketel</td>
                <td><input type="button" id="hybride" name="hybr" value="6349"><br></td>
            </tr>
            <tr>
                <td>subsidie hybride</td>
                <td>-1600</td>
            </tr>
            <tr>
                <td>zonneboiler</td>
                <td><input type="button" id="zonneboiler" name="zonneb" value="2040"><br></td>
            </tr>
            <tr>
                <td>subsidie zonneboiler</td>
                <td>-871</td>
            </tr>
            <tr>
                <td>warmtepomp all-electric incl boiler</td>
                <td><input type="button" id="warmtepomp" name="warmtep" value="9295"><br></td>
            </tr>
            <tr>
                <td>subsidie all-electric</td>
                <td>-2850</td>
            </tr>
            <tr>
                <td>groepenkast vervangen tbv all-electric warmtepomp</td>
                <td><input type="button" id="groepenkast" name="groepenk" value="806"><br></td>
            </tr>
            <tr>
                <td>stroom verzwaren door netbeheerder tbv all-electric warmtepomp</td>
                <td><input type="button" id="krachtstroom" name="krachtstr" value="230"><br></td>
            </tr>
            <tr>
                <td>brievenbus verplaatsen</td>
                <td><input type="button" id="brievenbus" name="brievenb" value="29"><br></td>
            </tr>
            <tr>
                <td>ventilatiebox</td>
                <td><input type="button" id="ventilatiebox" name="ventilatie" value="335"><br></td>
            </tr>
            <tr>
                <td>inductie kookplaat en pannen</td>
                <td><input type="button" id="inductie" name="induc" value="267"><br></td>
            </tr>
            <tr>
                <td>triple glas en kunststof kozijnen</td>
                <td><input type="button" id="tripleglas" name="triple" value="6163"><br></td>
            </tr>
            <tr>
                <td>subsidie triple glas</td>
                <td>-1600</td>
            </tr>
        </table>
        <p id="keuze1"></p>
        <p id="keuze2"></p>
        <h3 id="totaal"></h3>
        <!-- <input type="num" id="geld" name="geld"> -->
        <!-- <input type="submit" name="submit" value="bereken"> -->
    </form>


    ?>




    $budget = 10000;
    $vloerverwarming = 1300;
    $vloerisolatie = 2495;
    $subsvloeriso = 429;
    $vloerisozelf = 663;
    $glasaannemer = 2000;
    $subsglas = 385;
    $glaszelf = 757;
    $hybride = 6349;
    $subshybride = -1600;
    $zonneboiler = 2040;
    $pomp = 9295;
    $subspomp = -2850;
    $meterkastelektricien = 806;
    $meterkastdnwg = 230;
    $brievenbus = 29;
    $ventilatie = 335;
    $inductie = 267;
    $tripleglaspluskunststofkozijnen = 6163;
    $substriple = -1600;
    ?>

    <h2>Calculator</h2>
    <form action="budget.php" method="post">
        <!-- <input id="bereken" type="submit" name="submit" value="Add"> -->
        <br>
    </form>


    <!-- <script>
        const vloerverw = document.getElementById('vloerverwarming');
        const vloeriso = document.getElementById('vloerisolatie');
        const vloerisozelf = document.getElementById('vloerisozelf')
        const keuzes = [];
        const resultaat = document.getElementById('resultaat');

        const opties = ["vloerverwarming", "vloerisolatie", "vloerisozelf"];

        onButtonClick = function(e) {

            const vloerverw = e.value;
            keuze1.innerHTML = `je kiest voor ${vloerverw}`;
            console.log(1300);


            const keuze2 = e.value;
            keuze2.innerHTML = `je kiest voor ${vloerisolatie}`;
            console.log(2495);

            const keuze3 = e.value;
            keuze3.innerHTML = `je kiest voor ${vloerisozelf}`;
            console.log(663);
        }
    </script> -->

    // $clothes = 't-shirt';
    // $size = 'medium';
    // $color = 'blue';

    // $array = compact('clothes', 'size', 'color');
    // print_r($array);

    // Array
    // (
    // [clothes] => t-shirt
    // [size] => medium
    // [color] => blue
    // )


    // $numbers = [1, 2, 3, 4, 5];
    // echo(array_sum($numbers)); // 15

    // $order = [
    // ['product_id' => 1, 'price' => 99, 'count' => 1],
    // ['product_id' => 2, 'price' => 50, 'count' => 2],
    // ['product_id' => 2, 'price' => 17, 'count' => 3],
    // ];

    // $sum = array_sum(array_map(function($product_row) {
    // return $product_row['price'] * $product_row['count'];
    // }, $order));

    // print_r($sum); // 250
    ?>








    Besparing bij goede isolatie
    Gas verbruik 0 m3 -€ 1.200,00
    Extra stroom warmtepomp 3204 kwh x 0,23 Euro € 736,92
    Zelf maken met bestaande zonnepanelen 2700 kwh -€ 621,00
    Vastrecht gas niet meer betalen -€ 168,00
    Totaal besparing per jaar, na 3 jaar klussen -€ 1.252,08

    productie zonnenpanelen 2700 kwh
    extra stroom nodig voor pomp 2900 kwh
    gewoon stroom nodig 1600 kwh
</body>


</html>