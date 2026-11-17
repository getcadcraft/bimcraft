---
title: Percorrer um modelo
summary: Percorrer um modelo IFC à altura dos olhos, com o teclado. A gravidade mantém o movimento no piso e as paredes travam o avanço.
keywords: caminhar, percurso, primeira pessoa, voar, navegar, altura dos olhos, gravidade, colisão, wasd, interior, visita
from: 0a22854a
---

## O que se faz

Ver um modelo como quem está dentro dele: percorrer um corredor, entrar num compartimento, subir uma escada.

## Passos

1. Abra um modelo IFC e clique em {{ui:Caminhar}} na barra de ferramentas.
2. Clique no piso onde quer ficar. Fica aí com os olhos à {{ui:Altura dos olhos}} (1.6 m ao início, mostrada e escrita nas {{ui:Unidades}} escolhidas: 5'-3" em pés e polegadas, 1600 em milímetros; um número simples fica nessa unidade, ou escreva uma unidade como 1.8 m), a olhar na direção em que a vista estava.
3. Para se deslocar, use {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou as teclas de setas. Mantenha {{key:Shift}} premido para ir mais depressa. Arraste na vista para olhar à volta.
4. Prima {{key:Esc}} ou clique em {{ui:Concluir}} para parar. A vista fica onde estava, pronta a orbitar.

## O que se deve ver

- A **gravidade** mantém-no no piso por baixo e leva-o pelos degraus e escadas. Desative-a para flutuar: {{key:E}} ou {{key:PageUp}} sobe, {{key:Q}} ou {{key:PageDown}} desce.
- **Parar nas paredes** trava o movimento um pouco antes de paredes, portas e tudo o que estiver no caminho, e deixa deslizar ao longo delas. Desative-o para atravessar.
- Elementos ocultos e transparentes, e o que um corte retira, não travam o movimento e não se pisa neles.

## Erros comuns

- **Nada acontece quando prima W.** As teclas vão para uma caixa onde está a escrever: clique primeiro na vista.
- **Caiu de uma grande altura.** Não havia piso por baixo do ponto (uma abertura, ou o piso está oculto). Desative a gravidade, ou comece num piso.

## Seguinte

- [Ocultar, isolar e tornar transparentes elementos](topic:hide-and-isolate)
- [Cortar um modelo IFC com um plano de corte](topic:section-plane)
