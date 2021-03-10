const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const talkedRecently = new Set();

module.exports.run = async (client, message, args) => {
    const subReddits = ["aww", "cute", "cats"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 5 seconds before using this command again!");
} else {
    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`Cuteness from /r/${random} :3`)
    .setURL(`https://reddit.com/${random}`)
    .setColor("RANDOM")

    message.channel.send(embed);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 5000);
    console.log("cute.js was executed successfully");
}
}

module.exports.help = {
    name: "cute"
};