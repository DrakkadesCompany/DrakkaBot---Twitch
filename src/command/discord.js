const commandName = "discord";
const aliases = [
]

class Discord {

    execute(client, tags, message, channel) {
        client.say(channel, `Mon discord: https://discord.gg/Kv9wzS8`);
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

module.exports = Discord;