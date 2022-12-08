const commandName = "rs";
const aliases = [
    "reseau",
    "socials",
]

class Rs {

    execute(client, tags, message, channel) {
        client.say(channel, `Mes réseaux: Instragam: https://www.instagram.com/drakkades/ Twitter: https://twitter.com/Drakkades Discord: https://discord.gg/Kv9wzS8 Youtube: https://www.youtube.com/@drakkades VOD: https://www.youtube.com/@drakkadesvod`);
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

module.exports = Rs;