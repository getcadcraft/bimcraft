---
title: Linhas e textos do modelo: desenhados no modelo, no plano de trabalho
summary: Uma linha do modelo é uma linha, polilinha ou arco que existe no modelo e aparece em todas as vistas que o enxergam. O texto do modelo é uma letra 3D com profundidade real. Ambos são desenhados no plano de trabalho.
keywords: linha do modelo, texto do modelo, texto 3D, letreiro, placa, sinalização, linha em 3D, arco, polilinha, plano de trabalho, texto extrudado, fonte, profundidade, linha de detalhe, linha de desenho, anotação, IfcAnnotation
from: fc9cccb5
---

## O que você vai fazer

Desenhe linhas e letreiros que fazem parte do modelo, e não de uma só vista.

## Passos

1. Defina primeiro o plano de trabalho (veja **O plano de trabalho**). Um plano de nível é desenhado na planta; um plano vertical, no Visualizador do plano de trabalho.
2. Para uma linha, escolha **Linha do modelo** no menu **Build** e escolha **Linha**, **Polilinha** ou **Arco (três pontos)**:
   - uma linha são dois cliques;
   - uma polilinha é um clique para cada ponto, depois Enter ou um clique duplo. Um clique no primeiro ponto a fecha;
   - um arco são três cliques: início, um ponto por onde ele passa e fim.
3. Para texto, escolha **Texto do modelo**. Digite as palavras, defina a altura das letras maiúsculas e a profundidade, depois clique onde o texto começa (a extremidade esquerda da linha de base).
4. Selecione uma linha ou um texto para vê-lo em {{ui:Properties}}. As palavras, a altura e a profundidade de um texto podem ser alteradas ali. Delete remove o item.

## Onde aparecem

- Uma linha do modelo aparece na planta do seu nível, na vista 3D, no painel de elevações e cortes e no Visualizador do plano de trabalho quando está sobre o plano de trabalho. Uma linha de desenho ({{ui:Annotate}}, Linha) pertence a uma só vista.
- O texto do modelo é geometria sólida: aparece onde o modelo aparece, na planta, em 3D, em elevações e cortes, e nas folhas.
- Linhas do modelo ainda não são desenhadas nas folhas impressas. O texto do modelo é.

## A fonte

O texto do modelo usa a mesma fonte das folhas e dos PDFs: Liberation Sans, sob a SIL Open Font License. Uma letra que a fonte não tem é desenhada como um ponto de interrogação, e você é avisado de qual é. Há uma só fonte e um só peso. As letras são espaçadas pelas larguras da própria fonte, sem kerning.

## No arquivo IFC

- Uma linha do modelo é um IfcAnnotation com o tipo de objeto ModelLine. Sua forma é uma curva 3D: uma polilinha, ou um círculo recortado para um arco.
- O texto do modelo é um IfcBuildingElementProxy com o tipo de objeto ModelText. Sua forma é um sólido extrudado para cada peça de letra, com os furos de letras como O e B. Suas quantidades são a área da face e o volume (área da face vezes a profundidade).

## Bom saber

- Qualquer tamanho é feito como você pede. Somente uma linha sem comprimento, um arco cujos três pontos estão em uma mesma reta, ou um texto sem letras é recusado, porque não há o que fazer.
- Cada linha, e cada texto ou alteração nele, é uma etapa do Desfazer.
