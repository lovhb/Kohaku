const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
function emoji (id) {
    return client.emojis.cache.get(id).toString
}

module.exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    }

    if (user.bot || user === client.user) {
        return;
    }

    let balance = db.get(`account.${user.id}.balance`);
    if (!balance) balance = 0;
    else balance = balance;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${user.tag}'s nekoms <:nekom:787684917433335870>`)
    .addField("Balance:", `${(balance).toLocaleString()}n$`)
    .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
    .setTimestamp(new Date)
    return message.channel.send(embed);
}

module.exports.help = {
    name: "bal"
};