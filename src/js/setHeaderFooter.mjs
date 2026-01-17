import { getParkInfoTemplate } from "./templates.mjs";

function setHeaderFooter(data) {
        // 1.
        const disclaimer = document.querySelector(".disclaimer > a");
        disclaimer.href = data.url;
        disclaimer.innerHTML = data.fullName;

        // 2.
        const title = document.querySelector("head > title");
        title.textContent = data.fullName;

        // 3.
        const hero_image = document.querySelector(".hero-banner > img");

        hero_image.src = data.images[0].url;
        hero_image.alt = data.images[0].altText;

        //4.
        const park_info = document.querySelector(".hero-banner_content")

        park_info.innerHTML = getParkInfoTemplate(data)


        const po_box = document.querySelector(".mailing-address > .PO")
        po_box.textContent = data.addresses[1].line1

        const address = document.querySelector(".mailing-address > .address")
        address.textContent = `${data.addresses[1].city}, ${data.addresses[1].stateCode}, ${data.addresses[1].postalCode}`;

        const phone = document.querySelector(".phone > p")
        phone.textContent = data.contacts.phoneNumbers[0].phoneNumber
};

export function getHeaderFooter(data){
    return setHeaderFooter(data)
};
