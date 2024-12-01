import "./style.css";
import { renderData } from "./render";

const searchInput = document.getElementById("search");
const submitBtn = document.getElementById("submit");
const errorBox = document.getElementById("error");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
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
