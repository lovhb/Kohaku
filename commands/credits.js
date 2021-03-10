const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
     const embed = new Discord.MessageEmbed()
     .setTitle("Kohaku credits:")
     .setColor("RANDOM")
     .setThumbnail("https://cdn.discordapp.com/emojis/749901020561408024.gif")
     .addField("⚠️WORK IN PROGRESS⚠️", "*Join the support server for updates*")
     .addField("Polar", "```JS coding and development```")
     .addField("Reddit", "```All meme and cute images are taken \nfrom Reddit```")
     .addField("AcoBot.ai", "```AI Development```")
     .addField("You", "```For using Kohaku!```")
     .setTimestamp()

     message.channel.send(embed);
     console.log("credits.js was executed successfully");


}

module.exports.help = {
    name: "credits"
};