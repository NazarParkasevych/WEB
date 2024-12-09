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
    document.getElementById('belgium-button').style.display = 'block';
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
    // Приховуємо кнопку "Бельгія
    document.getElementById('belgium-button').style.display = 'none';    
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
        players: 'Goalkeepers: #13 Martin Lucas Nygaard, #32 Neto, #22 David Raya, #62 Rojas Alexei, #1 Setford Tommy; Defenders: #33 Riccardo Calafiori, #6 Gabriel, #4 Kaccuri Maldini, #15 Jakub Kiwior, #5 Monlouis Zane, #3 Josh Nichols, #2 William Salliba, #3 Kieran Tierney, #12 Jurrien Timber, #18 Tokehiro Tomiyasu, #17 Oleksandr Zinchenko; Midfielders: #11 Nathan Butler-Oyedeji, #6 Jimi Gower, #29 Kai Havertz, #76 Ayden Heaven, #20 Jorginho, #49 Myles Lewis-Skelly, #23 Mikel Merino, #53 Ethan Nwaneri, #8 Martin Odegaard, #10 Oulad M`Hand Salah, #5 Thomas Partey, #41 Declan Rice, #2 Josh Robinson, #63 Michal Rociak; Forwards: #9 Gabriel Jesus, #7 Ismael Kabia, #11 Gabriel Martinelli, #7 Bukayo Saka, #30 Raheem Sterling, #19 Leandro Trossard; Coach: Mikel Arteta',
        description: 'Чудова команда',
        trophies: 'Кубок Англії'
    },
    'aston villa': {
        players: 'Goalkeepers: #18 Joe Gauci, #23 Emiliano Martinez, #25 Robin Olsen, #48 Oliwier Zych; Defenders: #26 Lomare Bogarde, #2 Matty Cash, #3 Diego Carlos, #12 Lucas Digne, #4 Ezri Konsa, #22 Ian Maatsen, #5 Tyrone Mings, #20 Kosta Nedeljkovic, #3 Travis Patterson, #2 Rowe Triston, #5 Sil Swinkels, #14 Pau Torres; Midfielders: #6 Rose Barkley, #14 Aidan Borland, #11 Ben Broggio, #10 Emiliano Buendia, #10 Jamaldeen Jimoh-Aloba, #44 Boubacar Kamara, #7 John McGinn, #24 Amadou Onana, #41 Jacob Ramsey, #8 Youri Tielemans; Forwards: #31 Leon Bailey, #9 Jhon Duran, #9 Moore kobei, #19 Jaden Philogene, #27 Morgan Rogers, #11 Ollie Watkins, #7 Kaban Young; Coach: Unai Emery',
        description: 'Стабільна команда',
        trophies: 'Кубок Ліги'
    },
    'bournemouth':{
        players: 'Goalkeepers: #13 Kepa Arrizabalaga, #40 Dennis William, #42 Mark Travers; Defenders: #37 Maximillian Aarons, #22 Julian Araujo, #5 Owen Bevan, #23 Hill James, #2 Dean Huijsen, #3 Milos Kerkez, #48 Maxwell Kinsey-Wellings, #5 Marcos Senesi, #15 Adam Smith, #27 Ilya Zabarnyi; Midfielders: #12 Tyler Adams, #29 Philip Billing, #10 Ryan Christie, #4 Lewis Cook, #8 Alex Scott, #16 Marcus Tavarnier; Forwards: #7 David Brooks, #9 Evanilson, #19 Justin Kluivert, #11 Dango Ouattara, #24 Antoine Semenyo, #17 Luis Sinisterra, #26 Enes Unal; Coach: Andoni Iraola',
        description:'',
        trophies:''
    },
    'brentford':{
        players:'Goalkeepers: #13 Matthew Cox, #1 Mark Flekken, #12 Rafn Hakon Valdimarsson; Defenders: #20 Kristoffer Ajer, #22 Michael Nathan Collins, #43 Benjamin Fredrick, #36 Ji-Soo Kim, #16 Ben Mee, #21 Jayden Meghoma, #5 Ethan Pinnock, #30 Mads Rasmussen Roerslev, #4 Sepp Berg van den; Midfielders: #14 Fabio Carvalho, #24 Mikkel Damsgaard, #27 Vitaly Janelt, #8 Mathias Jensen, #26 Emre Yunus Konak, #32 Paris Maghoma, #6 Christian Norgaard, #16 Riley Owen, #7 Kevin Schade, #28 Ryan Trevitt, #18 Yegor Yarmolyuk, #42 Tony Yogane; Forwards: #23 Keane Lewis-Potter, #19 Bryan Mbeumo, #40 Iwan Morgan, #9 Thiago Igor, #11 Yoane Wissa; Coach: Thomas Frank',
        description:'',
        trophies:''
    },
    'brighton':{
        players:'Goalkeepers: #38 Killian Cahill, #62 Hugo Fisher, #23 Jason Steele, #1 Bart Verbruggen; Defenders: #5 Lewis Dunk, #30 Pervis Estupinan, #3 Igor, #24 Ferdi Kadioglu, #2 Tariq Lamptey, #44 Ruairi McConville, #47 Imari Samuels, #53 Jacob Slater, #48 Ed Turns, #34 Joel Veltman, #4 Adam Webster, #29 Paul Jan van Hecke; Midfielders: #26 Yasin Ayari, #20 Carlos Baleba, #10 Julio Enciso, #41 Jack Hinshelwood, #6 James Milner, #15 Jakub Moder, #33 Matt O`Riley, #32 Cameron Peupion, # 27 Mats Wieffer; Forwards: #11 Simon Adingra, #28 Evan Ferguson, #8 Brajan Gruda, #9 Joao Pedro, #17 Minteh Yankuba, #22 Kaoru Mitoma, #14 Georginio Rutter, #18 Danny Welbeck; Coach: Fabian Hurzeler',
        description:'',
        trophies:''
    },
    'chelsea':{
        players:'Goalkeepers: #1 Lucas Bergstrom, #13 Marcus Bettinelli, #12 Filip Jorgensen, #1 Max Merrick, #1 Robert Sanchez; Defenders: #12 Josh Acheampong, #4 Tosin Aderabioyo, #5 Benoit Badiashile, #21 Ben Chilwell, #6 Levi Colwill, #3 Marc Cucurella, #2 Axel Disasi, #29 Wesley Fofana, #27 Malo Gusto, #24 Reece James; Midfielders: #25 Moises Caicedo, #31 Cesare Casadei, #17 Carney Chukwuemeka, #22 Kiernan Dewsburry-Hall, #6 Kiano Dyer, #8 Enzo Fernandez, #11 Tyrique George, #45 Romeo Lavia, #18 Christofer Nkunku, #20 Cole Palmer, #15 Samuel Rak-Sakyi, #40 Renato Veiga; Forwards: #9 Deivid Washinghton, #38 Marc Guiu, #15 Nicolas Jackson, #14 Joao Felix, #11 Noni Madueke, #7 Shumaira Mheuka, #10 Mykhailo Mudryk, #7 Pedro Neto, #19 Jadon Sancho; Coach: Enzo Maresca',
        description:'',
        trophies:''
    },
    'crystal palace':{
        players:'Goalkeepers: #1 Dean Henderson, #31 Remi Matthews, #30 Matt Turner; Defenders: #27 Trevoh Chalobah, #17 Nathaniel Clyne, #6 Marc Guehi, #4 Rob Holding, #3 Eyimofe Jemide, #5 Maxence Lacroix, #3 Tyrick Mitchell, #12 Daniel Munoz, #34 Chadi Riad, #26 Chris Richards, #2 Joel Ward; Midfielders: #55 Justin Devenny, #28 Cheick Doucoure, #10 Eberechi Eze, #19 Will Hughes, #18 Daichi Kamada, #58 Caleb Kporha, #8 Jefferson Lerma, #6 Kaden Rodney, #15 Jeffrey Schlupp, #20 Adam Wharton; Forwards: #64 Asher Agbinone, #11 Zach Marsh, #14 Jean-Philippe Mateta, #9 Eddie Nketiah, #7 Ismaila Sarr, #46 Franco Umeh; Coach: Oliver Glasner',
        description:'',
        trophies:''
    },
    'everton':{
        players:'Goalkeepers: #31 Asmir Begovic, #1 Jordan Pickford, #12 Joao Virginia; Defenders: #32 Jarrad Branthwaite, #23 Seamus Coleman, #2 Roman Dixon, #5 Michael Keane, #4 Bradley Mooanan, #19 Vitaliy Mykolenko, #15 Jake O`Brien, #2 Nathan Patterson, #6 Hames Tarkowski, #18 Ashley Young; Midfielders: #45 Harrison Armstrong, #7 Owen Barker, #8 Callum Bates, #6 Luke Butterfield, #16 Abdoulaye Doucoure, #37 James Garner, #27 Idrissa Gueye, #42 Tim Iroegbunam, #29 Jesper Lindstrom, #8 Orel Mangala, #7 Dwight McNeil, #11 Charlie Whitaker; Forwards: #14 Beto, #22 Armando Broja, #9 Dominic Calvert-Lewin, #10 Chermiti, #11 Jack Harrison, #10 Iliman Ndiaye, #9 Martin Sherif; Coach: Sean Dyche',
        description:'',
        trophies:''
    },
    'fulham':{
        players:'Goalkeepers: #23 Steven Benda, #1 Alexander Borto, #1 Bernd Leno; Defenders: #35 Samuel Amissah, #5 Joachim Andersen, #3 Calvin Bassey, #21 Timothy Castagne, #15 Jorge Cuenca, #5 Luc De Fougerolles, #31 Issa Diop, #33 Antonee Robinson, #2 Kenny Tete; Midfielders: #16 Sander Berge, #10 Tom Cairney, #3 Jonathan Esenga, #24 Joshua King, #20 Sasa Lukic, #18 Andreas Pereira, #6 Harrison Reed, #30 Ryan Sessegnon, #32 Emile Smith Rowe, #8 Harry Wilson; Forwards: #12 Vinicius Carlos, #47 Martial Godo, #17 Alex Iwobi, #7 Raul Jimenez, #19 Reiss Nelson, #9 Muniz Rodrigo, #11 Adama Traore; Coach: Marco Silva',
        description:'',
        trophies:''
    },
    'ipswich':{
        players:'Goalkeepers: #1 Arijanet Muric, #13 Cieran Slicker, #28 Christian Walton; Defenders: #15 Cameron Burgess, #3 Leif Davis, #44 Janoi Donacien, #24 Jacob Greaves, #18 Benjamin Johnson, #26 Dara O`Shea, #22 Conor Townsend,, #40 Axel Tuanzebe, #6 Luke Woolfenden; Midfielders: #33 Nathan Broadhead, #7 Wes Burns, #12 Jens Cajuste, #2 Harrison Clarle, #25 Massimo Luongo, #5 Samy Morsy, #8 Kalvin Phillips, #23 Sammie Szmodics, #14 Jack Taylor; Forwards: #16 Ali Al-Hamadi, #10 Conor Chaplin, #47 Jack Clarke, #19 Liam Delap, #27 George Hirst, #20 Omari Hutchinson, #21 Chiedozie Ogbene; Coach: Kieran McKenna',
        description:'',
        trophies:''
    },
    'leicester':{
        players:'Goalkeepers:#71 Steve Bausor, #30 Mads Hermansen, #31 Daniel Iversen, #1 Danny Ward; Defenders: #4 Conor Coady, #3 Wout Faes, #50 Harvey Godsmark-Ford, #2 James Justin, #16 Victor Kristiansen, #5 Caleb Okoli, #21 Ricardo Pereira, #33 Luke Thomas, #23 Jannik Vestergaard; Midfielders: #37 Will Alves, #10 Logan Briggs, #40 Facundo Buonanotte, #17 Hamza Choudhury, #14 Bobby De Cordova-Reid, Bilal El Khannouss, #34 Michael Golding, #6 Wilfred Ndidi, #22 Oliver Skipp, #24 Boubakary Soumare, #8 Harry Winks; Forwards: #18 Jordan Ayew, #20 Patson Daka, #29 Odsonne Edouard, #7 Issahaku Fatawu, #10 Stephy Mavididi, #35 Kasey McAteer, #9 Jamie Vardy; Coach: Ruud van Nistelrooy',
        description:'',
        trophies:''
    },
    'liverpool':{
        players:'Goalkeepers: #1 Alisson, #95 Harvey Davies, #56 Vitezslav Jaros, #62 Caoimhin Kelleher; Defenders: #66 Trent Alexander-Arnold, #84 Conor Bradley, #2 Joe Gomez, #5 Ibrahima Konate, #78 Jarell Quansah, #26 Andrew Robertson, #21 Konstantinos Tsimikas, #4 Virgil van Dijk; Midfielders: #19 Harvey Elliot, #3 Wataru Endo, #38 Ryan Gravenberch, #17 Curtis Jones, #10 Alexis Mac Allister, #6 James McConnell, #80 Tyler Morton, #5 Amara Nallo, #98 Trey Nyoni, #8 Dominik Szobaszlai; Forwards: #14 Federico Chiesa, #7 Luis Diaz, #20 Diogo Jota, #18 Cody Gakpo, #9 Darwin Nunez, #11 Ranel Young, #11 Mohamed Salah; Coach: Arne Slot',
        description:'',
        trophies:''
    },
    'manchester-city':{
        players:'Goalkeepers: #33 Scott Carson, #31 Ederson, #18 Stefan Ortega; Defenders: #25 Manuel Akanji, #6 Nathan Ake, #4 kaden Braithwaite, #3 Ruben Dias, #24 Josko Gvardiol, #82 Rico Lewis, #4 Stephen Mfuni, #3 Lakyle Samuel, #66 Jahmai Simpson-Pusey, #5 John Stones, #2 Kyle Walker, #97 Josh Wilson-Esbrand; Midfielders: #52 Oscar Bobb, #17 Kevin De Bruyne, #47 Phil Foden, #10 Jack Grealish, #19 Ilkay Gundogan, #8 Mateo Kovacic, #87 James McAtee, #16 Harrison Miles, #27 Matheus Nunes, #75 Nico O`Reilly, #16 Rodri, #20 Bernardo Silva, #56 Jacob Wright; Forwards: #7 Farid Alfa-Ruprecht, #11 Jeremy Doku, #9 Erling Haaland, #11 Reigan Heskey, #10 Justin Oboavwoduo, #26 Savinho; Coach: Pep Guardiola',
        description:'',
        trophies:''
    },
    'manchester-united':{
        players:'Goalkeepers: #1 Altay Bayindir, #22 Tom Heaton, #1 Dermot Mee, #24 Ande Onana; Defenders: #41 Harry Amass, #20 Diogo Dalot, #35 Jonny Evans, #5 Louis Jackson, #87 Godwill Kukonki, #2 Victor Lindelof, #5 Harry Maguire, #12 Tyrell Malacia, #6 Lisandro Martinez, #3 Noussair Mazraoui, #3 Sam Murray, #66 Habbeb Ogunneye, #23 Luke Shaw, #15 Leny Yoro, #4 Matthijs de Ligt; Midfielders: #18 Casemiro, #6 Toby Collyer, #14 Christian Eriksen, #8 Bruno Fernandes, #75 Jayce Fitzgerald, #10 Jack Fletcher, #6 Daniel Gore, #37 Kobbie Mainoo, #7 Mason Moount, #25 Manuel Ugarte; Forwards: #21 Antony, #16 Amad Diallo, #11 Ethan Ennis, #17 Alejandro Garnacho, #9 Rasmus Hojlund, #7 Sam Mather, #10 Marcus Rashford, #9 Ethan Wheatley, #73 Ethan Williams, #11 Joshua Zirkzee; Coach: Ruben Amorim',
        description:'',
        trophies:''
    },
    'newcastle':{
        players:'Goalkeepers: #1 Martin Dubravka, #29 Mark Gillespie, #22 Nick Pope, #26 John Ruddy, #19 Odysseas Vlachodimos; Defenders: #33 Dan Burn, #20 Lewis Hall, #25 Lloyd Kelly, #17 Emil Krafth, #21 Valentino Livramento, #3 Alex Murphy, #5 Fabian Schar, #13 Matt Targett, #2 Kieran Trippier; Midfielders: #39 Bruno Guimaraes, #10 Alfie Harrison, #4 Travis Hernes, #7 Joelintoon, #36 Seean Longstaff, #8 Lewis Miley, #8 Anthony Munda, #23 Jacob Murphy, #8 Sandro Tonali, #10 Jay Turner-Cooke, #28 Joe Willock; Forwards: #24 Miguel Almiron, #11 Harvey Barnes, #11 Jonny Emerson, #10 Anthony Gordon, #14 Alexander Isak, #11 Garang Kuol, #18 William Osula, #9 Ben Parkinson, #7 Trevan Sanusi, #9 Callum Wilson; Coach: Eddie Howe',
        description:'',
        trophies:''
    },
    'nottingham forest':{
        players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach:',
        description:'',
        trophies:''
    },
    'sounthampton':{
        players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach:',
        description:'',
        trophies:''
    },
    'tottenham':{
        players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach:',
        description:'',
        trophies:''
    },
    'west ham':{
        players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach:',
        description:'',
        trophies:''
    },
    'wolverhampton':{
        players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach:',
        description:'',
        trophies:''
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
// Бельгія
function showBelgium() {
    document.getElementById('jupiler-pro-league-button').style.display = 'block';
    document.getElementById('challenger-pro-league-button').style.display = 'block';
    document.getElementById('belgium-button').style.display = 'none';
    document.getElementById('england-button').style.display = 'none';
}
function showJupilerProLeagueTeams() {
    document.querySelectorAll('.team-button').forEach(button => button.style.display = 'none');
    document.querySelectorAll('#jupiler-pro-league-dropdown .team-button').forEach(button => button.style.display = 'inline-block');
    document.getElementById('jupiler-pro-league-button').style.display = 'none';
    document.getElementById('challenger-pro-league-button').style.display = 'none';
    document.getElementById('jupiler-pro-league-dropdown').style.display = 'block';
}
function showChallengerProLeagueTeams() {
    document.querySelectorAll('.team-button').forEach(button => button.style.display = 'none');
    document.querySelectorAll('#challenger-pro-league-dropdown .team-button').forEach(button => button.style.display = 'inline-block');
    document.getElementById('challenger-pro-league-button').style.display = 'none';
    document.getElementById('jupiler-pro-league-button').style.display = 'none';
    document.getElementById('challenger-pro-league-dropdown').style.display = 'block';
}
