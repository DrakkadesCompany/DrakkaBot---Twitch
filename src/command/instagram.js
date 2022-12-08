const commandName = "ig";
const aliases = [
    "insta",
    "instagrame",
]

class Instagram {

    execute(client, tags, message, channel) {
        client.say(channel, `Mon insta: https://www.instagram.com/drakkades/`);
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

module.exports = Instagram;
