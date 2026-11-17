---
title: Pisos de qualquer forma, aberturas e rampas
summary: Desenhe um piso ou laje pelo seu contorno (uma sacada, um balanço, um patamar), recorte aberturas nele e desenhe rampas com seus patamares.
keywords: piso, laje, contorno, sacada, balanço, patamar, deque, abertura de piso, furo, poço, vazio, rampa, inclinação, rampa acessível, rampa para cadeira de rodas, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## O que você vai fazer

Crie pisos que não seguem os ambientes, como uma sacada além das paredes, e desenhe rampas entre níveis.

## Desenhar um piso pelo contorno

1. Ative {{ui:Draw}}, escolha o nível e depois {{ui:Build}} › {{ui:Floor by outline}}.
2. Na linha abaixo das ferramentas, escolha o tipo (laje de concreto ou piso de madeira), o uso (piso ou patamar), a espessura e a altura do topo acima do nível (0 = na mesma altura do piso do nível; um valor negativo o deixa mais baixo).
3. Clique nos cantos. A ferramenta faz snap em paredes, linhas de grade e nos seus cruzamentos; segure {{key:Shift}} para manter uma aresta em esquadro. O comprimento de cada aresta e a área são exibidos à medida que você avança. {{key:Backspace}} desfaz o último canto.
4. Clique novamente no primeiro canto, dê um duplo clique ou pressione {{key:Enter}} para concluir.

## Recortar uma abertura

Clique no piso (na visualização 3D, ou no seu contorno na planta) e, em {{ui:Properties}}, clique em {{ui:Add an opening}} e clique nos cantos da abertura dentro do piso, concluindo como acima. As {{ui:Properties}} do piso listam suas aberturas, cada uma com {{ui:Delete}}, e sua área sem elas.

## Desenhar uma rampa

1. Escolha {{ui:Build}} › {{ui:Ramp}}. Defina a largura e se ela vai **até o nível acima** ou **subindo um desnível** que você digita.
2. Escolha como ela é definida: **pela inclinação** (1:12 para começar; a rampa tem o comprimento que o desnível exigir) ou **pelo comprimento** (seu segundo clique define o comprimento, e a inclinação segue).
3. Clique no pé da rampa (o meio da sua aresta inferior) e depois clique no sentido da subida. A pré-visualização mostra seu comprimento, seus lances e sua inclinação.

Um desnível maior que 30 polegadas (760 mm) é dividido em lances, com um patamar de 5 pés (1525 mm) entre eles. São valores comuns de planejamento, não exigências de norma: confira as regras do local onde você constrói. Uma rampa mais íngreme que 1:12 é sinalizada nas suas {{ui:Properties}}.

## O que você deve ver

- Cada piso, abertura e rampa é uma etapa: {{key:Mod+Z}} a desfaz.
- Na planta, o contorno de um piso desenhado (uma abertura é desenhada cruzada), e o contorno de uma rampa, seus lances, patamares e uma seta para cima com sua inclinação.
- Propriedades de um piso desenhado (tipo, uso, espessura, topo, área, aberturas) e de uma rampa (largura, topo, desnível, inclinação ou comprimento); {{key:Delete}} remove qualquer um dos dois.
- Uma rampa até o nível acima acompanha esse nível quando a altura dele muda.
- No arquivo IFC: um piso desenhado é uma laje (IfcSlab, um piso ou um patamar) com suas aberturas recortadas (IfcOpeningElement); uma rampa é um IfcRamp formado por lances inclinados (IfcRampFlight) e lajes de patamar, com sua inclinação e largura.

:::note
Pisos desenhados desta forma permanecem onde você os desenhou. Pisos feitos com {{ui:Floor}} acompanham os ambientes quando as paredes são movidas: veja [Ambientes, pisos, forros e coberturas](topic:floors-and-roofs).
:::
