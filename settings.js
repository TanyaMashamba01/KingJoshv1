//
//project_name : KingJoshv1 
// @author : Joshuamambo
// @youtube : https://www.youtube.com/@Joshuamambo1
// @instagram  : heyits_tylor
// @telegram : Joshking01
// @github : Joshuamambo1
// @tiktok : Joshuamambo1
// @whatsapp : +263716729222
//*
//*


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//owmner v card
//________________________________________________________________________________________________________
global.ytname = process.env.YT_NAME || "YT: Joshuamambo1" //ur yt chanel name
//________________________________________________________________________________________________________
global.socialm = process.env.MEDIA || "GitHub: tanyaMashamba01" //ur github or insta name
//________________________________________________________________________________________________________
global.location = process.env.GL_INFO || "Zimbabwe, Gweru, MKOBA 18" //ur location
//________________________________________________________________________________________________________

//new
//________________________________________________________________________________________________________
global.botname = process.env.BOT_NAME || 'KingJoshv1' //ur bot name
//________________________________________________________________________________________________________
global.ownernumber = process.env.SUDO || '263716729222' //ur owner number
//________________________________________________________________________________________________________
global.ownername = process.env.SUDO_NAME || 'KingJosh' //ur owner name
//________________________________________________________________________________________________________
global.websitex = process.env.YT_LINK || "https://youtube.com/@Joshuamambo1"
//________________________________________________________________________________________________________
global.wagc = process.env.GL_PUSH || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="
//________________________________________________________________________________________________________
global.themeemoji = process.env.GL_EMOJI || '🌚'
//________________________________________________________________________________________________________
global.wm = process.env.GL_WM || "KingJoshv1"
//________________________________________________________________________________________________________
global.botscript = process.env.GL_SC || 'wa.me/26371679222' //script link
//________________________________________________________________________________________________________
global.packname = process.env.PACK_NAME || "KingJosh"
//________________________________________________________________________________________________________
global.author = process.env.AUTHER_NAME || "V1"
//________________________________________________________________________________________________________
global.creator = process.env.GL_DEVS || "26371629222@s.whatsapp.net"
//________________________________________________________________________________________________________
global.xprefix = process.env.PREFIX || '/'
//________________________________________________________________________________________________________
global.premium = process.env.GL_VIP || ["263777756184"] // Premium User
//________________________________________________________________________________________________________
global.hituet = 0
//________________________________________________________________________________________________________

//bot sett
//________________________________________________________________________________________________________
global.typemenu = process.env.MENU_DESIGN || 'v2' // menu type 'v1' => 'v2' => Only v1 is supported on iPhones
//________________________________________________________________________________________________________
global.typereply = process.env.REPLY_TYPE || 'v2' // reply type 'v1' => 'v3'
//________________________________________________________________________________________________________
global.autoblocknumber = process.env.AUTO_BAN || '' //set autoblock country code
//________________________________________________________________________________________________________
global.antiforeignnumber = process.env.AUTO_BLOCK || '' //set anti foreign number country code
//________________________________________________________________________________________________________
global.welcome = process.env.WELCOME_MSG || false //welcome/left in groups
//________________________________________________________________________________________________________
global.anticall = process.env.GL_NOCALL || false //bot blocks user when called
//________________________________________________________________________________________________________
global.autoswview = process.env.AUTO_STATUS_SEEN || false //auto status/story view
//________________________________________________________________________________________________________
global.adminevent = process.env.ANNOUNCE_MSG  || false //show promote/demote message
//________________________________________________________________________________________________________
global.groupevent = process.env.GROUP_ANNOUNCE_MSG || false //show update messages in group chat
//________________________________________________________________________________________________________
//________________________________________________________________________________________________________

//msg
global.mess = {
	limit: '_*Your limit is up!*_',
	nsfw: '_*Nsfw is disabled in this group, Please tell the admin to enable*_',
    done: '_*Done ✓*_',
    error: '_*I am having error to execute this*_',
    success: '_*Here you go!*_',
    owner: '_*Apologies, only my owner can use this command!*_',
    group: '_*This feature becomes available when you use it in a group!"_',
    admin: '_*You’ll unlock this feature with me as an admin!*_',
    notadmin: '_*This feature will work once you become an admin. A way of ensuring order!*_'
}
//thumbnail
global.thumb = fs.readFileSync('./KingJoshMedia/theme/JoshKing.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
