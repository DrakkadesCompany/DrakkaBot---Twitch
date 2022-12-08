const commandName = "hello";
const aliases = [
    "hi",
    "salut",
    "prout",
]

class Hello {

    constructor() {
        this.lastUsage = new Date();
    }

    execute(client, tags, message, channel) {
        let actualDate = new Date();

        if (actualDate.getSeconds() > this.lastUsage.getSeconds() + 5) {
            client.say(channel, `SALUT A TOI ${tags.username}, j'espère que tu vas bien!`);
            this.lastUsage = actualDate;
        }
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