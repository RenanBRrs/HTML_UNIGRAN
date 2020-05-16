function converTexto(){
    var nome = document.getElementById("nome");
  nome.value = nome.value.toUpperCase();

}
function ValidarSenha(){
   var senha = document.getElementById("senha").value;

    if (senha == "" || senha.length <=5) {
        document.getElementById("erroSenha").innerHTML = "<span style='color:#ff0000'> Preencha com 6 numeros por favor!</span>";
    }else{
        document.getElementById("erroSenha").innerHTML = "<span style='color:yellow'> Senha valida!</span>";
    }
}