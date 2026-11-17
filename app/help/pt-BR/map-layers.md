---
title: Um mapa no terreno sob o modelo
summary: Coloque um mapa de ruas ou uma imagem aérea no terreno sob um modelo IFC georreferenciado, a partir de tiles de mapa, serviços de mapa ou de uma imagem com um arquivo de mundo.
keywords: mapa, camadas de mapa, mapa base, aéreo, satélite, local, terreno, tiles, xyz, wms, wmts, serviço de mapa, arquivo de mundo, georreferência, ifcmapconversion, crs projetado, epsg, contexto do terreno
from: 84e2e9df
---

## O que você vai fazer

Veja o modelo no seu lugar: o mapa de ruas ou a imagem aérea do terreno sob ele.

## Etapas

1. Abra um modelo IFC que traz a sua posição no mapa (uma conversão de mapa, IfcMapConversion, com um sistema de coordenadas projetado). Os exportadores a gravam quando as coordenadas do projeto (ponto de levantamento, coordenadas compartilhadas) estão definidas.
2. Escolha {{ui:Exibir}} › {{ui:Camadas de mapa…}}. A caixa de diálogo informa o sistema do modelo, por exemplo EPSG:28356. Um modelo sem conversão de mapa não pode ter camadas de mapa: a caixa de diálogo informa isso.
3. Ative {{ui:Camadas de mapa da internet}}. Até então, nenhum servidor é consultado; quando estiver ativa, os servidores que você adicionar veem a área ao redor do modelo e o seu endereço de internet, nunca o seu modelo.
4. Em {{ui:Adicionar uma camada}}, escolha tiles (um endereço com `{z}`, `{x}` e `{y}`), um serviço WMS, WMTS ou ArcGIS ({{ui:Obter camadas}}, depois escolha uma), ou uma imagem com o seu arquivo de mundo.
5. Feche a caixa de diálogo. O mapa fica no terreno, logo abaixo do ponto mais baixo do modelo, sobre a projeção do modelo e a mesma distância ao redor dela.

:::note
O mapa aparece apenas na tela; ele não é salvo no arquivo IFC. A lista de camadas é mantida neste navegador. Use somente serviços de mapa cujos termos o permitam.
:::
