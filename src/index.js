import "./style.css";

const searchInput = document.getElementById("search");
const submitBtn = document.getElementById("submit");
const tempCurrent = document.getElementById("tempcurrent");
const tempMax = document.getElementById("tempmax");
const tempMin = document.getElementById("tempmin");
const addressText = document.getElementById("location");
const desc = document.getElementById("description");

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
            return data;
        })
        .then((data) => {
            addressText.textContent = data.resolvedAddress;
            desc.textContent = data.description;
            tempCurrent.textContent = data.currentConditions.temp;
            tempMax.textContent = `Max ${data.days[0].tempmax}`;
            tempMin.textContent = `Min ${data.days[0].tempmin}`;
        })
        .catch((err) => {
            console.error(err);
        });
});
