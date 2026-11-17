---
title: Trams d'acer per a canonades i fulls de trams
summary: Talleu un recorregut de tub d'acer amb soldadura a topall en trams, amb una longitud màxima i a les soldadures de obra que col·loqueu; numereu els trams i baixeu un full de tram per a cada un (vista 3D, longituds de tall, accessoris, soldadures, llista de materials) en PDF i CSV; els conductes obtenen una llista de talls de peces rectes.
keywords: tram, trams, full de tram, isomètric, fabricació, prefabricació, soldadura de obra, soldadura de taller, soldadura a topall, longitud de tall, llista de talls, llista de materials, bom, tub d'acer, schedule 40, número de línia, llista de talls de conductes, peces de conducte
from: 539f51de
---

## Què farà

Converteix un recorregut de tub d'acer en les peces que un taller solda i un muntador col·loca: trams no més llargs que una longitud que trieu, separats on col·loqueu soldadures de obra, cadascun amb el seu full.

Només el **tub d'acer amb soldadura a topall** es talla en trams (mides de tub ASME B36.10M, colzes de radi llarg ASME B16.9). El coure, el PVC i les unions PEX no són soldadures a topall, de manera que els seus recorreguts no tenen trams.

## Talla un recorregut en trams

1. Trieu un recorregut de tub d'acer. A Propietats, marqueu **Talla en trams**.
2. **Tram més llarg**: la longitud màxima de línia central que pot tenir un tram (6 m, unes 20 ft, per començar).
3. **Número de línia**: part del número de cada tram. Un recorregut nou en trams rep el següent número lliure del seu sistema.

Els trams es numeren al llarg del recorregut des del seu primer punt: `CHW-12-S01`, `CHW-12-S02`... (el sistema, el número de línia, el tram). Un tram creix peça a peça; la peça que el faria massa llarg n'inicia el següent, i una longitud recta més llarga que un tram es talla on el tram ja és ple.

## Col·loca soldadures de obra

1. Obriu {{ui:Compilació}} i trieu {{ui:Soldadura de obra}}.
2. Feu clic en un tub amb trams on va la soldadura de obra. Dins d'una longitud recta, el tub es talla allà; dins d'un accessori o d'una vàlvula, la soldadura es mou a la unió més propera.

Propietats enumera les soldadures de obra del recorregut, cadascuna amb {{ui:Suprimeix}}. Cada canvi és un pas de {{ui:Desfés}}.

## Fulls de trams

A Propietats d'un recorregut amb trams:

- {{ui:Fulls de trams (PDF)}}: una pàgina per tram. A l'esquerra, el tram en una vista isomètrica de 30°: les seves longituds rectes numerades, les soldadures de taller com a punts, les soldadures de obra marcades FW, i el nord del plànol. A la dreta, el número del tram, la mida, el schedule i la longitud, després les seves **longituds de tall**, **accessoris**, **soldadures** (una soldadura a topall de taller a cada unió dins del tram, una soldadura de obra on troba el tram següent) i la seva **llista de materials** amb el pes del tub (pes de tub d'extrem llis ASME B36.10M).
- {{ui:Llista de trams (CSV)}}: el mateix, un bloc per tram.

:::note
Les longituds de tall són d'extrem a extrem tal com s'han dibuixat: no es descompta cap separació d'arrel ni marge de soldadura. Els colzes són de radi llarg B16.9; les te, els reductors i les vàlvules són genèrics, dimensionats a partir del tub, no segons B16.9 ni un fabricant, i el full ho indica. No es donen pesos dels accessoris. Eina d'ajuda al dibuix i a la coordinació, dimensionada per un enginyer.
:::

## A l'arxiu IFC

Cada part d'un recorregut amb trams porta **CadCraft_Spool** amb el seu SpoolId, el recorregut, el número del tram dins el recorregut, i on comença i on acaba al llarg del recorregut. El recorregut manté les seves regles (tram més llarg, soldadures de obra, número de línia) en el seu propi conjunt, de manera que els trams tornen iguals en tornar a obrir el fitxer.

## Conductes: una llista de talls

Obriu {{ui:Compilació}} i feu clic a {{ui:Llista de talls de conductes}}: un CSV de les peces rectes de conducte per sistema, forma i mida, cada longitud recta tallada en peces de la **Longitud de peça** de la barra de conducte (1500 mm, unes 5 ft, per començar) i el que en sobra. Només longituds: sense juntes, calibres ni connectors.
