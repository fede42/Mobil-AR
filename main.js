
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
        let element = document.getElementById("scanSection");
        element.setAttribute("hidden", "hidden");
    });
    // detect target lost
    sceneEl.addEventListener("targetLost", event => {
        console.log("target lost");
        let element = document.getElementById("scanSection");
        element.removeAttribute("hidden");
    });
    // arError event triggered when something went wrong. Mostly browser compatbility issue
    sceneEl.addEventListener("arError", (event) => {
        console.log("ar error");
    });
});

const target0 = document.getElementById('target0');
const target2 = document.getElementById('target2');

target0.addEventListener('mindar-image-target-found', () => {
  console.log('Target 0 found');
});

target0.addEventListener('mindar-image-target-lost', () => {
  console.log('Target 0 lost');
});

target2.addEventListener('mindar-image-target-found', () => {
    let element = document.getElementById("mobilSuperSection");
    element.removeAttribute("hidden");
});

target2.addEventListener('mindar-image-target-lost', () => {
    let element = document.getElementById("mobilSuperSection");
    element.setAttribute("hidden", "hidden");
});