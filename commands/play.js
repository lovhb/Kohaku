const Discord = require('discord.js');
const client = new Discord.Client();

const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;
const trackembed = new Discord.MessageEmbed()
    .setTitle(`Now playing ${track.name}`)
    .setDescription(`Requested by ${track.requestedBy}`)
client.player.on('trackStart', (message, track) => message.channel.send("trackembed"));

client.on("message", async (message) => {

  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
});

module.exports.run = async (client, message) => {
  client.player.play(message, args[0]);
  };
  
  module.exports.help = {
    name: "play"
  };