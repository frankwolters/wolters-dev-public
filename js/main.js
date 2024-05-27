document.addEventListener('DOMContentLoaded', () => {
    var loadingCore = document.getElementById('loader-core');
    var launchpad = document.getElementById('launchpad-content');

    function hideLoading() {
        loadingCore.style.display = 'none';
        launchpad.style.opacity = 1;
    }

    setTimeout(() => {
        hideLoading();
    }, 1000);
});