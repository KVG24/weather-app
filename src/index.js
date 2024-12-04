import "./style.css";
import { renderData } from "./render";
import "./convertTemp";
import auroraImg from "./images/aurora.jpg";
import { footer } from "./render";
import { dataDiv } from "./render";

document.body.style.backgroundImage = `url(${auroraImg})`;

const searchInput = document.getElementById("search");
const submitBtn = document.getElementById("submit");
const errorBox = document.getElementById("error");
const loader = document.querySelector(".loader-container");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loader.style.display = "block";
    dataDiv.style.display = "none";
    fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput.value}/next7days?unitGroup=metric&key=XSQJBABTWYL3YQLFB8ZKKY599`,
        {
            method: "GET",
            headers: {},
        }
    )
        .then((response) => {
            const data = response.json();
            console.log(data);
            errorBox.textContent = "";
            loader.style.display = "none";
            dataDiv.style.display = "block";
            return data;
        })
        .then((data) => {
            renderData(data);
        })
        .catch((err) => {
            console.error(err);
            errorBox.textContent = "No such location";
        });
});

footer.innerHTML = `Aurora Photo by <a href="https://unsplash.com/@lightscape?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lightscape</a> on <a href="https://unsplash.com/photos/northern-lights-over-snow-capped-mountian-LtnPejWDSAY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
