---
title: O terreno do local, a plataforma do edifício e a pavimentação
summary: Trazer o terreno para o modelo a partir de pontos de levantamento, curvas de nível, uma digitalização LAS / LAZ, um GeoTIFF, uma superfície LandXML (do CivilCraft) ou algumas cotas pontuais; escavar a plataforma do edifício com os seus taludes e calcular escavação / aterro; aplicar entradas, passeios e pátios sobre ela; entregá-lo ao CivilCraft em LandXML.
keywords: terreno, solo, implantação, topografia, levantamento, pontos, PNEZD, curvas de nível, LAS, LAZ, LiDAR, GeoTIFF, DEM, cota, cota pontual, rasante, nivelamento, plataforma, plataforma do edifício, escavação, aterro, movimentação de terras, linha de intersecção do talude, talude, entrada de garagem, passeio, pátio, pavimentação, LandXML, CivilCraft
from: 208298d6
---

## O que vai fazer

Colocar a casa no seu local. O terreno passa a fazer parte do modelo: é mostrado em 3D, cortado em cortes e alçados, com curvas de nível na planta. Sob a casa é escavada uma plataforma do edifício, os acessos e os passeios seguem o terreno, e as sapatas descem com ele.

## Trazer o terreno

1. Abrir {{ui:Build}} e escolher {{ui:Terrain}}.
2. Escolher uma das opções:
   - **Abrir um ficheiro de levantamento…**: pontos de levantamento (PNEZD, PENZD ou simplesmente Este, Norte, cota; separados por vírgula, tabulação ou espaço), curvas de nível num DXF ou DWG (polilinhas à sua cota, polilinhas 3D), uma digitalização LAS ou LAZ (pontos do terreno mantidos, reduzidos a cerca de um por metro quadrado), um GeoTIFF ou uma grelha de cotas em ASCII, ou uma superfície **LandXML** como as que o CivilCraft exporta (os seus próprios pontos e triângulos são mantidos; quando o ficheiro tem várias superfícies, o BimCraft pergunta qual é o terreno; as unidades vêm do ficheiro). Escolher primeiro as unidades do ficheiro (o LandXML indica as suas próprias).
   - Ou escrever uma **Cota pontual** (a partir do piso deste nível, por isso `-1'` é um pé abaixo dele) e clicar em pontos na planta, alterar a cota e clicar em mais pontos, e depois **Criar o terreno**. Três pontos chegam para começar.

As coordenadas de levantamento distantes do modelo (sistema de coordenadas planas, UTM) são deslocadas para cima da casa, e as cotas são definidas de modo que o terreno junto à casa fique cerca de 8" abaixo do primeiro piso. **Elevar o terreno** em **Propriedades** corrige isso em qualquer valor.

## A plataforma do edifício

1. Escolher {{ui:Building pad}}.
2. Definir a **Margem** à volta da casa, a distância a que a **plataforma fica abaixo do piso** (8" abaixo de uma laje, mais abaixo num vão técnico) e os **Taludes** até ao terreno existente (`2:1` = dois pés para fora por cada pé para cima ou para baixo).
3. Apontar para dentro da casa e clicar.

O terreno fica aplanado sob a casa e até à margem, depois sobe para a encosta (escavação) e desce para o lado baixo (aterro) até encontrar o terreno existente. As **Propriedades** do terreno e da plataforma dão os volumes de escavação e aterro. Ao mover as paredes, a plataforma acompanha-as.

## Entradas, passeios e pátios

Escolher {{ui:Paving}}, selecionar **Passeio**, **Entrada de garagem** ou **Pátio**, e clicar nos cantos. Clicar de novo no primeiro canto, clicar duas vezes ou premir {{key:Enter}} para terminar. A pavimentação segue a rasante final; alterar o seu tipo ou espessura em **Propriedades**.

## As sapatas acompanham a rasante

Com o terreno no modelo, os muros de embasamento e as sapatas do vão técnico seguem-no. Ao longo de cada parede, a sapata mantém a sua profundidade abaixo do terreno exterior, descendo em degraus completos de 8" onde o terreno desce (ver [Fundações sob as paredes](topic:foundations)).

## Entregar ao CivilCraft

**LandXML para CivilCraft** (na linha Terreno natural, ou nas **Propriedades** do terreno) transfere o terreno existente e a rasante final como um ficheiro LandXML. Abri-lo no CivilCraft para a modelação do terreno, a drenagem e a movimentação de terras a sério.

## Bom saber

- O terreno precisa de um modelo IFC4, como qualquer edifício novo.
- As curvas de nível aparecem na planta do nível do terreno com o intervalo definido nas **Propriedades** do terreno; cada quinta é mais grossa.
- O terreno é guardado como um elemento de terreno IFC (uma superfície triangulada fechada, para que os cortes a atravessem); a plataforma e a pavimentação são guardadas com ele. Para recomeçar, eliminar o terreno: a sua plataforma e pavimentação vão com ele.
