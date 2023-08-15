AFRAME.registerComponent('clickable', {
    init: function () {
        const button = this.el;

        button.addEventListener('click', () => {
            // Redirect the current window to the URL
            window.location.href = 'https://www.google.com';
        });
    }
});