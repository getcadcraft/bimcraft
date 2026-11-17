---
title: Mudelirühmad
summary: Tee valitud elementidest üks nimega rühm, paiguta rühm uuesti mujale ja muuda ühte koopiat, et muutuksid kõik.
keywords: rühm, mudelirühm, grupeerimine, grupeeringu tühistamine, eksemplar, koopia, kordus, tüüpiline moodul, travee, korter, rühma muutmine, IfcGroup
from: 121c5027
---

## Mida sa teed

Grupeeri tüüpiline travee, paiguta see mitu korda ja muuda üht koopiat, et muutuksid kõik.

## Kus tööriist asub

- Lindi paigutus: {{ui:Arhitektuur}} › **Mudel** › {{ui:Mudelirühm}}.
- Klassikaline paigutus: joonistusriba › {{ui:Ruumid}} menüü › Mudelirühm.

## Sammud

1. Vali tööriistaga {{ui:Vali}} elemendid: klõpsa ühele, Ctrl+klõps või Shift+klõps teistele.
2. Vali {{ui:Mudelirühm}}. Need muutuvad kohe rühmaks. Enne sisesta reale {{ui:Rühma nimi}}, et seda nimetada, või sisesta see hiljem, et nime muuta.
3. Vajuta {{ui:Paiguta veel üks}} ja klõpsa kohta, kuhu koopia peaks jääma: koopia alumise vasaku nurk läheb klõpsu kohta.
4. Muuda ükskõik millist koopiat: liiguta seina otsa, muuda ukse suurust, kustuta post. Iga teine rühma koopia muutub samas sammus ja üks tagasivõtmine (Võta tagasi) võtab kõik tagasi.
5. Kui {{ui:Mudelirühm}} on sul käes, võtab klõps elemendil kogu tema rühma.

## Muud, mida saad teha

- {{ui:Lisa valitud}}: lisa eelmiselt valitud rühmale veel elemente.
- {{ui:Tühista grupeering}}: see koopia muutub taas tavalisteks elementideks. Teised koopiad jäävad rühmaks.
- Liiguta kogu koopiat tööriistaga {{ui:Teisalda}}: see on sama rühm uues kohas; teised ei liigu.
- Kustuta koopia elemendid ja koopia on kadunud.

## Mis võib rühmas olla

Seinad koos oma uste ja akendega, postid ja joonistatud põrandad võib uuesti paigutada ja hoida samasugused. Rühm võib sisaldada ka teisi elemente, kuid siis ei saa seda veel uuesti paigutada; rida ütleb põhjuse.

Koopiaid teisaldatakse, neid ei pöörata ega peegeldata.

## IFC-s

Rühm on IfcGroup, millel on IfcRelAssignsToGroup oma liikmetega; liikmed jäävad tavalisteks seinteks, postideks ja põrandateks. Iga ühe rühma koopia kannab sama definitsiooni ID-d.

## Veel tegemata

- Koopia pööramine või peegeldamine.
- Trepid, katused, ruumipõrandad ja raamatukogu üksused rühmas, mida uuesti paigutatakse.
- Seina profiil, kalle ja seina avad ei kandu koopiatesse.
- Rühmad rühmade sees.

Vaata ka [Teisalda, joonda ja jaota](topic:move-align-distribute).
