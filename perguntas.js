const perguntas = [
    {
        
        pergunta: "Quais marcas fabricam processadores'?",
        opcoes: [
            "Amd e Intel",
            "Kingstone e Galax",
            "Asgard e Xeon",
            "intel e Pichau"
        ],
        resposta: 0 // índice da resposta correta
    },
    {
        pergunta: "Qual empresa parou de fabricar celulares'?",
        opcoes: [
            "Samsung",
            "Motorola",
            "Lg",
            "Apple"
        ],
        resposta: 2
    },
    {
        pergunta: "Como ativar o dual channel das memórias ram'?",
        opcoes: [
            "slo 1 e slot 2",
            "slot 3 e slot 4",
            "slot 1 e slot 3",
            "slot 2 e slot 4"
        ],
        resposta: 3
    },
    {
        pergunta: "Um monitor de 240Hz é equivalente à quantos frames por segundo?",
        opcoes: [
            "90fps",
            "140fps",
            "180fps",
            "240fps"
        ],
        resposta: 3
    },
    {
        pergunta: "Qual a temperatura máxima que um PC pode suportar'?",
        opcoes: [
            "60 Graus",
            "80 Graus",
            "100 Graus",
            "110 Graus"
        ],
        resposta: 2
    },
    {
        pergunta: "'Qual tipo de armazenamento tem a velocidade de leitura maior?",
        opcoes: [
            "SSD sata",
            "SSD nvme",
            "HD sata",
            "HS ata"
        ],
        resposta: 1
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

