const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
     const embed = new Discord.MessageEmbed()
     .setTitle("Here's some help!")
     .setColor("RANDOM")
     .addField("⚠️WORK IN PROGRESS⚠️", "*Join the support server for updates*")
     .addField("Commands:", "```+commands```")
     .addField("Information:", "```+info```")
     .addField("Credits:", "```+credits```")
     .addField("Links:", "[Support](https://discord.gg/VX5wHn3cFX)\n[Invite](https://discord.com/api/oauth2/authorize?client_id=783725084602531862&permissions=1073605846&scope=bot)\n[Vote](https://wikipedia.com)")
     .setTimestamp()

     message.channel.send(embed);
     console.log("help.js was executed successfully");


}

module.exports.help = {
    name: "help"
};