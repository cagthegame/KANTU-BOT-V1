global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^ðūðŠððĄ ððĻ ð§ððĻðŠðĄðĐðððĪ ðð/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.sendButton(m.chat, `ðð ðð ðððððððððĖ  ðððð ðððððððð`, wm, null, [['ððĪðĄðŦðð§ ð ððŠððð§ ð§Ū', `/math`], ['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ âïļ', '/menu']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gatacoins = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {
 
conn.sendButton(m.chat, `ð ðððĻðĨðŠððĻðĐð ððĪð§ð§ðððĐð\nððŠð ðĨð§ðĪ ð\nâââââââââââââââââ\nðððĢððĻðĐð ð *_${math.bonus}_* ðð\nâââââââââââââââââ\nð―ðĪðĢðĪ \nð *_$500_* ððĪðĄðððĪððĢðĻ\nâââââââââââââââââ\nððŠ ðŋððĢðð§ðĪ ðĩ *_$${gatacoins}_* ððĪðĄðððĪððĢðĻ`, wm, null, [['ððĪðĄðŦðð§ ð ððŠððð§ ð§Ū', `/math ${math.mode}`], ['ðððĢðŠ ððŠðððĪðĻ ðĄ', `.juegosmenu`]], m)
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `ðšð ðððððððð ððð ððððððððððððð\nðģð ððððððððð ðð *${math.result}`, wm, null, [['ððĪðĄðŦðð§ ð ððŠððð§ ð§Ū', `/math ${math.mode}`], ['ððĪðĨðĻ ð', `.top`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `âïļ ðđðððððððð ðððððððððð!!\nðŧð ðððððð *${global.math[id][2]}* ðķðððððððððððð ðą`, m)
}}}

await delay(5000)  
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
export default handler
const delay = time => new Promise(res => setTimeout(res, time))