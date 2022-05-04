const keuze1 = document.getElementById('keuze1');
const keuze2 = document.getElementById('keuze2');
const totaal = document.getElementById('totaal');

const opties = ["vloerverwarming", "vloerisolatie", "schaar"];

onButtonClick = function (e) {

    const keus1 = e.value;
    keuze1.innerHTML = `eerste keus ${keus1}`;

    const keus2 = e.value;
    keuze2.innerHTML = `tweede keus ${keus2}`;

    // let speler2gewonnen = false;

    // if (speler1kiest == speler2kiest) {
    //     resultaat.innerHTML = "geen van beide gewonnen";
    //     return;
    // } else {
    //     if (speler1kiest == "steen") {
    //         if (speler2kiest == "papier") {
    //             speler2gewonnen = true;
    //         }
    //     } else if (speler1kiest == "papier") {
    //         if (speler2kiest == "schaar") {
    //             speler2gewonnen = true;
    //         }
    //     } else if
    //         (speler1kiest == "schaar") {
    //         if (speler2kiest == "steen") {
    //             speler2gewonnen = true;
    //         }
    //     }
    // }

    // if (speler2gewonnen) {
    //     resultaat.innerHTML = "speler 2 heeft gewonnen";
    // } else {
    //     resultaat.innerHTML = "Jij, speler 1, hebt gewonnen!";
    // }
};







// steenbtn.addEventListener("click", remember);
// papierbtn.addEventListener("click", remember);
// schaarbtn.addEventListener("click", remember);

// function remember() {
//     console.log()
// }

// function getrandom() {
//     document.getElemementById('resultaat').innerHTML = Math.floor(Math.random() * 3);

// }


// const berekenbtn = document.getElementById('berekenbtn');
// const pi = 3.14;
// const omtrek = document.getElementById('resultaat');

// berekenbtn.addEventListener("click", berekenomtrek);

// function berekenomtrek() {
//     var dia = document.getElementById('diameter').value;
//     document.getElementById('resultaat').innerHTML = (Number(dia) * pi).toFixed(2);
// }