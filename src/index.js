import "./style.css";

const searchInput = document.getElementById("search");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput.value}/next7days?unitGroup=us&key=XSQJBABTWYL3YQLFB8ZKKY599`,
        {
            method: "GET",
            headers: {},
        }
    )
        .then((response) => {
            const data = response.json();
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
});
