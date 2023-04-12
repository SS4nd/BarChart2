"use strict";

window.addEventListener("load", initApp);

function initApp() {
    const grid = document.getElementById('barchart');
    var numbers = [];
    for (var x = 0; x < 40; x++) {
        const bar = document.createElement('div');
        bar.className = "bar";
        numbers.push(getNumberOfCustomers());
        bar.style.height = numbers[numbers.length - 1].toString() + "%";
        grid.appendChild(bar);
    }
    change(numbers);
}

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 32);
}

function change(numbers) {
    var newNum = numbers;
    const bars = document.querySelectorAll(".bar");

    setInterval(function() {
        bars.forEach((b, i) => {
            try {
                b.style.height = newNum[i].toString() + "%";
                b.style.backgroundColor = `rgb(${newNum[i]*4}, ${newNum[i]*4}, ${newNum[i]*4})`;
            } catch {
                b.style.height = newNum[39].toString() + "%";
                b.style.backgroundColor = `rgb(${newNum[39]*4}, ${newNum[39]*4}, ${newNum[39]*4})`;
            }
        });
        newNum.push(newNum.shift());
    }, 100);
}