import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `๐ค๐ฆ๐ช๐ ๐๐จ๐ฉ๐ ๐๐ช๐จ๐๐๐๐ค?๐ค ๐๐ฃ๐๐ง๐๐จ๐ ๐๐ก ๐ฃ๐ค๐ข๐๐ง๐/๐ฉ๐๐ฉ๐ช๐ก๐ค ๐๐ ๐๐๐ฃ๐๐๐ค๐ฃ\n\n*โโ ๐๐๐๐ข๐ฅ๐ก๐ค:\n#play lgante - bar*`
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `๐ *๐ง๐ถ๐๐๐น๐ผ:*: ${title}\n๐ *๐ฃ๐๐ฏ๐น๐ถ๐ฐ๐ฎ๐ฐ๐ถ๐ผ๐ป:* ${published}\n๐ *๐ฉ๐ถ๐๐๐ฎ๐:* ${views}`
const buttons = [{buttonId: `#menu`, buttonText: {displayText: '๐ Menu ๐'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*แดษดแด ษชแดษดแดแด แดแดแดษชแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})

if (command == 'play2') {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let vid = await jsonn.result.video
let capt = `๐ *๐ง๐ถ๐๐๐น๐ผ:*: ${title}\n๐ *๐ฃ๐๐ฏ๐น๐ถ๐ฐ๐ฎ๐ฐ๐ถ๐ผ๐ป:* ${published}\n๐ *๐ฉ๐ถ๐๐๐ฎ๐:* ${views}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '๐  ๐ผ๐๐ ๐๐๐๐๐๐๐๐๐๐'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*แดษดแด ษชแดษดแดแด video, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `๐ฐ ๐ผ๐ฆ๐ช๐ ๐๐จ๐ฉ๐ ๐ฉ๐ช ๐ซ๐๐๐๐ค`, m)}
} catch (e) {
m.reply('*[โ๐๐ฃ๐๐คโ] ERROR, SERVIDOR CAIDO, INTENTA DEL NUEVO POR FAVOR*')
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2']
export default handler
