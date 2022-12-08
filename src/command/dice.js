const commandName = "dice";
const aliases = [
    "dé",
]

class Dice {

    execute(client, tags, message, channel) {
        const result = Math.floor(Math.random() * 6) + 1;
        client.say(channel, `${tags.username}, tu as eu ${result}.`);
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

module.exports = Dice;