const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: "Drakkabot",
        password: "m48g1kw3j05y9jw5xjiois9zccbtnu"
    },
    channels: [ 'Drakkades' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {

    if(self) return;

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'hello') {
        client.say(channel, `SALUT A TOI ${tags.username}, j'espère que tu vas bien!`);
    } else if(command === 'twitter') {
        client.say(channel, `Mon twitter: https://twitter.com/Drakkades`);
    }else if(command === 'insta') {
        client.say(channel, `Mon insta: https://www.instagram.com/drakkades/`);
    }else if(command === 'discord') {
        client.say(channel, `Mon discord: https://discord.gg/Kv9wzS8`);
    }else if(command === 'ph') {
        client.say(channel, `Mon pornhub: https:// Non je déconne trouve le par toi même! Fapedge`);
    } else if(command === 'echo') {
        client.say(channel, `${tags.username}, tu as dit: "${args.join(' ')}"`);
    } else if(command === 'dice') {
        const result = Math.floor(Math.random() * 6) + 1;
        client.say(channel, `${tags.username}, tu as eu ${result}.`);
    } else {
        client.say(channel, `Désolé ${tags.username}, la commande "!${command}" n'existe pas, essaye encore catJAM`);
    }
});
