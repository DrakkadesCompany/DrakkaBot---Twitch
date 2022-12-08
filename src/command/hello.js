const commandName = "hello";
const aliases = [
    "hi",
    "salut",
    "prout",
]

class Hello {

    execute(client, tags, message, channel) {
        client.say(channel, `SALUT A TOI ${tags.username}, j'espère que tu vas bien!`);
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

module.exports = Hello;