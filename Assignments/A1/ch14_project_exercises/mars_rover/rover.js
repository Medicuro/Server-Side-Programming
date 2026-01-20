"use strict";
const $ = selector => document.querySelector(selector);

const domain = "https://rovers.nebulum.one/api/v1/rovers";

const displayRover = (roverData) => {
    $("#options").classList.remove("hide");

    $("#status").textContent = roverData.status;
    $("#photos").textContent = roverData.total_photos;
    $("#landing").textContent = roverData.landing_date;
    $("#max").textContent = roverData.max_date;

    const yearSelect = $("#year");
    yearSelect.innerHTML = "";
    for(let i=2026; i>1999; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    const monthSelect = $("#month");
    monthSelect.innerHTML = "";
    for(let i=1; i<=12; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }

    const daySelect = $("#date");
    daySelect.innerHTML = "";
    for(let i=1; i<=31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    const cameraSelect = $("#camera");

    const cameraData = roverData.cameras;
    cameraSelect.innerHTML = "";
    cameraData.forEach( camera => {
        cameraData.innerHTML
        let option = document.createElement("option")
        option.value = camera.name;
        option.textContent = camera.name;
        cameraSelect.appendChild(option);
    });

}

document.addEventListener("DOMContentLoaded", async () => {
    // get rover data
    const response = await fetch(domain);
    const roverData = await response.json();

    const roverSelect = $("#rover");

    const roverList = roverData.rovers;

    roverList.forEach( rover => {
        let roverOption = document.createElement("option");
        roverOption.value = rover.name;
        roverOption.textContent = rover.name;
        roverSelect.appendChild(roverOption);
    });

    displayRover(roverList[0]);

    
    // change event handler for Rover drop-down
    $("#rover").addEventListener("change", async (evt) => {
        const selectedRover = roverSelect.value;

        const selectedData = roverList.find( rover => rover.name === selectedRover);

        displayRover(selectedData);
        
    });

    // click event handler for View button
    $("#view").addEventListener("click", async () => {

        const requestURL = `${domain}/${roverSelect.value}/photos/?earth_date=${$("#year").value}-${$("#month").value}-${$("#date").value}&camera=${$("#camera").value}`

        const imageRequest = await fetch(requestURL);
        const imageData = await imageRequest.json();

        const displayDiv = $("#display");
        displayDiv.innerHTML = "";
        imageData.photos.forEach( photo => {
            let image = document.createElement("img");
            image.src = photo.img_src;
            displayDiv.appendChild(image);
        })
    });
});