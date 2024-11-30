const icon = document.getElementById("icon");
const tempCurrent = document.getElementById("tempcurrent");
const tempRange = document.getElementById("temprange");
const precipProb = document.getElementById("precip-prob");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const addressText = document.getElementById("location");
const date = document.getElementById("date");
const desc = document.getElementById("description");
const suntime = document.getElementById("suntime");
const hoursContainer = document.querySelector(".hours");
const daysContainer = document.querySelector(".days");
const currentDate = new Date();
let currentHour = currentDate.getHours();

export function renderData(data) {
    hoursContainer.replaceChildren();
    daysContainer.replaceChildren();
    if (data.days[0].icon == "cloudy") {
        icon.textContent = "☁️";
    } else if (data.days[0].icon == "snow") {
        icon.textContent = "❄️";
    } else if (data.days[0].icon == "fog") {
        icon.textContent = "🌫️";
    } else if (data.days[0].icon == "rain") {
        icon.textContent = "🌧️";
    } else if (data.days[0].icon == "wind") {
        icon.textContent = "🍃";
    } else if (data.days[0].icon == "partly-cloudy-day") {
        icon.textContent = "🌤️";
    } else if (data.days[0].icon == "partly-clody-night") {
        icon.textContent = "🌥️";
    } else if (data.days[0].icon == "clear-day") {
        icon.textContent = "☀️";
    } else if (data.days[0].icon == "clear-night") {
        icon.textContent = "🌙";
    }
    addressText.textContent = data.resolvedAddress;
    desc.textContent = data.description + " " + data.days[0].description;
    date.textContent = data.days[0].datetime;
    tempCurrent.textContent = `${data.days[0].hours[currentHour].temp} °C`;
    tempRange.textContent = `Min/Max ${data.days[0].tempmin} / ${data.days[0].tempmax} °C`;
    precipProb.textContent = `💦 ${data.days[0].precipprob}%`;
    pressure.textContent = `Pressure: ${data.currentConditions.pressure} mbar`;
    humidity.textContent = `Humidity ${data.currentConditions.humidity}%`;
    suntime.textContent = `Sunrise ${data.currentConditions.sunrise} | Sunset ${data.currentConditions.sunset}`;

    for (let i = 1; i < 7; i++) {
        const hourDiv = document.createElement("div");
        const hourTime = document.createElement("div");
        const hourIcon = document.createElement("div");
        const hourTemp = document.createElement("div");
        const hourPrecipProb = document.createElement("div");
        const hourHumidity = document.createElement("div");
        hourTime.textContent = data.days[0].hours[
            currentHour + i
        ].datetime.substring(0, 5);
        if (data.days[0].hours[currentHour + i].icon == "cloudy") {
            hourIcon.textContent = "☁️";
        } else if (data.days[0].hours[currentHour + i].icon == "snow") {
            hourIcon.textContent = "❄️";
        } else if (data.days[0].hours[currentHour + i].icon == "fog") {
            hourIcon.textContent = "🌫️";
        } else if (data.days[0].hours[currentHour + i].icon == "rain") {
            hourIcon.textContent = "🌧️";
        } else if (data.days[0].hours[currentHour + i].icon == "wind") {
            hourIcon.textContent = "🍃";
        } else if (
            data.days[0].hours[currentHour + i].icon == "partly-cloudy-day"
        ) {
            hourIcon.textContent = "🌤️";
        } else if (
            data.days[0].hours[currentHour + i].icon == "partly-clody-night"
        ) {
            hourIcon.textContent = "🌥️";
        } else if (data.days[0].hours[currentHour + i].icon == "clear-day") {
            hourIcon.textContent = "☀️";
        } else if (data.days[0].hours[currentHour + i].icon == "clear-night") {
            hourIcon.textContent = "🌙";
        }
        hourTemp.textContent = `${data.days[0].hours[currentHour + i].temp} °C`;
        hourPrecipProb.textContent = `💦 ${
            data.days[0].hours[currentHour + i].precipprob
        }%`;
        hourHumidity.textContent = `HM: ${
            data.days[0].hours[currentHour + i].humidity
        }%`;
        hourDiv.appendChild(hourTime);
        hourDiv.appendChild(hourIcon);
        hourDiv.appendChild(hourTemp);
        hourDiv.appendChild(hourPrecipProb);
        hourDiv.appendChild(hourHumidity);
        hoursContainer.appendChild(hourDiv);
    }
    for (let i = 1; i < 8; i++) {
        const dayDiv = document.createElement("div");
        const dayDate = document.createElement("div");
        const dayIcon = document.createElement("div");
        const dayTemp = document.createElement("div");
        const dayTempRange = document.createElement("div");
        const dayPrecipProb = document.createElement("div");

        let date = data.days[i].datetime;
        dayDate.textContent = date.substring(8);
        if (data.days[i].icon == "cloudy") {
            dayIcon.textContent = "☁️";
        } else if (data.days[i].icon == "snow") {
            dayIcon.textContent = "❄️";
        } else if (data.days[i].icon == "fog") {
            dayIcon.textContent = "🌫️";
        } else if (data.days[i].icon == "rain") {
            dayIcon.textContent = "🌧️";
        } else if (data.days[i].icon == "wind") {
            dayIcon.textContent = "🍃";
        } else if (data.days[i].icon == "partly-cloudy-day") {
            dayIcon.textContent = "🌤️";
        } else if (data.days[i].icon == "partly-clody-night") {
            dayIcon.textContent = "🌥️";
        } else if (data.days[i].icon == "clear-day") {
            dayIcon.textContent = "☀️";
        } else if (data.days[i].icon == "clear-night") {
            dayIcon.textContent = "🌙";
        }
        dayTemp.textContent = `${data.days[i].temp} °C`;
        dayTempRange.textContent = `${data.days[i].tempmin} / ${data.days[i].tempmax} °C`;
        dayPrecipProb.textContent = `💦 ${data.days[i].precipprob}%`;

        dayDiv.appendChild(dayDate);
        dayDiv.appendChild(dayIcon);
        dayDiv.appendChild(dayTemp);
        dayDiv.appendChild(dayTempRange);
        dayDiv.appendChild(dayPrecipProb);
        daysContainer.appendChild(dayDiv);
    }
}
