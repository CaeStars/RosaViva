/* Rosa Viva — quiz educativo com 10 perguntas.
   Cada pergunta tem 4 alternativas e apenas 1 correta. */
(function () {
  "use strict";

  var URL_INCA_SINAIS =
    "https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/mama/versao-para-profissionais-de-saude/sinais-e-sintomas";
  var URL_INCA_RISCO =
    "https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/fatores-de-risco";
  var URL_INCA_DETECCAO =
    "https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/acoes/deteccao-precoce";
  var URL_INCA_PREVENCAO =
    "https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/como-prevenir-o-cancer/como-prevenir-o-cancer";
  var URL_MS_NOTA =
    "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2025/nota-tecnica-no-626-2025-cgcan-decan-saes-ms.pdf/@@download/file";

  var PERGUNTAS = [
    {
      enunciado: "Qual é o principal objetivo do rastreamento mamográfico?",
      alternativas: [
        "Prevenir o surgimento do câncer de mama",
        "Detectar alterações antes do aparecimento de sintomas",
        "Substituir a consulta e o exame clínico",
        "Garantir que nenhum câncer se desenvolva"
      ],
      correta: 1,
      explicacao:
        "Rastreamento é a realização de exames em pessoas sem sintomas para identificar alterações o mais cedo possível. Ele não previne o câncer e não substitui a avaliação profissional.",
      fonte: { texto: "INCA — Detecção precoce", url: URL_INCA_DETECCAO }
    },
    {
      enunciado:
        "Segundo a recomendação nacional atualizada em 2025, qual faixa etária é priorizada para o rastreamento mamográfico no SUS, em pessoas assintomáticas?",
      alternativas: ["18 a 39 anos", "40 a 49 anos", "50 a 74 anos", "A partir de 80 anos"],
      correta: 2,
      explicacao:
        "A Nota Técnica nº 626/2025 do Ministério da Saúde prioriza pessoas assintomáticas de 50 a 74 anos. Fora dessa faixa, o diálogo com um profissional sobre riscos e benefícios é o caminho indicado — não se trata de proibição.",
      fonte: { texto: "Ministério da Saúde — Nota Técnica nº 626/2025", url: URL_MS_NOTA }
    },
    {
      enunciado:
        "Com que intervalo o rastreamento mamográfico é recomendado para a faixa prioritária no SUS?",
      alternativas: ["A cada 6 meses", "Anualmente", "A cada 2 anos", "Uma única vez na vida"],
      correta: 2,
      explicacao:
        "Para pessoas assintomáticas de 50 a 74 anos, a recomendação nacional é de mamografia a cada dois anos, no SUS.",
      fonte: { texto: "Ministério da Saúde — Nota Técnica nº 626/2025", url: URL_MS_NOTA }
    },
    {
      enunciado:
        "Qual destas alterações merece avaliação em um serviço de saúde?",
      alternativas: [
        "Uma dor passageira nos braços após carregar peso",
        "Uma diferença de tamanho entre as mamas presente desde a adolescência",
        "Sensibilidade nas mamas que costuma variar com o ciclo menstrual",
        "Um nódulo endurecido, fixo ou em crescimento na mama"
      ],
      correta: 3,
      explicacao:
        "Nódulo endurecido, fixo ou em crescimento é um sinal que precisa ser avaliado. Também merecem atenção a saída espontânea de líquido pelo mamilo (especialmente sanguinolento e em uma só mama), a retração ou mudança do mamilo, alterações persistentes da pele (como aspecto de casca de laranja), o aumento progressivo da mama e nódulos na axila. Esses sinais não confirmam câncer, mas não devem ser ignorados.",
      fonte: { texto: "INCA — Sinais e sintomas", url: URL_INCA_SINAIS }
    },
    {
      enunciado:
        "Uma pessoa de 28 anos percebe uma alteração persistente na mama. O que ela deve fazer?",
      alternativas: [
        "Esperar até os 50 anos, idade do rastreamento de rotina",
        "Procurar avaliação em um serviço de saúde, independentemente da idade",
        "Iniciar um tratamento por conta própria",
        "Ignorar, porque câncer de mama é raro nessa idade"
      ],
      correta: 1,
      explicacao:
        "Qualquer alteração suspeita deve ser avaliada por um serviço de saúde em qualquer idade. A idade de rastreamento se aplica a pessoas sem sintomas e não é motivo para adiar a investigação de uma queixa.",
      fonte: { texto: "INCA — Sinais e sintomas", url: URL_INCA_SINAIS }
    },
    {
      enunciado: "Sobre histórico familiar e fatores de risco, o que é correto afirmar?",
      alternativas: [
        "Quem não tem histórico familiar não precisa se preocupar com alterações",
        "Todo câncer de mama é causado por herança genética",
        "Muitas pessoas com câncer de mama não têm histórico familiar; não ter histórico não significa risco zero",
        "Homens não podem ter câncer de mama"
      ],
      correta: 2,
      explicacao:
        "Histórico familiar e predisposição genética aumentam o risco em parte dos casos, mas não explicam todos eles. A idade avançada é um fator importante, e a ausência de histórico familiar não elimina o risco. Embora menos comum, o câncer de mama também pode ocorrer em homens.",
      fonte: { texto: "INCA — Fatores de risco", url: URL_INCA_RISCO }
    },
    {
      enunciado: "O que os hábitos saudáveis representam na prevenção do câncer de mama?",
      alternativas: [
        "Garantem que a pessoa nunca terá câncer",
        "Só fazem diferença depois dos 60 anos",
        "Podem reduzir o risco, mas não eliminam a possibilidade de desenvolver a doença",
        "Substituem a mamografia de rastreamento"
      ],
      correta: 2,
      explicacao:
        "Atividade física, alimentação saudável, controle de peso, redução do consumo de álcool e amamentação, quando possível, podem contribuir para reduzir o risco. Nenhum desses hábitos garante prevenção absoluta nem substitui o rastreamento indicado.",
      fonte: { texto: "INCA — Como prevenir o câncer", url: URL_INCA_PREVENCAO }
    },
    {
      enunciado: "Qual é a diferença entre rastreamento e investigação de sintomas?",
      alternativas: [
        "São a mesma coisa, feita apenas quando há nódulo",
        "O rastreamento é feito em pessoas sem sintomas; a investigação é indicada quando há sinais ou sintomas",
        "O rastreamento serve só para quem tem histórico familiar",
        "A investigação é feita apenas em homens"
      ],
      correta: 1,
      explicacao:
        "O rastreamento busca alterações em quem não tem sintomas. Já a investigação diagnóstica é indicada quando existe uma queixa ou um sinal percebido, em qualquer idade. São caminhos diferentes e complementares.",
      fonte: { texto: "INCA — Detecção precoce", url: URL_INCA_DETECCAO }
    },
    {
      enunciado:
        "Conhecer o próprio corpo e observar as mamas substitui a avaliação profissional ou a mamografia indicada?",
      alternativas: [
        "Sim, o autoexame substitui a mamografia",
        "Sim, e também dispensa a consulta",
        "Não: observar o próprio corpo ajuda a notar mudanças, mas não substitui avaliação profissional nem rastreamento indicado",
        "Não, por isso não se deve observar o próprio corpo"
      ],
      correta: 2,
      explicacao:
        "Conhecer o próprio corpo pode ajudar a perceber mudanças e a procurar atendimento. No entanto, o autoexame não substitui a avaliação profissional nem a mamografia quando ela é indicada. Ao notar uma alteração, procure um serviço de saúde.",
      fonte: { texto: "INCA — Detecção precoce", url: URL_INCA_DETECCAO }
    },
    {
      enunciado: "O que é correto afirmar sobre a mamografia?",
      alternativas: [
        "É um exame de imagem usado tanto no rastreamento quanto na investigação de alterações",
        "É um exame que previne o câncer de mama",
        "Pode ser feita apenas por quem já tem sintomas",
        "Dispensa a consulta e o exame clínico"
      ],
      correta: 0,
      explicacao:
        "A mamografia é um exame de imagem. Ela pode ser usada no rastreamento de pessoas assintomáticas e na investigação de alterações, conforme a indicação profissional. Não previne o câncer e não dispensa a consulta e o exame clínico.",
      fonte: { texto: "INCA — Detecção precoce", url: URL_INCA_DETECCAO }
    }
  ];

  /* Verificação simples do gabarito, útil durante o desenvolvimento. */
  var problemas = [];
  if (PERGUNTAS.length !== 10) problemas.push("O quiz deve ter exatamente 10 perguntas.");
  PERGUNTAS.forEach(function (pergunta, indice) {
    if (!Array.isArray(pergunta.alternativas) || pergunta.alternativas.length !== 4) {
      problemas.push("A pergunta " + (indice + 1) + " não tem 4 alternativas.");
    }
    if (
      typeof pergunta.correta !== "number" ||
      pergunta.correta < 0 ||
      pergunta.correta > 3
    ) {
      problemas.push("A pergunta " + (indice + 1) + " tem gabarito inválido.");
    }
  });
  if (problemas.length) {
    console.error("[Rosa Viva] Problemas no gabarito do quiz:", problemas);
  }

  window.RosaQuiz = {
    perguntas: PERGUNTAS.map(function (pergunta) {
      return {
        enunciado: pergunta.enunciado,
        alternativas: pergunta.alternativas.slice(),
        correta: pergunta.correta
      };
    })
  };

  function iniciarQuiz() {
    var el = {
      intro: document.getElementById("quiz-intro"),
      jogo: document.getElementById("quiz-jogo"),
      resultado: document.getElementById("quiz-resultado"),
      iniciar: document.getElementById("quiz-iniciar"),
      form: document.getElementById("quiz-form"),
      contador: document.getElementById("quiz-contador"),
      progresso: document.getElementById("quiz-progresso"),
      barra: document.getElementById("quiz-barra"),
      pergunta: document.getElementById("quiz-pergunta"),
      opcoes: document.getElementById("quiz-opcoes"),
      dica: document.getElementById("quiz-dica"),
      confirmar: document.getElementById("quiz-confirmar"),
      feedback: document.getElementById("quiz-feedback"),
      scoreValor: document.getElementById("score-valor"),
      scoreMensagem: document.getElementById("score-mensagem"),
      revisao: document.getElementById("revisao"),
      formApelido: document.getElementById("form-apelido"),
      apelido: document.getElementById("apelido"),
      statusRanking: document.getElementById("status-ranking"),
      refazer: document.getElementById("refazer"),
      resultadoTitulo: document.getElementById("resultado-titulo")
    };

    if (!el.jogo || !el.form || !el.opcoes || !el.intro) return;

    var estado = {
      indice: 0,
      escolhas: [],
      respondidas: [],
      pontos: 0,
      salvoId: null,
      finalizado: false
    };

    function limparEstado() {
      estado.indice = 0;
      estado.escolhas = [];
      estado.respondidas = [];
      estado.pontos = 0;
      estado.salvoId = null;
      estado.finalizado = false;
      for (var i = 0; i < PERGUNTAS.length; i++) {
        estado.escolhas.push(null);
        estado.respondidas.push(false);
      }
    }

    function mostrarFeedback(pergunta, escolha, acertou) {
      var correta = pergunta.correta;
      var textoResposta = acertou
        ? "Você marcou a alternativa correta: “" + pergunta.alternativas[correta] + "”."
        : "A alternativa correta é “" +
          pergunta.alternativas[correta] +
          "”. Você marcou “" +
          pergunta.alternativas[escolha] +
          "”.";

      el.feedback.className =
        "quiz-feedback " + (acertou ? "feedback-correta" : "feedback-incorreta");
      el.feedback.innerHTML =
        '<h2 id="feedback-titulo" tabindex="-1">' +
        '<span class="feedback-icon" aria-hidden="true">' +
        (acertou ? "✓" : "✕") +
        "</span>" +
        (acertou ? "Resposta correta" : "Resposta incorreta") +
        "</h2>" +
        "<p>" +
        textoResposta +
        "</p>" +
        "<p>" +
        pergunta.explicacao +
        "</p>" +
        '<p class="source-note">Fonte: <a href="' +
        pergunta.fonte.url +
        '" target="_blank" rel="noopener noreferrer">' +
        pergunta.fonte.texto +
        "</a>.</p>";
      el.feedback.hidden = false;

      var tituloFeedback = document.getElementById("feedback-titulo");
      if (tituloFeedback) tituloFeedback.focus();
    }

    function renderPergunta() {
      var pergunta = PERGUNTAS[estado.indice];
      var numero = estado.indice + 1;

      el.contador.textContent = "Pergunta " + numero + " de " + PERGUNTAS.length;
      if (el.barra) {
        el.barra.textContent = estado.pontos + " acerto" + (estado.pontos === 1 ? "" : "s");
      }
      if (el.progresso) {
        el.progresso.style.width = (numero / PERGUNTAS.length) * 100 + "%";
        el.progresso.parentElement.setAttribute("aria-valuenow", String(numero));
        el.progresso.parentElement.setAttribute(
          "aria-valuetext",
          "Pergunta " + numero + " de " + PERGUNTAS.length
        );
      }

      el.pergunta.textContent = pergunta.enunciado;
      el.opcoes.innerHTML = pergunta.alternativas
        .map(function (alternativa, indice) {
          return (
            '<label class="option" data-indice="' +
            indice +
            '">' +
            '<input type="radio" name="alternativa" value="' +
            indice +
            '" id="alt-' +
            indice +
            '" required>' +
            '<span class="option-marker" aria-hidden="true"></span>' +
            '<span class="option-text">' +
            alternativa +
            "</span>" +
            "</label>"
          );
        })
        .join("");

      el.dica.textContent = "Selecione uma alternativa para continuar.";
      el.confirmar.disabled = true;
      el.confirmar.textContent = "Confirmar resposta";
      el.feedback.hidden = true;
      el.feedback.innerHTML = "";
      el.form.classList.remove("respondido");

      var selecionados = el.opcoes.querySelectorAll("input");
      for (var i = 0; i < selecionados.length; i++) {
        selecionados[i].addEventListener("change", function () {
          el.confirmar.disabled = false;
          el.dica.textContent = "Alternativa selecionada. Confirme para ver o feedback.";
        });
      }
    }

    function traduzirLetra(indice) {
      return ["A", "B", "C", "D"][indice] || "?";
    }

    function finalizar() {
      estado.finalizado = true;
      el.jogo.hidden = true;
      el.resultado.hidden = false;

      el.scoreValor.textContent = String(estado.pontos);
      var mensagem;
      if (estado.pontos === PERGUNTAS.length) {
        mensagem = "Excelente! Você acertou todas as questões. Continue compartilhando informação de qualidade.";
      } else if (estado.pontos >= 7) {
        mensagem = "Muito bom! Você domina a maior parte dos pontos principais sobre sinais, risco e rastreamento.";
      } else if (estado.pontos >= 4) {
        mensagem = "Bom começo. Vale revisar os sinais de alerta e a diferença entre rastreamento e investigação de sintomas.";
      } else {
        mensagem = "Obrigado por participar! Revisar as explicações e as fontes é uma boa forma de aprender mais.";
      }
      el.scoreMensagem.textContent = mensagem;

      var revisao = [];
      for (var i = 0; i < PERGUNTAS.length; i++) {
        var pergunta = PERGUNTAS[i];
        var acertou = estado.escolhas[i] === pergunta.correta;
        revisao.push(
          "<li><strong>Pergunta " +
            (i + 1) +
            ":</strong> " +
            '<span class="rev-status ' +
            (acertou ? "rev-ok" : "rev-erro") +
            '">' +
            (acertou ? "✓ acertou" : "✕ errou") +
            "</span><br>" +
            "Gabarito: alternativa " +
            traduzirLetra(pergunta.correta) +
            " — " +
            pergunta.alternativas[pergunta.correta] +
            "</li>"
        );
      }
      el.revisao.innerHTML = revisao.join("");

      el.formApelido.hidden = true;
      el.statusRanking.textContent = "";
      el.apelido.value = "";

      if (window.RosaRanking && typeof window.RosaRanking.registrar === "function") {
        var registro = window.RosaRanking.registrar(estado.pontos, PERGUNTAS.length);
        if (registro) {
          estado.salvoId = registro.id;
          el.formApelido.hidden = false;
          el.statusRanking.textContent =
            "Resultado salvo automaticamente neste navegador. O apelido é opcional.";
        } else {
          el.statusRanking.textContent =
            "Não foi possível salvar o resultado: o armazenamento local deste navegador parece indisponível.";
        }
      }

      el.resultadoTitulo.focus();
    }

    function avancar() {
      if (estado.indice === PERGUNTAS.length - 1) {
        finalizar();
        return;
      }
      estado.indice++;
      renderPergunta();
      el.pergunta.focus();
    }

    el.form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      if (estado.finalizado) return;

      if (estado.respondidas[estado.indice]) {
        avancar();
        return;
      }

      var selecionado = el.opcoes.querySelector('input[name="alternativa"]:checked');
      if (!selecionado) {
        el.confirmar.disabled = true;
        el.dica.textContent = "Escolha uma alternativa antes de confirmar.";
        return;
      }

      var escolha = Number(selecionado.value);
      var pergunta = PERGUNTAS[estado.indice];
      var acertou = escolha === pergunta.correta;

      estado.escolhas[estado.indice] = escolha;
      estado.respondidas[estado.indice] = true;
      if (acertou) estado.pontos++;

      var opcoes = el.opcoes.querySelectorAll(".option");
      var inputs = el.opcoes.querySelectorAll("input");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
      }
      for (var j = 0; j < opcoes.length; j++) {
        opcoes[j].classList.add("desabilitada");
        var indiceOpcao = Number(opcoes[j].getAttribute("data-indice"));
        if (indiceOpcao === pergunta.correta) {
          opcoes[j].classList.add("correta");
          opcoes[j].querySelector(".option-text").insertAdjacentHTML(
            "beforeend",
            '<span class="option-result">✓ Resposta correta</span>'
          );
        } else if (indiceOpcao === escolha) {
          opcoes[j].classList.add("incorreta");
          opcoes[j].querySelector(".option-text").insertAdjacentHTML(
            "beforeend",
            '<span class="option-result">✕ Sua resposta</span>'
          );
        }
      }

      if (el.barra) {
        el.barra.textContent =
          estado.pontos + " acerto" + (estado.pontos === 1 ? "" : "s");
      }

      el.confirmar.disabled = false;
      el.confirmar.textContent =
        estado.indice === PERGUNTAS.length - 1 ? "Ver resultado" : "Próxima pergunta";
      el.dica.textContent = "Resposta registrada. Leia o feedback e siga adiante.";
      mostrarFeedback(pergunta, escolha, acertou);
    });

    function iniciarJogo() {
      limparEstado();
      el.intro.hidden = true;
      el.resultado.hidden = true;
      el.jogo.hidden = false;
      renderPergunta();
      el.pergunta.focus();
    }

    if (el.iniciar) {
      el.iniciar.addEventListener("click", iniciarJogo);
    }

    if (el.refazer) {
      el.refazer.addEventListener("click", function () {
        iniciarJogo();
      });
    }

    if (el.formApelido) {
      el.formApelido.addEventListener("submit", function (evento) {
        evento.preventDefault();
        if (!estado.salvoId || !window.RosaRanking) {
          el.statusRanking.textContent =
            "Não foi possível atualizar o apelido porque o resultado não foi salvo.";
          return;
        }

        var apelido = el.apelido.value;
        var atualizado = window.RosaRanking.atualizarApelido(estado.salvoId, apelido);

        if (!atualizado) {
          el.statusRanking.textContent =
            "Não foi possível salvar o apelido neste navegador.";
          return;
        }

        var limpo = apelido.trim();
        el.statusRanking.textContent = limpo
          ? "Apelido “" + limpo + "” salvo no ranking local."
          : "Resultado salvo como “Anônimo” no ranking local.";
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarQuiz);
  } else {
    iniciarQuiz();
  }
})();
