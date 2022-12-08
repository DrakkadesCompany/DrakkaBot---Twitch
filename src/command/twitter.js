const commandName = "twitter";
const aliases = [
    "twiter",
]

class Twitter {

    execute(client, tags, message, channel) {
        client.say(channel, `Mon twitter: https://twitter.com/Drakkades`);
    }

    isValid(command) {
        if (command === commandName) {
            return true;
        } else {
            for (let i = 0; i < aliases.length; ++i) {
                if (aliases[i] === command) {
                    return true;
                }
            }
            return false;
        }
    }
}

module.exports = Twitter;