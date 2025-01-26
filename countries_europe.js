document.addEventListener("DOMContentLoaded", function() {
    const countrySelectionDiv = document.getElementById("country-selection");
    const currentPlayerDiv = document.getElementById("current-player");
    const countryButtons = document.querySelectorAll(".country-btn");

    // Зареждане на запазените данни за играта
    const gameData = JSON.parse(localStorage.getItem("gameData"));
    const playerNames = gameData.playerNames || [];

    let currentPlayer = 1;
    const playersCountries = {
        1: [],
        2: []
    };
    const maxCountries = 8; // Maximum countries to be chosen
    const allCountries = Array.from(countryButtons).map(button => button.getAttribute("data-country"));

    function updateCurrentPlayer() {
        const playerName = playerNames[currentPlayer - 1] || `играч ${currentPlayer}`;
        currentPlayerDiv.textContent = `Ред на ${playerName} да избере държава`;
    }

    // Add map rendering functions
    function renderMapElements() {
        const pointsGroup = document.getElementById("points");
        const connectionsGroup = document.getElementById("connections");
        const pointMap = {};
        
        // Draw connections first
        pointsData.forEach(point => {
            pointMap[point.id] = point;
            point.connections.forEach(connectionId => {
                const targetPoint = pointsData.find(p => p.id === connectionId);
                if (targetPoint) {
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", point.x);
                    line.setAttribute("y1", point.y);
                    line.setAttribute("x2", targetPoint.x);
                    line.setAttribute("y2", targetPoint.y);
                    line.setAttribute("stroke", "black");
                    line.setAttribute("stroke-width", 2);
                    connectionsGroup.appendChild(line);
                }
            });
        });

        // Draw points
        pointsData.forEach(point => {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", point.x);
            circle.setAttribute("cy", point.y);
            circle.setAttribute("r", point.capital ? 22 : 7);
            circle.setAttribute("fill", "gray");
            circle.setAttribute("id", point.id);
            pointsGroup.appendChild(circle);
        });
    }

    function updatePointColors(country, playerColor) {
        pointsData.forEach(point => {
            if (point.country === country) {
                const circle = document.getElementById(point.id);
                if (circle) {
                    circle.setAttribute("fill", playerColor);
                }
            }
        });
    }

    // Initialize the map
    renderMapElements();

    countryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const country = button.getAttribute("data-country");
            playersCountries[currentPlayer].push(country);
            button.disabled = true;
            button.classList.add("selected");
            
            // Add color based on player
            if (currentPlayer === 1) {
                button.style.backgroundColor = "blue";
                updatePointColors(country, "blue");
            } else {
                button.style.backgroundColor = "green";
                updatePointColors(country, "green");
            }
            button.style.color = "white"; // Make text white for better visibility

            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateCurrentPlayer();

            // Check if 8 countries have been selected
            if (playersCountries[1].length + playersCountries[2].length === maxCountries) {
                // Determine the international country
                const selectedCountries = playersCountries[1].concat(playersCountries[2]);
                const internationalCountry = allCountries.find(c => !selectedCountries.includes(c));
                
                // Disable the international country button and mark it as international
                const internationalButton = document.querySelector(`.country-btn[data-country="${internationalCountry}"]`);
                internationalButton.disabled = true;
                internationalButton.classList.add("international");

                localStorage.setItem("playersCountries", JSON.stringify(playersCountries));
                alert("Всички държави са избрани!");

                // Navigate to the game page
                window.location.href = "game_europe_2.html";
            }
        });
    });

    // Показване на интерфейса за избор на държави
    countrySelectionDiv.classList.remove("hidden");
    updateCurrentPlayer();
});
