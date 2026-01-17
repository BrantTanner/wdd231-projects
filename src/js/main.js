import { getParkData } from "./parkService.mjs";
import { getParkInfoLinks } from "./parkService.mjs";

import { getMediaCardTemplate } from "./templates.mjs";

import { getHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();



function setIntroInfo(data){
    const title = document.querySelector("#intro > h1")
    title.textContent = data.fullName

    const description = document.querySelector("#intro > p")
    description.textContent = data.description

    const media_card = document.querySelector("#info > .media-card")
    media_card.innerHTML = getMediaCardTemplate(parkInfoLinks)
    
}

setIntroInfo(parkData);

getHeaderFooter(parkData);