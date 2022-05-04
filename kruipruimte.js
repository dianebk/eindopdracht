const btn = document.getElementById('btn');

let index = 0;

const bg = ['url(folie.jpg)', 'url(donker.jpg'];
const titels = ['Ha Igor!', 'Wat is het hier donker!'];
const teksten = ['Je hebt de klus geklaard. Top! Dankjewel!', 'Wil je een lamp aan doen zodat we de isolatie in de kruipruimte kunnen bekijken?']
const poppetje = ['<img src="igor1.png" alt="igor">', '']

btn.addEventListener('click', function onClick() {
    document.body.style.backgroundImage = bg[index];
    document.getElementById("titel").innerHTML = titels[index];
    document.getElementById("instructie").innerHTML = teksten[index];
    document.getElementById("mannetje").innerHTML = poppetje[index];
    index = index >= bg.length - 1 ? 0 : index + 1;
});

