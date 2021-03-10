const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

     const embed = new Discord.MessageEmbed()
     .setTitle("Info about Kohaku!")
     .setColor("RANDOM")
     .addField("⚠️WORK IN PROGRESS⚠️", "*Join the support server for updates*")
     .addField("Servers:", `${client.guilds.cache.size}`)
     .addField("Users:", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`)
     .addField("Uptime:", `${uptime}`)
     .addField("Ping:", `Latency - ${Math.floor(message.createdAt - message.createdAt)}ms \nAPI Latency - ${Math.round(client.ws.ping)}ms`)
     .addField("Links:", "[Support](https://discord.gg/VX5wHn3cFX)\n[Invite](https://discord.com/api/oauth2/authorize?client_id=783725084602531862&permissions=1073605846&scope=bot)\n[Vote](https://wikipedia.com)")
     .setTimestamp()

     message.channel.send(embed);
     console.log("info.js was executed successfully");


}

module.exports.help = {
    name: "info"
};