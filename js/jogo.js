function RegistrarNick()
{
    var nick = document.getElementById("nickname").value 

    localStorage.setItem("nickname", nick)
    
    console.log(`${nick} foi cadastrado.`)
}
var pontuacaoAtual = 0

function refresh(){

    window.location.reload();
    window.scrollTo(0,0)
}


function EnviarResposta1(){
    let resposta1 = document.getElementById("pergunta2").checked
    if (resposta1) 
    {
        document.getElementById("span1").textContent = "Você acertou"

        pontuacaoAtual += 10

        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span1").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
}

function EnviarResposta2(){
    let resposta2 = document.getElementById("pergunta4").checked
    if (resposta2) 
    {
        document.getElementById("span2").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span2").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    
}

function EnviarResposta3(){
    let resposta3 = document.getElementById("pergunta8").checked
    if (resposta3) 
    {
        document.getElementById("span3").textContent = "Você acertou"
            
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span3").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    
}

function EnviarResposta4(){
    let resposta4 = document.getElementById("pergunta12").checked
    if (resposta4) 
    {
        document.getElementById("span4").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span4").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    
}

function EnviarResposta5(){
    let resposta5 = document.getElementById("pergunta13").checked
    if (resposta5) 
    {
        document.getElementById("span5").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span5").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    
}

function EnviarResposta6(){
    let resposta6 = document.getElementById("pergunta17").checked
    if (resposta6) 
    {
        document.getElementById("span6").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span6").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
}

function EnviarResposta7(){
    let resposta7 = document.getElementById("pergunta21").checked
    if (resposta7) 
    {
        document.getElementById("span7").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span7").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    
}

function EnviarResposta8(){
    let resposta8 = document.getElementById("pergunta22").checked
    if (resposta8) 
    {
        document.getElementById("span8").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span8").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
}

function EnviarResposta9(){
    let resposta9 = document.getElementById("pergunta26").checked
    if (resposta9) 
    {
        document.getElementById("span9").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span9").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
}

function EnviarResposta10(){
    let resposta10 = document.getElementById("pergunta28").checked
    if (resposta10) 
    {
        document.getElementById("span10").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span10").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }   
}

function EnviarResposta11(){
    let resposta11 = document.getElementById("pergunta33").checked
    if (resposta11) 
    {
        document.getElementById("span11").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span11").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }   
}

function EnviarResposta12(){
    if(localStorage.getItem("recorde") == null){
        localStorage.setItem("recorde", 0)
    }
    
    let point = parseInt(localStorage.getItem("recorde"))
    if(point == undefined || point == 0 || point == NaN){
    
      localStorage.setItem("recorde", 0)
    }

    let resposta12 = document.getElementById("pergunta34").checked
    if (resposta12) 
    {
        document.getElementById("span12").textContent = "Você acertou"
    
        pontuacaoAtual += 10
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }
    else
    {
        document.getElementById("span12").textContent = "Você errou"
        document.getElementById("score").textContent = pontuacaoAtual
        console.log(`Pontuação atual ${pontuacaoAtual}`)
    }

    if(pontuacaoAtual > point)
    {
        localStorage.setItem("recorde", pontuacaoAtual)
        document.getElementById("recorde").textContent = `Recorde: ${localStorage.getItem("recorde")} (${localStorage.getItem("nickname")})`
    }
    
    else
    {
        document.getElementById("recorde").textContent = `Recorde: ${localStorage.getItem("recorde")} (${localStorage.getItem("nickname")})`
    }
}