/* movimento.js — movimento do site da Ketlyn, a partir do Kit de Design (tempoperformance.com).
   A referência não tem entrada de seção nem efeito ligado à rolagem: o movimento dela está nos hovers (style.css)
   e no cabeçalho que fixa com desfoque (style.css + data-rolado do main.js). Aqui fica só o acordeão das Dúvidas:
   "+" que gira 45° e resposta que abre por grid-template-rows (0fr → 1fr), sem perder o <details> nativo. */
(function () {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var DURACAO = 300;
  document.documentElement.classList.add('acordeao-animado');
  document.querySelectorAll('.pergunta').forEach(function (det) {
    var resumo = det.querySelector('summary');
    if (!resumo) return;
    if (det.open) det.setAttribute('data-aberto', '');
    resumo.addEventListener('click', function (e) {
      e.preventDefault();
      if (det.open) {
        det.removeAttribute('data-aberto');
        window.setTimeout(function () { if (!det.hasAttribute('data-aberto')) det.open = false; }, DURACAO);
      } else {
        det.open = true;
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { det.setAttribute('data-aberto', ''); });
        });
      }
    });
  });
})();
