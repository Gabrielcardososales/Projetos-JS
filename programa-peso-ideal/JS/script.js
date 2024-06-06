const frm = document.querySelector("form"); // Seleciona o formulário HTML
const resp = document.querySelector("h2"); // Seleciona o elemento h2 para exibir a resposta

// Adiciona um ouvinte de evento para o evento "submit" do formulário
frm.addEventListener("submit", (e) => {
  // Impede o comportamento padrão do formulário (envio)
  e.preventDefault();

  // Obtém o valor do campo "nome"
  const nome = frm.inNome.value;

  // Obtém o valor do campo "altura" e converte para número
  const altura = Number(frm.inAltura.value);

  // Verifica se o campo "Masculino" está marcado
  const sexo = frm.inMasculino.checked;

  // Calcula o peso ideal com base no sexo
  const peso = sexo ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

  // Exibe a resposta no elemento h2
  resp.innerText = `${nome}: Seu peso ideal é: ${peso.toFixed(3)} kg`;
});

// Adiciona um ouvinte de evento para o evento "reset" do formulário
frm.addEventListener("reset", (e) => {
  // Limpa o conteúdo do elemento h2
  resp.innerText = "";
});