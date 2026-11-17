---
title: Puntos para o replanteo e comprobacións do construído
summary: Numere os lugares que unha cuadrilla replantea a partir do modelo (centros de piares, extremos de muros, pernos de anclaxe, pasamuros, calquera elemento que escolla), escríbaos para unha estación total, e logo lea de volta os puntos construídos pola cuadrilla e vexa o que está fóra.
keywords: puntos de replanteo, replanteo, replantear, estaca, estacado, estación total, levantamento, ficheiro de puntos, csv, txt, pnezd, penzd, xyz, norte, leste, cota, construído, comprobación, tolerancia, desviación, pernos de anclaxe, centros de piares, extremos de muros, pasamuros, coordenadas de levantamento, conversión cartográfica
from: acea9606
---

A lapela {{ui:Puntos}} á dereita fai os puntos que unha cuadrilla replanta en obra a partir do modelo aberto, e comproba os puntos que mide despois.

## Crear os puntos

1. Abra un modelo IFC e a lapela {{ui:Puntos}}.
2. Marque o que replantear: **centros de piares** (o pé da liña central de cada piar), **extremos de muros** (os dous extremos do eixe de cada muro, na base), **pernos de anclaxe**, **pasamuros** (elementos cuxo nome ou tipo indica pasamuro) e os **elementos escollidos** (cada un no seu punto de colocación; escóllaos primeiro na vista).
3. Escolla o primeiro número e un prefixo, as coordenadas, as unidades, as columnas e o ficheiro:
   - **Modelo**: as coordenadas propias do ficheiro. **Cuadrícula de levantamento**: a cuadrícula cartográfica da xeorreferencia do modelo (móstrase só cando o IFC ten unha conversión cartográfica), en metros ou na unidade que escolla.
   - Columnas **PNEZD** (punto, norte, leste, cota, descrición), **PENZD** ou **XYZ**; **CSV** (comas) ou **TXT** (tabuladores).
4. Prema {{ui:Crear puntos}}: a lista mostrará os puntos e a vista márcaos en azul. {{ui:Descargar os puntos}} escribe o ficheiro.

Os puntos saen nunha orde fixa (por clase e, despois, en filas segundo o plano), así que volver facelos desde o mesmo modelo dá os mesmos números. O ficheiro é o que abre CivilCraft e o que escribe EXPORTPOINTS de CadCraft: un punto por liña, tres decimais, e unha descrición entre aspas cando contén unha coma.

## Comprobar os puntos construídos

Cando a cuadrilla envíe o que mediu, escolla unha **tolerancia** en milímetros e como emparellar os puntos (por **número de punto**, se conservaron os seus números, ou polo **disparo máis próximo**), e prema {{ui:Ler os puntos como construídos…}}. Lea o ficheiro coas mesmas unidades e coordenadas que escribiu.

Cada punto de deseño queda entón **dentro** da tolerancia, **fóra** dela ou **sen medir**, e calquera disparo que ninguén pediu é **extra**. A táboa dá as diferenzas na unidade que escolla na barra de ferramentas, cos pés amosados como polgadas decimais (construído menos deseño: leste, norte, altura e distancia en planta). A vista marca cada punto en verde ou vermello, cunha liña ata o disparo, e en gris cando non se mediu. {{ui:Informe (CSV)}} escribe a comparación completa.

Nada disto cambia o modelo. Aínda non está feito: replantear desde bordos de lousa, desde intersección de cuadrículas ou desde aberturas feitas por vostede, nin enviar puntos directamente a un instrumento; para iso use o ficheiro.
