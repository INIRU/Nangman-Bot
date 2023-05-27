const {
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require('discord.js');

function createEmbed(interaction, type) {
  let returnValue = { content: null, embeds: null, components: null };
  if (type === 'game') {
    let gameList = [
      {
        name: '발로란트',
        emoji: '1111965449631047800',
      },
      {
        name: '리그오브레전드',
        emoji: '1111966415008829470',
      },
      {
        name: '오버워치',
        emoji: '1111965115558932550',
      },
      {
        name: '원신',
        emoji: '1111965440273555537',
      },
      {
        name: '피파',
        emoji: '1111984147460800633',
      },
      {
        name: '로블록스',
        emoji: '1111965118322966538',
      },
      {
        name: '스팀게임',
        emoji: '1111965120826982450',
      },
      {
        name: '모바일게임',
        emoji: '📱',
      },
      {
        name: 'PC게임',
        emoji: '🖥️',
      },
    ];
    let rowList = new Array();
    let buttonList = new Array();
    for (i in gameList) {
      value = gameList[i];
      buttonList.push(
        new ButtonBuilder()
          .setCustomId(value.name)
          .setLabel(value.name)
          .setEmoji(value.emoji)
          .setStyle(ButtonStyle.Primary)
      );
      if ((i % 4 == 0 && i != 0) || i == gameList.length - 1) {
        rowList.push(new ActionRowBuilder().addComponents(buttonList));
        buttonList = new Array();
      }
    }

    returnValue.content = '자신이 하는 게임 역할을 선택해주세요!';
    returnValue.components = rowList;
  } else {
    return false;
  }
  for (key in Object.keys(returnValue)) {
    if (returnValue[key] == null) {
      delete returnValue[key];
    }
  }

  return returnValue;
}

module.exports = {
  createEmbed,
};
