var theForm = document.forms["budgetform"];

var vloeriso_prijzen = new Array();
vloeriso_prijzen["Vloerisolatie zelf doen"] = 663;
vloeriso_prijzen["Vloerisolatie laten doen"] = 2495;

function getVloerisoPrijs() {
    var vloerisoBedrag = 0;
    var theForm = document.forms["budgetform"];
    var gekozenVloeriso = theForm.elements["selectedvloeriso"];
    for (var i = 0; i < 2; i++) {
        if (gekozenVloeriso[i].checked) {
            vloerisoBedrag = vloeriso_prijzen[gekozenVloeriso[i].value];
            break;
        }
    }
    return vloerisoBedrag;
}

function validateVloerisoSubsidie() {
    if (document.getElementById("vloerisozelf").checked) {
        document.getElementById('subsidieVloeriso').innerHTML = "Met deze keuze kun je geen subsidie aanvragen";
        var vloerisoSubsidie = 0;
    }
    else if (document.getElementById("vloerisouitbesteed").checked) {
        document.getElementById('subsidieVloeriso').innerHTML = "Met deze keuze kun je &euro; 429 subsidie aanvragen";
        var vloerisoSubsidie = 429;
    }
    else {
        var vloerisoSubsidie = 0;
    }
    return vloerisoSubsidie;
}


var glas_prijzen = new Array();
glas_prijzen["HR++ glas door glaszetter"] = 2000;
glas_prijzen["HR++ glas zelf plaatsen"] = 757;
glas_prijzen["Triple glas en kunststof kozijnen"] = 6163;

function getGlasPrijs() {
    var glasBedrag = 0;
    var theForm = document.forms["budgetform"];
    var gekozenGlas = theForm.elements["selectedglas"];
    for (var i = 0; i < 3; i++) {
        if (gekozenGlas[i].checked) {
            glasBedrag = glas_prijzen[gekozenGlas[i].value];
            break;
        }
    }
    return glasBedrag;
}

function validateGlasSubsidie() {
    if (document.getElementById("glaszetter").checked) {
        document.getElementById('subsidieGlas').innerHTML = "Met deze keuze kun je &euro; 385 subsidie aanvragen";
        var glasSubsidie = 385;
    }
    else if (document.getElementById("glaszelf").checked) {
        document.getElementById('subsidieGlas').innerHTML = "Met deze keuze kun je geen subsidie aanvragen";
        var glasSubsidie = 0;
    }
    else if (document.getElementById("tripleglas").checked) {
        document.getElementById('subsidieGlas').innerHTML = "Met deze keuze kun je &euro; 1600 subsidie aanvragen";
        var glasSubsidie = 1600;

    } else {
        glasSubsidie = 0;
    }
    return glasSubsidie;
}


var warmtepomp_prijzen = new Array();
warmtepomp_prijzen["Hybride met nieuwe CV-ketel"] = 6349;
warmtepomp_prijzen["All-electric met boiler"] = 9295 + 267 + 1036;

// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getWarmtePompPrijs() {
    var warmtePompBedrag = 0;
    //Get a reference to the form id="budgetform"
    var theForm = document.forms["budgetform"];
    //Get a reference to the pomp the user Chooses name=gekozenpomp":
    var gekozenPomp = theForm.elements["selectedpomp"];
    //We loop through each radio buttons
    for (var i = 0; i < 2; i++) {
        //if the radio button is checked
        if (gekozenPomp[i].checked) {
            //we set warmtepompBedrag to the value of the selected radio button
            //by using the warmtepomp_prijzen array
            //We get the selected item's value
            warmtePompBedrag = warmtepomp_prijzen[gekozenPomp[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    return warmtePompBedrag;
}

function validateWpSubsidie() {
    if (document.getElementById("hybr").checked) {
        document.getElementById('subsidieWp').innerHTML = "Met deze keuze kun je &euro; 1600 subsidie aanvragen";
        var wpSubsidie = 1600;
    }
    else if (document.getElementById("all-e").checked) {
        document.getElementById('subsidieWp').innerHTML = "Met deze keuze kun je &euro; 2850 subsidie aanvragen";
        var wpSubsidie = 2850;
    }
    else {
        wpSubsidie = 0;
    }
    return wpSubsidie;
}


function getVloerverwarmingsPrijs() {
    var vvwPrijs = 0;
    var theForm = document.forms["budgetform"];
    var includeVloerverwarming = theForm.elements["includevloerverwarming"];
    if (includeVloerverwarming.checked) {
        vvwPrijs = 1300;
    }
    return vvwPrijs;
}

function getZonneboilerPrijs() {
    var zonneboilerPrijs = 0;
    var theForm = document.forms["budgetform"];
    var includeZonneboiler = theForm.elements["includezonneboiler"];
    if (includeZonneboiler.checked) {
        zonneboilerPrijs = 2040;
    }
    return zonneboilerPrijs;
}

function validateZonneboilerSubsidie() {
    if (document.getElementById("includezonneboiler").checked) {
        document.getElementById('subsidieZonneboiler').innerHTML = "Met deze keuze kun je &euro; 871 subsidie aanvragen"
        var zonneboilerSubsidie = 871;
    }
    else {
        var zonneboilerSubsidie = 0;
    }
    return zonneboilerSubsidie;
}

function getBrievenbusPrijs() {
    var brievenbusPrijs = 0;
    var theForm = document.forms["budgetform"];
    var includeBrievenbus = theForm.elements["includebrievenbus"];
    if (includeBrievenbus.checked) {
        brievenbusPrijs = 59;
    }
    return brievenbusPrijs;
}

function validateBrievenbusSubsidie() {
    if (document.getElementById("includebrievenbus").checked) {
        document.getElementById('subsidieBrievenbus').innerHTML = "Hiervoor kun je geen subsidie aanvragen"
        var brievenbusSubsidie = 0;

        return brievenbusSubsidie;
    }
}

function getVentilatieboxPrijs() {
    var ventilatieboxPrijs = 0;
    var theForm = document.forms["budgetform"];
    var includeVentilatie = theForm.elements["includeventilatie"];
    if (includeVentilatie.checked) {
        ventilatieboxPrijs = 335;
    }
    return ventilatieboxPrijs;
}

function validateVentilatieboxSubsidie() {
    if (document.getElementById("includeventilatie").checked) {
        document.getElementById('subsidieVentilatiebox').innerHTML = "Hiervoor kun je geen subsidie aanvragen"
        var ventilatieboxSubsidie = 0;

        return ventilatieboxSubsidie;
    }
}

function getTotal() {
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var totaalbedrag = getWarmtePompPrijs() + getGlasPrijs() + getVloerisoPrijs() + getVloerverwarmingsPrijs() + getZonneboilerPrijs() + getBrievenbusPrijs() + getVentilatieboxPrijs();
    //display the result
    document.getElementById('totaalBedrag').innerHTML =
        `Totaalbedrag voor jouw keuzes &euro;${totaalbedrag} (exclusief subsidies want die kun je pas aanvragen als je de maatregelen betaald hebt!)`;
}

function getSubsidies() {
    // var subsidietotaal = 0;
    var subsidietotaal = validateVloerisoSubsidie() + validateGlasSubsidie() + validateWpSubsidie() + validateZonneboilerSubsidie();
    if (subsidietotaal !== 0) {
        document.getElementById('totaalSubsidies').innerHTML = "Totaal subsidiebedrag bij jouw keuzes &euro;" + parseInt(subsidietotaal);
    } else {
        document.getElementById('totaalSubsidies').innerHTML = "Geen subsidies bij jouw keuzes";
    }
}
