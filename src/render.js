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
    let today = data.days[0];

    if (today.icon == "cloudy") {
        icon.textContent = "☁️";
    } else if (today.icon == "snow") {
        icon.textContent = "❄️";
    } else if (today.icon == "fog") {
        icon.textContent = "🌫️";
    } else if (today.icon == "rain") {
        icon.textContent = "🌧️";
    } else if (today.icon == "wind") {
        icon.textContent = "🍃";
    } else if (today.icon == "partly-cloudy-day") {
        icon.textContent = "🌤️";
    } else if (today.icon == "partly-clody-night") {
        icon.textContent = "🌥️";
    } else if (today.icon == "clear-day") {
        icon.textContent = "☀️";
    } else if (today.icon == "clear-night") {
        icon.textContent = "🌙";
    }

    addressText.textContent = data.resolvedAddress;
    date.textContent = `🗓️ ${today.datetime}`;
    desc.innerHTML = `<p>${today.description}</p><p>${data.description}</p>`;

    let currentTempData = Math.round(today.hours[currentHour].temp);
    let currentTempMin = Math.round(today.tempmin);
    let currentTempMax = Math.round(today.tempmax);
    tempCurrent.textContent = `${currentTempData} °C`;
    tempRange.textContent = `Min/Max ${currentTempMin} / ${currentTempMax} °C`;

    precipProb.textContent = `💦 ${Math.round(today.precipprob)}%`;
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
        let hour = today.hours[currentHour + i];

        hourTime.textContent = hour.datetime.substring(0, 5);
        hourTime.className = "hour-time";

        hourIcon.className = "hour-icon";
        if (hour.icon == "cloudy") {
            hourIcon.textContent = "☁️";
        } else if (hour.icon == "snow") {
            hourIcon.textContent = "❄️";
        } else if (hour.icon == "fog") {
            hourIcon.textContent = "🌫️";
        } else if (hour.icon == "rain") {
            hourIcon.textContent = "🌧️";
        } else if (hour.icon == "wind") {
            hourIcon.textContent = "🍃";
        } else if (hour.icon == "partly-cloudy-day") {
            hourIcon.textContent = "🌤️";
        } else if (hour.icon == "partly-cloudy-night") {
            hourIcon.textContent = "🌥️";
        } else if (hour.icon == "clear-day") {
            hourIcon.textContent = "☀️";
        } else if (hour.icon == "clear-night") {
            hourIcon.textContent = "🌙";
        }

        let hourlyTempData = Math.round(hour.temp);
        hourTemp.textContent = `${hourlyTempData} °C`;
        hourTemp.className = "hour-temp";
        hourPrecipProb.textContent = `💦 ${Math.round(hour.precipprob)}%`;
        hourHumidity.textContent = `HM: ${hour.humidity}%`;

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
        let day = data.days[i];
        let date = day.datetime.substring(8);

        currentDate.setDate(currentDate.getDate() + 1);
        let weekday = currentDate.toLocaleString("en-US", { weekday: "short" });
        if (date < 10) {
            dayDate.textContent = `${weekday} ${date.substring(1)}`;
        } else dayDate.textContent = `${weekday} ${date}`;
        dayDate.className = "day-date";

        dayIcon.className = "day-icon";
        if (day.icon == "cloudy") {
            dayIcon.textContent = "☁️";
        } else if (day.icon == "snow") {
            dayIcon.textContent = "❄️";
        } else if (day.icon == "fog") {
            dayIcon.textContent = "🌫️";
        } else if (day.icon == "rain") {
            dayIcon.textContent = "🌧️";
        } else if (day.icon == "wind") {
            dayIcon.textContent = "🍃";
        } else if (day.icon == "partly-cloudy-day") {
            dayIcon.textContent = "🌤️";
        } else if (day.icon == "partly-cloudy-night") {
            dayIcon.textContent = "🌥️";
        } else if (day.icon == "clear-day") {
            dayIcon.textContent = "☀️";
        } else if (day.icon == "clear-night") {
            dayIcon.textContent = "🌙";
        }

        let dailyTemp = Math.round(day.temp);
        let dailyTempMin = Math.round(day.tempmin);
        let dailyTempMax = Math.round(day.tempmax);
        dayTemp.textContent = `${dailyTemp} °C`;
        dayTemp.className = "day-temp";
        dayTempRange.textContent = `${dailyTempMin} / ${dailyTempMax} °C`;
        dayTempRange.className = "day-temp-range";
        dayPrecipProb.textContent = `💦 ${Math.round(day.precipprob)}%`;
        dayDiv.appendChild(dayDate);
        dayDiv.appendChild(dayIcon);
        dayDiv.appendChild(dayTemp);
        dayDiv.appendChild(dayTempRange);
        dayDiv.appendChild(dayPrecipProb);
        daysContainer.appendChild(dayDiv);
    }
}
