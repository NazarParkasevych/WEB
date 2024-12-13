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
    // APL
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
        players:'Goalkeepers: #1 Aaron Bott, #33 Miguel Carlos, #12 Harry Griffiths, #26 Matz Sels; Defenders: #4 Zach Abbott, #34 Ola Aina, #30 Willy Boly, #31 Nikola Milenkovic, #4 Morato, #19 Alex Moreno, #5 Murillo, #12 Andrew Omobamidele, #15 Harry Toffolo, #7 Neco Williams; Midfielders: #8 Ellot Anderson, #28 Danilo, #16 Nicolas Dominguez, #10 Morgan Gibbs-White, #14 Callum Hudson-Odoi, #6 Ben Perry, #6 Ibrahim Sangare, #24 Ramon Sosa, #18 James Ward-Prowse, #22 Ryan Yetes; Forwards: #9 Taiwo Awoniyi, #25 Emmanuel Dennis, #21 Anthony Elanga, #20 Silva Jota, #11 Chris Wood, #17 Eric da Silva Moreira; Coach: Nuno Espirito Santo',
        description:'',
        trophies:''
    },
    'sounthampton':{
        players:'Goalkeepers: #13 Joe Lumley, #1 Alex McCarthy, #30 Aaron Ramsdale; Defenders: #35 jan Bednarek, #37 Armel Bella-Kotchap, #14 James Bree, #12 Ronnie Edwards, #6 Taylor Harwood-Bellis, #3 Juan Larios, #3 Ryan Manning, #4 Jayden Moore, #5 Jack Stephens, #16 Yukinari Sugawara, #21 Charlie Taylor, #2 Kyle Walker-Peters, #15 Nathan Wood; Midfielders: #16 Romeo Akachukwu, #27 Samuel Amo-Ameyaw, ##7 Joe Aribo, #4 Flynn Downes, #18 Mateus Fernandes, #24 Ryan Fraser, #10 Adam Lallana, #8 Joe O`Brien Whitmarsh, #8 William Smallbone, #26 Lesley Ugochhukwu; Forwards: #19 Cameron Archer, #9 Adam Armstrong, #17 Ben Brereton Diaz, #22 Maxwell Cornet, #33 Tyler Dibling, #11 Will Merry, #32 Paul Onuachu, #7 Jay Robinson, #11 Ross Stewart, #20 Kamaldeen Sukemana; Coach: Russell Martin',
        description:'',
        trophies:''
    },
    'tottenham':{
        players:'Goalkeepers: #40 Brandonn Austin, #20 Fraser Forster, #1 Luca Gunter, #13 Blake Irow, #1 Guglielmo Vicario, #41 Alfie Whiteman; Defenders: #33 Ben Davies, #48 Alfie Dorrington, #6 Radu Dragusin, #79 Malachi Hardy, #3 Maeson King, #23 Pedro Porro, #3 Sergio Reguilon, #17 Gabriel Romero Cristian, #24 Djed Spence, #13 Destiny Udogie, #37 Micky van de Ven; Midfielders: #30 Rodrigo Bentancue, #15 Lucas Bergvall, #8 Yves Bissouma, #4 Jamel Cassanova Dante, #14 Archie Gray, #9 Tyrese Hall, #10 James Maddison, #64 Callum Olusesi, #8 Max Robson, #29 Matar Sarr Pape; Forwards: #63 Oyindamola Ajayi, #22 Brennan Johnson, #21 Dejan Kulusevski, #42 Will Lankshear, #47 Mikey Moore, #28 Wilson Odobert, #9 Richarlison, #19 Dominic Solanke, #7 Heung-Min Son, #16 Timo Werner, #78 Luca Williams-Barnett; Coach: Ange Postecoglou',
        description:'',
        trophies:''
    },
    'west ham':{
        players:'Goalkeepers: #23 Alphonse Areola, #1 Lukasz Fabianski, #21 Wesley Foderingham, #1 Finley Herrick; Defenders: #42 Kaelan Casey, #5 Vladimir Coufal, #3 Aaron Cresswell, #33 Emerson, #26 Max Kilman, #15 Konstantinos Mavropanos, #63 Ezra Mayers, #2 Junior Robinson, #57 Oliver Scarles, #25 Jean-Chair Todibo, #29 Aaron Wan-Bissaka; Midfielders: #19 Edison Alvarez, #39 Andrew Irving, #14 Mohammed Kudus, #8 Lewis Orford, #10 Lucas Paqueta, #24 Guido Rodriguez, #4 Carlos Soler, #28 Tomas Soucek; Forwards: #9 Michail Antonio, #20 Jarrod Bowen, #11 Niclas Fullkrug, #18 Danny Ings, #17 Guilherme Luis, #7 Sean Moore, #7 Crysencio Summerville; Coach: Julen Lopetegui',
        description:'',
        trophies:''
    },
    'wolverhampton':{
        players:'Goalkeepers: #1 Lewys Benjamin, #25 Daniel Bentley, #31 Sam Johnstone, #40 Tom King, #1 Jose Sa; Defenders: #3 Rayan Aiit-Nouri, #4 Santiago Bueno, #15 Craig Dawson, #2 Matt Doherty, #19 Rodrigo Gomes, #37 Lima Pedro, #5 Alfie Pond, #22 Nelson Semedo, #24 Toti; Midfielders: #7 Andre, #27 Jean-Ricner Bellagarde, #34 Luke Cundle, #20 Thomas Doyle, #8 Joao Gomes, #5 Mario Lemina, #14 Yerson Mosquera, #16 Luke Rawlings, #6 Boubacar Traore; Forwards: #10 Matheus Cunha, #26 Carlos Forbs, #29 Goncalo Guedes, #11 Hee-Chan Hwang, #9 Strand Larsen Jorgen, #21 Pablo Sarabia; Coach: Gary O`Neil',
        description:'',
        trophies:''
    },
// Championship
    'blacburn rovers':{
        Players:'Goalkeepers: #1 Jack Barrett, #13 Joe Hilton, #1 Aynsley Pears, #12 Balazs Toth; Defenders: #15 Danny Batth, #24 Owen Beck, #2 Callum Brittain, #17 Hayden Carter, #2 Leo Duru, #5 Dominic Hyam, #40 Matty Litherland, #4 Kyle McFadzean, #3 Harry Pickering; Midfielders: #42 Lewis Baker, #21 John Buckley, #8 Todd Cantwell, #33 Amario Cozier-Duberry, #41 Harley O`Grady-Macken, #11 Joe Rankin-Costello, #7 Arnor Siqurdsson, #27 Lewis Travis, #6 Sondre Tronstad, #14 Andreas Weimann; Forwards: #17 Thomas Bloxman, #16 Aodhan Doherty, #10 Tyrhys Dolan, #9 Makhtar Gueye, #19 Ryan Hedges, #20 Harry Leonard, #23 Yuki Ohashi, #9 Igor Tyjon; Coach: John Eustace',
        description:'',
        trophies:''
    },
    'bristol city':{
        Players:'Goalkeepers: #23 Stefan Dajic, #1 Max O`Leary, #41 Lewis Thomas; Defenders: #5 Robert Atkinson, #33 Josh Campbell-Slcwey, #16 Robert Dickie, #34 Josheh James, #2 Ross McCrorie, #15 Luke McNally, #22 Kal Naismith, #3 Cameron Pring, #24 Haydon Roberts, #19 George Tanner, #14 Zak Vyner, #39 Callum Wood; Midfielders: #37 Tommy Backwell, #38 Ayman Benarous, #6 Max Bird, #40 George Earthy, #12 Jason Knight, #29 Marcus McGuane, #31 Elijah Morrison, #10 Mark Sykes, #38 Omar Taylor-Clarke, #10 Scott Twine, #8 Joe Williams; Forwards: #30 Sinclair Armstrong, #20 Samuel Bell, #27 Harry Cornick, #7 Yu Hirakawa, #9 Fally Mayulu, #11 Anis Mehmeti, #30 Raekwon Nelson #35 Leo Pecover, #? Billy Phillips, 321 Nahki Wells; Coach: Liam Manning',
        description:'',
        trophies:''
    }, 
    'burnley':{
        Players:'Goalkeepers: #20 Etienne Green, #32 Vaclav Hladky, #1 James Trafford; Defenders: #39 Owen Dodgson, #16 John Egan, #6 CJ Egan-Riley, #18 Hjalmar Ekdal, #5 Maxime Esteve, #12 Bashir Humphreys, #23 Pires Lucas, #14 Connor Roberts, #3 Shurandy Sambo, #4 Joe Worrall; Midfielders: #48 Enock Agyei, #8 Josh Brownhill, #24 Josh Cullen, #19 Zian Flemming, #29 Josh Laurent, #51 Vernon Masara, #42 Han-Noah Massengo, #49 Tommy McDermott, #28 Hannibal Mejbri, #15 Nathan Redmond; Forwards: #11 Jaidon Anthony, #17 Lyle Foster, #37 Andreas Hountondji, #30 Luca Koleosho, #10 Benson Manuel Hedilazio, #9 Jay Rodriguez, #7 Jeremy Sarmiento, #25 Joe Westley; Coach: Scott Parker',
        description:'',
        trophies:''
    }, 
    'cardiff':{
        Players:'Goalkeepers: #21 Jak Alnwick, #? Jake Dennis, #1 Ethan Horvath, #41 Matthew Turner; Defenders: #23 Joel Bagan, #12 Calum Chambers, #17 Jamilu Colliins, #5 Jesper Daland, #19 Thomas Davies, #2 William Fish, #49 Luey Giles, #4 Dimitrios Goutas, #44 Ronan Krakio, #48 Dylan Lawlor, #51 Dakarai Mafico, #38 Perry NG; Midfielders: #45 Cian Ashford, #27 Rubin Colwill, #43 Adeteye Gbadehan, #50 Isaac Jefferies, #8 Joe Ralls, #10 Aaron Ramsey, #35 Andy Rinomhota, #18 Alex Robertson #3 Manolis Siopis, #14 David Turnbull, #52 Cody Twose, #16 Chris Willock; Forwards: #39 Isaak Davies, #20 Anwar El Ghazi, #9 Kion Etete, #15 Wilfried Kanga, #19 Yakou Meite, #? Tanatswa Nyakuhwa, #11 Callum O`Dowda, #46 Michael Reindorf, #47 Callum Robinson, #32 Ollie Tanner, #? Morgan Wigley; Coach: Erol Bulut',
        description:'',
        trophies:''
    }, 
    'coventry':{
        Players:'Goalkeepers: #48 Luke Bell, #40 Bradley Collins, #1 Oliver Dovlin, #57 Daniel Rachal, #13 Ben Wilson; Defenders: #21 Jake Bidwell, #2 Luis Binks, #51 Harvey Broad, #3 Jay Dasilva, #15 Liam Kitching, #4 Boddy Thomas, #27 Milan van Ewijk; Midfielders: #8 Jamie Allen, #54 Kai Andrews, #28 Josh Eccels, #22 Joel Latibeaudiere, #41 Callum Perry, #5 Jack Rudoni, #7 Tatsuhiro Sakamoto, #14 Ben Sheaf, #9 Ellis Simms, #23 Victor Torp; Forwards: #37 Norman Bassette, #? Elliot Betjemann, #59 Aidan Dausch, #10 Ephron Mason-Clark, #30 Fabio Tavares, #23 Brandon Thomas-Asante, #11 Haji Wright; Coach: Frank Lampard',
        description:'',
        trophies:''
    }, 
    'derby county':{
        Players:'Goalkeepers: #13 Rohan Luthhra, #31 Josh Vickers, #1 Jacob Widell Zetterstrom; Defenders: #14 Max Bardell, #6 Eiran Cashin, #20 Callum Eider, #35 Curtis Nelson, #24 Ryan Nyambe, #12 Nathaniel Phillips, #2 Kane Wilson; Midfielders: #32 Ebou Adams, #5 Sonny Bradley, #8 Tawanda Chirewa, #3 Craig Forsyth, #17 Kenzo Goudmijn, #8 Ben Osborn, #4 David Ozoh, #16 Liam Thompson, #3 Freddie Turley, #23 Joe Ward; Forwards: #7 Tom Barkhuizen, #27 Corey Blackett-Taylor, #39 Dajaune Brown, #9 James Collins, #18 Marcus Harness, #19 Kayden Jackson, #11 Nathaniel Mens=dez-Laing, #9 Conor Washington, #10 Jerry Yates; Coach: Paul Warne',
        description:'',
        trophies:''
    }, 
    'hull city':{
        Players:'Goalkeepers: #1 Ivor Pandur, #31 Anthony Racioppi, #22 Carl Rushworth; Defenders: #43 Stanley Ashbee, #17 Finley Burns, #2 Lewie Coyle, #23 Cody Drameh, #3 Ryan Giles, #4 Charlie Hughes, #29 Matty Jacob, #5 Alfie Jones, #6 Sean McLoughlin, #26 Andy Smith; Midfielders: #19 Steven Alzate, #42 Rocco Coyle, #16 Ryan Longman, #8 Marvin Mehlem, #10 Abdulkadir Omur, #45 Kasey Palmer, #20 Gustavo Puerta, #18 Xavier Simons, #27 Regan Slater, #47 Nathan Tinsdale, #45 Harry Vaughan, #25 Oscar Zambrano; Forwards: #9 Chris Bedia, #33 Mohamed Belloumi, #48 Mason Burstow, #? Sincere Hall, #36 Will Jarvis, #12 Galvao Joao Pedro, #44 Abu Kamara, #7 Liam Millar, #41 Tyrell Sellars-Fleming, #11 Dogukan Sinik; Coach: Ruben Selles',
        description:'',
        trophies:''
    }, 
    'leeds':{
        Players:'Goalkeepers: #21 Alex Cairns, #26 Karl Darlow, #1 Illan Meslier; Defenders: #4 Ethan Ampadu, #2 Jayden Bogle, #25 Samuel Byram, #37 James Debayo, #3 Junior Firpo, #6 Joe Rodon, #5 Pascal Struijk, #39 Maximilian Wober; Midfielders: #11 Brenden Aaronson, #9 Sam Chambers, #19 Francis Coquelin, #50 Charlie Crew, #44 Illa Gruev, #23 Josuha Guilavogui, #7 Daniel James, #8 Joe Rothwell, #22 Ao Tanaka; Forwards: #9 Patrick Bamford, #30 Joe Gelhardt, #29 Wilfried Gnonto, #19 Mateo Joseph, #10 Joel Piroe, #17 Largie Ramazani, #33 Isaac Schmidt, #14 Manor Solomon; Coach: Daniel Farke',
        description:'',
        trophies:''
    }, 
    'luton':{
        Players:'Goalkeepers: #31 Jameson Horlick, #24 Thomas Kaminski, #23 Tim Krul, #1 James Shea; Defenders: #5 Mads Andersen, #3 Amari`i Bell, #16 Reece Burke, #40 Christian Chigozie, #39 Aidan Francis-Clarke, #27 Daiki Hashioka, #29 Thomas Holmes, #38 Joseph Johnson, #6 Mark McGuinness, #15 Teden Mengi, #2 Reuell Walters; Midfielders: #26 Shandon Baptiste, #18 Jordan Clark, #45 Alfie Doughty, #8 Tom Krauss, #7 Victor Moses, #17 Pelly-Ruddock Mpanzu, #13 Marvelous Nakamba, #37 Zack Nelson, #20 Liam Walsh; Forwards: #11 Elijah Adebayo, #19 Jacob Brown, #14 Tahith Chong, #9 Carlton Morris, #25 Joe Taylor, #10 Cauley Woodrow; Coach: Rob Edwards',
        description:'',
        trophies:''
    }, 
    'middlesbrough':{
        Players:'Goalkeepers: #31 Solomon Brynn, #1 Seny Dieng, #23 Tom Glover; Defenders: #12 Luke Ayling, #5 Matt Clarke, #15 Anfernee Dijksteel, #25 George Edmundson, #27 Lucas Engel, #6 Dael Fry, #2 George Gitau, #5 Harley Hunt, #26 Darragh Lenihan, #3 Georgee McCormick, #30 Borges Neto, #16 Nathan Simpson, #5 James Wilson, #3 Rav van den Berg; Midfielders: #20 Finn Azaz, #4 Daniel Barlaser, #10 Delano Burgzorg, #10 Fin Cartwright, #7 Hayden Hackney, #17 Micah Hamilton, #16 Jonathan Howson, #8 Law McCabe, #18 Aidan Morris; Forwards: #22 Tommy Conway, #50 Ben Doak, #21 Marcus Forss, #14 Alex Gilbert, #11 Isaiah Jones, #9 Emmanuel Latte Lath, #14 Charlie Lennon, #8 Riley McGree; Coach: Michael Carrick',
        description:'',
        trophies:''
    }, 
    'milwall':{
        Players:'Goalkeepers: #1 Lukas Jensen, #13 Liam Roberts; Defenders: #3 Nino Adom-Malaki, #15 Joe Bryan, #5 Jake Cooper, #? Olivver Evans, #45 Wes Harding, #4 Shaun Hutchinson, #19 Ryan Leonard, #2 Dan McNamara, #33 Calum Scanlon, #37 Kyle Smith, #6 Japhet Tannganga, #3 Murray Wallace; Midfielders: #11 Femi Azeez, #24 Casper De Norre, #25 Romain Esse, #39 George Honeyman, #16 Daniel Kelly, #44 Alfie Massey, #8 Billy Mitchell, #23 George Saville, #14 Ryan Wintle; Forwards: #9 Tom Bradshaw, #21 Joshua Coburn, #22 Aidomo Emakhu, #26 Mihailo Ivanovic, #17 Macaulay Langstaff, #12 Adam Major, #19 Duncan Watmore; Coach: Neil Harris',
        description:'',
        trophies:''
    }, 
    'norwich':{
        Players:'Goalkeepers: #1 Angus Gunn, #12 George Long, #37 Archie Mair; Defenders: #14 Benjamin Chrisene, #33 Jose Cordoba, #6 Callum Doyle, #4 Shane Duffy, #5 Grant Hanley, #4 Brad Hills, #3 Lucien Mahovo, #3 Jack Stacey, #2 Jonathan Tomkinson, #5 Jaden Warner; Midfielders: #6 Uriah Djedje, #16 Christian Fassnacht, #35 Kellen Fisher, #18 Amankwah Forson,  #41 Gabriel Forsyth, #8 Liam Gibbs, #25 Onel Hernandez, #11 Emiliano Marcondes, #23 Kenny McLean, #9 Elliot Myles, #26 Marcelino Nunez, #20 Anis Slimane, #19 Lungi Sorensen Jacob; Forwards: #10 Ashley Barnes, #17 Ante Crnac, #21 Caide Gordon, #7 Borja Sainz, #9 Joshua Sargent, #29 Oscar Schwartau, #10 Tony Springeett; Coach: Johannes Thorup',
        description:'',
        trophies:''
    }, 
    'oxford united':{
        Players:'Goalkeepers: #1 Jamie Cumming, #13 Simon Eastwood, #21 Matt Ingram, #1 Jacob Knightbridge; Defenders: #12 Joe Bennett, #3 Ciaron Brown, #35 James Golding, #30 Peter Kioso, #22 Greg Leigh, #2  Sam Long, #43 Richard Mcintyre, #5 Elliot Moore, #16 Benjamin Nelson, #34 Jordan Thorniley, #4 Will Vaulks, #24 Hiddde ter Avest; Midfielders: #8 Cameron Brannagann, #23 Siriki Dembele, #15 Idris El Mizouni, #28 Marselino Ferdinan, #19 TTyler Goodrham, #6 Josh McEachran, #14 Louie Sibley; Forwards: #17 Owen Dale, #11 Malcolm Ebiowei, #29 Kyle Edwards, #47 Aidan Elliiot-Wheeler, #25 Will Goodwin #9 Mark Harris, #10 Matt Phillips, #77 Przemyslaw Placheta, #20 Ruben Rodrigues, #44 Dane Scarlett; Coach: Des Buckingham',
        description:'',
        trophies:''
    }, 
    'plymouth':{
        Players:'Goalkeepers: #31 Daniel Grimshaw, #21 Conor Hazard, #49 Daniel Holman, #25 Marko Marosi; Defenders: #22 Brendan Galloway, #17 Lewis Gibson, #4 Jordan Houghton, #2 Bali Mumba, #3 Nathaniel Ogbeta, #44 Victor Palsson, #5 Julio Pleguezuelo, #29 Matthew Sorinola, #6 Kornel Szucs; Midfielders: #28 Rami Al Hajj, #8 Joe Edwards, #39 Tegan Finn, #27 Adam Forshaw, #18 Darko Gyabi, #? Joe Hatch, #20 Adam Randell, #34 Caleb Roberts, #11 Callum Wright; Forwards: #15 Mustapha Bundu, #7 Ibrahim Cissoko, #19 Andre Gray, #9 Ryan Hardie, #35 Frederick Issaka, #14 Michael Obafemi, #26 Muhamed Tijani, #10 Morgan Whittaker; Coach: Wayne Rooney',
        description:'',
        trophies:''
    }, 
    'portsmouth':{
        Players:'Goalkeepers: #31 Jordan Archer, #1 Will Norris, #13 Nicoalas Schmid; Defenders: #34 Ibane Bowat, #19 Jacob Farrell, #16 Tom McIntyre, #3 Conor Oggilvie, #5 Regan Poole, #6 Conor Shaughnessy, #22 Zak Swanson, #4 Rylley Towler, #2 Jordan Williams; Midfielders: #41 Harry Clout, #24 Terry Devlin, #21 Andre Dozzell, #25 Abdoulaye Kamara, #26 Tom Lowery, #17 Owen Moxon, #7 Marlon Pack, #8 Freddie Potts, #30 Matt Ritchie, #14 Ben Stevenson; Forwards: #3 Colby Bishop, #29 Harvey Blair, #32 Paddy Lane, #49 Callum Lang, #23 Josh Murphy, #11 Mark O`Mahony, #15 Christian Saydee, #20 Sam Silvera, #18 Elias Sorensen, #10 Kusini Yengi; Coach: John Mousinho',
        description:'',
        trophies:''
    }, 
    'preston':{
        Players:'Goalkeepers: #13 david Cornell, #21 james Pradic, #1 Frederick Woodman; Defenders: #26 Patrick Bauer, #33 Kian Best, #16 Andrew Hughes, #29 Kaine Kesler-Hayden, #6 Liam Lindsay, #31 Theo Mawene, #32 Kacper Pasiec, #14 Jordan Storey, #5 Jack Whatmough; Midfielders: #11 Robbie Brady, #10 Mads Frokjaer-Jensen, #20 Sam Greenwood, #25 Duane Holmes, #18 Ryan Ledson, #8 Ali McCann, #34 Kitt Nelson, #44 Brad Potts, #30 Kian Taylor, #22 Teitur Thordarson Stefan, #4 Benjamin Whiteman; Forwards: #40 Josh Bowler, #7 Will Keane, #23 Jeppe Okkels, #28 Milutin Osmajic, #9 Emil Riis, #17 Layton Stewart; Coach: Paul Heckingbottom',
        description:'',
        trophies:''
    }, 
    'queens park rangers':{
        Players:'Goalkeepers: #1 Paul Nardy, #41 Nathan Shepperd, #13 Joe Walsh; Defenders: #20 Harrison Ashby, #5 Steve Cook, #3 Jimmy Dunne, #15 Morgan Fox, #23 Santos Hevertton, #16 LLiam Morrison, #22 Kenneth Paal; Midfielders: #33 Alexander Aoraha, #10 Ilias Chair, #6 Jake Clarke-Salter, #4 Jack Colback, #7 Karamoko Dembele, #19 Elijah Dixon-Bonner, #8 Sam Field, #24 Nicolas Madsen, #21 Kieran Morgan, #30 Lorent Talla, #29 Alfie Tuck, #40 Jonathan Varane; Forwards: #25 Lucas Andersen, #27 Daniel Bennie, #18 Zan Celar, #12 Michael Frey, #26 Rayan Kolli, #28 Alfie Lloyd, #14 Koki Saito, #11 Paul Smyth; Coach: Marti Cifuentes',
        description:'',
        trophies:''
    }, 
    'sheffield united':{
        Players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach: ',
        description:'',
        trophies:''
    }, 
    'sheffield wednesday':{
        Players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach: ',
        description:'',
        trophies:''
    }, 
    'stoke city':{
        Players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach: ',
        description:'',
        trophies:''
    }, 
    'sunderland':{
        Players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach: ',
        description:'',
        trophies:''
    }, 
    'swansea':{
        Players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach: ',
        description:'',
        trophies:''
    }, 
    'watford':{
        Players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach: ',
        description:'',
        trophies:''
    }, 
    'west bromwich':{
        Players:'Goalkeepers: ; Defenders: ; Midfielders: ; Forwards: ; Coach: ',
        description:'',
        trophies:''
    },  
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
