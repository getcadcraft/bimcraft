---
title: Linhas e texto do modelo: desenhados no modelo, no plano de trabalho
summary: Uma linha do modelo é uma linha, polilinha ou arco que vive no modelo e aparece em todas as vistas que o veem. O texto do modelo é texto 3D com profundidade real. Ambos são desenhados no plano de trabalho.
keywords: linha do modelo, texto do modelo, texto 3D, letras, sinal, sinalética, linha em 3D, arco, polilinha, plano de trabalho, texto extrudido, tipo de letra, profundidade, linha de detalhe, linha de desenho, anotação, IfcAnnotation
from: fc9cccb5
---

## O que vai fazer

Desenhe linhas e textos que fazem parte do modelo, e não de uma só vista.

## Passos

1. Defina primeiro o plano de trabalho (veja **O plano de trabalho**). Um plano de nível desenha-se na planta; um plano vertical na Work Plane Viewer.
2. Para uma linha escolha **Linha do modelo** no menu **Compilação** e escolha **Linha**, **Polilinha** ou **Arco (três pontos)**:
   - uma linha são dois cliques;
   - uma polilinha é um clique por cada ponto, depois {{key:Enter}} ou um duplo clique. Um clique no primeiro ponto fecha-a;
   - um arco são três cliques: o início, um ponto por onde passa, e o fim.
3. Para texto escolha **Texto do modelo**. Escreva as palavras, defina a altura das maiúsculas e a profundidade, depois clique onde o texto começa (a extremidade esquerda da sua linha de base).
4. Selecione uma linha ou um texto para o ver em {{ui:Propriedades}}. As palavras, a altura e a profundidade de um texto podem ser alteradas aí. {{key:Delete}} elimina-o.

## Onde aparecem

- Uma linha do modelo aparece na planta do seu nível, na vista 3D, no painel de alçados e cortes e na Work Plane Viewer quando está sobre o plano de trabalho. Uma linha de desenho ({{ui:Anotar}}, {{ui:Linha}}) pertence a uma só vista.
- O texto do modelo é geometria sólida: aparece onde o modelo aparece, na planta, em 3D, em alçados e cortes, e nas folhas.
- As linhas do modelo ainda não são desenhadas nas folhas impressas. O texto do modelo é.

## O tipo de letra

O texto do modelo usa o mesmo tipo de letra das folhas e dos PDF: Liberation Sans, sob a SIL Open Font License. Uma letra que o tipo de letra não tem é desenhada como um ponto de interrogação, e indica-se qual. Há um só tipo de letra e um só peso. As letras são espaçadas pelas larguras próprias do tipo de letra, sem kerning.

## No ficheiro IFC

- Uma linha do modelo é um IfcAnnotation com o tipo de objeto ModelLine. A sua forma é uma curva 3D: uma polilinha, ou um círculo aparado para um arco.
- O texto do modelo é um IfcBuildingElementProxy com o tipo de objeto ModelText. A sua forma é um sólido extrudido por cada peça de letra, com os furos de letras como O e B. As suas quantidades são a área da face e o volume (área da face vezes a profundidade).

## Bom saber

- Qualquer tamanho é feito como pedido. Só uma linha sem comprimento, um arco cujos três pontos estão numa mesma reta, ou um texto sem letras é recusado, porque não há nada para fazer.
- Cada linha, e cada texto ou alteração a um texto, é um passo de Anular.
