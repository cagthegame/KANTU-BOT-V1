global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
await delay(6000)
let mat =`ββ±ππ£ππ€π§π’ππππ€Μπ£β±β\n\nβ¨ ππͺπππ πͺπ¨ππ§ π‘π€π¨ ππ€π©π€π£ππ¨ π€ ππ¨ππ§πππΜ π‘π ππππππͺπ‘π©ππ

π΅ππππ πππ ππππππππππ
${Object.keys(modes).join('  |  ')}

π¬ππππππ
${usedPrefix + command} noob
${usedPrefix + command} impossible2

πΌ π΄πππππππ ππΜπ ππππππππππ πππππ ππππππππππ
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['π πππππ‘', `${usedPrefix + command} easy`], 
['π πΏππππππ‘', `${usedPrefix + command} hard`], 
['π€ ππ­π©π§ππ’π€', `${usedPrefix + command} extreme`]], m)
  
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['π πππππ‘', `${usedPrefix + command} easy`], 
['π πΏππππππ‘', `${usedPrefix + command} hard`], 
['π€ ππ­π©π§ππ’π€', `${usedPrefix + command} extreme`]], m) 
  
let id = m.chat
if (id in global.math) return conn.reply(m.chat, `π»πππππΜπ πππ πππππππππ πππ πππππππππ ππ ππππ ππππ!!`, global.math[id][0])
//let ii = global.db.data.users[m.sender].limit += 10 math.dia
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `β­βγ *${wm}* γββ±
βπΎπͺππ‘ ππ¨ π§ππ¨πͺπ‘π©πππ€ ππ *${math.str} = ?*
ββββββββββββββββββ
βππππ’π₯π€
βπ§­ *${(math.time / 1000).toFixed(0)} ππππππππ*
ββββββββββββββββββ
βπππ¨π₯π€π£ππ π ππ¨π©π π’ππ£π¨πππ π? πππ£π 
βπ *${math.bonus} ππ*
β°ββββ° π  ${vs} β±ββββα*`, m),
math, 4,
  
await conn.sendHydrated(m.chat, `β¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈβ¬οΈ`, `π«π ππ πππππππ πππ ππππππ πππ ππ πππππππππ`, null, md, 'π»ππ π³ππππππ-π΄π«', null, null, [ 
['ππ€π₯π¨ π', `${usedPrefix}top`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', `${usedPrefix}menu`]
], m), math, 4,
  
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `πΊπ πππππ ππ ππππππ!!\nπ³π πππππππππ ππ *${math.result}* *${math.result}*`, wm, null, [['ππ£π©ππ£π©ππ§ ππ π£πͺππ«π€', `${usedPrefix + command} ${math.mode}`], ['πππ£πͺ ππͺπππ€π¨ π‘', `/juegosmenu`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.register = true
handler.command = /^math|mates|matemΓ‘ticas/i

export default handler
const delay = time => new Promise(res => setTimeout(res, time))

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 30], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 50],
medium: [-40, 40, -20, 20, '*/+-', 40000, 200],
hard: [-100, 100, -70, 70, '*/+-', 60000, 500],
extreme: [-999999, 999999, -999999, 999999, '*/', 25000, 2500],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 20000, 5500],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 15000, 8500]
} 

let operators = {
'+': '+',
'-': '-',
'*': 'Γ',
'/': 'Γ·'
}

// XP
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
