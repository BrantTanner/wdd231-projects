import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner_title">${info.name}</a>
    <p class="hero-banner_subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

// 1.
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// 2.
const title = document.querySelector("head > title");
title.textContent = parkData.fullName;

// 3.
const hero_image = document.querySelector(".hero-banner > img");

hero_image.src = parkData.images[0].url;
hero_image.alt = parkData.images[0].altText;

//4.
const park_info = document.querySelector(".hero-banner_content")

park_info.innerHTML = parkInfoTemplate(parkData)
