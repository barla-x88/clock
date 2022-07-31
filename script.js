'use strict';

//random background function
const randomBg = () => {
    const randomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;
    document.getElementById('body').classList.add(`body--${randomInt(1,2)}`);
}


//clock functions
const placeHolder = document.querySelector('.clock');

const displayClock = () => {
    const currentTime = new Date();
    const configureDisplay = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    }
    const timeString = new Intl.DateTimeFormat(navigator.locale, configureDisplay).format(currentTime);
    const fullDate = currentTime.toLocaleDateString(navigator.locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: "numeric",
        hour12: true,
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    placeHolder.innerHTML = `<p>${timeString.toUpperCase()}</p><p class="fulldate">${fullDate}</p>`;
}

const displayTime = function () {
    displayClock();
    const timer = setInterval(displayClock, 1000)
};

displayTime();
randomBg();

