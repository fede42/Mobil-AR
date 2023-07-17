
document.addEventListener("DOMContentLoaded", function () {
    const sceneEl = document.querySelector('a-scene');
    let arSystem;
    sceneEl.addEventListener('loaded', function () {
        arSystem = sceneEl.systems["mindar-face-system"];
    });
    // arReady event triggered when ready
    sceneEl.addEventListener("arReady", (event) => {
        console.log("ar ready");
    });
    // detect target found
    sceneEl.addEventListener("targetFound", event => {
        console.log("target found");
        let scanPanel = document.getElementById("scanSection");
        scanPanel.setAttribute("hidden", "hidden");
        setTimeout(() => {
            showInfo();
        }, 300);
        //let mobilSuperPanel = document.getElementById("mobilSuperSection");
        //mobilSuperPanel.removeAttribute("hidden");
    });
    // detect target lost
    sceneEl.addEventListener("targetLost", event => {
        console.log("target lost");
        let scanPanel = document.getElementById("scanSection");
        scanPanel.removeAttribute("hidden");
        //let mobilSuperPanel = document.getElementById("mobilSuperSection");
        //mobilSuperPanel.setAttribute("hidden", "hidden");
    });
    // arError event triggered when something went wrong. Mostly browser compatbility issue
    sceneEl.addEventListener("arError", (event) => {
        console.log("ar error");
    });
});

let btn3D = button => {
    window.location.href = 'mobil-super.html';
}

let btnVideo = button => {
    window.location.href = 'https://www.youtube.com/live/AJ7lbqyLbX8?feature=share';
}

let btnBack = button => {
    window.location.href = 'index.html';
}

const showInfo = () => {
    const webButton = document.querySelector("#web-button");

    webButton.addEventListener('click', function (evt) {
        window.location.href = "mobil-1.html";
    });
}