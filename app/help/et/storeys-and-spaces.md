---
title: Korruste, ruumide ja servade näitamine ja peitmine
summary: Lülita korrused välja, et näha hoone sisse, näita ruume ja ruume ning lülita servajooned sisse ja välja.
keywords: korrused, tasandid, põrandad, peida, isoleeri, ruumid, toad, ifcspace, servad, nähtavus, lõige
from: b838dcc0
---

## Mida sa teed

Vaata IFC-mudeli sisse, lülitades välja korrused üle sulle huvi pakkuva korruse, siis näita ruume ja ruume ning lülita servajooned välja puhtama vaate jaoks.

## Sammud: vaata ühte korrust

1. Ava IFC-mudel. Vaata [Ava IFC-mudel ja vaata seda 3D-vaates ringi](topic:open-ifc-model).
2. Leia vasakul {{ui:Korrused}} nimekiri. Kõige ülemine korrus on esimene, nagu loeksid lõiget katusest alla.
3. Eemalda linnukesed katuselt ja kõigilt korrustelt, mis on sulle huvi pakkuva korruse kohal.
4. Klõpsa {{ui:Ülemine}}, et vaadata sellele korrusele alla.
5. Pane korrused linnukesega tagasi.

## Mida peaksid nägema

Iga korrus, millelt eemaldad linnukese, kaob kohe koos kõigega, mis selle peal on. Nimekirjas on ainult korrused, millel on midagi nähtavat. Elemendid, mis ei kuulu ühelegi korrusele, on allosas rühmitatud nimega **Mitte korrusel**; saidi elemendid ja osa mööblit satuvad sinna sageli.

## Sammud: näita ruume

1. Klõpsa mudeli kohal tööriistaribal {{ui:Ruumid}}. Nupp jääb vajutatuks.
2. Vaata mudelit: ruumid ja ruumid ilmuvad kahvatute, läbipaistvate mahtudena.
3. Klõpsa ruumil, et lugeda paremal selle omadusi, nagu nimi, number ja pindala.
4. Klõpsa uuesti {{ui:Ruumid}}, et need peita.

Ruumid peidetakse mudeli avamisel, sest muidu katavad nad seinad ja põrandad.

## Sammud: servad

1. Klõpsa {{ui:Servad}}, et lülitada õhukesed servajooned välja.
2. Klõpsa uuesti, et need tagasi sisse lülitada.

Väga suurtel mudelitel (üle 1.5 miljoni kolmnurga) on nupp hallina koos vihjega „Servad on väga suurte mudelite puhul väljas“. See säästab mälu.

## Levinud vead

- **Korruse eemaldamine ja selle osade nägemine.** Element kuulub korrusele, mille eksportija talle määras. Kõrge sein või trepp kuulub sageli ainult oma alumisele korrusele, nii et see jääb nähtavaks, kui ülemine korrus on peidetud, või kaob koos alumise korrusega.
- **Korruste peitmine sisse vaatamiseks.** Lõikekast on sageli kiirem: vaata [Lõika IFC-mudel lõiketasandiga](topic:section-plane#a-section-box). Võid ka eemaldada linnukesi ridadelt {{ui:Mudelipuu}}s (vaata [Orienteerumine mudelipuu abil](topic:model-tree)).
- **Ruumi klõpsamine läbi seina.** Klõpsamine valib lähima nähtava pinna. Peida ülemine korrus või lülitu vaatele {{ui:Ülemine}} ja siis klõpsa.
- **Korruste nimed tunduvad kummalised.** BimCraft näitab faili salvestatud korrusenimesid. Kui need ütlevad „Tasand 1“ või numbri, on see see, mille eksportija kirjutas.
