 // Vegetable database
 const VEGETABLE_DATABASE = {
    'tomato': {
        name: 'Tomato',
        image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg',
        temperature: '15-30°C',
        humidity: '40-70%',
        harvestTime: '60-90 days',
        difficulty: 'Moderate',
        bestMonths: ['March', 'April', 'May', 'June', 'September', 'October'],
        tips: 'Tomatoes need full sun and well-drained soil. Water regularly and provide support for the vines.'
    },
    'carrot': {
        name: 'Carrot',
        image: 'https://media.istockphoto.com/id/185275579/photo/bundles-of-organic-carrots-with-the-stems-still-attached.jpg?s=612x612&w=0&k=20&c=OIdIDUtDF9jxpCFnZlb7ld5tOj8pDMol1XIcfsHFlEk=',
        temperature: '10-25°C',
        humidity: '50-70%',
        harvestTime: '70-80 days',
        difficulty: 'Easy',
        bestMonths: ['February', 'March', 'April', 'September', 'October'],
        tips: 'Carrots prefer loose, sandy soil. Keep the soil moist and thin seedlings for better growth.'
    },
    'broccoli': {
        name: 'Broccoli',
        image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        temperature: '10-25°C',
        humidity: '50-70%',
        harvestTime: '60-90 days',
        difficulty: 'Moderate',
        bestMonths: ['February', 'March', 'April', 'September', 'October'],
        tips: 'Broccoli needs rich soil and consistent moisture. Harvest the main head before it flowers.'
    },
    'lettuce': {
        name: 'Lettuce',
        image: 'https://media.istockphoto.com/id/535910387/photo/ripe-organic-green-salad-romano.jpg?s=612x612&w=0&k=20&c=9GTcj_WqUk9LWkzUb6g4MCnLTPAapT_hNMZCHRd3C1U=',
        temperature: '10-20°C',
        humidity: '60-70%',
        harvestTime: '30-60 days',
        difficulty: 'Easy',
        bestMonths: ['March', 'April', 'May', 'September', 'October'],
        tips: 'Lettuce grows best in cool weather. Keep soil moist and provide partial shade in hot weather.'
    },
    'potato': {
        name: 'Potato',
        image: 'https://media.istockphoto.com/id/647805874/photo/raw-organic-baby-gold-potatoes.jpg?s=612x612&w=0&k=20&c=ayj6tEFi6DsDIkZGgXoZG-Fwl__skPxKeSw-8BiZC3Y=',
        temperature: '15-25°C',
        humidity: '60-80%',
        harvestTime: '90-120 days',
        difficulty: 'Easy',
        bestMonths: ['February', 'March', 'April', 'September', 'October'],
        tips: 'Plant potatoes in loose, well-drained soil. Hill the soil around plants as they grow.'
    },
    'onion': {
        name: 'Onion',
        image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        temperature: '10-25°C',
        humidity: '50-70%',
        harvestTime: '90-120 days',
        difficulty: 'Easy',
        bestMonths: ['February', 'March', 'April', 'September', 'October'],
        tips: 'Onions need full sun and well-drained soil. Stop watering when tops begin to fall over.'
    }
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.querySelector('.result-container');
const loadingElement = document.querySelector('.loading');
const errorElement = document.querySelector('.error');
const vegetableNameElement = document.querySelector('.vegetable-name');
const vegetableImageElement = document.querySelector('.vegetable-image');
const temperatureElement = document.querySelector('.temperature');
const humidityElement = document.querySelector('.humidity');
const harvestTimeElement = document.querySelector('.harvest-time');
const difficultyElement = document.querySelector('.difficulty');
const growingTipsElement = document.querySelector('.growing-tips');
const optimalMonthsElement = document.querySelector('.optimal-months');

function toggleLoading(show) {
    loadingElement.style.display = show ? 'block' : 'none';
}

function showError(message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    resultContainer.style.display = 'none';
}

function hideError() {
    errorElement.style.display = 'none';
}

function searchVegetable(vegetableName) {
    toggleLoading(true);
    hideError();
    
    // Convert to lowercase for case-insensitive search
    const searchTerm = vegetableName.toLowerCase().trim();
    
    // Check if vegetable exists in database
    if (VEGETABLE_DATABASE[searchTerm]) {
        const vegetable = VEGETABLE_DATABASE[searchTerm];
        updateUI(vegetable);
    } else {
        showError('Vegetable not found. Try Tomato, Carrot, Broccoli, Lettuce, Potato, or Onion.');
    }
    
    toggleLoading(false);
}

function updateUI(vegetable) {
    resultContainer.style.display = 'block';
    
    // Update vegetable information
    vegetableNameElement.textContent = vegetable.name;
    vegetableImageElement.src = vegetable.image;
    vegetableImageElement.alt = vegetable.name;
    temperatureElement.textContent = vegetable.temperature;
    humidityElement.textContent = vegetable.humidity;
    harvestTimeElement.textContent = vegetable.harvestTime;
    difficultyElement.textContent = vegetable.difficulty;
    growingTipsElement.textContent = vegetable.tips;
    
    // Update optimal months
    optimalMonthsElement.innerHTML = vegetable.bestMonths
        .map(month => `<span class="month-tag">${month}</span>`)
        .join('');
}

// Event Listeners
searchButton.addEventListener('click', () => {
    const vegetableName = searchInput.value;
    if (vegetableName) {
        searchVegetable(vegetableName);
    } else {
        showError('Please enter a vegetable name');
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const vegetableName = searchInput.value;
        if (vegetableName) {
            searchVegetable(vegetableName);
        } else {
            showError('Please enter a vegetable name');
        }
    }
});