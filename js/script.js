const form = document.getElementById("form-contato");
const retorno = document.getElementById("retorno-formulario");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        retorno.textContent = `Obrigado pelo contato, ${nome}! Sua mensagem foi registrada.`;

        form.reset();
    });
}
