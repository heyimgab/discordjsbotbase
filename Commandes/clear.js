const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission`).catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Je n'ai pas la permission d'effectuer cette tâche`).catch(console.error);

    if(!args[0]) return message.channel.send(`Vous devez spécifier un nombre de messages à supprimer`);

    if(isNaN(args[0])) return message.channel.send(`Ce n'est pas un nombre`);

    message.channel.bulkDelete(args[0]);

    message.channel.send(`${args[0]} messages supprimés !`);
};

module.exports.help = {
    name: "clear"
}
