---
title: Kleur elemente volgens 'n eienskap
summary: Verf elke element volgens die waarde van een eienskap, soos sy klas, tipe, verdieping, materiaal, brandgraad of koste, lees die legenda, klik op 'n waarde om net daardie elemente te wys, en stoor die kleure as 'n skema om op ander modelle te gebruik.
keywords: kleur, kleure, kleur volgens, legenda, slim aansig, voorkoms, eienskap, tipe, materiaal, brandgraad, filter, isoleer, tema, waardes, skema, kleurskema, stoor kleure, hergebruik, span, json, monster
from: f081d343
---

## Wat jy sal doen

Sien in 'n oogopslag hoe 'n eienskap oor die model versprei is: watter mure eksterne is, watter materiale waar gebruik word, watter elemente geen brandgraad het nie. Elke element neem die kleur van sy waarde, en die legenda sê wat elke kleur beteken en hoeveel elemente dit het.

## Stappe

1. Maak 'n IFC-model oop.
2. Klik op die {{ui:Kleur}}-oortjie aan die regterkant.
3. Kies 'n eienskap in die lys. Die eerste een behoort aan elke element ({{ui:Klas}}, {{ui:Tipe}}, {{ui:Verdieping}}, {{ui:Materiaal}}, {{ui:Naam}}…); die res kom uit die model se eienskapstelle en hoeveelheidstelle, onder die stel se naam. Die getal na elkeen is hoeveel elemente dit het.
4. Lees die legenda: 'n kleur, die waarde en hoeveel elemente dit het.
5. Klik op 'n waarde om net daardie elemente te wys. Hou {{key:Mod}} vas en klik om meer waardes by te voeg. Druk {{key:Shift+H}} om weer alles te wys.
6. Klik op {{ui:Af}} om terug te gaan na die model se eie kleure.

## Wat jy behoort te sien

- Tot sewe waardes kry elk sy eie kleur, die algemeenste waarde eerste. Meer waardes as dit deel een grys, gelys as **ander waardes**.
- 'n Getal met baie verskillende waardes word in ses gelyke reekse verdeel, van lig (laag) tot donker (hoog).
- Elemente sonder die eienskap is 'n bleek grys, gelys as **Geen waarde**, sodat die gekleurde elemente uitstaan.
- Die kleure verander met Papier en Model, en bly staan terwyl jy die model wysig.
- 'n Tipe se eienskap tel vir elke element van daardie tipe; as 'n element sy eie waarde vir dieselfde eienskap het, wen sy eie waarde.

## Verander kleure en hou dit as 'n skema

- Klik op 'n waarde se monster in die legenda om 'n ander kleur daarvoor te kies. Die model word dadelik herverf.
- {{ui:Stoor skema}} laai die kleure af as 'n klein `.json`-lêer genoem na die eienskap, byvoorbeeld `Class colors.json`.
- Op 'n ander model, of op 'n spanmaat se rekenaar, klik op {{ui:Maak skema oop…}} en kies daardie lêer. Elke waarde in die skema kry sy kleur, sodat dieselfde brandgraad of stelsel dieselfde kleur in elke model is.
- 'n Waarde wat die skema nie het nie, word grys geverf en gelys as "nie in die skema nie"; waardes in die skema wat hierdie model nie het nie, bly gelys met 0, sodat jy die hele skema kan sien.
- 'n Skema hou sy kleure in albei temas. As jy 'n eienskap in die lys kies, begin dit weer by die outomatiese kleure.

## Algemene foute

- **"Hierdie model het geen … waardes nie."** Die skema is gestoor vir 'n eienskap wat hierdie model nie het nie ('n ander eienskapstelnaam, byvoorbeeld). Maak 'n skema oop wat vir hierdie soort model gemaak is, of kies 'n eienskap in die lys.

- **'n Eienskap ontbreek in die lys.** Geen element met 'n vorm in die model het dit nie. Eienskappe van verdiepings en ruimtes self word nie gelys nie.
- **Alles is dieselfde kleur.** Elke element het dieselfde waarde, of geen: kyk na die getalle in die legenda.

## Volgende

- [Versteek, isoleer en sien deur elemente](topic:hide-and-isolate)
- [Vind jou pad met die modelboom](topic:model-tree)
