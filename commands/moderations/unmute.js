const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if (!user.roles.cache.has(muteRole.id)) return message.reply("l'utilisateur mentionné n'est pas muté!");
  user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> n'est plus muté!`);

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor("#ffa500")
    .setDescription(`**Action**: unmute`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    
  client.channels.cache.get('605905940772028436').send(embed);
};

module.exports.help = {
  name: "unmute",
  aliases: ['unmute'],
  description: "Unmute un utilisateur",
  cooldown: 10,
  usage: '<@user>',
  adminCommand: false,
  permissions: ['563780818233720832','563780818233720832'],
  args: true
};
