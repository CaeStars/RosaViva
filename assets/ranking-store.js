/* Rosa Viva — armazenamento do ranking local.
   Nenhum dado sai do navegador. O ranking não é compartilhado entre dispositivos. */
(function () {
  "use strict";

  var CHAVE = "rosaviva.ranking.v1";
  var LIMITE_LEITURA = 500;
  var APELIDO_MAX = 24;

  function armazenamentoDisponivel() {
    try {
      var teste = "__rosaviva_teste__";
      localStorage.setItem(teste, "1");
      localStorage.removeItem(teste);
      return true;
    } catch (erro) {
      return false;
    }
  }

  function numeroValido(valor) {
    return typeof valor === "number" && isFinite(valor) && valor >= 0;
  }

  function normalizar(item) {
    if (!item || typeof item !== "object") return null;

    var pontos = Number(item.pontos);
    var total = Number(item.total);
    var criadoEm = Number(item.criadoEm);

    if (!numeroValido(pontos) || !numeroValido(total) || total <= 0) return null;
    if (pontos > total || Math.floor(pontos) !== pontos || Math.floor(total) !== total) return null;
    if (!isFinite(criadoEm) || criadoEm <= 0) return null;

    var apelido = typeof item.apelido === "string" ? item.apelido : "";

    return {
      id: typeof item.id === "string" && item.id ? item.id : criarId(),
      apelido: apelido.trim().slice(0, APELIDO_MAX),
      pontos: pontos,
      total: total,
      criadoEm: criadoEm
    };
  }

  function criarId() {
    return (
      Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8)
    );
  }

  function listar() {
    var dados;
    try {
      dados = JSON.parse(localStorage.getItem(CHAVE) || "[]");
    } catch (erro) {
      return [];
    }

    if (!Array.isArray(dados)) return [];

    var limpos = [];
    for (var i = 0; i < dados.length && limpos.length < LIMITE_LEITURA; i++) {
      var item = normalizar(dados[i]);
      if (item) limpos.push(item);
    }

    limpos.sort(function (a, b) {
      if (b.pontos !== a.pontos) return b.pontos - a.pontos;
      if (a.criadoEm !== b.criadoEm) return a.criadoEm - b.criadoEm;
      return a.id.localeCompare(b.id);
    });

    return limpos;
  }

  function gravar(lista) {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(lista));
      return true;
    } catch (erro) {
      return false;
    }
  }

  function registrar(pontos, total) {
    if (!numeroValido(pontos) || !numeroValido(total) || total <= 0 || pontos > total) {
      return null;
    }

    var lista = listar();
    var item = {
      id: criarId(),
      apelido: "",
      pontos: Math.floor(pontos),
      total: Math.floor(total),
      criadoEm: Date.now()
    };

    lista.push(item);
    if (!gravar(lista)) return null;
    return item;
  }

  function atualizarApelido(id, apelido) {
    var lista = listar();
    var encontrado = false;

    for (var i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        lista[i].apelido = String(apelido || "").replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, APELIDO_MAX);
        encontrado = true;
        break;
      }
    }

    if (!encontrado) return false;
    return gravar(lista);
  }

  function limpar() {
    try {
      localStorage.removeItem(CHAVE);
      return true;
    } catch (erro) {
      return false;
    }
  }

  function formatarData(ms) {
    try {
      return new Date(ms).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (erro) {
      return "Data indisponível";
    }
  }

  window.RosaRanking = {
    chave: CHAVE,
    apelidoMax: APELIDO_MAX,
    disponivel: armazenamentoDisponivel,
    listar: listar,
    registrar: registrar,
    atualizarApelido: atualizarApelido,
    limpar: limpar,
    formatarData: formatarData
  };
})();
