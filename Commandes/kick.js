const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(`Tu n'as pas la permission d'exécuter cette commande !`);

    if (message.mentions.users.size === 0) {
        return message.channel.send(`Merci de mentionner un utilisateur !`);
    }

    let kick = message.guild.member(message.mentions.users.first());

    if (!kick) {
        return message.channel.send(`Utilisateur introuvable ! `);
    }

    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`Le bot n'a pas le permission d'effectuer cette commande.`);

    kick.kick().then(member => {

        message.channel.send(`${member.user.username} a bien été kick par ${message.author.username} !`);
        message.mentions.users.first().send(`Vous avez été expulsé du serveur **${message.guild.name}** par ${message.author.username}. \n Bonne journée.`).catch(console.error);
    });
};

module.exports.help = {
    name: "kick"
};