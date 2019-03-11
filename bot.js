const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: false });
bot.on(`ready`, () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setStatus("online")
  });
  bot.on("message", async message => {
 
  let prefix = `$`
  let messageArray = message.content.split(" ");
  let msg = message;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if(!message.content.startsWith(prefix)) return;
if(message.content.startsWith(prefix + "setlistening")){
let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع الكلام الذي تريده**");
if(hargs.length < 1 || hargs.length > 50) return message.reply("مع الأسف اخوي ... م ينفع يكون اكثر من 50 حرف");
message.delete();
bot.user.setActivity(hargs, {
type: "LISTENING"
});
message.channel.send(`**Done! it's now Listening To:** ${hargs}`)
}
 
if(message.content.startsWith(prefix + "setwatching")){
let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع الكلام الذي تريده**");
if(hargs.length < 1 || hargs.length > 50) return message.reply("**مع الأسف  ... م ينفع يكون اكثر من 50 حرف**");
message.delete();
bot.user.setActivity(hargs, {
type: "WATCHING"
});
message.channel.send(`**Done! it's now Watching:** (${hargs})`)
}
 
if(message.content.startsWith(prefix + "setstreaming")){
 let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع الكلام الذي تريده**");
if(hargs.length < 1 || hargs.length > 50) return message.reply("**مع الأسف  ... م ينفع يكون اكثر من 50 حرف**");
message.delete();
bot.user.setActivity(hargs, {
type: "STREAMING",
             url: "https://www.twitch.tv/Azoqzmj"
});
message.channel.send(`**Done! It's now Streaming:** ${hargs}`)
}
 
if(message.content.startsWith(prefix + "setplaying")){
let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع الكلام الذي تريده**");
if(hargs.length < 1 || hargs.length > 50) return message.reply("**مع الأسف  ... م ينفع يكون اكثر من 50 حرف**");
message.delete();
bot.user.setActivity(hargs, {
type: "PLAYING"
});
message.channel.send(`**Done! It's now Playing:** ${hargs}`)
}
if(message.content.startsWith(prefix + "setname")){
let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء كتابة اسم البوت الذي تريده**");
if(hargs.length < 1 || hargs.length > 32) return message.reply("**مع الأسف  ... م ينفع يكون اكثر من 32 حرف**");
message.delete();
bot.user.setUsername(hargs)
message.channel.send(`**Done! My New Name is:** ${hargs}`)
}
if(message.content.startsWith(prefix + "setavatar")){
let hargs = message.content.split(' ').slice(1).join(' ');
if(!hargs) return message.reply("**الرجاء وضع رابط الصورة**");
message.delete();
bot.user.setAvatar(hargs)
message.channel.send(`**Done! The new picture is:** ${hargs}`)
}
if(message.content.startsWith(prefix + "setnothing")){
 bot.user.setActivity("")
 message.channel.send(`Done!`)
 }
});

client.login(process.env.BOT_TOKEN);
