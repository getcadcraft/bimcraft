---
title: O terreno do local, a plataforma da edificação e a pavimentação
summary: Traga o terreno para o modelo a partir de pontos de levantamento, curvas de nível, uma varredura LAS / LAZ, um GeoTIFF, uma superfície LandXML (do CivilCraft) ou algumas cotas de nível; escave a plataforma da edificação da casa com seus taludes e corte / aterro; posicione entradas de veículos, passeios e pátios sobre ela; entregue ao CivilCraft como LandXML.
keywords: terreno, solo, local, topografia, levantamento, pontos, PNEZD, curvas de nível, LAS, LAZ, LiDAR, GeoTIFF, DEM, cota, cota de nível, greide, plataforma, plataforma da edificação, corte, aterro, terraplenagem, pé de talude, talude, entrada de veículos, passeio, pátio, pavimentação, LandXML, CivilCraft
from: 208298d6
---

## O que você vai fazer

Coloque a casa no seu local. O terreno passa a fazer parte do modelo: aparece em 3D, é cortado em cortes e elevações, com curvas de nível na planta. Uma plataforma da edificação é escavada sob a casa, entradas de veículos e passeios a acompanham, e as sapatas descem junto com ela.

## Traga o terreno

1. Abra {{ui:Build}} e escolha {{ui:Terrain}}.
2. Escolha uma das opções:
   - **Abrir um arquivo de levantamento…**: pontos de levantamento (PNEZD, PENZD ou simplesmente leste, norte, cota; separados por vírgula, tabulação ou espaço), curvas de nível em DXF ou DWG (polilinhas em sua cota, polilinhas 3D), uma varredura LAS ou LAZ (pontos do terreno mantidos, reduzidos a cerca de um por metro quadrado), um GeoTIFF ou uma grade de elevação ASCII, ou uma superfície **LandXML** como as que o CivilCraft exporta (seus próprios pontos e triângulos são mantidos; quando o arquivo contém várias superfícies, o BimCraft pergunta qual é o terreno; suas unidades vêm do arquivo). Escolha primeiro as unidades do arquivo (o LandXML informa as suas próprias).
   - Ou digite uma **Cota de nível** (a partir do piso deste pavimento, então `-1'` fica um pé abaixo dele) e clique em pontos na planta, altere a cota e clique em mais pontos, depois **Criar o terreno**. Três pontos bastam para começar.

Coordenadas de levantamento distantes do modelo (sistema de coordenadas planas, UTM) são movidas para cima da casa, e as cotas são definidas para que o terreno na casa fique cerca de 8" abaixo do primeiro piso. **Elevar o terreno** em **Propriedades** corrige isso em qualquer valor.

## A plataforma da edificação

1. Escolha {{ui:Building pad}}.
2. Defina a **Margem** em volta da casa, quanto a **plataforma fica abaixo do piso** (8" abaixo de uma laje, mais em um vão técnico) e os **Taludes** até o terreno existente (`2:1` = dois pés para fora a cada pé para cima ou para baixo).
3. Aponte dentro da casa e clique.

O terreno é nivelado sob a casa e até a margem, depois sobe em direção à encosta (corte) e desce até o lado baixo (aterro) até encontrar o terreno existente. As **Propriedades** do terreno e da plataforma informam os volumes de corte e aterro. Mova as paredes e a plataforma acompanha.

## Entradas de veículos, passeios e pátios

Escolha {{ui:Paving}}, selecione **Passeio**, **Entrada de veículos** ou **Pátio**, e clique nos cantos. Clique novamente no primeiro canto, dê duplo clique ou pressione {{key:Enter}} para concluir. A pavimentação segue o greide acabado; altere seu tipo ou espessura em **Propriedades**.

## As sapatas acompanham o greide

Com o terreno no modelo, os baldrames e as sapatas de vão técnico o seguem: ao longo de cada parede, a sapata mantém sua profundidade abaixo do terreno externo, descendo em degraus inteiros de 8" onde o terreno cai (veja [Fundações sob as paredes](topic:foundations)).

## Entregue ao CivilCraft

**LandXML para CivilCraft** (na linha Terreno, ou nas **Propriedades** do terreno) baixa o terreno existente e o greide final como um arquivo LandXML. Abra-o no CivilCraft para terraplenagem, drenagem e movimentação de terra reais.

## Bom saber

- O terreno exige um modelo IFC4, como toda edificação nova.
- As curvas de nível aparecem na planta do pavimento do terreno, no intervalo definido nas **Propriedades** do terreno; cada quinta é mais grossa.
- O terreno é salvo como um elemento de terreno IFC (uma superfície triangulada fechada, para que os cortes a cortem); a plataforma e a pavimentação são salvas junto. Exclua o terreno para começar de novo — a plataforma e a pavimentação dele vão junto.
