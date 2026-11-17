---
title: Ingebedde koolstof en koste op die skedule
summary: Tel die ingebedde koolstof van die model op uit 'n oop, wysigbare faktortabel, en versprei pryse oor die 4D-skedule in 'n koste- en kontantvloeikurwe. Albei begin by waardes wat jy tik of invoer.
keywords: ingebedde koolstof, koolstof, co2, kgco2e, emissies, faktortabel, epd, 5d, koste, kontantvloei, s-kurwe, skedulekoste, pryse, hoeveelheidsopname-pryse
from: 83e82840
---

## Ingebedde koolstof

Maak die **Koolstof**-paneel oop. Elke element se hoeveelheid (volume, oppervlakte of lengte) word vermenigvuldig met 'n faktor uit die tabel, per lewensikluskomponent: die produkfase is verpligtend; vervoer en afval is opsioneel. Totale word volgens materiaal, klas en verdieping gegee, en per vierkante meter vloer.

**Die faktortabel is joune.** Die rye wat saam met BimCraft kom, is generiese beginwaardes van die regte grootte-orde. Hulle kom nie uit 'n databasis nie, is as ongekontroleer gemerk, en moet vervang word met die bron wat jy gebruik ('n EPD, 'n nasionale databasis, of jou firma se syfers). Wysig rye in die paneel, of voer die tabel in en uit as CSV of JSON. Rye wat jy byvoeg, oortrek die beginry met dieselfde id. Die tabel word in die model gestoor.

Elemente sonder 'n passing, of sonder 'n hoeveelheid, word as Probleme gelys en nie as nul getel nie.

## Koste op die 4D-skedule

Maak die **Koste**-paneel langs die 4D-skedule oop. Gee dit pryse (tik hulle, voer 'n CSV of JSON in, of bring TakeoffCraft se reëls), koppel elke prys aan modelmateriaal met sleutelwoorde, en dit prys elke taak se elemente. 'n Taak se koste word versprei oor sy begin- tot eindedae (eweredig, of swaar aan die voor- of agterkant), en die paneel teken die kumulatiewe kontantvloeikurwe per dag, week of maand, met koste per fase en pakket en wat beplan is teenoor wat op 'n datum gebou is. CSV uit. Niks word geprys totdat jy pryse gee nie: geen word saamgelewer nie.

## Geldeenheid

'n Prystabel kan sê in watter geldeenheid sy pryse is (drie letters, soos USD of EUR). Die 5D-paneel het 'n blokkie daarvoor; dit word saam met die pryse in die lêer gehou, en JSON-uitvoere dra dit. 'n Tabel wat voor dit gemaak is, of een waar jy dit leeg gelaat het, het geen geldeenheid nie: sy koste word as USD gewys, die skil se verstek, en die paneel en die lopende totale sê dit. Niks word tussen geldeenhede omgereken nie.
