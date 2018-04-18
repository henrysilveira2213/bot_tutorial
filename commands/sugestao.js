exports.run = (client,message,args)=>{
    var sugest = args.slice(0).join(" ")
    if(!sugest) return message.reply("escreva sua sugestão")
        client.guilds.get("406209503684722689").channels.get("433308958644633611").send("----------------------Sugestão------------------------\n"+ sugest + "\n sugestão enviada por <@" + message.author.id + "> ou " + message.author.tag + "\n---------------------fim--------------------")
    message.channel.send("sua sugestão foi enviada para meu server")
}