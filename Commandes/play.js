const Discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args, ops) => {

    if (!message.member.voiceChannel) return message.channel.send("Connectes toi dans un channel pour effectuer cette commande !");
    
    if (message.guild.me.voiceChannel) return message.channel.send("Je suis déjà dans un channel.");
    
    if(!args[0]) return message.channel.send("Merci d'indiquer le lien de la musique.");
    
    let validate = await ytdl.validateURL(args[0]);
    
    if (!validate) return message.channel.send("Merci d'indiquer une url **VALIDE**.");
    
    let info = await ytdl.getInfo(args[0]);
    
    let connect = await message.channel.voiceChannel.join().catch();
    
    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly'}));
    
    message.channel.send("En cours: ${info.title}");
};


module.exports.help = {
    name: "play"
};
