
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
        let mobilSuperPanel = document.getElementById("mobilSuperSection");
        scanPanel.setAttribute("hidden", "hidden");
        mobilSuperPanel.removeAttribute("hidden");
    });
    // detect target lost
    sceneEl.addEventListener("targetLost", event => {
        console.log("target lost");
        let scanPanel = document.getElementById("scanSection");
        let mobilSuperPanel = document.getElementById("mobilSuperSection");
        mobilSuperPanel.setAttribute("hidden", "hidden");
        scanPanel.removeAttribute("hidden");
    });
    // arError event triggered when something went wrong. Mostly browser compatbility issue
    sceneEl.addEventListener("arError", (event) => {
        console.log("ar error");
    });
});

const btn3D = document.getElementById('btn3D');

  // Add a click event listener to the button
  btn3D.addEventListener('click', () => {
    // Redirect to the specified link
    window.location.href = 'mobil-super.html';
  });