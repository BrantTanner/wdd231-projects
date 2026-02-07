const spritePath = "/images/sprite.symbol.svg";

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

    export function alertTemplate(alert){
        let alertType = "";

        switch (alert.category) {
            case "Park Closure":
                alertType = "closure";
                break;
            default:
                alertType = alert.category.toLowerCase();
        }
        return `<li class="alert">
        <svg class="icon" focusable="false" aria-hidden="true">
            <use xlink:href="${spritePath}#alert-${alertType}"></use>
        </svg>
        <div>
            <h3 class="alert-${alertType}">${alert.title}</h3>
            <p>${alert.description}</p>
        </div></li>`;
    }
    
    export function visitorCenterTemplate(center) {
        return `<li class="visitor-center">
        <h4>${center.name}</h4>
        <p>${center.description}</p>
        <p>${center.directionsInfo}</p>
        </li>`;
    }

    export function activityTemplate(activities){
        return activities.map((activity) => `<li>${activity.name}</li>`).join("");
    }


export function getParkInfoTemplate(info){
    return parkInfoTemplate(info)
};

export function getMediaCardTemplate(info){
    return mediaCardTemplate(info)
};



