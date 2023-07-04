const version = require("@adiwajshing/baileys/package.json").version
global.language = "id"
global.nomerOwner ="6285707731622"
global.nomerOwner2 = "6283136069020"
global.runWith = "Replit"
global.ownerName = "FiuL"
global.botName = "AKIYAMA-BOT" 
global.sessionName ="session"
global.setmenu ="document"
global.docType = "BY IG @syafiulofficial"
global.Qoted = "ftoko"
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.prefa = "."
global.fake = botName
global.Console = false
global.autorespon = false
global.copyright = `Baileys ${version}`
global.baileysVersion = `Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="syafiulofficial"
global.packName = "IG:"
global.authorName = "@syafiulofficial"
global.replyType = "mess"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = false
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
global.fileStackApi ="" //daftar di filestack
global.anonymousImg = "https://telegra.ph/file/1446ae19e40a769e94248.jpg"
global.botImg = "https://res.cloudinary.com/digtxl0uh/image/upload/v1688413965/tmp_dqzkfn.jpg"
global.fakegifImg ="https://res.cloudinary.com/digtxl0uh/image/upload/v1688427082/tmp_rtq9yb.jpg"
global.quotedImg = "https://res.cloudinary.com/digtxl0uh/image/upload/v1688427191/tmp_xec0cv.jpg"
global.replyImg = "https://res.cloudinary.com/digtxl0uh/image/upload/v1688427406/tmp_hlsean.jpg"
global.thumbImg ="https://res.cloudinary.com/digtxl0uh/image/upload/v1688427406/tmp_hlsean.jpg"
global.thumbnaildokumenImg = "https://res.cloudinary.com/digtxl0uh/image/upload/v1688427571/tmp_nnwbuo.jpg"
global.videoMp4 = "https://telegra.ph/file/fcc8a8d9ea62088fb9f4b.mp4"
global.webImg = "https://res.cloudinary.com/digtxl0uh/image/upload/v1688427406/tmp_hlsean.jpg"
global.gcounti = {
'prem' : 60,
'user' : 20
} 






const fs = require("fs");
const { color } = require("./lib/color");
//const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})