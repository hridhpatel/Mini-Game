// Initialize the map
const map = L.map('map').setView([20, 10], 2);

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Define locations and questions
const locations = [
    {
        name: "Los Angeles, USA",
        coords: [34.0522, -118.2437],
        question: "What is the projected sea level rise for Los Angeles by 2050?",
        answers: [
            { text: "1 meter", correct: true },
            { text: "0.5 meters", correct: false },
            { text: "2 meters", correct: false },
            { text: "1.5 meters", correct: false }
        ]
    },
    {
        name: "New York City, USA",
        coords: [40.7128, -74.0060],
        question: "What is the risk of sea level rise for New York City by 2100?",
        answers: [
            { text: "2 meters", correct: true },
            { text: "1 meter", correct: false },
            { text: "3 meters", correct: false },
            { text: "1.5 meters", correct: false }
        ]
    },
    {
        name: "Bangkok, Thailand",
        coords: [13.7563, 100.5018],
        question: "Which city could experience a 3-meter rise by 2100?",
        answers: [
            { text: "Bangkok", correct: true },
            { text: "Tokyo", correct: false },
            { text: "Los Angeles", correct: false },
            { text: "London", correct: false }
        ]
    }
];

// Function to show question and answers
function showQuestion(location) {
    const infoContainer = document.getElementById('info');
    infoContainer.innerHTML = `<h2>${location.question}</h2>`;
    
    location.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.onclick = () => {
            if (answer.correct) {
                alert("Correct! 🎉");
            } else {
                alert("Wrong answer! ❌");
            }
        };
        infoContainer.appendChild(button);
    });
}

// Add markers for each location
locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map)
        .bindPopup(location.name)
        .on('click', () => showQuestion(location));
});
