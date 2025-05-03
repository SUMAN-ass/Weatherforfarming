
const monthlyClimateData = {
    1: { name: 'January', temp: 23, rain: 2, sunny: 28, humidity: 65 },
    2: { name: 'February', temp: 25, rain: 3, sunny: 26, humidity: 60 },
    3: { name: 'March', temp: 28, rain: 5, sunny: 27, humidity: 55 },
    4: { name: 'April', temp: 30, rain: 45, sunny: 24, humidity: 60 },
    5: { name: 'May', temp: 29, rain: 80, sunny: 20, humidity: 70 },
    6: { name: 'June', temp: 25, rain: 120, sunny: 15, humidity: 80 },
    7: { name: 'July', temp: 24, rain: 150, sunny: 12, humidity: 85 },
    8: { name: 'August', temp: 24, rain: 140, sunny: 13, humidity: 85 },
    9: { name: 'September', temp: 25, rain: 100, sunny: 16, humidity: 80 },
    10: { name: 'October', temp: 25, rain: 150, sunny: 18, humidity: 75 },
    11: { name: 'November', temp: 24, rain: 80, sunny: 20, humidity: 70 },
    12: { name: 'December', temp: 22, rain: 15, sunny: 25, humidity: 65 }
};

function calculateRangeStats(startMonth, endMonth) {
    let totalTemp = 0;
    let totalRain = 0;
    let totalSunny = 0;
    let totalHumidity = 0;
    let count = 0;

    // Handle year wrap-around
    if (startMonth > endMonth) {
        endMonth += 12;
    }

    for (let month = startMonth; month <= endMonth; month++) {
        const actualMonth = month > 12 ? month - 12 : month;
        const data = monthlyClimateData[actualMonth];
        
        totalTemp += data.temp;
        totalRain += data.rain;
        totalSunny += data.sunny;
        totalHumidity += data.humidity;
        count++;
    }

    return {
        avgTemp: (totalTemp / count).toFixed(1),
        totalRain: totalRain,
        avgSunny: (totalSunny / count).toFixed(1),
        avgHumidity: (totalHumidity / count).toFixed(1)
    };
}

function createMonthlyAveragesTable(startMonth, endMonth) {
    let tableHTML = '';
    let currentMonth = startMonth;
    const endMonthAdjusted = startMonth > endMonth ? endMonth + 12 : endMonth;
    
    while (currentMonth <= endMonthAdjusted) {
        const actualMonth = currentMonth > 12 ? currentMonth - 12 : currentMonth;
        const monthData = monthlyClimateData[actualMonth];
        
        tableHTML += `
            <tr>
                <td>${monthData.name}</td>
                <td>${monthData.temp}°C</td>
                <td>${monthData.rain}mm</td>
                <td>${monthData.sunny}</td>
                <td>${monthData.humidity}%</td>
            </tr>
        `;
        
        currentMonth++;
    }
    
    return tableHTML;
}

function updateClimateData() {
    const startMonth = parseInt(document.getElementById('startMonth').value);
    const endMonth = parseInt(document.getElementById('endMonth').value);

    if (startMonth && endMonth) {
        // Show loading state
        document.getElementById('periodTemp').textContent = 'Loading...';
        document.getElementById('periodRain').textContent = 'Loading...';
        document.getElementById('periodSunny').textContent = 'Loading...';
        document.getElementById('periodHumidity').textContent = 'Loading...';

        try {
            // Update monthly averages table
            const tableHTML = createMonthlyAveragesTable(startMonth, endMonth);
            document.getElementById('monthlyAveragesBody').innerHTML = tableHTML;

            // Calculate and update period overview
            const stats = calculateRangeStats(startMonth, endMonth);
            document.getElementById('periodTemp').textContent = stats.avgTemp;
            document.getElementById('periodRain').textContent = stats.totalRain;
            document.getElementById('periodSunny').textContent = stats.avgSunny;
            document.getElementById('periodHumidity').textContent = stats.avgHumidity;

            const startName = monthlyClimateData[startMonth].name;
            const endName = monthlyClimateData[endMonth].name;
            
            // Update title with period
            document.getElementById('selectedMonthTitle').textContent = 
                `Karnataka - ${startName} to ${endName}`;
            
            document.getElementById('climateData').style.display = 'block';
        } catch (error) {
            console.error('Error updating climate data:', error);
            document.getElementById('selectedMonthTitle').textContent = 'Error loading data. Please try again.';
        }
    }
}

// Add event listeners
document.getElementById('startMonth').addEventListener('change', updateClimateData);
document.getElementById('endMonth').addEventListener('change', updateClimateData);