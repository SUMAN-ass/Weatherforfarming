# Weather Dashboard for Farming

A comprehensive web application that provides weather information and agricultural recommendations for farmers. This application helps farmers make informed decisions about crop selection, planting times, and farming practices based on real-time weather data and AI-powered insights.

## Features

### Weather Dashboard
- Real-time weather data and forecasts
- Hourly and daily weather predictions
- Air quality index monitoring
- UV index tracking
- Wind speed and direction
- Humidity and precipitation data
- Temperature trends and alerts

### Crop Management
- Crop recommendations based on location and season
- Detailed crop requirements and specifications
- Planting and harvesting calendars
- Climate zone-specific suggestions
- Crop rotation recommendations
- Soil compatibility information

### AI Assistant
- 24/7 agricultural support
- Weather-related farming advice
- Crop-specific recommendations
- Pest and disease management tips
- Irrigation scheduling assistance
- Fertilizer application guidance

### Analytics
- Detailed crop analytics
- Historical weather data
- Climate pattern analysis
- Yield prediction models
- Market price trends
- Risk assessment tools

### Additional Features
- News and updates related to farming
- Average climate data for different regions
- Emergency weather alerts
- Farming best practices
- Community forum
- Expert consultation options

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome Icons
- Marked.js for markdown rendering

### APIs
- OpenWeather API for weather data
- OpenRouter AI API for agricultural assistance
- GeoLocation API for location services

### Development Tools
- Visual Studio Code
- Git for version control
- Chrome DevTools for debugging
- Responsive design tools

## Project Structure

```
whearting/
├── index.html          # Main dashboard page
├── index.js            # Weather dashboard functionality
├── index.css           # Main styles
├── bot.html            # AI assistant interface
├── bot.js              # AI assistant functionality
├── bot.css             # AI assistant styles
├── crop.html           # Crop search interface
├── crop.js             # Crop recommendation system
├── crop.css            # Crop search styles
├── deatailsofcrop.html # Crop analytics page
├── new.html            # News page
└── cropgrow.html       # Average climate data page
```

## Setup and Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- API keys for OpenWeather and OpenRouter

### Installation Steps
1. Clone the repository:
```bash
git clone https://github.com/SUMAN-ass/whearting.git
```

2. Open the project directory:
```bash
cd whearting
```

3. Configure API keys:
   - Open `index.js` and replace the OpenWeather API key
   - Open `bot.js` and replace the OpenRouter API key

4. Open `index.html` in your web browser to start using the application.

## API Configuration

### OpenWeather API
1. Sign up at [OpenWeather](https://openweathermap.org/)
2. Get your API key
3. Replace the key in `index.js`:
```javascript
const API_KEY = 'your-api-key-here';
```

### OpenRouter API
1. Sign up at [OpenRouter](https://openrouter.ai/)
2. Get your API key
3. Replace the key in `bot.js`:
```javascript
const config = {
    openRouterApiKey: 'your-api-key-here'
};
```

## Usage Guide

### Weather Dashboard
1. **Current Weather**
   - View real-time temperature
   - Check humidity levels
   - Monitor wind conditions
   - View precipitation data

2. **Forecasts**
   - 5-day weather forecast
   - Hourly predictions
   - Weather alerts
   - UV index warnings

3. **Air Quality**
   - AQI monitoring
   - Pollution levels
   - Health recommendations
   - Air quality alerts

### Crop Search
1. **Location-based Search**
   - Enter your location
   - Select current month
   - View recommended crops
   - Get planting schedules

2. **Crop Information**
   - Detailed requirements
   - Growth conditions
   - Harvesting periods
   - Climate suitability

3. **Seasonal Planning**
   - Planting calendars
   - Harvest schedules
   - Crop rotation plans
   - Weather impact analysis

### AI Assistant
1. **Ask Questions**
   - Farming practices
   - Weather impact
   - Crop selection
   - Pest control

2. **Get Recommendations**
   - Crop choices
   - Planting times
   - Irrigation schedules
   - Fertilizer usage

3. **Expert Advice**
   - Best practices
   - Problem solutions
   - Market insights
   - Risk management

## Contributing

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Contribution Guidelines
- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation
- Ensure cross-browser compatibility

### Code of Conduct
- Be respectful
- Be inclusive
- Be constructive
- Be professional

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

### Getting Help
- Check the documentation
- Open an issue
- Contact support
- Join the community

### Reporting Issues
- Use the issue tracker
- Provide detailed information
- Include screenshots if possible
- Specify browser and OS

## Acknowledgments

- OpenWeather for providing weather data
- OpenRouter for AI capabilities
- All contributors and users of the application
- The farming community for valuable feedback
- Open source community for tools and resources

## Roadmap

### Planned Features
- Mobile application
- Offline functionality
- More crop varieties
- Advanced analytics
- Machine learning integration
- Multi-language support

### Future Improvements
- Enhanced AI capabilities
- More detailed weather data
- Advanced crop modeling
- Community features
- Expert consultation system
- Market price integration 
