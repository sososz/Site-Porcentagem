function verificarRespostas() {
    var respostasCorretas = ["Laranja", "Júpiter"];
    var respostasUsuario = [];
    var form = document.getElementById("quizForm");
    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].type === "radio" && form.elements[i].checked) {
            respostasUsuario.push(form.elements[i].value);
        }
    }
    var corretas = 0;
    for (var j = 0; j < respostasUsuario.length; j++) {
        if (respostasUsuario[j] === respostasCorretas[j]) {
            corretas++;
        }
    }
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Você acertou " + corretas + " de " + respostasCorretas.length + " perguntas.";
}
