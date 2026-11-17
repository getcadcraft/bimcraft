---
title: Eixos e pilares
summary: Organizar linhas de eixo com balões numerados e com letras, por espaçamento ou uma a uma, desenhar paredes e pilares ao longo delas e vê-los em plantas, elevações e cortes.
keywords: eixo, eixos, linha de eixo, grade de pilares, balão, linha de grade, grade estrutural, 1 2 3, A B C, pilar, pilares, poste, snap, IfcGrid, IfcColumn
from: bf99a8f7
---

## O que você vai fazer

Locar um edifício em uma grade de eixos e depois desenhar paredes e posicionar pilares ao longo de suas linhas.

## Lançar uma grade completa

1. Ative {{ui:Desenhar}} e depois escolha {{ui:Build}} › {{ui:Eixos}}.
2. Clique em {{ui:Lançar eixos…}}. Informe quantas **linhas numeradas** (1, 2, 3…) e **linhas com letras** (A, B, C…) você quer e a distância entre elas. Digite um espaçamento, ou vários separados por vírgulas para vãos desiguais (por exemplo `20', 24', 20'`). {{ui:Além das últimas linhas}} é quanto cada linha se estende além das linhas externas do outro tipo, e {{ui:Girados (graus)}} gira a grade inteira.
3. Clique em {{ui:Lançar}}, depois clique onde deve ficar o primeiro cruzamento (1 / A). A pré-visualização acompanha o ponteiro.

As linhas numeradas correm para cima na planta e são espaçadas ao longo dela; as linhas com letras correm pela planta e são espaçadas para cima. As letras pulam I e O, como nos desenhos, para que nunca sejam lidas como 1 e 0.

## Desenhar linhas de eixo uma a uma

Com {{ui:Eixos}} ativo, clique onde uma linha começa e onde ela termina. Ela recebe o próximo rótulo das linhas ao longo das quais corre (depois de 3 vem 4; depois de B vem C). Pressione {{key:Esc}} para parar.

## Alterar uma linha de eixo

Com {{ui:Eixos}} ativo, clique em uma linha para selecioná-la. Digite um novo {{ui:Rótulo}} e pressione {{key:Enter}}, ou clique em {{ui:Excluir esta linha}} (ou pressione {{key:Delete}}). {{ui:Balões}} coloca os balões nas duas extremidades, no início ou no fim de cada linha, ou em nenhum lugar. Cada alteração é uma etapa: {{key:Mod+Z}} a desfaz.

## Desenhar ao longo do eixo

A ferramenta {{ui:Wall}}, a ferramenta {{ui:Pilar}} e as demais ferramentas de desenho fazem snap nas linhas de eixo e nos pontos onde elas se cruzam (a marca de snap é um pequeno círculo com uma cruz).

**Pilares:** escolha {{ui:Build}} › {{ui:Pilar}}, selecione a forma (retangular ou redonda), o tamanho e se o pilar vai **até o pavimento acima** ou até uma altura fixa, depois clique. {{ui:Em todos os cruzamentos de eixos}} posiciona um pilar em cada cruzamento que ainda não tem um. Clique em um pilar para alterar sua forma, tamanho ou altura em {{ui:Propriedades}}; {{key:Delete}} o remove. Pilares que vão até o pavimento acima acompanham a altura dele quando ela muda.

## O que você deve ver

- A grade na planta de cada pavimento, com um balão e seu rótulo nas extremidades de cada linha.
- Linhas de eixo no conjunto de desenhos: nas plantas, e nas elevações e cortes onde uma linha é vista de topo, com seu balão acima do edifício. Veja [Elevações, cortes e folhas](topic:sheets).
- No arquivo IFC: um eixo para o edifício (IfcGrid, com suas linhas numeradas em uma lista e suas linhas com letras na outra), e pilares como IfcColumn com tamanho, altura e quantidades. Outros programas BIM mostram os dois.

:::note
Um eixo que veio de um arquivo de outro programa é mostrado, e as ferramentas fazem snap nele, mas suas linhas não podem ser alteradas aqui.
:::
