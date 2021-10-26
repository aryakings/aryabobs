let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Dana [089531660936]
│ • Tri [089531660936]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/Aryakings
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
