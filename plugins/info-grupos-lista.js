let handler = async (m, { conn }) => { 
let txt = ''
let vn = './media/listas.mp3'
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\nπ ${await conn.getName(jid)}\nβ¦ ${jid} \n${chat?.metadata?.read_only ? 'β *No estoy aquΓ­*' : 'β *Si estoy aquΓ­*'}\n\n`
m.reply(`*${lb} π¬πππ ππ πππππ ππππππ:*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://github.com/elrebelde21/The-LoliBot-MD', 'π»ππ π³ππππ©ππ-π΄π«', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '.menu'],
['πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ β', '/cuentasgb']
], m,)
conn.sendFile(m.chat, vn, 'listas.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler
