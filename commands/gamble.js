const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
    const amount = parseInt(args[0]);
    const result = Math.floor(Math.random() * 10);
    const balance = db.get(`account.${message.author.id}.balance`);

    if (!amount) return message.channel.send("Please insert an amount first.");
    if (isNaN(amount)) return message.channel.send("The amount was not a number.");
    if (amount > balance || !balance || balance === 0) return message.channel.send("You don't have enough nekoms.");
    

    if (amount < 50) return message.channel.send("Minimum gambling ammount is 50n$!");

    let cooldown = 10000;
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastGamble = await db.get(`lastGamble.${message.author.id}`);

    if (lastGamble !== null && cooldown - (Date.now() - lastGamble) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastGamble));
        let second = pad_zero(timeObj.seconds).padStart(2, "0");
        return message.channel.send(`Please wait **${second}** seconds before gambling again!`);
    }

    if (result < 5) {
        await db.set(`lastGamble.${message.author.id}`, Date.now());
        await db.subtract(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`Oh no! You lost ${amount}n$. Better luck next time!`);
    } else if (result > 5) {
        await db.set(`lastGamble.${message.author.id}`, Date.now());
        await db.add(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`Yay! You won ${amount}n$!`);
    }
}

module.exports.help = {
    name: "gamble"
};