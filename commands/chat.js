const fetch = require("node-fetch");

module.exports.run = (client, message, args) => {
    let mesg = args.join(" ");
    if (!mesg) return message.channel.send("Please say something.");

    fetch (`http://api.brainshop.ai/get?bid=154165&key=CyxEL8OS6gbOY9RX&uid=2&msg=${encodeURIComponent(mesg)}`)
        .then(res => res.json())
        .then(data => {
        message.channel.send(data.cnt).catch(err => console.log(err));
    });
    console.log("chat.js was executed successfully");
}

module.exports.help = {
    name: "chat"
};
