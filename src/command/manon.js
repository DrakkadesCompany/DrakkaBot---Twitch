const commandName = "manon";
const aliases = [
    "manon_twi",
]

class Manon {

    constructor() {
        this.lastUsage = new Date();
    }

    execute(client, tags, message, channel) {
        let actualDate = new Date();

        if (actualDate.getSeconds() > this.lastUsage.getSeconds() + 5) {
            client.say(channel, `Best Modo, pas comme Arbogrill`);
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

module.exports = Manon;