import axios from "axios"  
import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command, conn, text}) => {

if (command == 'chica') {
let pp = 'https://source.unsplash.com/featured/?girl,woman'
conn.sendHydrated(m.chat, wm, null, pp, md, 'π»ππ π³ππππππ-π΄π«', null, null, [
['π» πΊππππππππ', `.chica`],
['β¨ πͺππππ', `.chico`],
['π½ππππ ππ ππππΜΜ βοΈ', '/menu']
], m,)}
  
  
if (command == 'chico') {
 let pp = 'https://source.unsplash.com/featured/?boy,man'
conn.sendHydrated(m.chat, wm, null, pp, md, 'π»ππ π³ππππππ-π΄π«', null, null, [
['π» πΊππππππππ', `.chico`],
['β¨ πͺππππ', `.chica`],
['π½ππππ ππ ππππΜ βοΈ', '/menu']
], m,)}  

  
if (command == 'clima') {
 if (!text) return conn.reply(m.chat, `${mg}π¬ππππππ ππ πππΜπ π ππππππ ππππ πππππ ππ πππππ\nπ¬ππππππ\n*${usedPrefix + command} Ecuador Quito*`, m)  
//const clima = await axios.get(`https://es.wttr.in/${text}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)

let pp = `https://es.wttr.in/${text}.png`
conn.sendHydrated(m.chat, `β¨ *AQUΓ TIENE EL CLIMA EN ESPAΓOL*`, wm, pp, md, 'π»ππ π³ππππππ-π΄π«', null, null, [
['π ππ£ππ‘ππ¨π π«ππ§π¨ππ€π£', `.clima2 ${text}`],
['π πππ§π¨Γ£π€ ππ’ ππ€π§π©πͺππͺΓͺπ¨', `.clima3 ${text}`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺ βοΈ', '/menu']
], m,)}  
  
  
if (command == 'clima2') {
 if (!text) return conn.reply(m.chat, `${mg}π¬ππππππ ππ πππΜπ π ππππππ ππππ πππππ ππ πππππ\nπ¬ππππππ\n*${usedPrefix + command} Ecuador Quito*`, m)  

let pp = `https://en.wttr.in/${text}.png`
conn.sendHydrated(m.chat, `β¨ *π¨ππΜ ππππ*`, wm, pp, md, 'π»ππ π³ππππππ-π΄π«', null, null, [
['π πππ§π¨ππ€π£ ππ¨π₯ππ£π€π‘', `.clima ${text}`],
['π πππ§π¨Γ£π€ ππ’ ππ€π§π©πͺππͺΓͺπ¨', `.clima3 ${text}`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜβοΈ', '/menu']
], m,)}  
  
  
if (command == 'clima3') {
 if (!text) return conn.reply(m.chat, `${mg}π¬ππππππ ππ πππΜπ π ππππππ ππππ πππππ ππ πππππ\nπ¬ππππππ\n*${usedPrefix + command} Ecuador Quito*`, m)  

let pp = `https://pt.wttr.in/${text}.png`
await delay(5000)
conn.sendHydrated(m.chat, `β¨ *π¨ππΜ ππππ*`, wm, pp, md, 'π»ππ π³ππππππ-π΄π«', null, null, [
['π πππ§π¨ππ€π£ ππ¨π₯ππ£π€π‘', `.clima ${text}`],
['π ππ£ππ‘ππ¨π π«ππ§π¨ππ€π£', `.clima2 ${text}`],  
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)}  
   
} 
handler.help = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
handler.command = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
export default handler
const delay = time => new Promise(res => setTimeout(res, time))