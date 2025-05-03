const config = {
    weatherApiKey: "29dcfccf3fd0c8dfee58955647f149eb",
    openRouterApiKey: "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"
};

async function getWeatherData(city = "Bangalore") {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.weatherApiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        return `Weather in ${city}: ${data.weather[0].description}, Temp: ${data.main.temp}°C, Humidity: ${data.main.humidity}%, Wind: ${data.wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return 'Weather data unavailable';
    }
}

async function sendMessage() {
    const input = document.getElementById("userInput");
    const responseDiv = document.getElementById("response");
    const userQuestion = input.value.trim();

    if (!userQuestion) {
        responseDiv.innerHTML = "Please enter a question.";
        return;
    }

    responseDiv.innerHTML = '<div style="text-align: center;"><i class="fas fa-spinner fa-spin"></i> Thinking...</div>';
    input.value = '';

    try {
        const weatherInfo = await getWeatherData("Bangalore");

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${config.openRouterApiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-r1-distill-qwen-32b:free",
                messages: [
                    {
                        role: "system",
                        content: "You are an expert AI assistant specialized in precision agriculture. Only provide answers related to crops, weather, soil health, and farming techniques. Ignore unrelated questions."
                    },
                    {
                        role: "user",
                        content: `Live weather info: ${weatherInfo}\n\nUser question: ${userQuestion}`
                    }
                ]
            }),
        });

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || "No response received.";
        responseDiv.innerHTML = marked.parse(reply);
    } catch (error) {
        responseDiv.innerHTML = `<div style="color: #ff6b6b;">Error: ${error.message}</div>`;
    }
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});