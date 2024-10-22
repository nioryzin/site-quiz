// Função para gerar os cartões de flashcard
function gerarFlashcards() {
    const container = document.getElementById('container');

    perguntas.forEach((item, index) => {
        const cartao = document.createElement('article');
        cartao.classList.add('cartao');

        const conteudo = `
            <div class="cartao__conteudo">
            
                <h3>Literatura Brasileira</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${item.pergunta}</p>
                </div>
                <div class="cartao__conteudo__resposta">
                    <form id="form${index}">
                        ${item.opcoes.map((opcao, i) => `
                            <label>
                                <input type="radio" name="resposta${index}" value="${opcao.charAt(0)}">
                                ${opcao}
                            </label><br>
                        `).join('')}
                        <button type="submit">Verificar Resposta</button>
                    </form>
                </div>
            </div>
        `;

        cartao.innerHTML = conteudo;
        container.appendChild(cartao);

        // Adicionando o evento de verificação
        const form = document.getElementById(`form${index}`);
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir o envio do formulário
            const respostaEscolhida = form.querySelector('input[name="resposta' + index + '"]:checked');

            if (respostaEscolhida) {
                const resposta = respostaEscolhida.value;
                if (resposta === item.respostaCorreta) {
                    alert('Correto!');
                } else {
                    alert('Incorreto! A resposta correta é ' + item.respostaCorreta);
                }
            } else {
                alert('Por favor, selecione uma resposta.');
            }
        });
    });
}

// Chamar a função para gerar os flashcards
gerarFlashcards();
