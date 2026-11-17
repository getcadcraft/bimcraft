---
title: Unidades split, VRF e ventiloconvetores
summary: Coloque unidades interiores de parede, de cassete e de condutas, unidades exteriores split e VRF, juntas refnet e ventiloconvetores de 2 ou 4 tubos, cada um com as suas ligações de refrigerante, água, condensados e condutas, e desenhe entre eles os conjuntos de linhas dimensionados por uma tabela que pode alterar.
keywords: split, mini split, minisplit, multi split, vrf, vrv, fluxo de refrigerante variável, bomba de calor, unidade interior, unidade exterior, unidade condensadora, de parede, parede alta, cassete, de condutas, embutida, ventiloconvetor, fcu, 2 tubos, 4 tubos, refnet, junta de ramal, junta em Y, conjunto de linhas, lineset, refrigerante, linha de líquido, linha de gás, linha de aspiração, acr, cobre, condensados, avac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## O que vai fazer

Coloque as unidades de um sistema split, multi-split ou VRF e os seus ventiloconvetores no modelo, depois una-os com conjuntos de linhas: uma linha de líquido e uma linha de gás em cobre ACR, fixadas às portas das unidades. As unidades funcionam como qualquer outra peça de [Equipamento MEP com portas](topic:mep-equipment): a mesma barra, Propriedades, portas e [ligações](topic:mep-connections).

:::note
Trata-se de uma ajuda para desenho e coordenação. As unidades são formas genéricas dimensionadas pelos valores que escreve, e não produtos de um fabricante. As suas dimensões de tubo vêm de uma tabela de **valores típicos de exemplo** para equipamento R410A e R32, e não de nenhum fabricante: o manual de instalação do fabricante da unidade define as dimensões reais, e percursos longos ou grandes diferenças de altura as alteram. Altere a tabela, ou escreva as dimensões, para corresponder às unidades que usa.
:::

## Colocar uma unidade

1. Ative {{ui:Draw}}, abra {{ui:Build}} e escolha {{ui:Equipment}}.
2. Escolha o tipo e defina os seus valores:

| Tipo | Define | As suas portas |
|---|---|---|
| Unidade interior split, de parede | capacidade, linha de líquido e linha de gás, comprimento, profundidade, altura, dimensão do dreno de condensados | refrigerante líquido e gás, dreno de condensados (na extremidade direita, junto à parede) |
| Unidade interior split, de cassete | capacidade, linha de líquido e linha de gás, painel, corpo, altura, dimensão do dreno de condensados | refrigerante líquido e gás, dreno de condensados (num lado, junto ao topo) |
| Unidade interior split, de condutas | capacidade, linha de líquido e linha de gás, comprimento, largura, altura, aberturas de insuflação e de retorno, dimensão do dreno de condensados | saída de conduta de insuflação, entrada de conduta de retorno, refrigerante líquido e gás, dreno de condensados |
| Unidade exterior split | capacidade, linha de líquido e linha de gás, largura, profundidade, altura | refrigerante líquido e gás (no lado direito) |
| Unidade exterior VRF | capacidade, linha de líquido e linha de gás, largura, profundidade, altura | refrigerante líquido e gás (à frente, em baixo) |
| Junta refnet | linha de líquido ou de gás, a carga de cada ramal, o tubo em cada extremidade | entrada, ramal A, ramal B |
| Ventiloconvetor | 2 ou 4 tubos, comprimento, largura, altura, aberturas de insuflação e de retorno, tubo e sistema da serpentina, tubo de aquecimento, dimensão do dreno de condensados | saída de conduta de insuflação, entrada de conduta de retorno, serpentina de entrada e de saída, aquecimento de entrada e de saída (4 tubos), dreno de condensados |

3. Defina **A altura**: a altura da base da unidade acima do nível. A base de uma unidade de parede é a sua face inferior (muitas vezes 2100 mm); a de um cassete é a sua face no teto; a de uma refnet é a altura do eixo central do seu tubo.
4. Clique onde deve ficar ({{key:R}} roda-a 90°).

**Capacidade** é a capacidade nominal de arrefecimento da unidade em kW, com Btu/h ao lado. Com **Linha de líquido** e **Linha de gás** deixadas em **Da tabela**, as ligações da unidade tomam as dimensões da tabela para essa capacidade; escolha um diâmetro de tubo para usar o da sua própria unidade. A entrada de uma refnet é dimensionada para os dois ramais em conjunto, e cada ramal para a sua própria carga.

As portas de refrigerante funcionam nos dois sentidos (uma bomba de calor funciona em qualquer direção). O dreno de condensados é uma dimensão de tubo como qualquer outro dreno.

## Desenhar um conjunto de linhas

1. Escolha duas peças ({{key:Shift}}+clique na segunda): uma unidade exterior e uma unidade interior (um split simples), ou uma unidade exterior e uma refnet, uma refnet e uma unidade interior, ou duas refnets (VRF).
2. Abra {{ui:Build}} e escolha {{ui:Line set}}.

O BimCraft desenha os percursos de líquido e de gás entre as suas portas livres, saindo de cada porta e subindo até uma altura comum, em cobre ACR (cobre recozido em rolo até 1-5/8 in, tubo estirado acima disso), como um único passo de {{ui:Undo}}. Uma refnet recebe apenas a sua própria linha, entrando pela sua entrada a partir do lado exterior e saindo por um ramal em direção às unidades interiores. Cada percurso toma a dimensão da sua extremidade a jusante (a unidade interior, ou a entrada da refnet); quando a porta da outra extremidade tem outra dimensão, {{ui:Check connections}} indica-o: é aí que vai um redutor. Duas unidades interiores precisam de uma refnet entre elas.

Mova os percursos depois, como qualquer percurso de tubagem; as suas extremidades mantêm-se nas portas. Os percursos entre níveis desenham-se com {{ui:Pipe}}: um tubo iniciado numa porta de refrigerante toma o seu sistema, o cobre ACR e a sua dimensão.

## Alterar a tabela do conjunto de linhas

Abra {{ui:Build}} e escolha {{ui:Line set sizes}}. Cada linha indica: até esta capacidade (kW), este tubo de líquido e este tubo de gás.

| Até | Líquido | Gás |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Estes são os valores iniciais, típicos. Altere uma linha, acrescente ou retire linhas e escolha {{ui:Save}}: a tabela fica guardada no modelo, para que todos os que trabalham no ficheiro usem a mesma, e {{ui:Undo}} a repõe. {{ui:Use the typical values}} repõe a tabela inicial. As peças já colocadas mantêm as suas portas até as alterar.

## No ficheiro IFC

As unidades interiores e exteriores dos sistemas split e VRF são IfcUnitaryEquipment do tipo SPLITSYSTEM, sendo o tipo de objeto que indica qual ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Um ventiloconvetor é um IfcUnitaryEquipment do tipo AIRHANDLER com o tipo de objeto "Fan coil unit": o IFC4 não tem tipo para ventiloconvetor, e um ventilador, uma serpentina e um filtro para uma divisão é o que AIRHANDLER descreve. Uma junta refnet é um IfcPipeFitting do tipo JUNCTION ("Refnet joint"). Os ficheiros IFC2X3 recebem IfcEnergyConversionDevice e IfcFlowFitting com os tipos correspondentes.

As portas e os percursos de refrigerante estão nos sistemas REFRIGERATION (um para as linhas de líquido, outro para as linhas de gás), e os condensados num sistema DRAINAGE. Os percursos ACR são nomeados pelo diâmetro exterior. A tabela de conjuntos de linhas é o conjunto de propriedades CadCraft_HvacLineSets do projeto.

Ver também: [Equipamento MEP com portas](topic:mep-equipment), [Ligar tubos e condutas a equipamento](topic:mep-connections) e [Tubos e condutas](topic:pipes-and-ducts).
