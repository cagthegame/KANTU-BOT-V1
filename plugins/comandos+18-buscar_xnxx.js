//Creditos https://github.com/BrunoSobrino
import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ β οΈ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar*'
await delay(5000)
if (!text) throw `*ππͺπ ππͺπ¨ππ? \nππ¨ππ§ ππ‘ ππ€π’ππ£ππ€ ππ ππ¨π©π π’ππ£ππ§π\nππππ’π₯π‘π€\n${usedPrefix + command} Con mi prima*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `πͺππππππππ πππππππππππ: ${args.join(" ")}`
const sections = [{
title: `β‘ββ’β€ββ£ββββ’`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'π¬ππππ π ππππππππ ππππππ',
title: " β€ πͺππππππππ ππππππππππ",
buttonText: "β€ πΉπππππππππ",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: 'β§ πΊπππππππππ ππππ π·πππ πππππ πππππππππ ππ ππΜπππ β§', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*πΌππ, ππ ππ ππππΜ ππ ππππππππ€‘, ππππππ ππ ππππππππ ππππππ*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
handler.level = 9
handler.limit = 6
handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))