const Discord = require('discord.js');

module.exports.run = async (client, message, args, ops) => {
	if (!message.member.voiceChannel) return ("Connectes toi dans un channel pour effectuer cette commande !");
	if (!message.guild.me.voiceChannel) return ("Je suis déjà dans un channel");
	if (!message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channeL.send("Tu n'es pas connecté dans le même channel.");
	message.guild.me.voiceChannel.leave().catch();
};

module.exports.help = {
	name: "play"
};
