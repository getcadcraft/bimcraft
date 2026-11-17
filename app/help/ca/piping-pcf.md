---
title: Envia tub a un programa d'esforços o isomètric, i llegeix-lo de nou (PCF)
summary: Escriviu els recorreguts de tub del model com a fitxer de components de canonada PCF, o llegiu un fitxer PCF d'un programa d'esforços de tub o d'isomètrics i dibuixeu-ne el tub com a recorreguts.
keywords: pcf, fitxer de components de canonada, esforços de tub, isomètric, isomètrics, exporta, importa, canonada, planta, tub d'acer, mou un projecte, altre programari
from: 24f91355
---

## Què farà

El PCF és el fitxer de text pla que llegeixen i escriuen els programes d'esforços de tub i d'isomètrics. Llista els components de cada conducció amb els seus punts extrem i els seus diàmetres nominals.

## Exporta

1. Trieu l'eina Tub. La fila d'opcions mostra **Exporta PCF**.
2. Feu-hi clic. S'escriu cada recorregut de tub del model: tub recte, colzes (un gir de 90 graus, en cas contrari, una corba), te amb el seu punt de branca, reductors i vàlvules.
3. El fitxer fa servir mil·límetres. Els diàmetres són diàmetres nominals en mil·límetres. El punt central d'un colze és el seu cantó, on es troben les seves dues cames.

El PCF s'escriu per a tub d'acer amb soldadura a topall. Un recorregut d'un altre material també s'escriu, amb claus de components d'acer, i se'n deixa constància al panell de Problemes.

## Importa

1. Trieu l'eina Tub i feu clic a **Importa PCF…**, i després trieu el fitxer.
2. Del tub recte als colzes, les corbes, les vàlvules i les brides es converteix en un sol recorregut al nivell actual. Un canvi de mida inicia un recorregut nou. La branca d'una te es converteix en un recorregut propi que comença al centre de la te.
3. El model fa els seus propis accessoris. Els reductors i les te no es copien: apareixen on es troben recorreguts de mides diferents, o una branca.

:::note
Les alçades del fitxer es llegeixen com a alçades sobre el nivell actual. Les càrregues, les restriccions i l'anàlisi d'esforços en si no són en un fitxer PCF i no es transfereixen.
:::

## Comproveu què ha arribat

- La longitud total de tub per conducció ha de coincidir amb la de l'original.
- El panell de Problemes enumera, una vegada cadascun, un colze el punt central del qual no està a la mateixa distància dels dos extrems, un tub sense longitud, i un diàmetre que no és una mida estàndard.

## Canonades que ja hi ha en un fitxer IFC

Quan hi ha un fitxer IFC obert, **Exporta PCF** també escriu els seus propis segments de tub, accessoris i vàlvules, al costat dels recorreguts que heu dibuixat. Un segment obté els seus extrems dels seus ports, o dels extrems del seu cos. Un accessori sense ports queda fora, i el panell de Problemes ho indica. Podeu exportar només des de l'IFC quan el model no té recorreguts dibuixats.

En importar, els suports, els olets, les brides, les juntes i els tapons del fitxer no es dibuixen. El panell de Problemes enumera quants de cada tipus s'han deixat fora, perquè res no desaparegui en silenci.
