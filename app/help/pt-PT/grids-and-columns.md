---
title: Grelhas e pilares
summary: Desenhe linhas de grelha com bolhas numeradas e com letras, por espaçamento ou uma a uma, desenhe paredes e pilares ao longo delas e veja-os em plantas, alçados e cortes.
keywords: grelha, grelhas, linha de grelha, grelha de pilares, eixo, eixos, bolha, linha da grelha, grelha estrutural, 1 2 3, A B C, pilar, pilares, coluna, apoio, snap, IfcGrid, IfcColumn
from: bf99a8f7
---

## O que vai fazer

Implante um edifício numa grelha e depois desenhe paredes e coloque pilares ao longo das suas linhas.

## Colocar uma grelha completa

1. Ative {{ui:Desenhar}} e depois escolha {{ui:Compilação}} › {{ui:Grelha}}.
2. Clique em {{ui:Colocar uma grelha…}}. Indique quantas **linhas numeradas** (1, 2, 3…) e quantas **linhas com letras** (A, B, C…) pretende e a distância entre elas. Escreva um espaçamento, ou vários separados por vírgulas para vãos irregulares (por exemplo `20', 24', 20'`). {{ui:Para além das últimas linhas}} indica até onde cada linha se prolonga para além das linhas exteriores do outro tipo, e {{ui:Rodada (graus)}} roda a grelha inteira.
3. Clique em {{ui:Colocar}} e depois onde deve ficar o primeiro cruzamento (1 / A). A pré-visualização segue o ponteiro.

As linhas numeradas percorrem a planta no sentido vertical e são espaçadas na horizontal; as linhas com letras percorrem a planta na horizontal e são espaçadas no sentido vertical. As letras saltam o I e o O, como nos desenhos, para nunca serem lidas como 1 e 0.

## Desenhar linhas de grelha uma a uma

Com {{ui:Grelha}} ativa, clique onde uma linha começa e onde termina. Recebe a etiqueta seguinte das linhas ao longo das quais corre (depois do 3 vem o 4; depois do B vem o C). Prima {{key:Esc}} para parar.

## Alterar uma linha da grelha

Com {{ui:Grelha}} ativa, clique numa linha para a escolher. Escreva uma nova {{ui:Etiqueta}} e prima {{key:Enter}}, ou clique em {{ui:Eliminar esta linha}} (ou prima {{key:Delete}}). {{ui:Bolhas}} coloca as bolhas nas duas extremidades, no início ou no fim de cada linha, ou em nenhuma. Cada alteração é um passo: {{key:Mod+Z}} anula-o.

## Desenhar ao longo da grelha

As ferramentas {{ui:Parede}}, {{ui:Pilar}} e as restantes ferramentas de desenho fazem snap às linhas da grelha e ao ponto onde se cruzam (a marca de snap é um pequeno círculo com uma cruz).

**Pilares:** escolha {{ui:Compilação}} › {{ui:Pilar}}, escolha a forma (retangular ou redonda), a dimensão e se o pilar vai **até ao piso de cima** ou até uma altura fixa, e depois clique. {{ui:Em todos os cruzamentos da grelha}} coloca um pilar em cada cruzamento que ainda não tenha nenhum. Clique num pilar para alterar a forma, a dimensão ou a altura em {{ui:Propriedades}}; {{key:Delete}} remove-o. Os pilares que vão até ao piso de cima seguem-no quando a altura desse piso muda.

## O que deve ver

- A grelha na planta de cada piso, com uma bolha e a respetiva etiqueta nas extremidades de cada linha.
- Linhas de grelha no conjunto de desenhos: nas plantas, e nos alçados e cortes onde uma linha é vista de topo, com a bolha por cima do edifício. Veja [Alçados, cortes e folhas](topic:sheets).
- No ficheiro IFC: uma grelha para o edifício (IfcGrid, com as linhas numeradas numa lista e as linhas com letras noutra), e os pilares como IfcColumn com a dimensão, a altura e as quantidades. Outros programas BIM mostram ambos.

:::note
Uma grelha que veio de um ficheiro de outro programa é mostrada, e as ferramentas fazem snap a ela, mas as suas linhas não podem ser alteradas aqui.
:::
