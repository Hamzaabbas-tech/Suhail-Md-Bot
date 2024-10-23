const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923091619697";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_23_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICA4MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1LFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUyLFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgNjIsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU4LFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE1LFxuICAgICAgICA0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNGRaZzdJeWJSbXd0MUw2Q1R1eS9qZUVlaXhnVDZjdkZweU45aUw1S2cwMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNDRrM2tEdXlSZ3VacHhxQ085a1Nid1wiLFxuICBcInBob25lSWRcIjogXCIwM2YyNTBlNi00MmQ2LTQ5MWYtOWE5OS0xNjE2MGUzODc4YWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgMjIzLFxuICAgICAgNzAsXG4gICAgICA4MCxcbiAgICAgIDE1NyxcbiAgICAgIDIxMyxcbiAgICAgIDEyLFxuICAgICAgMjU1LFxuICAgICAgNDksXG4gICAgICA5MyxcbiAgICAgIDIxMixcbiAgICAgIDQ4LFxuICAgICAgNDAsXG4gICAgICAxODcsXG4gICAgICA3MixcbiAgICAgIDI0MCxcbiAgICAgIDEzMCxcbiAgICAgIDQsXG4gICAgICAyMCxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDMxLFxuICAgICAgNjMsXG4gICAgICA2MCxcbiAgICAgIDE2OSxcbiAgICAgIDIyLFxuICAgICAgMTk3LFxuICAgICAgMjEsXG4gICAgICAxMDUsXG4gICAgICAyMjAsXG4gICAgICAxNTIsXG4gICAgICAyNTUsXG4gICAgICAxNjIsXG4gICAgICAxODgsXG4gICAgICAyMDUsXG4gICAgICAzMSxcbiAgICAgIDIxNCxcbiAgICAgIDIzNyxcbiAgICAgIDE4OCxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZUFA1MTRXOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDkxNjE5Njk3OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTU0OTA2MDkxMjc2NjU6NDFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dYbVBBRUVPdmg1TGdHR0I0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxblMwQTlZV2pmdlNaR29ud28zdHIwQzNqTXZNZ2lFVDZhdFBTeTlIVHc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhDSXpQalNGTVRHeGNPdHltSEJ1SFZEUzB4bCtTd2dhNEpDL2t4dDBlMWJyakt5SEZEMTgzZ3JrSVRkYm93NHc2QTZFMTRrbmpOOFhwbGxZZmNheUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjYrNnpJYmlsZ3h5d0E0T0VtVEkvV0htVENHWHRlOWdhS2Fjbk1ud3kyalFXa1hmQ2tXT2M4enhzNWV0c0g4Q2xtRkk0Rm1hemtyb0VHQ0h6ZGJjbkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5MTYxOTY5Nzo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NzA0MTgyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
