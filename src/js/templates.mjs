
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
                <img src="${info[0].image}" alt="${info[0].description}">
                <h1>${info[0].name}</h1>
                <p>${info[0].description}</p>
            </div>
            <div>
                <img src="${info[1].image}" alt=${info[1].description}'>
                <h1>${info[1].name}</h1>
                <p>${info[1].description}</p>
            </div>
            <div>
                <img src="${info[2].image}" alt="${info[2].description}">
                <h1>${info[2].name}</h1>
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



