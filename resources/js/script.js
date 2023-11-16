document.getElementById('gallery').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        const thumbnail = event.target.parentElement;
        const title = thumbnail.getAttribute('data-title');
        const description = thumbnail.getAttribute('data-description');
        const images = JSON.parse(thumbnail.getAttribute('data-images'));

        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        let imagesHTML = images.map(src => `<img src="${src}" alt="${title}">`).join('');
        overlay.innerHTML = `
            <div class="enlarged">
                ${imagesHTML}
                <h2>${title}</h2>
                <p>${description}</p>
                <button onclick="document.getElementById('overlay').remove()">Close</button>
            </div>
        `;
        document.body.appendChild(overlay);
    }
});
