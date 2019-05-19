const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`Tu n'as pas la permission d'exécuter cette commande !`);

    if (message.mentions.users.size === 0) {
        return message.channel.send(`Merci de mentionner un utilisateur !`);
    }

    let ban = message.guild.member(message.mentions.users.first());

    if (!ban) {
        return message.channel.send(`Utilisateur introuvable ! `);
    }

    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`Le bot n'a pas le permission d'effectuer cette commande.`);

    ban.ban().then(member => {

        message.channel.send(`${member.user.username} a bien été banni par ${message.author.username} !`);
        message.mentions.users.first().send(`Vous avez été banni par ${message.author.username}. \n Bonne journée.`).catch(console.error);
    });
};

module.exports.help = {
    name: "ban"
};