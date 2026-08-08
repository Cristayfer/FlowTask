const abrir = document.getElementById("abrir");
const modalContainer = document.getElementById("modal-container");

abrir.addEventListener("click", async () => {
    const resposta = await fetch("nova-tarefa.html");
    const html = await resposta.text();
    modalContainer.innerHTML = html;

    const fechar = document.getElementById("cancelar");
    fechar.addEventListener("click", () => {
        modalContainer.innerHTML = "";
    });

    const formulario = document.getElementById("task-form");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Solicitação aberta!");
    });

});

