AFRAME.registerComponent('clickable', {
    init: function () {
        const button = this.el;
        
        button.addEventListener('click', () => {
            // Open the URL in a new tab
            window.open('https://www.google.com', '_blank');
        });
    }
});