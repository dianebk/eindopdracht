'use strict';
(function () {

})();

var envelope = document.getElementById('envelope');
var envelopeTop = document.getElementById('envelopeTop');
var letter = document.getElementById('letter');
var left = document.getElementById('envelopeCoverLeft');
var bottomRight = document.getElementById('envelopeBottomRight');

envelopeTop.classList.add("close");

envelope.addEventListener('mouseover', openEnvelopeOnHover);
envelope.addEventListener('mouseout', closeEnvelopeOnHover);

function openEnvelopeOnHover() {
    envelopeTop.classList.remove("close");
    envelopeTop.classList.add("open");
    pullOutPartial();
}

function pullOutPartial() {
    letter.classList.remove("in");
    letter.classList.add("out-partial");
}



function putIn() {
    letter.classList.remove("out-partial");
    letter.classList.add("in");
}

envelope.addEventListener('click', openEnvelope);



function openEnvelope() {
    var flag = 0;
    closeEnvelopeOnHover();
    letter.classList.add("pull");
    letter.addEventListener("animated", function () {
        left.style.zIndex = 5;
        bottomRight.style.zIndex = 5;
        envelopeTop.style.zIndex = 1;
        letter.style.zIndex = 3;
        letter.classList.add("put");
        letter.addEventListener("animated", function () {
            letter.style.transition = 'none';
            letter.classList.add("final");
            letter.classList.remove("put");
            letter.classList.remove("pull");
            envelope.style.cursor = "default";
        });
    });
    envelope.removeEventListener('click', openEnvelope);
}

function closeEnvelopeOnHover() {
    var flag = 0;
    if (flag === 1) {
        putIn();
        envelopeTop.classList.remove("open");
        envelopeTop.classList.add("close");
    } else {
        envelope.removeEventListener('mouseout', closeEnvelopeOnHover);
    }
}