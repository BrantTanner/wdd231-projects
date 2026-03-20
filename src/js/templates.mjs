const spritePath = "/images/sprite.symbol.svg";

function iconTemplate(iconName) {
  return `<svg class="icon" role="presentation" focusable="false"><use xlink:href="${spritePath}#${iconName}"></use></svg>`;
}

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
        <a href="visitor-center.html?id=${center.id}">${center.name}</a>
        <p>${center.description}</p>
        <p>${center.directionsInfo ?? ""}</p>
        </li>`;
    }

    export function activityTemplate(activities){
        return activities.map((activity) => `<li>${activity.name}</li>`).join("");
    }


export function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcDetailsTemplate(id, title, iconName, content) {
  return `<details name="vc-details" id="${id}" class="vc-details">
            <summary>
              ${iconTemplate(iconName)}
              ${title}
            </summary>
            ${content}
          </details>`;
}

export function vcInfoTemplate(data) {
  const image = data.images[0];
  return `<figure>
          <img class="vc-info__image" src="${image.url}" alt="${image.altText}" />
          <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
        </figure>
        <p>${data.description}</p>`;
}
export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

function vcAddressTemplate(data) {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}
export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}
export function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}
export function vcContactsTemplate(data) {
  const emailAddress = data?.emailAddresses?.find(
    (entry) => entry?.emailAddress
  )?.emailAddress;
  const phoneNumber = data?.phoneNumbers?.find(
    (entry) => entry?.phoneNumber
  )?.phoneNumber;

  const emailMarkup = emailAddress
    ? `<a href="mailto:${emailAddress}">Send this visitor center an email</a>`
    : `<p>Email not listed</p>`;

  const phoneMarkup = phoneNumber
    ? `<a href="tel:+1${phoneNumber}">${phoneNumber}</a>`
    : `<p>Phone not listed</p>`;

  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            ${emailMarkup}
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            ${phoneMarkup}
          </section>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" /></li>`;
}



export function getParkInfoTemplate(info){
    return parkInfoTemplate(info)
};

export function getMediaCardTemplate(info){
    return mediaCardTemplate(info)
};



