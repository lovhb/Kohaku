const Discord = require("discord.js");
const urban = require("relevant-urban");


module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send("Please specify a word.");


    const error = new Discord.MessageEmbed()
    .setDescription("Error: Unknown word")
    .setColor("#FF0000")

    let result = await urban(args[0]).catch(e => {
        return message.channel.send(error);
    })

    const success = new Discord.MessageEmbed()
    .setColor("#171f36")
    .setTitle(result.word)
    .setURL(result.urbanURL)
    .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/UD_logo-01.svg/1200px-UD_logo-01.svg.png")
    .setDescription(`**Definition:** \n**${result.definition}** \n\n**Example:** \n**${result.example}**`)
    .addField("Rating", `👍 ${result.thumbsUp.toLocaleString()} | 👎 ${result.thumbsDown.toLocaleString()}`)

    return message.channel.send(success);
    };


module.exports.help = {
    name: "urban",
    description: "Defines the given word and returns result to user using Urban Disctionary.",
    usage: "+urban <word>",
    example: "+urban kohaku"
};