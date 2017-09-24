/*
    Global variables
*/

// Configuration
const domain = 'isaacracing.net';
const secure = true; // "true" for HTTPS/WSS and "false" for HTTP/WS
const localhost = false; // "true" for connecting to a test server on localhost and false for connecting to the specified domain
const fadeTime = 300; // In milliseconds
const modName = 'racing+_857628390'; // This is the name of the folder for the Racing+ Lua mod after it is downloaded through Steam
const modNameDev = 'racing+_dev'; // The folder has to be named differently in development or else Steam will automatically delete it

// The object that contains all of the global variables
module.exports = {
    autoUpdateStatus: null,
    builds: null,
    characters: null, // Filled in main.js
    conn: null,
    currentScreen: 'title-ajax', // We always start on the title-ajax screen
    currentRaceID: false, // Equal to false or the ID of the race (as an integer)
    defaultLogFilePath: '',
    domain,
    emoteList: [], // Filled in main.js
    fadeTime,
    gameState: {
        inGame: false, // The log will tell us if we are in the menu or in a run
        hardMode: false, // The log will tell us if a run is started on hard mode or Greed mode
        racingPlusModEnabled: false, // The log will tell us if race validation succeeded, which is an indicator that they have successfully downloaded and are running the Racing+ Lua mod
    },
    initError: null, // Filled in main.js (only if there is an error)
    itemList: {}, // Filled in main.js
    lastPM: null,
    lastRaceTitle: '',
    log: null,
    lang: null, // The language switcher instance
    modLoader: {
        'status': 'none',
        'myStatus': 'not ready',
        'ranked': false,
        'solo': false,
        'rFormat': 'unseeded',
        'character': 3, // Judas
        'goal': 'Blue Baby',
        'seed': '-',
        'startingBuild': -1,
        'countdown': -1,
        'placeMid': 0,
        'place': 1,
        'numEntrants': 1,
        'timeOffset': 0,
        'order9-1': null, // The rest are filled in main.js
        'order14-1': null,
        'order9-2': null,
        'order14-2': null,
        'order9-3': null,
        'order14-3': null,
    },
    modName,
    modNameDev,
    modPath: null, // Set in main.js
    myUsername: null,
    order9: null, // Set in main.js by reading the "save-defaults.dat" file
    order14: null, // Set in main.js by reading the "save-defaults.dat" file
    playingSound: false,
    Raven: null, // Raven (Sentry logging) has to be a global or else it won't be initialized in other JavaScript files
    roomList: {},
    raceList: {},
    saveFileDir: [], // Filled in the "isaac.js" file if no fully unlocked save file is found
    spamTimer: new Date().getTime(),
    steam: { // Filled in steam.js
        id: null,
        accountID: null,
        screenName: null,
        ticket: null,
    },
    stream: {
        URL: '',
        URLBeforeTyping: '',
        URLBeforeSubmit: '',
        TwitchBotEnabled: null,
        TwitchBotDelay: null,
    },
    tabCompleteCounter: 0,
    tabCompleteIndex: 0,
    tabCompleteWordList: null,
    timeLaunched: new Date().getTime(),
    timeOffset: 0,
    trinketList: {}, // Filled in main.js
    websiteURL: `http${(secure && !localhost ? 's' : '')}://${(localhost ? 'localhost' : domain)}`, // Always default to HTTP if connecting to localhost
    websocketURL: `ws${(secure && !localhost ? 's' : '')}://${(localhost ? 'localhost' : domain)}/ws`, // Always default to HTTP if connecting to localhost
    wordList: null, // Filled in main.js
    version: null, // Filled in main.js
};

/*
    By default, we start on the title screen.
    currentScreen can be the following:
    - title-ajax
    - tutorial1
    - tutorial2
    - login
    - login-ajax
    - forgot
    - forgot-ajax
    - register
    - register-ajax
    - updating
    - lobby
    - race
    - error
    - warning
    - waiting-for-server
    - transition
    - null (a blank screen)
*/
