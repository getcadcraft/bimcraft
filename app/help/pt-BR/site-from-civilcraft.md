---
title: Edificações vizinhas e o lote vindos do CivilCraft
summary: Use as edificações e o lote que o Endereço para terreno do CivilCraft encontrou ao redor de um endereço como sugestões, e adicione os que você marcar.
keywords: terreno, endereço, lote, vizinhos, contexto, civilcraft, ccsite, edificações, contorno do terreno, sugerir
from: 3be9407b
---

## O que faz

No CivilCraft, Superfície › Mais › Endereço para terreno encontra as edificações, o lote, o zoneamento, a zona de inundação e o solo ao redor de um endereço, a partir de dados abertos. O botão dele "Enviar ao BimCraft como sugestões" (ou "Salvar o terreno como arquivo", e depois abrir o `.ccsite.json` aqui) as traz para o BimCraft. Nada é adicionado até você dizer.

## Como usar

1. Inicie ou abra um modelo. O ponto do endereço fica na origem do nível em que você está.
2. Uma caixa lista cada edificação vizinha e o lote, com uma caixa de seleção. Desmarque o que você não quer.
3. Edificações cuja altura a fonte não informou usam a altura digitada no topo da caixa. Uma edificação que informou apenas o número de pavimentos conta 3 m por pavimento, e a caixa informa isso.
4. Clique em "Adicionar os marcados". As edificações viram paredes em volta das suas pegadas, tão altas quanto listado, em um passo de desfazer. O lote vira o contorno do terreno, como um segundo passo de desfazer.

Zoneamento, zona de inundação e solo são listados apenas para informação; eles não são desenhados.

## Para saber

- Os contornos são tão bons quanto os dados abertos: o OpenStreetMap e as camadas de lotes municipais diferem muito de um lugar para outro. Confira o que importa com um levantamento.
- As posições são metros a leste e ao norte do ponto do endereço, numa aproximação plana, precisas a alguns metros dentro de alguns quilômetros.
- Os dados carregam as licenças das fontes (o OpenStreetMap é ODbL); a caixa mostra a linha de crédito.
