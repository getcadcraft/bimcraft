---
title: Pavimentos de qualquer forma, aberturas e rampas
summary: Desenhe um pavimento ou uma laje pelo seu contorno (uma varanda, um balanço, um patamar), recorte aberturas nele e desenhe rampas com os seus patamares.
keywords: pavimento, laje, contorno, varanda, balanço, patamar, deque, abertura de pavimento, furo, poço, vazio, rampa, declive, rampa acessível, rampa para cadeira de rodas, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## O que vai fazer

Crie pavimentos que não seguem os compartimentos, como uma varanda para além das paredes, e desenhe rampas entre níveis.

## Desenhar um pavimento pelo seu contorno

1. Ative {{ui:Desenhar}}, escolha o nível e depois {{ui:Compilação}} › {{ui:Pavimento por contorno}}.
2. Na linha sob as ferramentas, escolha o tipo (laje de betão ou soalho de madeira), a sua utilização (pavimento ou patamar), a espessura e a altura da face superior acima do nível (0 = ao nível do piso do nível; um valor negativo põe-no mais abaixo).
3. Clique nos cantos. A ferramenta encaixa em paredes, em linhas da grelha e nos seus cruzamentos; mantenha {{key:Shift}} premido para manter uma aresta a esquadro. O comprimento de cada aresta e a área são mostrados à medida que desenha. {{key:Backspace}} anula o último canto.
4. Clique de novo no primeiro canto, faça duplo clique ou prima {{key:Enter}} para terminar.

## Recortar uma abertura

Clique no pavimento (na vista 3D, ou no seu contorno na planta) e, em {{ui:Propriedades}}, clique em {{ui:Adicionar uma abertura}} e depois nos cantos da abertura dentro do pavimento, terminando como acima. A lista de {{ui:Propriedades}} do pavimento indica as suas aberturas, cada uma com {{ui:Eliminar}}, e a sua área sem elas.

## Desenhar uma rampa

1. Escolha {{ui:Compilação}} › {{ui:Rampa}}. Defina a sua largura e se vai **até ao nível de cima** ou **subindo um desnível** que escreve.
2. Escolha como fica definida: **por declive** (1:12 para começar; a rampa tem o comprimento que o desnível exigir) ou **por comprimento** (o seu segundo clique define o comprimento, e o declive segue).
3. Clique no pé da rampa (o meio da sua aresta inferior) e depois clique no sentido da subida. A pré-visualização mostra o seu comprimento, os seus lanços e o declive.

Um desnível superior a 30 polegadas (760 mm) é dividido em lanços, com um patamar de 5 pés (1525 mm) entre eles. São valores comuns de planeamento, não o regulamento aplicável: verifique as regras do local onde constrói. Uma rampa mais inclinada do que 1:12 é assinalada nas suas {{ui:Propriedades}}.

## O que deve ver

- Cada pavimento, abertura e rampa é um único passo: {{key:Mod+Z}} anula-o.
- Na planta, o contorno de um pavimento desenhado (uma abertura é desenhada cruzada) e o contorno de uma rampa, os seus lanços, patamares e uma seta para cima com o seu declive.
- As propriedades de um pavimento desenhado (tipo, utilização, espessura, face superior, área, aberturas) e de uma rampa (largura, face superior, desnível, declive ou comprimento); {{key:Delete}} remove qualquer um deles.
- Uma rampa até ao nível de cima acompanha esse nível quando a altura deste muda.
- No ficheiro IFC: um pavimento desenhado é uma laje (IfcSlab, um pavimento ou um patamar) com as suas aberturas recortadas (IfcOpeningElement); uma rampa é um IfcRamp feito de lanços inclinados (IfcRampFlight) e lajes de patamar, com o seu declive e a sua largura.

:::note
Os pavimentos desenhados desta forma ficam onde os desenhou. Os pavimentos criados com {{ui:Pavimento}} acompanham os compartimentos quando as paredes se movem: veja [Compartimentos, pavimentos, tetos e coberturas](topic:floors-and-roofs).
:::
