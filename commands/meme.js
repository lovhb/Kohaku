const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const talkedRecently = new Set();

module.exports.run = async (client, message, args) => {
    const subReddits = ["dank", "dankmemes", "funny", "meme", "memes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 5 seconds before using this command again!");
} else {
    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`Meme from /r/${random}`)
    .setURL(`https://reddit.com/${random}`)
    .setColor("RANDOM")

    message.channel.send(embed);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 5000);
    console.log("meme.js was executed successfully");
}
}

module.exports.help = {
    name: "meme"
};