const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
     const embed = new Discord.MessageEmbed()
     .setTitle("All current commands!")
     .setColor("RANDOM")
     .addField("⚠️WORK IN PROGRESS⚠️", "*Join the support server for updates*")
     .addFields(
         { name: 'General help | Usage:', value: '```+help```' },
         { name: '\u200B', value: '**Main commands:**' },
         { name: 'AI Chat | Usage:', value: '```+chat <text>```', inline: true },
         { name: 'User avatar | Usage:', value: '```+avatar <@user>```', inline: true },
         { name: 'Enlarge emoji | Usage:', value: '```+enlarge <emoji>```', inline: true },
         { name: 'Define word | Usage:', value: '```+urban <word>```', inline: true },
         { name: 'Bot Latency | Usage:', value: '```+ping```', inline: true },
         { name: 'Coming Soon', value: '```---------```', inline: true },
         { name: 'User rank | Usage:', value: '```+rank```', inline: true },
         { name: 'Leaderboard | Usage:', value: '```+levels```', inline: true },
     )
     .addFields(
        { name: '\u200B', value: '**Fun commands:**' },
        { name: 'Random meme | Usage:', value: '```+meme```', inline: true },
        { name: 'Cute images | Usage:', value: '```+cute```', inline: true },
        { name: '8ball | Usage:', value: '```+8ball <question>```', inline: true },
        { name: 'TicTacToe | Usage:', value: '```+ttt <@user>```', inline: true },
    )
    .addFields(
        { name: '\u200B', value: '**Economy:**' },
        { name: 'Balance | Usage:', value: '```+bal```', inline: true },
        { name: 'Daily Nekoms | Usage:', value: '```+daily```', inline: true },
        { name: 'Gambling | Usage:', value: '```+gamble <ammount>```', inline: true },
        { name: 'Pay user | Usage:', value: '```+pay <@user> <ammount>```', inline: true },
    )
     .setTimestamp()

     message.channel.send(embed);
     console.log("commands.js was executed successfully");


}

module.exports.help = {
    name: "commands"
};