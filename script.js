document.addEventListener('DOMContentLoaded', function () {
    const playersCntSelect = document.getElementById('PlayersCnt');
    const mapSelect = document.getElementById('Map');
    const pawnsCountInput = document.getElementById('pawns-count');
    const saveButton = document.getElementById('saveButton');
    const playerNamesContainer = document.getElementById('player-names-container'); 
    const skipPawnsCheckbox = document.getElementById('skip-pawns-checkbox');

    // Функция за създаване на секции за имена на играчите
    function createPlayerNameInputs(numPlayers) {
        playerNamesContainer.innerHTML = ''; // Изчистване на съдържанието
        if (numPlayers > 1) {
            playerNamesContainer.style.display = 'block';
            for (let i = 1; i <= numPlayers; i++) {
                const label = document.createElement('label');
                label.classList.add('PlayerName');
                label.textContent = `Име на играч ${i}:`;
                const input = document.createElement('input');
                input.type = 'text';
                input.classList.add('PlayerName');
                input.id = `player-name-${i}`;
                label.appendChild(input);
                playerNamesContainer.appendChild(label);
            }
        } else {
            playerNamesContainer.style.display = 'none';
        }
    }

    // Слушател за промяна в избрания брой играчи
    playersCntSelect.addEventListener('change', function () {
        const numPlayers = parseInt(playersCntSelect.value, 10);
        createPlayerNameInputs(numPlayers);
    });

    saveButton.addEventListener('click', function (event) {
        const playersCount = playersCntSelect.value;
        const mapSelection = mapSelect.value;
        const pawnsCount = pawnsCountInput.value;
        const skipPawns = skipPawnsCheckbox.checked;

        console.log('Number of Players:', playersCount);
        console.log('Selected Map:', mapSelection);
        console.log('Number of Pawns:', pawnsCount);
        console.log('Skip Pawns:', skipPawns);

        const savedData = {
            playersCount: playersCount,
            mapSelection: mapSelection,
            pawnsCount: pawnsCount,
            skipPawns: skipPawns,
            playerNames: []
        };

        // Добавяне на имената на играчите в данните
        if (playersCount > 1) {
            for (let i = 1; i <= playersCount; i++) {
                const playerName = document.getElementById(`player-name-${i}`).value;
                savedData.playerNames.push(playerName);
            }
        }

        localStorage.setItem('gameData', JSON.stringify(savedData));
        alert('Всичко е запазено!');

        if (mapSelection === "1" && playersCount === "1") {
            dynamicLink.href = "game_europe.html";
        } else if (mapSelection === "1" && playersCount === "2") {
            dynamicLink.href = "countries_europe.html";
        } else if (mapSelection === "1" && playersCount === "3") {
            dynamicLink.href = "countries_europe_3.html";
        } else if (mapSelection === "1" && playersCount === "4") {
            dynamicLink.href = "countries_europe_4.html";
        }
    });

    // Първоначално извикване за създаване на полета за имена на играчи (ако е необходимо)
    createPlayerNameInputs(parseInt(playersCntSelect.value, 10));
});
