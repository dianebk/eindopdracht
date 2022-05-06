<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/main.css">
    <link rel="stylesheet" type="text/css" href="styles/brievenbus.css">
    <script defer src="scripts/brievenbus.js"></script>
    <title>Brievenbus</title>
</head>

<body>
    <div class="intro">
        <div class="ha">
        <h1>Ha, er is post!</h1>
        <p>Een brief van iemand die ik ken van Bit Academy. Wat leuk! </p>
    </div>
</div>
    
    <div class="postontvangen">
        <div class="dankjewel">
    <h3>Dankjewel voor je bericht!</h3>
    <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ((!empty($_POST["naam"])) && (!empty($_POST["bericht"]))) {
            echo "Dankjewel " . $_POST['naam'] . ". Diane is blij met de post.<br>In jouw brief staat:<br><br>";
            echo "&quot;" . $email = $_POST['bericht'] . "&quot;.<br>";
        } else {
            header("Location: brievenbus.php");
            exit();  
        }
    };
    ?>
    </div>
    <div class="stuiter-envelop">
        <div class="envelop">
            <div class="envelop-back"></div>
            <div class="message"></div>
            <div class="envelop-front"></div>
        </div>
        <div class="shadow"></div>
    </div>
    </div>
</div>

    <div id="terug">
        <a class="terug-btn" href="timeline.html#anchor-brievenbus">Terug naar de tijdlijn</a>
    </div>
</body>

</html>