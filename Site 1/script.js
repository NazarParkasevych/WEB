function showSection(sectionId) {
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById('greeting').style.display = 'none';

    const buttons = document.querySelectorAll('.info-button, .extra-button, .team-button, .details-button');
    buttons.forEach(button => button.style.display = 'none');

    document.getElementById(sectionId).style.display = 'block';
}

function showClubs() {
    document.getElementById('england-button').style.display = 'block';
    const buttons = document.querySelectorAll('.info-button');
    buttons.forEach(button => button.style.display = 'none');
    document.getElementById('greeting').style.display = 'none';
}

function showEngland() {
    document.getElementById('apl-button').style.display = 'block';
    document.getElementById('championship-button').style.display = 'block';
    document.getElementById('oneleague-button').style.display = 'block';
    document.getElementById('twoleague-button').style.display = 'block';
    document.getElementById('england-button').style.display = 'none';
}

function showAplTeams() {
    document.querySelectorAll('.team-button').forEach(button => button.style.display = 'none');
    document.querySelectorAll('#apl-dropdown .team-button').forEach(button => button.style.display = 'inline-block');
    document.getElementById('apl-button').style.display = 'none';
    document.getElementById('championship-button').style.display = 'none';
    document.getElementById('oneleague-button').style.display = 'none';
    document.getElementById('twoleague-button').style.display = 'none';
    document.getElementById('apl-dropdown').style.display = 'block';
}

function showChampionshipTeams() {
    document.querySelectorAll('.team-button').forEach(button => button.style.display = 'none');
    document.querySelectorAll('#championship-dropdown .team-button').forEach(button => button.style.display = 'inline-block');
    document.getElementById('championship-button').style.display = 'none';
    document.getElementById('apl-button').style.display = 'none';
    document.getElementById('oneleague-button').style.display = 'none';
    document.getElementById('twoleague-button').style.display = 'none';
    document.getElementById('championship-dropdown').style.display = 'block';
}

function showOneLeagueTeams() {
    document.querySelectorAll('.team-button').forEach(button => button.style.display = 'none');
    document.querySelectorAll('#oneleague-dropdown .team-button').forEach(button => button.style.display = 'inline-block');
    document.getElementById('oneleague-button').style.display = 'none';
    document.getElementById('apl-button').style.display = 'none';
    document.getElementById('championship-button').style.display = 'none';
    document.getElementById('twoleague-button').style.display = 'none';
    document.getElementById('oneleague-dropdown').style.display = 'block';
}

function showTwoLeagueTeams() {
    document.querySelectorAll('.team-button').forEach(button => button.style.display = 'none');
    document.querySelectorAll('#twoleague-dropdown .team-button').forEach(button => button.style.display = 'inline-block');
    document.getElementById('twoleague-button').style.display = 'none';
    document.getElementById('apl-button').style.display = 'none';
    document.getElementById('championship-button').style.display = 'none';
    document.getElementById('oneleague-button').style.display = 'none';
    document.getElementById('twoleague-dropdown').style.display = 'block';
}

// Дані про команди
const teamData = {
    arsenal: {
        players: 'Давід Райа',
        description: 'Чудова команда',
        trophies: 'Кубок Англії'
    },
    'aston villa': {
        players: 'Оллі Воткінс',
        description: 'Стабільна команда',
        trophies: 'Кубок Ліги'
    }
    // Додайте більше команд тут
};

function showTeamOptions(teamId) {
    // Сховати всі логотипи
    const logos = document.querySelectorAll('img[id$="-logo"]');
    logos.forEach(logo => logo.style.display = 'none');

    // Сховати всі деталі
    document.querySelectorAll('.team-detail').forEach(detail => {
        detail.style.display = 'none';
        detail.textContent = ''; // Очищення попередніх даних
    });

    // Показати текст і кнопки для деталей
    document.getElementById('team-options-text').style.display = 'block';

    // Відобразити логотип обраної команди
    const logo = document.getElementById(`${teamId}-logo`);
    if (logo) {
        logo.style.display = 'block';
    }

    // Зберегти поточну команду
    window.currentTeam = teamId;
}

function showTeamDetails(detailType) {
    // Сховати всі деталі
    document.querySelectorAll('.team-detail').forEach(detail => detail.style.display = 'none');

    // Отримати дані для обраної команди
    const team = teamData[window.currentTeam];
    if (team) {
        const detailElement = document.getElementById(detailType);
        if (detailType === 'players') {
            detailElement.textContent = team.players;
        } else if (detailType === 'description') {
            detailElement.textContent = team.description;
        } else if (detailType === 'trophies') {
            detailElement.textContent = team.trophies;
        }
        detailElement.style.display = 'block'; // Відобразити потрібну інформацію
    }
}
