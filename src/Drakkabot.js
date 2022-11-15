const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: "Drakkabot",
        password: "m48g1kw3j05y9jw5xjiois9zccbtnu"
    },
    channels: [ 'Drakkades' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {

    if(self) return;

    if(message.toLowerCase() === '!hello') {
        client.say(channel, `SALUT A TOI ${tags.username}, j'espère que tu vas bien!`);
    }
});
