---
title: Um mapa no terreno, por baixo do modelo
summary: Coloque um mapa de ruas ou uma imagem aérea no terreno por baixo de um modelo IFC georreferenciado, a partir de mosaicos de mapa, serviços de mapas ou uma imagem com um ficheiro de mundo.
keywords: mapa, camadas de mapa, mapa base, aéreo, satélite, local, terreno, mosaicos, xyz, wms, wmts, serviço de mapas, ficheiro de mundo, georreferenciação, ifcmapconversion, CRS projetado, EPSG, contexto do local
from: 84e2e9df
---

## Objetivo

Ver o modelo no seu lugar: o mapa de ruas ou a imagem aérea do local por baixo dele, no terreno.

## Passos

1. Abra um modelo IFC que tenha o seu lugar no mapa (uma conversão de mapa, IfcMapConversion, com um sistema de coordenadas projetado). Os exportadores escrevem-na quando as coordenadas do projeto (ponto de levantamento, coordenadas partilhadas) estão definidas.
2. Escolha {{ui:Mostrar}} › {{ui:Camadas de mapa…}}. A caixa indica o sistema do modelo, por exemplo EPSG:28356. Um modelo sem conversão de mapa não pode ter camadas de mapa: a caixa diz-o.
3. Ative {{ui:Camadas de mapa da internet}}. Até lá, nenhum servidor é consultado; quando está ativa, os servidores que acrescenta veem a área à volta do modelo e o seu endereço de internet, nunca o modelo.
4. Em {{ui:Adicionar uma camada}}, escolha mosaicos (um endereço com `{z}`, `{x}` e `{y}`), um serviço WMS, WMTS ou ArcGIS ({{ui:Obter camadas}}, e depois escolha uma), ou uma imagem com o seu ficheiro de mundo.
5. Feche a caixa. O mapa fica no terreno, logo abaixo do ponto mais baixo do modelo, sobre a área de implantação do modelo e a mesma distância à volta.

:::note
O mapa existe apenas no ecrã; não é guardado no ficheiro IFC. A lista de camadas fica guardada neste navegador. Utilize apenas serviços de mapas cujas condições o permitam.
:::
