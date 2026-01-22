"use strict";

import JokeMachine from "./jokeModule.js";

const getElement = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {


    const questionEl = getElement('#question');
    const answerEl = getElement('#answer');
    const nextBtn = getElement('#Next');

    const jokeMachine = new JokeMachine();

    const displayNextJoke = () => {
        const joke = jokeMachine.getNextJoke();
        if (!joke) return;
        questionEl.textContent = joke.q;
        answerEl.textContent = joke.a;
    };

    if (nextBtn) nextBtn.addEventListener('click', displayNextJoke);

    displayNextJoke();
    
});

