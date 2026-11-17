---
title: Põrgete kontrollimine
summary: Leia kohad, kus ühe hulga elemendid põrkuvad teise hulga elementidega — kanalid läbi talade, seinad plaadisse — ühes mudelis või mitmes, tolerantsiga, ning muuda põrge probleemiks.
keywords: põrge, põrgete tuvastamine, põrkekontroll, kõva põrge, läbitungimine, kokkupõrge, koordineerimine, kattumine, tolerants, mep, konstruktsioon
from: 9cb12346
---

## Mida sa teed

Leia kohad, kus kaks elementide hulka üksteist segavad, näiteks kõik teenuste mudelis olev konstruktsiooni vastu, seejärel vaata iga kohta ja jäta alles need, mis loevad, probleemidena.

## Sammud

1. Ava IFC-mudel ja kui kontrollid mitme mudeli vahel, lisa teised nupuga {{ui:Lisa mudel…}}. Vaata [Vaata mitut IFC-mudelit koos](topic:several-models).
2. Ava vasakpoolsel paneelil {{ui:Põrkekontroll}}.
3. Väljadel {{ui:Kontrolli}} ja {{ui:Võrreldes}} vali kaks hulka: elemendid, mille valisid, klass (üle kõigi avatud mudelite), salvestatud otsinguhulk (vaata [Leia elemendid klassi, nime või omaduse järgi](topic:find)) või kõik.
4. Määra meetrites, kui palju kattumist ignoreerida. 0.01 ignoreerib elemente, mis vaid napilt puudutavad.
5. Klõpsa {{ui:Käivita}}. Kontroll töötab taustal; {{ui:Loobu}} peatab selle.
6. Klõpsa tulemusel, et seda vaadata: kaks elementi valitakse ja näidatakse, kõik muu on läbipaistev ning vaade suumib neile.
7. Klõpsa tulemuse all {{ui:Tee sellest probleem}}, et kirjutada see üles vahekaardil {{ui:Probleemid}}. Vaata [Probleemid ja BCF-failid](topic:issues-bcf).

## Mida peaksid nägema

- Põrked on loetletud mõlema elemendi nimedega (ja nende failidega, kui on avatud mitu mudelit) ning sellega, kui sügavalt nad kattuvad, sügavaimad enne.
- Pinnad, mis ainult puudutavad, näiteks sein, mis seisab plaadil, või uks oma avas, ei ole põrked.

## Hea teada

- See on põhiline kõva põrke kontroll: elemendid, mille pinnad ristuvad. Element, mis on täielikult teise sees peidus (toru seina sees), ei leita veel.
- Sügavus on see, kui palju kahe elemendi piirid vähimal määral kattuvad: juhis, mitte täpne mõõt.

## Edasi

- [Mõõda kaugusi, pindalu ja asukohti 3D-s](topic:measure)
- [Peida, isoleeri ja tee elemendid läbipaistvaks](topic:hide-and-isolate)
