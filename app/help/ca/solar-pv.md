---
title: Matrius solars FV, ombres i producció
summary: Col·loqueu matrius solars a teulades o al terreny, calculeu-ne les ombres a partir del model, estimeu l'energia anual, dimensioneu les cadenes i genereu les dades de l'esquema unifilar. Totes les dades d'entrada es mostren, i el mòdul inicial i les pèrdues són genèrics.
keywords: solar, fv, fotovoltaica, matriu, mòdul, teulada, ombres, producció, kwh, kwp, dimensionat de cadenes, inversor, unifilar, esquema unifilar, inclinació, azimut, separació entre files
from: adf4aaf3
---

## Què hi fareu

Obriu el tauler **Solar FV**. Trieu una cara de teulada (la inclinació i l'orientació se'n llegeixen del model) o disposeu una matriu al terreny amb una inclinació i una orientació. Els mòduls s'hi encaixen amb retrocessos i es compten, i això dóna la potència en CC en kWp. En col·locar la matriu, s'escriu al model com a dispositius solars, en un sol pas de desfer.

## Ombres, producció i cadenes

- **Ombres** llança un raig des de cada mòdul cap al sol, per a dies típics de cada mes, contra la geometria del propi model, de manera que compten els edificis veïns, els pretils i les files de davant. Només es redueix la llum solar directa, i una matriu parcialment ombrejada perd potència en proporció.
- **Producció** dona els kWh per mes i any, els kWh per kWp i la relació de rendiment. La irradiació prové dels vostres totals mensuals sobre una superfície horitzontal, si els escriviu. Sense ells, el tauler usa un límit superior de cel serè, i ho indica. **Obté el clima de NASA POWER** amb un botó de la pestanya Producció: només envia la latitud i la longitud del solar, una sola vegada, i guarda la resposta en aquest ordinador (comprovat des del navegador el 2026-10-30). PVGIS no permet que una pàgina web llegeixi la seva resposta, així que la pestanya dona un enllaç que obre en una pestanya nova les dades mensuals de PVGIS per al solar; enganxeu el que mostri a la casella i els dotze mesos s'ompliran.
- **Cadenes** comprova els mòduls per cadena amb la finestra de tensió de l'inversor en el dia més fred i en el més calent, i les cadenes en paral·lel amb el seu corrent.
- **Unifilar** genera les dades del diagrama (matriu, caixa de combinació, seccionador, inversor, quadre i xarxa) amb les mides de cable i de fusible a partir dels factors que escriviu. Són dades i un SVG; el complement Electrical de CadCraft les pot col·locar com a símbols.

El mòdul, l'inversor, les pèrdues i els factors de cable que vénen amb BimCraft són exemples genèrics, marcats en cada resultat. Escriviu les dades del fabricant i els valors normatius amb què dissenyeu, i feu revisar el disseny per la persona que n'és responsable.
