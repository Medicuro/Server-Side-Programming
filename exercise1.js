"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    let counter = 0;
    let timer = null;

    let countText = $("#count");
    let startBtn = $("#start");
    let stopBtn = $("#stop");

    startBtn.addEventListener("click", () => {
        
        if (timer === null) {
            timer = setInterval(() => {
                counter++
                countText.textContent = counter
            }, 1000);
        }
    })

    stopBtn.addEventListener("click", () => {
        clearInterval(timer);
        timer = null;
        countText.textContent = 1
    })
});
