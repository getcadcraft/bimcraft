---
title: Quantitats cap a TakeoffCraft
summary: Un clic envia les quantitats del model a TakeoffCraft —murs per tipus, cobertes per àrea inclinada, cumeres, limatesses i valls, fonamentacions, portes i finestres, armaris, dispositius elèctrics, àrea de planta i la llista de talls de fusta—, marcades en un plànol de cada nivell, amb els conjunts dels paquets d'oficis als elements.
keywords: amidament, amidament de quantitats, pressupost, pressupostació, llista de materials, takeoffcraft, quantitats, àrea de paret, àrea de coberta, quadrats, sabata, formigó, iardes cúbiques, llista de talls, fusta, paquet d'oficis, preu descompost
from: c5a745af
---

## Què hi fareu

Convertiu el model en una llista de materials i un pressupost a TakeoffCraft. BimCraft dibuixa un plànol de cada nivell a una escala estàndard, marca cada quantitat sobre ell, i posa l'amidament dins del PDF. TakeoffCraft mesura les marques per si mateix, de manera que cada xifra es pot comprovar al plànol.

## Enviar-ho

1. Feu clic a {{ui:Amidaments}} a la barra del model (al costat de {{ui:Fulls}}).
2. TakeoffCraft s'obre en una pestanya nova amb els plànols. Quan ho demani, trieu obrir l'amidament que ha trobat al PDF.
3. Afegiu els vostres preus a la taula de quantitats de TakeoffCraft; els conjunts ja llisten els materials.

:::note
Quan TakeoffCraft no és disponible aquí, el botó baixa el PDF en lloc d'obrir-lo. Obriu-lo més tard a TakeoffCraft: hi troba l'amidament dins.
:::

## Què es mesura

- **Murs** per tipus i alçada: les seves línies d'eix com a trams, amb l'alçada del mur a l'element, de manera que TakeoffCraft en dóna la longitud i l'àrea del mur. Cada tram porta les portes i finestres del mur, i TakeoffCraft les resta de l'àrea del mur una sola vegada, amb la mateixa regla que els quadres de BimCraft: els dos coincideixen en brut, deduccions i net. Les dades d'amidament d'un tipus de mur (unitat, morter, tarifa; vegeu [Conjunts de murs](topic:wall-assemblies)) arriben com una línia preuada a l'element d'aquell tipus. Amb un mètode de mesura diferent del per defecte (vegeu [Trieu un mètode de mesura](topic:plan-schedules-and-pdf#choose-a-measurement-method)), l'amidament porta el mètode, cada tram porta el que les unions descompten de la seva cara de mur, i TakeoffCraft mesura pel mateix mètode i li posa el nom. Un tipus amb una unitat que té longitud i alçada lliura dos components amb quantitats: les unitats a demanar i el volum de morter, preuats quan la tarifa del tipus és per unitat, per 1000 unitats o per m³ de morter. Un recompte que cau exactament en un nombre sencer pot ser una unitat més alt a TakeoffCraft, perquè el lliurament arrodoneix les posicions del plànol.
- **Cobertes**: cada pla de coberta com una àrea amb la seva pendent (TakeoffCraft en dóna l'àrea inclinada), cumeres, limatesses i valls (limatesses i valls segons el seu pendent), ràfecs i vores laterals.
- **Fonamentacions**: sabates i murs de fonamentació com a trams pel seu centre, lloses com a àrees amb el seu gruix, de manera que el formigó surt per volum.
- **Portes i finestres** comptades per tipus, amb el marc de les finestres.
- **Armaris de base** per la longitud de les seves façanes.
- **Dispositius elèctrics** comptats per tipus.
- **Àrea de planta** de cada nivell, a partir de les seves sales.
- **La llista de talls de fusta** de l'entramat, comptada en un full propi (un punt per peça).

Quan un paquet d'oficis té un conjunt corresponent —murs exteriors i interiors, lloses, sabates, murs de fonamentació, teules, cumbrera i limatesa, valls, ràfecs, portes interiors, marc de finestra, armaris de base, endolls, interruptors, llums, caixes de connexió i el quadre—, l'element arriba amb els seus materials i fórmules. Els paquets arriben sense preus i encara no han estat revisats per cap pressupostador.

:::tip
Els plànols es fan cada vegada a partir del model en el moment que feu clic, de manera que després d'un canvi només cal tornar a fer clic a {{ui:Amidaments}}.
:::
