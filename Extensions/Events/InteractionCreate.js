const {
  Events,
  ChannelType,
  PermissionsBitField,
  EmbedBuilder,
} = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  once: false,
  async execute(interaction) {
    if (interaction.user.bot) return;
    if (interaction.channel.type == ChannelType.DM) return;

    /**Slash Commands Input */
    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);

      if (!command) {
        console.error(
          `${interaction.commandName}는 등록되지 않은 명령어 입니다.`
        );
        return;
      }

      await command.execute(interaction);
    }

    /**Button Events */
    if (interaction.isButton()) {
      const role = interaction.guild.roles.cache.find(
        (r) => r.name === interaction.customId
      );

      if (role == null) {
        return;
      }

      if (!interaction.member.roles.cache.some((r) => r === role)) {
        await interaction.member.roles.add(role);
        await interaction.reply({
          content: `${role} 역할이 지급되었습니다.`,
          ephemeral: true,
        });
      } else {
        await interaction.member.roles.remove(role);
        await interaction.reply({
          content: `${role} 역할이 제거되었습니다.`,
          ephemeral: true,
        });
      }
    }
  },
};
