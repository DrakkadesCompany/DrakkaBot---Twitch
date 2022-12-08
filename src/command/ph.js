const commandName = "ph";
const aliases = [
    "pornhub",
]

class Ph {

    execute(client, tags, message, channel) {
        client.say(channel, `Mon pornhub: https:// Non je déconne trouve le par toi même! Fapedge`);
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

module.exports = Ph;