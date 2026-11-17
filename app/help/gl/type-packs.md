---
title: Paquetes de tipos: compartir tipos de muro como ficheiros abertos
summary: Gardar tipos de muro coas súas capas, materiais, etiquetas e códigos de clasificación, e familias, como un ficheiro aberto (JSON simple ou IFC), e engadilos a outro proxecto. Tamén se poden ler tipos de muro dun IFC doutro programa.
keywords: paquete de tipos, tipos, tipo de muro, compartir, exportar, importar, biblioteca, formato aberto, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiais, capas, modelo, norma da oficina, familias
from: e4c91331
---

## O que vai facer

Leve os seus tipos de muro dun proxecto a outro, ou entréguelos a alguén que traballa noutro programa. Un paquete de tipos contén cada tipo de muro coas súas capas, grosores, materiais, núcleo, cavidades, prioridade de capas, nivel de desenvolvemento, datos de medición e códigos de clasificación, e as familias que engada. É un ficheiro aberto: texto JSON simple que calquera pode ler, ou un ficheiro IFC. Nada nel está atado a unha empresa, a un país ou a unha conta.

## Gardar tipos dun proxecto

1. Abra **Datos** na barra do modelo e escolla {{ui:Paquetes de tipos}}.
2. Baixo {{ui:Gardar os tipos deste proxecto}}, marque os tipos de muro que quere incluír. Os tipos propios do proxecto aparecen marcados; un tipo inicial pódese engadir e entra como copia. Marque as familias se as quere incluír.
3. Escriba un {{ui:Nome do paquete}}.
4. {{ui:Gardar como paquete (.json)}} descarga un ficheiro `.cctypes.json`. {{ui:Gardar como IFC (.ifc)}} descarga un ficheiro IFC que só contén tipos: cada tipo de muro como IfcWallType, coa súa serie de capas de material, materiais e clasificación, para calquera programa BIM.

## Engadir tipos a un proxecto

1. No mesmo diálogo, escolla {{ui:Abrir un paquete ou un ficheiro IFC…}} e seleccione un paquete `.json` ou un ficheiro `.ifc`.
2. O diálogo mostra o que contén o ficheiro: cada tipo de muro co seu grosor, número de capas e códigos, os materiais e as familias.
3. Escolla que pasa con {{ui:Un tipo que este proxecto xa ten}}: **Conservar o do proxecto**, **Engadir o do paquete como copia** (recibe un novo nome que remata en "(2)"), ou **Substituír (só cando nada usa o tipo)**.
4. {{ui:Engadir ao proxecto}}. O diálogo mostra o que se engadiu, copiou, substituíu ou conservou. É un só paso de desfacer.

Os novos tipos aparecen de inmediato na lista de tipos da ferramenta Muro.

## Tipos de chan, cuberta e teito

A lista de tipos a gardar tamén contén os tipos de chan, cuberta e teito do proxecto e os seus iniciais (marcados Chan, Cuberta, Teito). Un paquete pode levar os catro tipos; cada tipo indica a súa clase IFC (IfcWallType, IfcSlabType, IfcCoveringType). Un tipo de chan, cuberta ou teito que usen elementos non se substitúe desde un paquete: cámbieo no editor de tipos.

## Un tipo como elemento da Biblioteca

Marque exactamente un tipo e escolla **Gardar como elemento da Biblioteca…**. Garda un ficheiro `.cctype.json`: un elemento da Biblioteca da clase Tipos que contén ese tipo (as súas capas, materiais, LOD e códigos de clasificación). Súbao á Biblioteca para compartilo. **Abrir un paquete ou un ficheiro IFC** lee tamén ese elemento e engade o seu tipo ao proxecto como un paquete.

## Cousas que convén saber

- Un ficheiro IFC doutro programa tamén se pode abrir aquí. Lese cada un dos seus tipos de muro que teña capas de material: o nome, os materiais das capas, os grosores e calquera cavidade son do propio ficheiro. Cales capas son o núcleo e o que fai cada capa (acabado, estrutura, illamento) estímase; o tipo márcase **(estimado)** e debe comprobalo no editor de tipos de muro. Un tipo de muro sen capas déixase fóra e indícase o seu nome.
- Un material que o proxecto xa ten consérvase tal cal. Un novo material cun nome xa usado recibe "(paquete)" despois do seu nome.
- Un tipo que usan muros nunca se substitúe desde un paquete. Cámbieo no editor de tipos de muro, que move os seus muros como corresponde.
- Un código asignado a un muro non viaxa: pertence a ese muro. Un código asignado ao tipo sí viaxa.
- Un ficheiro cun campo que o formato non ten, unha capa cun material que falta, ou calquera cousa que non sexa texto simple recházase, e a mensaxe indica onde e por que.
- Aínda sen construír: tipos de chan, cuberta e teito (nesta versión non teñen tipos: cada un ten o seu propio grosor), tipos de porta e xanela distintos das familias, e tramas ou cores dun ficheiro doutro programa.
