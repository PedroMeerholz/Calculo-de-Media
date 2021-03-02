function calcular(){
    const input1 = document.querySelector('input#n1')
    const nota1 = Number(input1.value)
    
    const input2 = document.querySelector('input#n2')
    const nota2 = Number(input2.value)

    const input3 = document.querySelector('input#n3')
    const nota3  = Number(input3.value)

    let resMed = document.querySelector('h3#resMed')

    let media = (nota1 + nota2 + nota3) / 3

    resMed.innerHTML = `Resultado:${media.toFixed(2)}` 
}