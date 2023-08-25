const tmi = require('tmi.js');
const path = require('path');
const fs = require('fs');

const messageList = [
    'Hey ! Rejoint moi sur Twitter: https://twitter.com/Drakkades ou sur Instragam: https://www.instagram.com/drakkades/',
    'Regarde mon contenue sur Youtube: https://www.youtube.com/@drakkades et les VOD: https://www.youtube.com/@drakkadesvod',
    'Tous les réseaux sociaux son sur http://drakkades.com/',
]

let messageCursor = 0;

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: "Drakkabot",
        password: process.env.TWITCH_OAUTH_CODE
    },
    channels: [ 'Drakkades' ]
});

const commands = [];
const directoryCommandsPath = path.join(__dirname, '/command');

//Block used to read all commands in src/command folder
fs.readdir(directoryCommandsPath, function (err, files) {
    if (err) {
        console.log('Une erreur est survenue lors du chargement des commandes. ' + err.message);
        process.exit(1);
    } else {
        files.forEach(function (file) {
            console.log('Loading command ' + file + '.');

            const command = require(directoryCommandsPath + '/' + file);
            commands.push(new command());
        });

        //When loaded all commands we can start the bot
        client.connect().then(res => {
            console.log("App Started");
        }).catch(err => {
            console.log(err);
            process.exit(1);
        });
    }
});

//Events when chat users send messages on Twitch
client.on('message', (channel, tags, message, self) => {
    if(self) return;

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    for (let i = 0; i < commands.length; ++i) {
        const commandSelected = commands[i];

        if (commandSelected.isValid(command)) {
            commandSelected.execute(client, tags, message, channel);
        }
    }
});

setInterval(executeAutoMessages, 1000 * 60 * 35);

function executeAutoMessages() {
    client.say('drakkades', messageList[messageCursor]);
    ++messageCursor;

    if (messageCursor > messageList.length - 1) {
        messageCursor = 0;
    }
}
