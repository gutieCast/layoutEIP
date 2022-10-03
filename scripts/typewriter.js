import Typewriter from 'typewriter-effect/dist/core';

const loopPhrases = document.getElementsByClassName('loopPhrases');
let typewriter = new Typewriter(loopPhrases, {
    autostart: true,
    loop: true
});

typewriter.typeString('escribo poesía.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('escribo ensayos.')
    .pauseFor(2500)
    .deleteChars(1)
    .typeString(' y artículos.')
    .deleteAll()
    .typeString('estoy contruyendo una vida <strong>alrededor de la escritura</strong>.')
    .start();