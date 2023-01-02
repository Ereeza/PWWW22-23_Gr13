window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    console.log(h);

    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    const time = h + ":" + m + ":" + s + "" + "|" + "" + session;
    document.getElementById("DisplayClock").innerHTML = time;
    setTimeout(showTime, 1000);

    //change background
    const user = document.getElementById("User");
    let clock = document.getElementById("clock");

    if (h < 8 && session === "AM") {
        clock.style.background = "url('assets/images/paris-day.jpg') center/cover no-repeat";
        user.innerHTML = "Good Morning!";
    }
    else if (h < 11 && session === "AM") {

        clock.style.background = "url('assets/images/paris-day.jpg') center/cover no-repeat";
        user.innerHTML = "Good Day!";
    }
    else if (h < 8 && session === "PM") {
        clock.style.background = "url('assets/images/paris-night.jpg') center/cover no-repeat";

        user.innerHTML = "Good Afternoon!";
    }
    else {
        clock.style.background = "url('assets/images/paris-night.jpg') center/cover no-repeat";

        user.innerHTML = "Good Night!";
    }


    const body = document.querySelector("body");
};

document.querySelector(".focus-container input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const focus = document.querySelector(".focus-container input");
        document.querySelector(".focus-container").innerHTML = '<h6>TODAY:</h6><h1>${focus}</h1>';
    }
});