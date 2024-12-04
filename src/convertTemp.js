const changeUnitBtn = document.getElementById("change-unit");
let isCelsius = true;

changeUnitBtn.addEventListener("click", () => {
    isCelsius = !isCelsius;
    updateTemperatures();
});

export function updateTemperatures() {
    const tempCurrent = document.getElementById("tempcurrent");
    const tempRange = document.getElementById("temprange");

    // Update the "current temperature" data
    const currentTempText = tempCurrent.textContent;
    const matchCurrent = currentTempText.match(/(-?\d+)/);
    if (matchCurrent) {
        const temp = parseInt(matchCurrent[1], 10);
        tempCurrent.textContent = `${convertTemp(temp)} °${
            isCelsius ? "C" : "F"
        }`;
    }

    // Update the "Min/Max" range
    const tempRangeText = tempRange.textContent;
    const matchRange = tempRangeText.match(/(-?\d+)/g);
    if (matchRange) {
        const minTemp = parseInt(matchRange[0], 10);
        const maxTemp = parseInt(matchRange[1], 10);
        tempRange.textContent = `Min/Max ${convertTemp(
            minTemp
        )} / ${convertTemp(maxTemp)} °${isCelsius ? "C" : "F"}`;
    }

    // Update hourly temperatures
    document.querySelectorAll(".hour-temp").forEach((hourTempEl) => {
        const tempText = hourTempEl.textContent.match(/(-?\d+)/);
        if (tempText) {
            const temp = parseInt(tempText[1], 10);
            hourTempEl.textContent = `${convertTemp(temp)} °${
                isCelsius ? "C" : "F"
            }`;
        }
    });

    // Update daily temperatures
    document.querySelectorAll(".day-temp").forEach((dayTempEl) => {
        const tempText = dayTempEl.textContent.match(/(-?\d+)/);
        if (tempText) {
            const temp = parseInt(tempText[1], 10);
            dayTempEl.textContent = `${convertTemp(temp)} °${
                isCelsius ? "C" : "F"
            }`;
        }
    });

    document.querySelectorAll(".day-temp-range").forEach((dayTempRangeEl) => {
        const tempRange = dayTempRangeEl.textContent.match(/(-?\d+)/g);
        if (tempRange) {
            const minTemp = parseInt(tempRange[0], 10);
            const maxTemp = parseInt(tempRange[1], 10);
            dayTempRangeEl.textContent = `${convertTemp(
                minTemp
            )} / ${convertTemp(maxTemp)} °${isCelsius ? "C" : "F"}`;
        }
    });

    changeUnitBtn.textContent = isCelsius ? "°C ⇆ °F" : "°F ⇆ °C";
}

function convertTemp(temp) {
    return isCelsius
        ? Math.round((temp - 32) * (5 / 9))
        : Math.round(temp * (9 / 5) + 32);
}
