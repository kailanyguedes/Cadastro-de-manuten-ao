document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");
    const lista = document.getElementById("listaRegistros");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const cliente = document.getElementById("cliente").value.trim();
      const servico = document.getElementById("servico").value.trim();
      const data = document.getElementById("data").value;
      const status = document.getElementById("status").value;
      const descricao = document.getElementById("descricao").value.trim();
  
      if (!cliente || !servico || !data || !status || !descricao) {
        alert("Preencha todos os campos!");
        return;
      }
  
      const card = document.createElement("div");
      card.className = "bg-gray-800 p-5 rounded-lg shadow-lg border border-cyan-600";
      card.innerHTML = `
        <h3 class="text-xl font-bold text-cyan-400 mb-2">${cliente}</h3>
        <p><strong>Problema:</strong> ${servico}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
      `;
  
      lista.appendChild(card);
      form.reset();
    });
  });
  
