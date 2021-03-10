const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const db = require("quick.db");

client.db = require("quick.db");
client.commands = new Discord.Collection();
client.cooldown = new Discord.Collection();
client.config = {
    TOKEN: "Nzk1MzY3MjI5MTQyMDczMzc0.X_IVdA.LImfvaVR-uqltYyJwmwqT2mFw5Q",
    prefix: "++",
    cooldown: 15000
};

// Activity
const activities_list = [
    `with ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users!`, 
    `in ${client.guilds.cache.size} servers!`,
    "dsc.lol/kohaku", 
    "in the cloud", 
    "with JavaScript"
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

// Load Commands
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
    });
});

// Events
client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}. Currently used in ${client.guilds.cache.size} servers by ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`);
});

client.on("error", console.error);

client.on("warn", console.warn);

client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;
    // Handle XP
    xp(message);
    // command handler
    if (!message.content.startsWith(client.config.prefix)) return;
    let args = message.content.slice(client.config.prefix.length).trim().split(" ");
    let command = args.shift().toLowerCase();
    let commandFile = client.commands.get(command);
    if (!commandFile) return;
    commandFile.run(client, message, args);
});

function xp(message) {
    if (!client.cooldown.has(`${message.author.id}`) || !(Date.now() - client.cooldown.get(`${message.author.id}`) > client.config.cooldown)) {
        let xp = client.db.add(`xp_${message.author.id}`, 1);
        let level = Math.floor(1 * Math.sqrt(xp));
        let lvl = client.db.get(`level_${message.author.id}`) || client.db.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = client.db.set(`level_${message.author.id}`,level);
            const levelupembed = new Discord.MessageEmbed()
            .addField(`Level up!`, `${message.author.toString()} advanced to level 5! <a:rankup:795390086199902218>`)
            .setColor("RANDOM")
            message.channel.send(levelupembed);
        }
        client.cooldown.set(`${message.author.id}`, Date.now());
    }
}

client.login(client.config.TOKEN);
