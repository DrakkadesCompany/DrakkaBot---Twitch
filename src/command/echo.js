const commandName = "echo";
const aliases = [
    "repete",
]

class Echo {

    execute(client, tags, message, channel) {
        client.say(channel, `${tags.username}, tu as dit: "${args.join(' ')}"`);
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

module.exports = Echo;