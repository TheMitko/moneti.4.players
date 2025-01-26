document.addEventListener("DOMContentLoaded", function() {
    const countrySelectionDiv = document.getElementById("country-selection");
    const currentPlayerDiv = document.getElementById("current-player");
    const countryButtons = document.querySelectorAll(".country-btn");

    // Зареждане на запазените данни за играта
    const gameData = JSON.parse(localStorage.getItem("gameData"));
    const playerNames = gameData.playerNames || [];

    let currentPlayer = 1;
    console.log("Game initialization started");
    const playersCountries = {
        1: [],
        2: [],
        3: [],
        4: []
    };
    const maxCountries = 2; // Adjusted for 4 players (4 countries each)
    const allCountries = Array.from(countryButtons).map(button => button.getAttribute("data-country"));

    function updateCurrentPlayer() {
        const playerName = playerNames[currentPlayer - 1] || `играч ${currentPlayer}`;
        currentPlayerDiv.textContent = `Ред на ${playerName} да избере държава`;
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

    countryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const country = button.getAttribute("data-country");
            console.log(`${playerNames[currentPlayer - 1] || 'Player ' + currentPlayer} selected ${country}`);
            playersCountries[currentPlayer].push(country);
            button.disabled = true;
            button.classList.add("selected");
            
            // Add color based on player
            switch(currentPlayer) {
                case 1:
                    button.style.backgroundColor = "blue";
                    updatePointColors(country, "blue");
                    break;
                case 2:
                    button.style.backgroundColor = "green";
                    updatePointColors(country, "green");
                    break;
                case 3:
                    button.style.backgroundColor = "red";
                    updatePointColors(country, "red");
                    break;
                case 4:
                    button.style.backgroundColor = "orange";
                    updatePointColors(country, "orange");
                    break;
            }
            button.style.color = "white"; // Make text white for better visibility

            currentPlayer = currentPlayer === 4 ? 1 : currentPlayer + 1;
            updateCurrentPlayer();

            // Check if all countries have been selected
            const totalSelectedCountries = playersCountries[1].length + 
                                        playersCountries[2].length + 
                                        playersCountries[3].length +
                                        playersCountries[4].length;
            
            if (totalSelectedCountries === maxCountries * 4) {
                localStorage.setItem("playersCountries", JSON.stringify(playersCountries));
                alert("Всички държави са избрани!");
                window.location.href = "game_europe_4.html";
            }
        });
    });

    // Показване на интерфейса за избор на държави
    countrySelectionDiv.classList.remove("hidden");
    updateCurrentPlayer();

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

    // Initialize the map right after DOM loads
    renderMapElements();
});
