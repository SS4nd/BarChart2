"use strict";

window.addEventListener("load", initApp);

function initApp() {
    const grid = document.getElementById('barchart');
    var numbers = [];
    for (var x = 0; x < 40; x++) {
        const bar = document.createElement('div');
        bar.className = "bar";
        numbers.push(Math.floor(Math.random() * 300));
        bar.style.height = numbers[numbers.length - 1].toString() + "px";
        grid.appendChild(bar);
    }
    change(numbers);

}

function change(numbers) {
    var newNum = numbers;
    const bars = document.querySelectorAll(".bar");

    setInterval(function() {
        bars.forEach((b, i) => {
            try {
                b.style.height = newNum[i].toString() + "px";
                b.style.backgroundColor = `rgb(${newNum[i]/2}, ${newNum[i]/2}, ${newNum[i]/2})`;
            } catch {
                b.style.height = newNum[39].toString() + "px";
                b.style.backgroundColor = `rgb(${newNum[39]/2}, ${newNum[39]/2}, ${newNum[39]/2})`;
            }
        });
        newNum.push(newNum.shift());
    }, 100);
}