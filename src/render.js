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

    // Today

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
    date.textContent = `🗓️ ${data.days[0].datetime}`;
    desc.innerHTML = `<p>${data.days[0].description}</p><p>${data.description}</p>`;
    tempCurrent.textContent = `${Math.round(
        data.days[0].hours[currentHour].temp
    )} °C`;
    tempRange.textContent = `Min/Max ${Math.round(
        data.days[0].tempmin
    )} / ${Math.round(data.days[0].tempmax)} °C`;
    precipProb.textContent = `💦 ${Math.round(data.days[0].precipprob)}%`;
    pressure.textContent = `Pressure: ${data.currentConditions.pressure} mbar`;
    humidity.textContent = `Humidity ${data.currentConditions.humidity}%`;
    suntime.textContent = `🌅 ${data.currentConditions.sunrise.slice(
        0,
        5
    )} | 🌆${data.currentConditions.sunset.slice(0, 5)}`;

    // Hourly

    for (let i = 1; i < 7; i++) {
        const hourDiv = document.createElement("div");
        const hourTime = document.createElement("div");
        const hourIcon = document.createElement("div");
        const hourTemp = document.createElement("div");
        const hourPrecipProb = document.createElement("div");
        const hourHumidity = document.createElement("div");
        let curHour = data.days[0].hours[currentHour + i];

        hourTime.textContent = data.days[0].hours[
            currentHour + i
        ].datetime.substring(0, 5);
        hourTime.className = "hour-time";

        hourIcon.className = "hour-icon";
        if (curHour.icon == "cloudy") {
            hourIcon.textContent = "☁️";
        } else if (curHour.icon == "snow") {
            hourIcon.textContent = "❄️";
        } else if (curHour.icon == "fog") {
            hourIcon.textContent = "🌫️";
        } else if (curHour.icon == "rain") {
            hourIcon.textContent = "🌧️";
        } else if (curHour.icon == "wind") {
            hourIcon.textContent = "🍃";
        } else if (curHour.icon == "partly-cloudy-day") {
            hourIcon.textContent = "🌤️";
        } else if (curHour.icon == "partly-cloudy-night") {
            hourIcon.textContent = "🌥️";
        } else if (curHour.icon == "clear-day") {
            hourIcon.textContent = "☀️";
        } else if (curHour.icon == "clear-night") {
            hourIcon.textContent = "🌙";
        }

        hourTemp.textContent = `${Math.round(curHour.temp)} °C`;
        hourTemp.className = "hour-temp";
        hourPrecipProb.textContent = `💦 ${Math.round(curHour.precipprob)}%`;
        hourHumidity.textContent = `HM: ${curHour.humidity}%`;

        hourDiv.appendChild(hourTime);
        hourDiv.appendChild(hourIcon);
        hourDiv.appendChild(hourTemp);
        hourDiv.appendChild(hourPrecipProb);
        hourDiv.appendChild(hourHumidity);
        hoursContainer.appendChild(hourDiv);
    }

    //Daily

    for (let i = 1; i < 8; i++) {
        const dayDiv = document.createElement("div");
        const dayDate = document.createElement("div");
        const dayIcon = document.createElement("div");
        const dayTemp = document.createElement("div");
        const dayTempRange = document.createElement("div");
        const dayPrecipProb = document.createElement("div");
        let curDay = data.days[i];
        let date = curDay.datetime.substring(8);

        currentDate.setDate(currentDate.getDate() + 1);
        let weekday = currentDate.toLocaleString("en-US", { weekday: "short" });
        if (date < 10) {
            dayDate.textContent = `${weekday} ${date.substring(1)}`;
        } else dayDate.textContent = `${weekday} ${date}`;
        dayDate.className = "day-date";

        dayIcon.className = "day-icon";
        if (curDay.icon == "cloudy") {
            dayIcon.textContent = "☁️";
        } else if (curDay.icon == "snow") {
            dayIcon.textContent = "❄️";
        } else if (curDay.icon == "fog") {
            dayIcon.textContent = "🌫️";
        } else if (curDay.icon == "rain") {
            dayIcon.textContent = "🌧️";
        } else if (curDay.icon == "wind") {
            dayIcon.textContent = "🍃";
        } else if (curDay.icon == "partly-cloudy-day") {
            dayIcon.textContent = "🌤️";
        } else if (curDay.icon == "partly-cloudy-night") {
            dayIcon.textContent = "🌥️";
        } else if (curDay.icon == "clear-day") {
            dayIcon.textContent = "☀️";
        } else if (curDay.icon == "clear-night") {
            dayIcon.textContent = "🌙";
        }

        dayTemp.textContent = `${Math.round(curDay.temp)} °C`;
        dayTemp.className = "day-temp";
        dayTempRange.textContent = `${Math.round(
            curDay.tempmin
        )} / ${Math.round(curDay.tempmax)} °C`;
        dayPrecipProb.textContent = `💦 ${Math.round(curDay.precipprob)}%`;

        dayDiv.appendChild(dayDate);
        dayDiv.appendChild(dayIcon);
        dayDiv.appendChild(dayTemp);
        dayDiv.appendChild(dayTempRange);
        dayDiv.appendChild(dayPrecipProb);
        daysContainer.appendChild(dayDiv);
    }
}
