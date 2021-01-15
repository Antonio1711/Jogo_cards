function RegistrarNick()
{
    let nick = document.getElementById("nickname").value 

    localStorage.setItem(nick, nick)
    
    console.log(`${nick} foi cadastrado.`)
}

function EnviarRespostas()
{
    let resposta1 = getElementById("pergunta2").checked
    let resposta2 = getElementById("pergu")
}