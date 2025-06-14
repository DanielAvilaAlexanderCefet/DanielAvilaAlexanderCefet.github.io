function saudacao() {

console.log("Olá, bem-vindo ao sistema!");

}
function HoraAtual(){
    hoje = new Date
    console.log(hoje.getDate()+"/"+hoje.getMonth()+"/"+hoje.getYear())
}
function calcularAreaRetangulo(largura, altura){
    var total = largura * altura
    console.log(total)
}

function ehPar(num){
    if(num%2 == 0)
        console.log(true)
    else
        console.log(false)
}
function calcularMedia(n1, n2, n3) {

    return (n1 + n2 + n3) / 3;
    
    }
    
function verificarSituacao(media) {
    
    if (media >= 7) return "Aprovado";
    
    if (media >= 5) return "Em recuperação";
    
    return "Reprovado";
    
}
    

function avaliarAluno(nome, n1, n2, n3){
    console.log('Nome: '+nome+' Media: '+calcularMedia(n1,n2,n3)+' Situação: '+verificarSituacao(calcularMedia(n1,n2,n3)))
}

function geraSenha(){
   console.log(String.fromCharCode(Math.floor(Math.random() * 126) + 33,Math.floor(Math.random() * 126) + 33,Math.floor(Math.random() * 126) + 33,Math.floor(Math.random() * 126) + 33,Math.floor(Math.random() * 126) + 33,Math.floor(Math.random() * 126) + 33,Math.floor(Math.random() * 126) + 33,Math.floor(Math.random() * 126) + 33))
}
HoraAtual();
calcularAreaRetangulo(2,2);
ehPar(2);
avaliarAluno("Daniel",4,8,10);
geraSenha();