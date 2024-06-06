const frm = document.querySelector("form")
const resp1 = document.getElementById("outMedia")
const resp2 = document.getElementById("outSituacao")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2
    resp1.innerText = `Média das Notas: ${media}`
    if(media >= 7){
        resp2.innerText = `Atenção, ${nome}. Você foi aprovado!!`
        resp2.style.color = "green"
    } else{
        resp2.innerText = `Atenção, ${nome}. Você foi reprovado!! 😭` 
        resp2.style.color = "red"
    }
})