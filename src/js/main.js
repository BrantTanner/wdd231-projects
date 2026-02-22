import "../css/style.css"; // we can do this because we are using Vite...
import "../css/home.css";

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

function enableNavigation(){
    const nav_btn = document.querySelector("#global-nav-toggle")

    nav_btn.addEventListener("click", (ev) => {
        let target = ev.target

        if(target.tagName != "BUTTON"){
            target = target.closest("button");
        }

        const nav = document.querySelector(".global-nav");
        nav.classList.toggle("show");

        if (nav.classList.contains("show")) {
            target.setAttribute("aria-expanded", "true");
        }
        else
        {
            target.setAttribute("aria-expanded", "false");
        }
    
        console.log("toggle");
    });
}

async function init(){
    const parkData = await getParkData();
    getInfoLinks(parkData.images);

    setIntroInfo(parkData);
    getHeaderFooter(parkData);
}

enableNavigation()
init()

