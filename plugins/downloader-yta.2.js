import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*ππͺπ ππ¨π©π ππͺπ¨ππππ€π€ ππ£ππ§ππ¨π ππ‘ ππ€π’ππ£ππ€ π’πΜπ¨ ππ‘ ππ£π‘πππ/π‘ππ£π  πππ‘ ππ€πͺππͺππ*'
await m.reply(`*_β³ππ ππ¨π©πΜ π₯π§π€πππ¨ππ£ππ€ π¨πͺ ππͺπππ€...β³_*`)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
let cap = `*β­βγ *${wm}* γββ±-\nβπ₯ Κα΄α΄α΄α΄Κα΄ α΄Κ π₯*\nβββββββΒ«β’Β»ββββββ\nββ *α΄Ιͺα΄α΄Κα΄:* ${ttl}\nββ *α΄α΄sα΄:* ${size}\nβ°βββββββββββββββββ`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)   
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `**β­βγ *${wm}* γββ±-\nβπ₯ Κα΄α΄α΄α΄Κα΄ α΄Κ π₯*\nβββββββΒ«β’Β»ββββββ\nββ *α΄Ιͺα΄α΄Κα΄:*  ${n}\nββ *α΄α΄sα΄:* ${n3}\nβ°ββββββββββββββββββ`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*[β] π΄πππΎπ π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π³π΄ππ²π°ππΆπ°π π΄π» π°ππ³πΈπΎ*', m)}
}}
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
handler.limit = 4
export default handler
