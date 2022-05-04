<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budget</title>
</head>

<body>
    <h1>Budget verdelen</h1>

    <h3>Hoe ga ik mijn &euro; 10.000 besteden</h3>
    <table>
        <tr>
            <td>vloerverwarming</td><td>1300</td>
        </tr>
        <tr>
            <td>vloerisolatie</td><td>2495</td>
        </tr>
        <tr><td>glas door glaszetter</td><td>2000</td>
</tr>
<tr><td>glas zelf doen</td><td>757</td></tr>
<tr><td>warmtepomp</td><td>9295</td></tr>
<tr><td>groepenkast vervangen</td><td>806</td></tr>
<tr><td>stroom verzwaren door netbeheerder</td><td>230</td></tr>
<tr><td>brievenbus verplaatsen</td><td>29</td></tr>
<tr><td>ventilatiebox</td><td>335</td></tr>
<tr><td>inductie kookplaat en pannen</td><td>267</td></tr>
<tr><td>triple glas en kunststof kozijnen</td><td>7000</td></tr></table>
    <form method="post" action="budget.php">
        <!-- <input type="num" id="geld" name="geld"> -->
        <input type="submit" value="Wisselen">
    </form>
    <?php

    $budget = 10000;
    $vloerverwarming = 1400;
    $vloerisolatie = 2495;
    $glasaannemer = 2000;
    $glaszelf = 757;
    $pomp = 9295;
    $meterkastelektricien = 806;
    $meterkastdnwg = 230;
    $brievenbus = 29;
    $ventilatie = 335;
    $inductie = 267;
    $tripleglaspluskunststofkozijnen = 7000;

    <h2>Calculator</h2>
    <form action="calculator.php" method="post">
        <label for="firstnum">Number 1</label>
        <input type="text" id="firstnum" name="firstnum" value="<?php echo isset($_POST['firstnum']) ? $_POST['firstnum'] : '' ?>" /><br>
        <br>
        <label for="secondnum">Number 2</label>
        <input type="text" id="secondnum" name="secondnum" value="<?php echo isset($_POST['secondnum']) ? $_POST['secondnum'] : '' ?>" /><br>
        <br>
        <input id="Add" type="submit" name="submit" value="Add">
        <input id="Substract" type="submit" name="submit" value="Substract">
        <input id="Multiply" type="submit" name="submit" value="Multiply">
        <input id="Divide" type="submit" name="submit" value="Divide">
        <input id="Modulo" type="submit" name="submit" value="Modulo"><br>
        <br>
    </form>

<?php
$firstnum = "";
$secondnum = "";
$firstnumErr = "Number 1 is not a number <br>";
$secondnumErr = "Number 2 is not a number <br>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!is_numeric($_POST["firstnum"])) {
        echo $firstnumErr;
    } elseif (!is_numeric($_POST["secondnum"])) {
        echo $secondnumErr;
        exit;
    } else {
        $firstnum = $_POST["firstnum"];
        $secondnum = $_POST["secondnum"];

        $selected_button = $_POST['submit'];
        switch ($selected_button) {
            case "Add":
                echo "Operation: " . $_POST["submit"] . "<br>";
                echo "Result: " . ($firstnum + $secondnum) . "<br>";
                break;
            case "Substract":
                echo "Operation: " . $_POST["submit"] . "<br>";
                echo "Result: " . ($firstnum - $secondnum) . "<br>";
                break;
            case "Multiply":
                echo "Operation: " . $_POST["submit"] . "<br>";
                echo "Result: " . ($firstnum * $secondnum) . "<br>";
                break;
            case "Divide":
                if ($secondnum == 0) {
                    echo "Division by zero is not allowed";
                } else {
                    echo "Operation: " . $_POST["submit"] . "<br>";
                    echo "Result: " . ($firstnum / $secondnum) . "<br>";
                }
                break;
            case "Modulo":
                if ($secondnum == 0) {
                    echo "Modulo by zero is not allowed";
                } else {
                    echo "Operation: " . $_POST["submit"] . "<br>";
                    echo "Result: " . fmod($firstnum, $secondnum) . "<br>";
                }
                break;
        }
    }
};

?>
    ?>



    // $subsglas = 385; 11x35perm2
    // $subsvloer = 308;
    // $subspomp = 2850;

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