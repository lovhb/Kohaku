const Discord = require("discord.js");
const talkedRecently = new Set();

module.exports.run = async (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 5 seconds before using this command again!");
} else {
        if(!args[1]) return message.reply("Please ask a full question");
            const answers = ["Yes", "No", "I don't know", "Ask again later", "Maybe"];

            const results = Math.floor((Math.random() * answers.length));
            const questions = args.slice(1).join(" ");

            const ballembed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag)
            .setColor("RANDOM")
            .addField("Question", questions)
            .addField("Answer", answers[results]);

    message.channel.send(ballembed);

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 5000);
    console.log("8ball.js was executed successfully");
}
}

module.exports.help = {
    name: "8ball"
};