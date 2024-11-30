const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_44_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTkzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4M0h6QWxmZkxtckFqb0hvNUxKNDluWDNWdVA5MlBWbm5iYmttUjB4bTVzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6N3JvLWotalFCQ0kzNVpaVWUtY1BBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ1MTNjM2UwLTcyNTUtNDk1Yy05OGJlLTNmMDEwYzYxNzExY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAyNDksXG4gICAgICAxNSxcbiAgICAgIDEsXG4gICAgICA3MSxcbiAgICAgIDg1LFxuICAgICAgNjQsXG4gICAgICAyMTUsXG4gICAgICAyNDksXG4gICAgICAxODUsXG4gICAgICA5NSxcbiAgICAgIDE4OCxcbiAgICAgIDEwNixcbiAgICAgIDE3NSxcbiAgICAgIDE1OCxcbiAgICAgIDEwNyxcbiAgICAgIDI5LFxuICAgICAgMjQyLFxuICAgICAgMTk4LFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgNjcsXG4gICAgICAxNjcsXG4gICAgICAxOTksXG4gICAgICAxNDAsXG4gICAgICAxODUsXG4gICAgICAxMjYsXG4gICAgICAyMDAsXG4gICAgICA3LFxuICAgICAgNjcsXG4gICAgICA4NixcbiAgICAgIDcwLFxuICAgICAgMjAzLFxuICAgICAgNDgsXG4gICAgICAyNDAsXG4gICAgICAxNDcsXG4gICAgICAzNixcbiAgICAgIDIwNSxcbiAgICAgIDk5LFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDJLN1BFSFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzA4MTA5NzE6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NjUyNDUxNDM1NzMxOToyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNTFE0UGtGRVBIYnFib0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRsc1MvaXZIMDFRcHdnNCtCSkMyZUlQU3RTakVNUVFwY2dKYzRVYkdPaG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaklOdVQxNzAySFpWU2ZnUXVVK1czak1QbDQ3MFVDRGVLQ3JhUjlJbXpwa3ZvYmkzeDdqZ1c2RTBOUnpsMndLcm9XR2czUGM5V3FuVitRVGZGZC9SRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibTdwdHlkV2YrUHJXUmZHZFp1L0NBc1NYbjh0YnVjOUpsMERNc3FvOUdPNzVQVEJNN3BLQWdhcGNTRmFkbkk0bnRuT2EyaGdIVkFIR3pVQVRDWUFVZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3MDgxMDk3MToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI5MzEwNjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDR2VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNHZS5qc29uIjogIntcImtleURhdGFcIjpcIkorTmpTelhWR1Mvczl6d05KUG4zaFVhVnhFZGt4NjlEUVVMVmVJR2ZxR3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU5NzUxNTg0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyODA4OTAzMDc1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
