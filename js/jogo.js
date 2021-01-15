var deck = [
    {
        id: 1,
        imgSrc: "./img/card1.jpg",
        alternativa1: "Card1 - Alt1",
        alternativa2: "Card1 - Alt2", 
    }
]
function iniciaJogo()
{
    let card = document.getElementById("card1")
}

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