const prefix = process.env.prefix || '?'
const status = `${prefix}help`;

module.exports = {
  bot: {
    info: {
      prefix: '?',
      token: 'MTIyNzI5ODY3NTM5NTY1Nzc1MA.Gp28A8.xjFCVHYhLtMtvgueVf166e0bc_DoC5cK8jHNp0',
      invLink: 'https://discord.com/api/oauth2/authorize?client_id=1227298675395657750&permissions=8&scope=bot%20applications.commands',
      privacy: '',
      terms: '',
    },
    presence: {
      name: status,
      type: 'LISTENING',
      url: 'https://twitch.tv/astrowashere'
    },
    credits: {
      developerId: '1227293237769670781',
      supportServer: 'https://discord.gg/6apg4D5EDP'
    },
  }
}
