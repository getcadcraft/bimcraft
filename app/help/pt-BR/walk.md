---
title: Caminhar pelo modelo
summary: Percorra um modelo IFC na altura dos olhos com o teclado; a gravidade mantém você no piso e as paredes impedem a passagem.
keywords: caminhar, percurso, primeira pessoa, voar, navegar, altura dos olhos, gravidade, colisão, wasd, interior, tour
from: 0a22854a
---

## O que você vai fazer

Ver um modelo como quem está nele: andar por um corredor, entrar em um ambiente, subir uma escada.

## Passos

1. Abra um modelo IFC e clique em {{ui:Caminhar}} na barra de ferramentas.
2. Clique no piso onde você quer ficar. Você fica ali com os olhos em {{ui:Altura dos olhos}} (1.6 m no início, exibida e digitada nas {{ui:Unidades}} escolhidas: 5'-3" em pés e polegadas, 1600 em milímetros; um número sem unidade está nessa unidade, ou escreva uma unidade como 1.8 m), olhando na direção em que a vista estava.
3. Mova-se com {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou com as teclas de seta. Mantenha {{key:Shift}} pressionada para ir mais rápido. Arraste na vista para olhar ao redor.
4. Pressione {{key:Esc}} ou clique em {{ui:Concluído}} para parar. A vista permanece onde você estava, pronta para orbitar.

## O que você deve ver

- **Gravidade** mantém você no piso abaixo de você e leva você para cima de degraus e escadas. Desligue-a para flutuar: {{key:E}} ou {{key:PageUp}} sobe, {{key:Q}} ou {{key:PageDown}} desce.
- **Parar nas paredes** faz você parar um pouco antes de paredes, portas e qualquer outro obstáculo, e deixa você deslizar ao longo delas. Desligue-a para atravessar.
- Elementos ocultos e transparentes, e o que um corte remove da vista, não impedem você nem são pisados.

## Erros comuns

- **Nada acontece quando eu pressiono W.** As teclas vão para uma caixa em que você está digitando: clique primeiro na vista.
- **Caí de uma altura grande.** Não havia piso sob o ponto (uma abertura, ou o piso está oculto). Desligue a gravidade ou comece em um piso.

## Próximos passos

- [Ocultar, isolar e deixar elementos transparentes](topic:hide-and-isolate)
- [Cortar um modelo IFC com um plano de corte](topic:section-plane)
