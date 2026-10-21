/* Rosa Viva — tema claro/escuro e navegação móvel.
   Carregado no <head> para aplicar o tema salvo antes da primeira pintura. */
(function () {
  "use strict";

  var CHAVE_TEMA = "rosaviva.tema";
  var raiz = document.documentElement;
  var temaAtual = "claro";

  function lerTema() {
    try {
      return localStorage.getItem(CHAVE_TEMA);
    } catch (erro) {
      return null;
    }
  }

  function gravarTema(tema) {
    try {
      localStorage.setItem(CHAVE_TEMA, tema);
    } catch (erro) {
      /* Armazenamento indisponível: o tema continua funcionando nesta página. */
    }
  }

  function atualizarMetaTema() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", temaAtual === "escuro" ? "#150e12" : "#fff8fa");
    }
  }

  function aplicarTema(tema, anunciar) {
    temaAtual = tema === "escuro" ? "escuro" : "claro";

    if (temaAtual === "escuro") {
      raiz.setAttribute("data-theme", "escuro");
    } else {
      raiz.removeAttribute("data-theme");
    }

    var rotulos = document.querySelectorAll("[data-tema-rotulo]");
    for (var i = 0; i < rotulos.length; i++) {
      rotulos[i].textContent = temaAtual === "escuro" ? "Tema claro" : "Tema escuro";
    }

    var botoes = document.querySelectorAll("[data-tema-botao]");
    for (var j = 0; j < botoes.length; j++) {
      botoes[j].setAttribute(
        "title",
        temaAtual === "escuro" ? "Mudar para o tema claro" : "Mudar para o tema escuro"
      );
      botoes[j].setAttribute(
        "aria-label",
        temaAtual === "escuro" ? "Mudar para o tema claro" : "Mudar para o tema escuro"
      );
    }

    atualizarMetaTema();

    if (anunciar) {
      var status = document.getElementById("status-tema");
      if (status) {
        status.textContent =
          temaAtual === "escuro" ? "Tema escuro ativado." : "Tema claro ativado.";
      }
    }
  }

  /* Aplica o tema antes da pintura: claro quando não há preferência salva. */
  raiz.classList.add("js");
  aplicarTema(lerTema() === "escuro" ? "escuro" : "claro", false);

  function iniciar() {
    /* Reaplica os controles depois que o DOM existe: o tema salvo pode ter
       sido aplicado no <head>, antes de o botão estar disponível. */
    aplicarTema(temaAtual, false);

    var botoesTema = document.querySelectorAll("[data-tema-botao]");
    for (var i = 0; i < botoesTema.length; i++) {
      botoesTema[i].addEventListener("click", function () {
        var novo = temaAtual === "escuro" ? "claro" : "escuro";
        aplicarTema(novo, true);
        gravarTema(novo);
      });
    }

    var cabecalho = document.querySelector(".site-header");
    var botaoMenu = document.getElementById("nav-toggle");
    var menu = document.getElementById("menu-principal");

    function fecharMenu() {
      if (!cabecalho || !botaoMenu) return;
      cabecalho.classList.remove("nav-aberto");
      botaoMenu.setAttribute("aria-expanded", "false");
      var rotulo = botaoMenu.querySelector("[data-menu-rotulo]");
      if (rotulo) rotulo.textContent = "Menu";
    }

    if (botaoMenu && cabecalho && menu) {
      botaoMenu.addEventListener("click", function () {
        var aberto = cabecalho.classList.toggle("nav-aberto");
        botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
        var rotulo = botaoMenu.querySelector("[data-menu-rotulo]");
        if (rotulo) rotulo.textContent = aberto ? "Fechar" : "Menu";
        if (aberto) {
          var primeiroLink = menu.querySelector("a");
          if (primeiroLink) primeiroLink.focus();
        }
      });

      var links = menu.querySelectorAll("a");
      for (var k = 0; k < links.length; k++) {
        links[k].addEventListener("click", fecharMenu);
      }

      document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && cabecalho.classList.contains("nav-aberto")) {
          fecharMenu();
          botaoMenu.focus();
        }
      });

      var telaGrande = window.matchMedia("(min-width: 1200px)");
      var aoMudarTela = function (evento) {
        if (evento.matches) fecharMenu();
      };
      if (typeof telaGrande.addEventListener === "function") {
        telaGrande.addEventListener("change", aoMudarTela);
      } else if (typeof telaGrande.addListener === "function") {
        telaGrande.addListener(aoMudarTela);
      }
    }

    var ano = document.getElementById("ano-atual");
    if (ano) {
      ano.textContent = String(new Date().getFullYear());
    }

    var statusTema = document.createElement("p");
    statusTema.id = "status-tema";
    statusTema.className = "sr-only";
    statusTema.setAttribute("role", "status");
    statusTema.setAttribute("aria-live", "polite");
    document.body.appendChild(statusTema);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
