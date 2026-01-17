
    function parkInfoTemplate(info) {
        return `<a href="/" class="hero-banner_title">${info.name}</a>
        <p class="hero-banner_subtitle">
            <span>${info.designation}</span>
            <span>${info.states}</span>
        </p>`;
    };

    function mediaCardTemplate(info){
        
        return `<div class="media-card">
            <div>
                <a href="${info[0].link}">
                    <img src="${info[0].image}" alt="${info[0].name}" class="media-card__img">
                    <h1 class="media-card__title">${info[0].name}</h1>
                </a>
                <p>${info[0].description}</p>
            </div>
            <div>
                <a href="${info[1].link}">
                    <img src="${info[1].image}" alt="${info[1].name}" class="media-card__img">
                    <h1 class="media-card__title">${info[1].name}</h1>
                </a>
                <p>${info[1].description}</p>
            </div>
            <div>
                <a href="${info[2].link}">
                    <img src="${info[2].image}" alt="${info[2].name}" class="media-card__img">
                    <h1 class="media-card__title">${info[2].name}</h1>
                </a>
                <p>${info[2].description}</p>
            </div>

        </div>`
    };

export function getParkInfoTemplate(info){
    return parkInfoTemplate(info)
};

export function getMediaCardTemplate(info){
    return mediaCardTemplate(info)
};



