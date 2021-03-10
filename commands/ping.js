const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
    const msg = await message.channel.send(`:ping_pong:Pinging...`);

            msg.edit(`:ping_pong: Pong\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
            console.log("ping.js was executed successfully");
}

module.exports.help = {
    name: "ping"
};
