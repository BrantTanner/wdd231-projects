import "../css/style.css";
import "../css/conditions.css";

import { getAlertData, getParkData, getParkVisitorCenters} from "./parkService.mjs";

import { getHeaderFooter } from "./setHeaderFooter.mjs";
import {getInfoLinks} from "./parkService.mjs"
import {alertTemplate} from "./templates.mjs";
import { visitorCenterTemplate } from "./templates.mjs";
import { activityTemplate } from "./templates.mjs";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("beforeend", html.join(""))
}

function setVisitorCenters(centers){
    const centersContainer = document.querySelector(".visitor ul");
    const html = centers.map(visitorCenterTemplate);
    centersContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivites(activities){
    const activitiesContainer = document.querySelector(".activities ul");
    const html = activityTemplate(activities);
    activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

async function init(){
    const parkData = await getParkData();
    getInfoLinks(parkData.images);
    const alerts = await getAlertData(parkData.parkCode);
    const visitorCenters = await getParkVisitorCenters(parkData.parkCode)
    // setIntroInfo(parkData);
    getHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivites(parkData.activities);
}

init();