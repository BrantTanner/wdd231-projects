import { getParkData, getParkInfoLinks } from "./parkService.mjs";

import { getMediaCardTemplate } from "./templates.mjs";

import { getHeaderFooter } from "./setHeaderFooter.mjs";
import {getInfoLinks} from "./parkService.mjs"



function setIntroInfo(data){
    const title = document.querySelector("#intro > h1")
    title.textContent = data.fullName

    const description = document.querySelector("#intro > p")
    description.textContent = data.description

    const media_card = document.querySelector("#info > .media-card")
    media_card.innerHTML = getMediaCardTemplate(getParkInfoLinks())
    
}

async function init(){
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);

    setIntroInfo(parkData);
    getHeaderFooter(parkData);
}

init()

