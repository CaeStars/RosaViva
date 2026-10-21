/* Rosa Viva — renderização do ranking local. */
(function () {
  "use strict";

  function iniciar() {
    if (!window.RosaRanking) return;

    var corpo = document.getElementById("ranking-corpo");
    var tabela = document.getElementById("ranking-tabela");
    var lista = document.getElementById("ranking-lista");
    var vazio = document.getElementById("ranking-vazio");
    var vazioTitulo = document.getElementById("ranking-vazio-titulo");
    var resumo = document.getElementById("ranking-resumo");
    var status = document.getElementById("ranking-status");
    var botaoLimpar = document.getElementById("limpar-ranking");
    var dialogo = document.getElementById("dialog-limpar");
    var botaoCancelar = document.getElementById("dialog-cancelar");
    var botaoConfirmar = document.getElementById("dialog-confirmar");

    if (!corpo || !tabela || !vazio || !resumo || !botaoLimpar) return;

    function anunciar(mensagem) {
      if (status) status.textContent = mensagem;
    }

    function criarCelula(texto, classe) {
      var td = document.createElement("td");
      if (classe) td.className = classe;
      td.textContent = texto;
      return td;
    }

    function renderizar() {
      var resultados = window.RosaRanking.listar();
      var total = resultados.length;

      corpo.textContent = "";
      if (lista) lista.textContent = "";
      tabela.hidden = total === 0;
      if (lista) lista.hidden = total === 0;
      vazio.hidden = total > 0;
      botaoLimpar.disabled = total === 0;

      if (total === 0) {
        resumo.textContent = "Nenhum resultado salvo neste navegador.";
      } else {
        resumo.textContent =
          total === 1
            ? "1 resultado salvo neste navegador."
            : total + " resultados salvos neste navegador.";
      }

      for (var i = 0; i < resultados.length; i++) {
        var item = resultados[i];
        var linha = document.createElement("tr");

        linha.appendChild(criarCelula(String(i + 1), "posicao"));

        var tdApelido = document.createElement("td");
        tdApelido.className = "apelido";
        if (item.apelido) {
          tdApelido.textContent = item.apelido;
        } else {
          var anonimo = document.createElement("span");
          anonimo.className = "anonimo";
          anonimo.textContent = "Anônimo";
          tdApelido.appendChild(anonimo);
        }
        linha.appendChild(tdApelido);

        var tdPontos = document.createElement("td");
        tdPontos.className = "pontos";
        tdPontos.appendChild(document.createTextNode(String(item.pontos)));
        var deTotal = document.createElement("span");
        deTotal.className = "de-total";
        deTotal.textContent = "/" + item.total;
        tdPontos.appendChild(deTotal);
        linha.appendChild(tdPontos);

        var dataFormatada = window.RosaRanking.formatarData(item.criadoEm);
        linha.appendChild(criarCelula(dataFormatada, "data"));

        corpo.appendChild(linha);

        if (lista) {
          var itemLista = document.createElement("li");
          itemLista.className = "ranking-item";

          var posicao = document.createElement("span");
          posicao.className = "rank-pos";
          posicao.textContent = (i + 1) + "º";
          itemLista.appendChild(posicao);

          var apelidoLista = document.createElement("span");
          apelidoLista.className = "rank-nick";
          if (item.apelido) {
            apelidoLista.textContent = item.apelido;
          } else {
            var anonimoLista = document.createElement("span");
            anonimoLista.className = "anonimo";
            anonimoLista.textContent = "Anônimo";
            apelidoLista.appendChild(anonimoLista);
          }
          itemLista.appendChild(apelidoLista);

          var pontosLista = document.createElement("span");
          pontosLista.className = "rank-score";
          pontosLista.appendChild(document.createTextNode(String(item.pontos)));
          var totalLista = document.createElement("span");
          totalLista.textContent = "/" + item.total;
          pontosLista.appendChild(totalLista);
          itemLista.appendChild(pontosLista);

          var dataLista = document.createElement("time");
          dataLista.className = "rank-date";
          dataLista.setAttribute("datetime", new Date(item.criadoEm).toISOString());
          dataLista.textContent = dataFormatada;
          itemLista.appendChild(dataLista);

          lista.appendChild(itemLista);
        }
      }
    }

    function limparResultados() {
      var removido = window.RosaRanking.limpar();
      renderizar();

      if (removido) {
        anunciar("Resultados locais apagados. O tema e outros dados do site foram mantidos.");
        if (vazioTitulo) vazioTitulo.focus();
      } else {
        anunciar("Não foi possível apagar os resultados neste navegador.");
      }
    }

    botaoLimpar.addEventListener("click", function () {
      if (botaoLimpar.disabled) return;

      if (dialogo && typeof dialogo.showModal === "function") {
        dialogo.showModal();
        return;
      }

      if (window.confirm("Apagar todos os resultados do quiz salvos neste navegador?")) {
        limparResultados();
      }
    });

    if (dialogo && botaoCancelar && botaoConfirmar) {
      botaoCancelar.addEventListener("click", function () {
        dialogo.close();
      });

      botaoConfirmar.addEventListener("click", function () {
        dialogo.close();
        limparResultados();
      });

      dialogo.addEventListener("click", function (evento) {
        if (evento.target === dialogo) dialogo.close();
      });
    }

    window.addEventListener("storage", function (evento) {
      if (evento.key === window.RosaRanking.chave || evento.key === null) {
        renderizar();
      }
    });

    renderizar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
