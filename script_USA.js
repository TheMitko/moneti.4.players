// Load initial game data from localStorage
const gameData = JSON.parse(localStorage.getItem("gameData")) || { pawnsCount: 0 };
let remainingPawns = gameData.pawnsCount;
let selectedStartPoint = null;
let isMovingPhase = false;  // Track whether we're in the moving phase

// Make connections bidirectional
function makeConnectionsBidirectional(points) {
    const pointMap = {};

    // Map points by their ID for easy lookup
    points.forEach(point => pointMap[point.id] = point);

    points.forEach(point => {
        point.connections.forEach(connectionId => {
            const connectedPoint = pointMap[connectionId];
            
            // If connected point doesn't have this point in its connections, add it
            if (connectedPoint && !connectedPoint.connections.includes(point.id)) {
                connectedPoint.connections.push(point.id);
            }
        });
    });
}

// Run this function to ensure bidirectional connections
makeConnectionsBidirectional(pointsData);

// Initialize alert to notify player of pawn distribution start
alert("Започва разполагането на пулове!");

// Track pawns on each point by creating a map
const pawnsOnPoints = {};

// Event listener for point selection
function selectPoint(pointId) {
    console.log(`Point selected: ${pointId}`);
    if (!isMovingPhase) {
        placePawns(pointId);
    } else {
        if (!selectedStartPoint) {
            selectedStartPoint = pointId;
            alert(`Начална точка избрана: ${pointId}. Сега изберете дестинацията.`);
        } else {
            const destinationPoint = pointId;
            if (selectedStartPoint === destinationPoint) {
                alert("Избрахте една и съща точка. Изберете друга точка за дестинация");
                selectedStartPoint = null;
                return;
            }
            movePawns(selectedStartPoint, destinationPoint);
            selectedStartPoint = null;
        }
    }
}

// Function to place pawns on a clicked point
function placePawns(pointId) {
    if (remainingPawns <= 0) {
        alert("Не ви остават повече пулове");
        return;
    }

    const maxPawnsToPlace = Math.min(remainingPawns, gameData.pawnsCount);  // Maximum allowed by the game
    const numPawns = parseInt(prompt(`Колко пула искате да поставите? (Max: ${maxPawnsToPlace})`), 10);

    if (isNaN(numPawns) || numPawns < 1 || numPawns > maxPawnsToPlace) {
        alert("Невалидно количество пулове.");
        return;
    }

    pawnsOnPoints[pointId] += numPawns;
    remainingPawns -= numPawns;

    gameData.pawnsCount = remainingPawns;
    localStorage.setItem("gameData", JSON.stringify(gameData));

    updatePointDisplay(pointId);

    if (remainingPawns <= 0) {
        alert("Разполагането на пулове приключи!Вече можете да ги местите!");
        isMovingPhase = true;
    }
}

// Function to move pawns between points
function movePawns(startPointId, destinationPointId) {
    const startPoint = pointsData.find(p => p.id === startPointId);
    const destinationPoint = pointsData.find(p => p.id === destinationPointId);

    if (!startPoint || !destinationPoint) {
        alert("Избрана е невалидна точка.");
        return;
    }

    if (!startPoint.connections.includes(destinationPointId)) {
        alert("Тези точки не са свързани. Изберете свързана точка");
        return;
    }

    const maxPawnsToMove = pawnsOnPoints[startPointId];
    const numPawns = parseInt(prompt(`Колко пулове искате да преместите? (Max: ${maxPawnsToMove})`), 10);

    if (isNaN(numPawns) || numPawns < 0 || numPawns > maxPawnsToMove) {
        alert("Невалидно количество пулове.");
        return;
    }

    pawnsOnPoints[startPointId] -= numPawns;
    pawnsOnPoints[destinationPointId] += numPawns;

    updatePointDisplay(startPointId);
    updatePointDisplay(destinationPointId);
}

// Function to update the display of a point based on pawn count
function updatePointDisplay(pointId) {
    const pawnsGroup = document.getElementById("pawns");
    const point = pointsData.find(p => p.id === pointId);

    if (!point) {
        console.error(`Point with id ${pointId} not found`);
        return;
    }

    const existingDisplay = pawnsGroup.querySelector(`[data-point-id="${pointId}"]`);
    if (existingDisplay) {
        pawnsGroup.removeChild(existingDisplay);
    }

    const pawnCount = pawnsOnPoints[pointId];

    if (pawnCount > 0) {
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.setAttribute("data-point-id", pointId);
        group.addEventListener("click", () => selectPoint(pointId));  // Add click event to group

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y);
        circle.setAttribute("r", 16);  // Increase the circle radius
        circle.setAttribute("fill", "blue");
        circle.style.cursor = "pointer";  // Set cursor to pointer

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", point.x);
        text.setAttribute("y", point.y + 5);  // Adjust to center text
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("fill", "white");
        text.setAttribute("font-size", "14");  // Increase the font size
        text.textContent = pawnCount;

        group.appendChild(circle);
        group.appendChild(text);
        pawnsGroup.appendChild(group);
    } else {
        const circle = document.getElementById(point.id);
        if (circle) {
            circle.setAttribute("r", 7);  // Default radius
            circle.setAttribute("fill", "red");
            circle.style.cursor = "pointer";  // Set cursor to pointer
        }
    }
}

// Function to render points, connections, and add pawns
function renderMapElements() {
    const pointsGroup = document.getElementById("points");
    const connectionsGroup = document.getElementById("connections");

    const pointMap = {};
    pointsData.forEach(point => {
        pointMap[point.id] = point;

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y);
        circle.setAttribute("r", 7);  // Default radius
        circle.setAttribute("fill", "red");
        circle.setAttribute("id", point.id);
        circle.style.cursor = "pointer";  // Set cursor to pointer
        circle.addEventListener("click", () => selectPoint(point.id));  // Add click event to point
        pointsGroup.appendChild(circle);

        pawnsOnPoints[point.id] = 0;
    });

    pointsData.forEach(point => {
        point.connections.forEach(connectionId => {
            const targetPoint = pointMap[connectionId];
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
}

// Initialize the game
renderMapElements();
