import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `ðĪððē ðŊððð°ðŪðŋâïļ\n ðĻððēðŋ ðð ðĄð ðĻðððŠðððĢðĐð ðĒððĢðð§ð\nðð·ðēðšð―ðđðž\n*${usedPrefix + command} Loli*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
â°âąðâą *ðŽĖðððð* âąðâąâŪ`.trim(), m)
  
  await delay(5000) 
  conn.sendHydrated(m.chat, `âĻ ðđððððððððð: ${text}`, `ðððĢðĐðð§ððĻðĐ | ${wm}`, null, md, 'ðŧðð ðģððððĐðð-ðīðŦ', null, null, [
['ð ððððŠðððĢðĐð', `/pinterest ${text}`],
['ð ððĪðĪððĄð ', `#image ${text}`],
['ð ðððĢðŠ', `.menu`],  
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
handler.money = 100
handler.register = true
handler.level = 1
export default handler
const delay = time => new Promise(res => setTimeout(res, time))