const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/N9sJX9Q/IMG-20240923-WA0005.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HII. I AM QUEEN THARU WHATSAPP BOT OWNER BY CHAMI",
};