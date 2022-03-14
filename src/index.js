const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const config = require("./assets/config.json");
const cmds = require("./assets/cmds.json");

client.on("ready", () => client.user.setActivity(config.statusMsg, { type: config.statusType }));
client.ong("messageCreate", (msg) => {
    const hasCommand = (v) => msg.content.includes(cmds[v]);
    const mentionsBot = () => msg.mentions(client.user.id);

    if (mentionsBot) {
        if (hasCommand('1')) {
            let avEmbed = new MessageEmbed()
                .setTitle(msg.author.tag)
                .setTimestamp().setColor("#000")
                .setImage(msg.author.displayAvatarURL({ dynamic: true, format: "jpg", size: 6000 }));
            return msg.reply({ embeds: [avEmbed] });
        }
    }
});

client.login(config.token);
