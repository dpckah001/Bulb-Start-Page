const lightbulb = document.getElementById('lightbulb');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const body = document.body;

function triggerSearchAnimation(callback) {
    lightbulb.classList.add('light-up');

    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    const rippleEffect = document.querySelector('.ripple-effect');
    rippleEffect.appendChild(ripple);

    const rect = lightbulb.getBoundingClientRect();
    ripple.style.left = `${rect.left + rect.width / 2}px`;
    ripple.style.top = `${rect.top + rect.height / 2}px`;

    body.style.backgroundColor = '#ffffff';
    body.style.color = '#000000';

    setTimeout(function() {
        rippleEffect.removeChild(ripple);
        body.style.backgroundColor = '';
        body.style.color = '';
        if (callback) callback();  // 动画结束后执行搜索
    }, 1000);
}

function performSearch(query) {
    const bingSearchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    window.open(bingSearchUrl, '_blank');
}

searchButton.addEventListener('click', function() {
    triggerSearchAnimation(() => performSearch(searchInput.value));
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        triggerSearchAnimation(() => performSearch(searchInput.value));
    }
});
