var animationSpeed = 15; // in seconds

document.addEventListener('DOMContentLoaded', () => {
    var loadingCore = document.getElementById('loader-core');
    var circle1 = loadingCore.querySelector('.circle-1');
    var circle2 = loadingCore.querySelector('.circle-2');
    var circle3 = loadingCore.querySelector('.circle-3');

    function updateAnimationSpeed() {
        var speed = 2;
        circle1.style.animationDuration = `${speed}s`;
        circle2.style.animationDuration = `${speed / 2}s`;
        circle3.style.animationDuration = `${speed / 2}s`;
    }

    setTimeout(() => {
        //updateAnimationSpeed();
    }, 5000);
});