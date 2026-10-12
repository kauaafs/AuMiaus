const formulario = document.getElementById('cadastroForm');
const resposta = document.getElementById('respostaCadastro');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Evita recarregar a página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const dadosUsuario = { nome, email, senha };

    // URL fictícia
    const urlFicticia = 'https://jsonplaceholder.typicode.com/posts';

    fetch(urlFicticia, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosUsuario)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Erro no envio.');
    })
    //resposta positiva do envio, exibe mensagem de sucesso e limpa o formulário
    .then(dados => {
        resposta.style.color = 'green';
        resposta.textContent = 'Cadastro Concluido!';
        formulario.reset();
    })
    .catch(erro => {
        resposta.style.color = 'red';
        resposta.textContent = 'Ocorreu um erro ao enviar.';
        console.error(erro);
    });
});