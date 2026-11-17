---
title: Unidades split, VRF e fan coil
summary: Posicione unidades internas de parede, cassete e dutadas, unidades externas split e VRF, junções refnet e fan coils de 2 ou 4 tubos, cada um com suas conexões de refrigerante, água, condensado e dutos, e desenhe entre eles os conjuntos de linhas dimensionados por uma tabela que você pode alterar.
keywords: split, mini split, minisplit, multi split, vrf, vrv, fluxo de refrigerante variável, bomba de calor, unidade interna, unidade externa, unidade condensadora, parede, parede alta, cassete, dutada, embutida, fan coil, fcu, 2 tubos, 4 tubos, refnet, junção de derivação, junção em Y, conjunto de linhas, lineset, refrigerante, linha de líquido, linha de gás, linha de sucção, acr, cobre, condensado, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## O que você vai fazer

Posicione as unidades de um sistema split, multi-split ou VRF e seus fan coils no modelo, depois una-os com conjuntos de linhas: uma linha de líquido e uma de gás em cobre ACR, fixadas nas conexões das unidades. As unidades funcionam como qualquer outra peça em [Equipamentos MEP com conectores](topic:mep-equipment): a mesma barra, Propriedades, conectores e [conexões](topic:mep-connections).

:::note
Este é um auxílio de desenho e coordenação. As unidades são formas genéricas dimensionadas pelos valores que você digita, não produtos de um fabricante. Os diâmetros dos tubos vêm de uma tabela de **valores típicos de exemplo** para equipamentos R410A e R32, não de nenhum fabricante: o manual de instalação do fabricante da unidade define os tamanhos reais, e trechos longos ou grandes diferenças de altura os alteram. Altere a tabela, ou digite os tamanhos, para corresponder às unidades que você usa.
:::

## Posicionar uma unidade

1. Ative {{ui:Desenhar}}, abra {{ui:Build}} e escolha {{ui:Equipamentos}}.
2. Escolha o tipo e defina seus valores:

| Tipo | Você define | Seus conectores |
|---|---|---|
| Unidade interna split, parede | capacidade, linha de líquido e de gás, comprimento, profundidade, altura, tamanho do dreno de condensado | refrigerante líquido e gás, dreno de condensado (na extremidade direita, junto à parede) |
| Unidade interna split, cassete | capacidade, linha de líquido e de gás, painel, corpo, altura, tamanho do dreno de condensado | refrigerante líquido e gás, dreno de condensado (em um lado, perto do topo) |
| Unidade interna split, dutada | capacidade, linha de líquido e de gás, comprimento, largura, altura, aberturas de insuflamento e retorno, tamanho do dreno de condensado | duto de insuflamento de saída, duto de retorno de entrada, refrigerante líquido e gás, dreno de condensado |
| Unidade externa split | capacidade, linha de líquido e de gás, largura, profundidade, altura | refrigerante líquido e gás (no lado direito) |
| Unidade externa VRF | capacidade, linha de líquido e de gás, largura, profundidade, altura | refrigerante líquido e gás (na frente, embaixo) |
| Junção refnet | linha de líquido ou de gás, a carga em cada derivação, o tubo em cada extremidade | entrada, derivação A, derivação B |
| Unidade fan coil | 2 ou 4 tubos, comprimento, largura, altura, aberturas de insuflamento e retorno, tubo e sistema da serpentina, tubo de aquecimento, tamanho do dreno de condensado | duto de insuflamento de saída, duto de retorno de entrada, serpentina entrada e saída, aquecimento entrada e saída (4 tubos), dreno de condensado |

3. Defina **Em**: a altura da base da unidade acima do nível. A base de uma unidade de parede é sua face inferior (geralmente 2100 mm); a de um cassete é sua face no forro; a de uma refnet é a altura do eixo central do seu tubo.
4. Clique onde ela vai ({{key:R}} gira em 90°).

**Capacidade** é a capacidade nominal de refrigeração da unidade em kW, com Btu/h ao lado. Com **Linha de líquido** e **Linha de gás** deixadas em **Da tabela**, as conexões da unidade assumem os tamanhos da tabela para essa capacidade; escolha um tamanho de tubo para usar o da sua unidade. A entrada de uma refnet é dimensionada para as duas derivações juntas, e cada derivação para a sua própria carga.

Os conectores de refrigerante funcionam nos dois sentidos (uma bomba de calor funciona em qualquer direção). O dreno de condensado é um tamanho de tubo como qualquer outro dreno.

## Desenhar um conjunto de linhas

1. Escolha duas peças ({{key:Shift}}+clique na segunda): uma unidade externa e uma interna (um split simples), ou uma unidade externa e uma refnet, uma refnet e uma unidade interna, ou duas refnets (VRF).
2. Abra {{ui:Build}} e escolha {{ui:Conjunto de linhas}}.

O BimCraft desenha os trechos de líquido e de gás entre suas conexões livres, saindo de cada conector e subindo até uma altura comum, em cobre ACR (rolo recozido até 1-5/8 in, tubo trefilado acima), como um único passo de {{ui:Desfazer}}. Uma refnet recebe apenas a sua própria linha: na entrada, vinda do lado externo, e na saída de uma derivação em direção às unidades internas. Cada trecho assume o tamanho de sua extremidade a jusante (a unidade interna ou a entrada da refnet); quando a conexão da outra ponta tem outro tamanho, {{ui:Verificar conexões}} a lista: é aí que vai uma redução. Duas unidades internas precisam de uma refnet entre elas.

Mova os trechos depois, como qualquer trecho de tubulação; as extremidades continuam nos conectores. Trechos entre pavimentos são desenhados com {{ui:Tubulação}}: uma tubulação iniciada em um conector de refrigerante assume seu sistema, o cobre ACR e o seu tamanho.

## Alterar a tabela de conjuntos de linhas

Abra {{ui:Build}} e escolha {{ui:Tamanhos do conjunto de linhas}}. Cada linha diz: até esta capacidade (kW), este tubo de líquido e este tubo de gás.

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

Estes são os valores iniciais, típicos. Altere uma linha, adicione ou remova linhas e escolha {{ui:Salvar}}: a tabela fica guardada no modelo, então todos que trabalham no arquivo a usam, e {{ui:Desfazer}} a desfaz. {{ui:Usar os valores típicos}} restaura a tabela inicial. Peças já posicionadas mantêm seus conectores até que você as altere.

## No arquivo IFC

As unidades internas e externas de sistemas split e VRF são IfcUnitaryEquipment do tipo SPLITSYSTEM, com o tipo de objeto indicando qual ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Um fan coil é IfcUnitaryEquipment do tipo AIRHANDLER com o tipo de objeto "Fan coil unit": o IFC4 não tem tipo para fan coil, e um ventilador, uma serpentina e um filtro para um ambiente é o que AIRHANDLER descreve. Uma junção refnet é um IfcPipeFitting do tipo JUNCTION ("Refnet joint"). Arquivos IFC2X3 recebem IfcEnergyConversionDevice e IfcFlowFitting com os tipos correspondentes.

Os conectores e trechos de refrigerante ficam em sistemas REFRIGERATION (um para as linhas de líquido, outro para as linhas de gás), e o condensado em um sistema DRAINAGE. Trechos ACR são nomeados pelo diâmetro externo. A tabela de conjuntos de linhas é o conjunto de propriedades CadCraft_HvacLineSets no projeto.

Veja também [Equipamentos MEP com conectores](topic:mep-equipment), [Conectar tubos e dutos a equipamentos](topic:mep-connections) e [Tubos e dutos](topic:pipes-and-ducts).
