import cloudyImg from "./images/cloudy.jpg";
import snowImg from "./images/snow.jpg";
import clearDayImg from "./images/clear-day.jpg";
import clearNightImg from "./images/clear-night.jpg";
import partlyCloudyDayImg from "./images/partly-cloudy-day.jpg";
import partlyCloudyNightImg from "./images/partly-cloudy-night.jpg";
import rainImg from "./images/rain.jpg";
import fogImg from "./images/fog.jpg";
import windImg from "./images/wind.jpg";

export const dataDiv = document.querySelector(".data");
export const footer = document.querySelector(".footer-text");
const currentDate = new Date();
let currentHour = currentDate.getHours();

export function renderData(data) {
    dataDiv.replaceChildren();

    // Creation of page structure
    const todayDiv = document.createElement("div");
    todayDiv.className = "today";
    const todayDataDiv = document.createElement("div");
    todayDataDiv.className = "today-data";

    const tempDiv = document.createElement("div");
    tempDiv.className = "temp";
    const icon = document.createElement("div");
    icon.setAttribute("id", "icon");
    const tempCurrent = document.createElement("div");
    tempCurrent.setAttribute("id", "tempcurrent");
    const tempRange = document.createElement("div");
    tempRange.setAttribute("id", "temprange");
    const precipProb = document.createElement("div");
    precipProb.setAttribute("id", "precip-prob");
    const pressure = document.createElement("div");
    pressure.setAttribute("id", "pressure");
    const humidity = document.createElement("div");
    humidity.setAttribute("id", "humidity");
    tempDiv.appendChild(icon);
    tempDiv.appendChild(tempCurrent);
    tempDiv.appendChild(tempRange);
    tempDiv.appendChild(precipProb);
    tempDiv.appendChild(pressure);
    tempDiv.appendChild(humidity);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "desc-container";
    const addressText = document.createElement("div");
    addressText.setAttribute("id", "location");
    const date = document.createElement("div");
    date.setAttribute("id", "date");
    const desc = document.createElement("div");
    desc.setAttribute("id", "description");
    const suntime = document.createElement("div");
    suntime.setAttribute("id", "suntime");
    descriptionDiv.appendChild(addressText);
    descriptionDiv.appendChild(date);
    descriptionDiv.appendChild(desc);
    descriptionDiv.appendChild(suntime);

    todayDataDiv.appendChild(tempDiv);
    todayDataDiv.appendChild(descriptionDiv);

    const hoursContainer = document.createElement("div");
    hoursContainer.className = "hours";

    todayDiv.appendChild(todayDataDiv);
    todayDiv.appendChild(hoursContainer);

    const daysContainer = document.createElement("div");
    daysContainer.className = "days";

    dataDiv.appendChild(todayDiv);
    dataDiv.appendChild(daysContainer);

    // Today
    let today = data.days[0];

    if (today.icon == "cloudy") {
        icon.textContent = "☁️";
        document.body.style.backgroundImage = `url(${cloudyImg})`;
        footer.innerHTML = `Cloudy Photo by <a href="https://unsplash.com/@anandu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anandu Vinod</a> on <a href="https://unsplash.com/photos/cloudy-sky-pbxwxwfI0B4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    } else if (today.icon == "snow") {
        icon.textContent = "❄️";
        document.body.style.backgroundImage = `url(${snowImg})`;
        footer.innerHTML = `Winter street Photo by <a href="https://unsplash.com/@thebeardbe?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Filip Bunkens</a> on <a href="https://unsplash.com/photos/road-covered-by-snow-near-vehicle-traveling-at-daytime-R5SrmZPoO40?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    } else if (today.icon == "fog") {
        icon.textContent = "🌫️";
        document.body.style.backgroundImage = `url(${fogImg})`;
        footer.innerHTML = `Foggy forest Photo by <a href="https://unsplash.com/@pueblovista?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Pastourmatzis</a> on <a href="https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    } else if (today.icon == "rain") {
        icon.textContent = "🌧️";
        document.body.style.backgroundImage = `url(${rainImg})`;
        footer.innerHTML = `Rainy window Photo by <a href="https://unsplash.com/@cg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">C. G.</a> on <a href="https://unsplash.com/photos/a-wet-window-with-a-traffic-light-on-it-JgDUVGAXsso?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    } else if (today.icon == "wind") {
        icon.textContent = "🍃";
        document.body.style.backgroundImage = `url(${windImg})`;
        footer.innerHTML = `Windy Field Photo by <a href="https://unsplash.com/@pueblovista?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Pastourmatzis</a> on <a href="https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    } else if (today.icon == "partly-cloudy-day") {
        icon.textContent = "🌤️";
        document.body.style.backgroundImage = `url(${partlyCloudyDayImg})`;
        footer.innerHTML = `Partly cloudy landscape Photo by <a href="https://unsplash.com/@prphotography262?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Peter Robbins</a> on <a href="https://unsplash.com/photos/a-view-of-the-mountains-from-a-highway-XRL5Obd9ZmM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    } else if (today.icon == "partly-clody-night") {
        icon.textContent = "🌥️";
        document.body.style.backgroundImage = `url(${partlyCloudyNightImg})`;
        footer.innerHTML = `Partly cloudy Night Photo by <a href="https://unsplash.com/@stevenvanelk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Steven Van Elk</a> on <a href="https://unsplash.com/photos/a-full-moon-is-seen-over-a-beach-at-night-KC_Dxbl3BS8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    } else if (today.icon == "clear-day") {
        icon.textContent = "☀️";
        document.body.style.backgroundImage = `url(${clearDayImg})`;
        footer.innerHTML = `Clear day Photo by <a href="https://unsplash.com/@spencer_demera?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Spencer DeMera</a> on <a href="https://unsplash.com/photos/a-dirt-path-in-the-middle-of-a-grassy-field-HbuyM5BuPO8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    } else if (today.icon == "clear-night") {
        icon.textContent = "🌙";
        document.body.style.backgroundImage = `url(${clearNightImg})`;
        footer.innerHTML = `Clear Night Photo by <a href="https://unsplash.com/@oskark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Oskar Kadaksoo</a> on <a href="https://unsplash.com/photos/a-long-road-with-a-sky-full-of-stars-5qUPAej1j78?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
    }

    addressText.textContent = data.resolvedAddress;
    date.textContent = `🗓️ ${today.datetime}`;
    desc.innerHTML = `<p>${today.description}</p><p>${data.description}</p>`;

    let currentTempData = Math.round(today.hours[currentHour].temp);
    let currentTempMin = Math.round(today.tempmin);
    let currentTempMax = Math.round(today.tempmax);
    tempCurrent.textContent = `${currentTempData} °C`;
    tempRange.textContent = `Min/Max ${currentTempMin} / ${currentTempMax} °C`;

    precipProb.textContent = `Precip. 💦 ${Math.round(today.precipprob)}%`;
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
