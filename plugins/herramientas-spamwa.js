let handler = async (m, { conn, text, usedPrefix, command }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}š°šššššš šš ššĢšššš šššš šš šššš\n*ā ${usedPrefix + command} numero|texto|cantidad*\nš¬šššššš\n*ā ${usedPrefix + command} 999999999999|Holaaa|35*`
if (!pesan) throw `${mg}š°šššššš šš ššĢšššš šššš šš šššš\n*ā ${usedPrefix + command} numero|texto|cantidad*\nš¬šššššš\n*ā ${usedPrefix + command} 999999999999|Holaaa|35*`
if (jumlah && isNaN(jumlah)) throw `š³š šššššššš šššš šš šš šš ššĢšššš šš ššš šš šš ššššĢ šššš\n*ā ${usedPrefix + command} numero|texto|cantidad*\nš¬šššššš\n*ā ${usedPrefix + command} 999999999999|Holaaa|35*`
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 5) throw `${fg}š“šĢšššš *5* ššššššš šššš ššššš šššš`
await m.reply(`${eg}š¬š šššš šš šššššĢ *${fixedJumlah}* š½šššš š *${nomor}*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
await delay(10000)
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.level = 9
handler.limit = 80
handler.register = true
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))