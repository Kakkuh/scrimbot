const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel of the commander'
        });
    }

    async run(message,args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply("Liitytty onnistuneesti!");
                    })
            }
        }
        else
        {
            message.reply("Sinun pitää olla jollain puhekanavalla jotta voin liittyä sinne!");
        }
    }
}

module.exports = JoinChannelCommand;