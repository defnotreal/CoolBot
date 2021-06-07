const fs = require('fs');

module.exports =
{
    name: 'quoterules',
    description: 'List the rules to follow when requesting quotes.',
    ownerOnly: false,
    cooldown: 1,
    execute(bot, msg, args)
    {
        var rules = fs.readFileSync('/home/coolbot/Desktop/CoolBot/quoterules.txt', 'utf8');
        msg.channel.send(rules);
    },
};