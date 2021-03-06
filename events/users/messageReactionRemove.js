module.exports = async (client, messageReaction, user) => {

    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    
    if(messageReaction.message.id == '722927026196971561'){
        
        const amongus =  message.guild.roles.cache.get("758361265302929428");
        const apex = message.guild.roles.cache.get("722902017693188204");
        const arma3 = message.guild.roles.cache.get("722881479880999062");
        const barothrauma = message.guild.roles.cache.get("722895280277815328");
        const csgo = message.guild.roles.cache.get("722825998218821685");
        const farmingsimulateur = message.guild.roles.cache.get("722897262849556540");
        const gtav = message.guild.roles.cache.get("722883003864449085");
        const lol = message.guild.roles.cache.get("722826031714533467");
        const minecraft = message.guild.roles.cache.get("722826051725557823");
        const satisfactory = message.guild.roles.cache.get("722885950358945873");
        const r6 = message.guild.roles.cache.get("722825966833107006");
        const valorant = message.guild.roles.cache.get("722881488386916423");

        if (member.user.bot) return;
      
        if (messageReaction.partial) {
          await messageReaction.fetch();
          return;
        }
      
        if (["amongus","apex", "arma3", "barothrauma", "csgo", "farmingsimulateur", "gtav", "lol", "minecraft", "satisfactory", "r6", "valorant"].includes(emoji)) {
          console.log(`Jeu supprimé ${emoji} par ${member.user}`)
          switch (emoji) {
            case "amongus":
              member.roles.remove(amongus)
              break;
            case "apex":
              member.roles.remove(apex);
              break;
            case "arma3":
              member.roles.remove(arma3);
              break;
            case "barothrauma":
                member.roles.remove(barothrauma);
                break;
              case "csgo":
                member.roles.remove(csgo);
                break;
            case "farmingsimulateur":
                member.roles.remove(farmingsimulateur);
                break;
            case "gtav":
                member.roles.remove(gtav);
                break;
            case "lol":
                member.roles.remove(lol);
                break;
            case "minecraft":
                member.roles.remove(minecraft);
                break;
            case "satisfactory":
                member.roles.remove(satisfactory);
                break;
            case "r6":
                member.roles.remove(r6);
                break;
            case "valorant":
                member.roles.remove(valorant);
                break;
                
          };
        };

    }

}