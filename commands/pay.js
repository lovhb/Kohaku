const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    }

    let balance = db.get(`account.${message.author.id}.balance`);

    if (!user) return message.channel.send("Please mention the user you want to give nekoms.");
    if (user.bot || user === client.user) return;
    if (user.id === message.author.id || user === message.author) return message.channel.send("You can't give yourself nekoms smh!");

    let amount = parseInt(args[1]);
    if (!amount) return message.channel.send("Please enter the ammount of nekoms you want to transfer.");
    if (isNaN(amount)) return message.channel.send("Please input a valid number.");

    if (!balance || balance == 0) return message.channel.send("You dont have any nekoms :(");
    if (amount > balance) return message.channel.send("You don't have an enough nekoms to transfer. That is way too much.");
    if (amount === 0) return message.channel.send("Transfer nothing? You can't do that.");

    await db.add(`account.${user.id}.balance`, amount);
    await db.subtract(`account.${message.author.id}.balance`, amount);

    return message.channel.send(`You gave (${user.tag}) **${amount}** nekoms!`);
}

module.exports.help = {
    name: "pay"
};