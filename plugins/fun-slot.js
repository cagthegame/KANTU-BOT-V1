/* CREDITOS: https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command, conn }) => {
let fa = `
ππ¨ππ§ πππ‘ π‘π π¨πππͺπππ£π©π π’ππ£ππ§π: 

ππππ’π₯π‘π€
*${usedPrefix + command} 50*`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])

let users = global.db.data.users[m.sender]
//let time = global.db.data.users[m.sender].lastwork + 30000
//if (new Date - users.lastwork < 30000) throw `*ππππππΌ ππ ${msToTime(time - new Date())} ππΌππΌ πΎπππππππΌπ πΌπππππΌππΏπ* π°\n\n*πΎπππ π½πΌπΎπ ππ ${msToTime(time - new Date())} ππ πΎπππππππ π½ππππππ* π°`

if (apuesta < 10) throw `π«ππππ πππ πππππππ ππ ππΜππππ ππ *10*`

if (users.exp < apuesta) {
throw `π΅π πππππππ ππππ πππππππ πππ, ππ ππππππππππ πππππππππππ πππ ππ πππ ππππ πππππππ ππΜπ ππππππππ`    
}
if (command == 'slot1') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*π½πππππ ππ ${msToTime(time - new Date())} π·πππ πππππππππ π ππππππππ πππ* π°`
users.lastslot = new Date * 1
    
let emojis = ["π", "β‘", "π"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `β¨ *ππͺπ π₯π§π€!! πππ¨ πππ£πππ€π¨ +${apuesta + apuesta} ππ­π₯*\n\nπ₯³ *`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `π *πΎππ¨π!!! π«πͺππ‘π«π π ππ£π©ππ£π©π*\n*π½π€π£π€ ππ +50 ππ­π₯*\n\nπ― *`
users.exp += 50
} else {
end = `πΏ *πππ¨ π₯ππ§ππππ€!! β -${apuesta} ππ­π₯*`
users.exp -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let s = `
π° | *RANURAS* | π° 
 ββββββββ
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ββββββββ
π° |   *SLOTS*   | π°`
await conn.sendHydrated(m.chat, `${s}\n\n${end}`, wm, null, md, 'π»ππ π³ππππ©ππ-π΄π«', null, null, [
['β‘ π¨ππππππ ππππ πππ', `${usedPrefix}slot1 ${apuesta}`],
['π π¨ππππππ πππ π³ππππππππ', `${usedPrefix}slot2 ${apuesta}`],
['π π¨ππππππ πππ π«πππππππ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}   


if (users.money < apuesta)  { 
throw `π΅π πππππππ ππππ πππππππ π³ππππππππ, ππ ππππππππππ πππππππππππ πππ ππ πππ ππππ πππππππ ππΜπ ππππππππ`    
}
if (command == 'slot2') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*π½πππππ ππ ${msToTime(time - new Date())} π·πππ πππππππππ π ππππππππ π³ππππππππ* π°*`
users.lastslot = new Date * 1
    
let emojis = ["π", "π", "π"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `β¨ *ππͺπ π₯π§π€!! πππ¨ πππ£πππ€π¨ +${apuesta + apuesta} π³ππππππππ*`
users.money += apuesta
} else if (a == b || a == c || b == c) {
end = `π *πΎππ¨π!!, π«πͺππ‘π«π π ππ£π©ππ£π©π*\n*π½π€π£π€ ππ +30 π³ππππππππ*`
users.money += 30
} else {
end = `πΏ *πππ¨ π₯ππ§ππππ€!! β -${apuesta} π³ππππππππ*`
users.money -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let ss = `
π° | *RANURAS* | π° 
 ββββββββ
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ββββββββ
π° |   *SLOTS*   | π°`
await conn.sendHydrated(m.chat, `${ss}\n\n${end}`, wm, null, md, 'π»ππ π³ππππ©ππ-π΄π«', null, null, [
['π π¨ππππππ ππππ πππ', `${usedPrefix}slot2 ${apuesta}`],
['β‘ π¨ππππππ πππ πππ', `${usedPrefix}slot1 ${apuesta}`],
['π π¨ππππππ πππ π«πππππππ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}

    
if (users.limit < apuesta) {  
throw `π΅π πππππππ ππππ πππππππ π«πππππππ, ππ ππππππππππ πππππππππππ πππ ππ πππ ππππ πππππππ ππΜπ ππππππππ`    
}
if (command == 'slot3') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*π½πππππ ππ ${msToTime(time - new Date())} π·πππ πππππππππ π ππππππππ π«πππππππ* π°`
users.lastslot = new Date * 1
    
let emojis = ["πͺ΅", "π£", "π"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `β¨ *ππͺπ π₯π§π€!! πππ¨ πππ£πππ€π¨ +${apuesta + apuesta} π«πππππππ*`
users.limit += apuesta
} else if (a == b || a == c || b == c) {
end = `π― *πΎππ¨π!!, π«πͺππ‘π«π π ππ£π©ππ£π©π*\n*π½π€π£π€ ππ +2 π«πππππππ*`
users.limit += 2
} else {
end = `πΏ *πππ¨ π₯ππ§ππππ€!! β -${apuesta} π«πππππππ*`
users.limit -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let sss = `
π° | *RANURAS* | π° 
 ββββββββ
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ββββββββ
π° |   *SLOTS*   | π°`
await conn.sendHydrated(m.chat, `${sss}\n\n${end}`, wm, null, md, 'π»ππ π³ππππ©ππ-π΄π«', null, null, [
['π π¨ππππππ ππππ πππ', `${usedPrefix}slot3 ${apuesta}`],
['β‘ π¨ππππππ πππ πππ', `${usedPrefix}slot1 ${apuesta}`],
['π π¨ππππππ πππ π³ππππππππ', `${usedPrefix}slot2 ${apuesta}`]
], m,)}
        
        
if (command == 'slot') {       
await conn.sendHydrated(m.chat, `*π¬ππππ ππ πππ ππππππππΜ ${apuesta}*`, wm, null, md, 'π»ππ π³ππππππ-π΄π«', null, null, [
['β‘ πππ', `${usedPrefix}slot1 ${apuesta}`],
['π π³ππππππππ', `${usedPrefix}slot2 ${apuesta}`],
['π π«πππππππ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}
        
if (command == 'apostar') {       
await conn.sendHydrated(m.chat, `*π¬ππππ ππ πππ ππππππππΜ ${apuesta}*`, wm, null, md, 'π»ππ π³ππππππ-π΄π«', null, null, [
['β‘ πππ', `${usedPrefix}slot1 ${apuesta}`],
['π π³ππππππππ', `${usedPrefix}slot2 ${apuesta}`],
['π π«πππππππ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}

//global.db.data.users[m.sender].lastwork = new Date * 1
       
}
await delay(10000)
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slot1', 'slot2', 'slot3']
handler.limit = 1
handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}
