---
title: Edifícios vizinhos e o lote do CivilCraft
summary: Use os edifícios e o lote que a função Morada para terreno do CivilCraft encontrou em redor de uma morada como sugestões, e acrescente os que assinalar.
keywords: terreno, morada, lote, vizinhos, contexto, civilcraft, ccsite, edifícios, contorno do terreno, sugerir
from: 3be9407b
---

## O que faz

No CivilCraft, Superfície › Mais › Morada para terreno encontra os edifícios, o lote, o zonamento, a zona inundável e o solo à volta de uma morada, a partir de dados abertos. O botão «Enviar para o BimCraft como sugestões» (ou «Guardar o terreno como ficheiro» e depois abrir aqui o `.ccsite.json`) traz-os para o BimCraft. Nada é acrescentado até o indicar.

## Como usar

1. Inicie ou abra um modelo. O ponto da morada fica na origem do nível em que está.
2. Uma caixa lista cada edifício vizinho e o lote, com uma caixa de verificação. Desmarque o que não quer.
3. Os edifícios cuja altura a fonte não indicou usam a altura escrita no topo da caixa. Um edifício de que só se indicou o número de pisos conta 3 m por piso, e a caixa o indica.
4. Clique em «Acrescentar os marcados». Os edifícios tornam-se paredes em redor das suas pegadas, com a altura indicada, num só passo de anulação. O lote torna-se o contorno do terreno, como um segundo passo de anulação.

O zonamento, a zona inundável e o solo são listados apenas para informação; não são desenhados.

## A saber

- Os contornos são tão bons como os dados abertos: o OpenStreetMap e as camadas de parcelas municipais diferem muito de um sítio para outro. Confirme o que importa com um levantamento.
- As posições são metros a este e a norte da morada, numa aproximação plana, com boa precisão de alguns metros dentro de alguns quilómetros.
- Os dados trazem as licenças das suas fontes (o OpenStreetMap é ODbL); a caixa mostra a linha de crédito.
