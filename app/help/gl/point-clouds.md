---
title: Mostrar unha nube de puntos xunto ao modelo
summary: Abra un escaneo láser (LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ) na vista 3D por si só ou cun modelo IFC, coloréeo, corte unha fina lámina a través del, meda ata os seus puntos e envíeo ao programa de debuxo para trazar as liñas tal como foron construídas.
keywords: nube de puntos, escaneo láser, escaneo, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tal como construído, levantamento, rexistro, corte, corte en planta, encaixe, medir, trazar, escaneo a BIM
from: d0a3e740
---

## Que farás

Vea un escaneo láser dun edificio xunto ao seu modelo: comprobe que o construído coincide co deseño, meda entre puntos escaneados e corte unha fina lámina para ler muros, portas e piares.

## Pasos

1. Abra a nube: {{ui:Open}} un ficheiro `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ou `.xyz`, ou arrástreo á páxina (consulte o tema sobre os formatos de nube de puntos para saber o que trae cada un e que exportar desde o software propio dun escáner). Con un modelo aberto, a nube únese ao modelo na vista 3D; abrir unha nube nunca pecha o modelo nin os seus cambios sen gardar. Sen modelo, a nube ábrese por si soa.
2. A barra da nube aparece debaixo da barra de ferramentas. Indica cantos puntos se mostran e cantos ten o ficheiro.
3. Escolla {{ui:Color by}}: as cores propias do ficheiro (cando o escáner as gardou), {{ui:Height}}, {{ui:Intensity}}, {{ui:Class}} (clases LiDAR como chan, vexetación e edificio) ou {{ui:One color}}. {{ui:Size}} fai os puntos máis grandes ou máis pequenos.
4. Prema {{ui:Plan}} baixo {{ui:Slice}} para manter só unha fina banda 1,2 m por riba do punto máis baixo, vista desde arriba: muros, aberturas de portas e piares len como unha planta. {{ui:Front}} e {{ui:Side}} cortan bandas verticais para alzados e seccións. Mova a banda con {{ui:At}} e cambie {{ui:Thickness}} (en metros). {{ui:Off}} volve mostrar a nube completa.
5. Prema {{ui:Measure}} na barra de ferramentas. O punteiro encaixa nos puntos da nube (a etiqueta indica "nube de puntos"), así que pode medir de muro a muro no corte, ou dun elemento do modelo ao escaneo. Unha esquina ou borde do modelo ao alcance seguen tendo prioridade.
6. Con {{ui:Measure}} › {{ui:Location}}, un punto da nube dá a súa latitude e lonxitude segundo o sistema de coordenadas propio da nube, cando o ficheiro o indica.
7. {{ui:Hide}} oculta a nube por un momento; {{ui:Remove}} sácaa. {{ui:Show}} › {{ui:Point cloud}} oculta ou mostra a barra.

## Onde vai a nube

{{ui:Place}} na barra indica como se aliña a nube co modelo:

- **Coordenadas do modelo**: os números da nube son os propios do modelo (un escaneo rexistrado nas coordenadas do deseño).
- **Coordenadas cartográficas**: o modelo ten unha conversión cartográfica (IfcMapConversion) e a nube está no mesmo sistema proxectado: a nube colócase a través dela. Se os dous nomean sistemas diferentes, a liña de estado indícao.
- **Centrada no modelo**: cando ningunha das dúas coloca a nube preto do modelo, o seu centro vai ao centro do modelo e o seu punto máis baixo ao chan do modelo. Escolla outra opción para anulalo.

Cando o ficheiro non indica as súas unidades, BimCraft le metros e ofrece {{ui:Units}} na barra.

## Trace as liñas tal como foron construídas

Prema en {{ui:Trazar en CadCraft}} para pasar a nube ao programa de debuxo nunha nova lapela. Ábrese alí debaixo do debuxo, onde un corte en planta e o encaixe a obxectos permítenlle debuxar os muros sobre o escaneo. Consulte o tema de CadCraft sobre nubes de puntos.

## Cantos puntos

Un escaneo pode ter centos de millóns de puntos. BimCraft le cada punto unha vez e conserva unha parte uniforme deles para debuxar: {{ui:Show}} na barra fixa cantos (1, 2, 5 ou 10 millóns). Máis puntos precisan máis memoria e unha tarxeta gráfica máis rápida. Os recontos por clase LiDAR refírense a todos os puntos do ficheiro.

:::note
Os ficheiros léense neste computador; non se envía nada. Léense LAS 1.0–1.4 e LAZ (ficheiros LAZ ata 1 GB, mantidos en memoria mentres se len); E57 ata 6 millóns de puntos e 512 MB por agora (escaneos máis grandes: exporte LAS ou LAZ); PLY, PCD e PTX completos; as nubes de texto son `x y z`, con columnas de cor (`r g b`) e intensidade cando están.
:::

## Varios escaneos

Os escaneos tomados desde posicións diferentes pódense rexistrar nun só marco, afinar con ICP e exportar como un único LAS ou E57: consulte [Rexistrar varios escaneos nun só](topic:register-scans).
