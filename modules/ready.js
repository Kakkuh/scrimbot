const Discord = require("discord.js")


module.exports = bot => {
    console.log(`${bot.user.username} on paikalla`)

    let statuses = [
        `${bot.guild.size}!`,
        "!help"
        `over ${bot.users.size} käyttäjää!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

}