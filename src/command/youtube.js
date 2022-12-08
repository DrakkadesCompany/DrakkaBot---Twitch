const commandName = "youtube";
const aliases = [
    "yt",
]

class Youtube {

    execute(client, tags, message, channel) {
        client.say(channel, `Mon Youtube: https://www.youtube.com/@drakkades Les VOD: https://www.youtube.com/@drakkadesvod`);
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

module.exports = Youtube;