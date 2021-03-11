const {Telegraf,Extra} = require('telegraf')
const bot = new Telegraf ('1623987566:AAFY2aXZNZerrxFumXELEnGim3XNYDNrZxM')
let fs = require('fs');
let data1 = ""
fs.readFile("input.txt","utf-8" ,(err, data)=>{
    data1=data
    if (err) {throw err}

    
})
bot.start(msg=>{
   if  (msg.update.message.from.first_name != undefined){
       msg.reply('😀 Assalomu alaykum <b><i>'+ msg.update.message.from.first_name+'</i></b> xush kellibsiz! ',Extra.HTML(true))
   }

})
bot.help(msg=>{
    msg.reply("🤖Bot haqida:\n<u>"+"✅Bu botda siz turli o`z bilimingizni test savollari orqali tekshirishingiz mumkin✅ </u> \n"+"👤Dasturchi:\n<em><b>Donaboyev Dilshodbek</b></em>",Extra.HTML(true))
})
let javobid = 0
bot.command('savol',msg=>{
    
    msg.reply('📝Savol_1 <em>\n'+data1+'</em>',Extra.HTML(true))
    javobid = msg.update.message.message_id
})

bot.on('message',msg=>{
    let admin = 814024760
    let chat  = msg.update.message.text
    let  name = msg.update.message.from.username
    let chatid = msg.update.message.from.id
   let msgid = msg.update.message.message_id
   let id = javobid+2
   console.log(javobid)
  console.log( msg.update.message.message_id)
 
  if (id==msgid){
    if (chat=='-12'){
    msg.telegram.sendMessage(chatid,'✅To`g`iri')
    msg.telegram.sendMessage(admin,'Yuboruvchi: @'+name+'--->>     <em>'+'✅To`g`iri'+'</em>',Extra.HTML(true))}
    else {
        msg.telegram.sendMessage(chatid,'🚫Noto`g`iri')
        msg.telegram.sendMessage(admin,'Yuboruvchi: @'+name+'--->>     <em>'+'✅To`g`iri'+'</em>',Extra.HTML(true))
    }}
    
    
})

























bot.launch({polling:true})
    
