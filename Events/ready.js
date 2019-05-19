module.exports = async (client) => {

    client.user.setPresence({
        game: {
            name: "Page d'aide: .help"
        }
    });
}