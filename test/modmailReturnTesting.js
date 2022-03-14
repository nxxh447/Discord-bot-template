const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./assets/config.json");

client.on("ready", () => client.user.setActivity(config.statusMsg, { type: config.statusType }));
client.on("messageCreate", async (msg) => {
    const args = msg.content.slice((config.prefix).length).split(" ");
    const cmd = args.shift().toLowerCase();
  
    if (msg.author.bot) return;
    else {
        if (msg.guild) {
            if (cmd === "test") {
                return msg.reply(
                   new MessageEmbed()
                       .setColor("#000000")
                       .setDescription("`Test command...`")
                );
            }
        }
    }
});

client.login(config.token);
