---
title: Kõrgusvaate paigutamine ja selle vaate avamine
summary: Paiguta plaanile kõrgusvaate märgis, suuna see nii, nagu soovid seda näha, leia seejärel projektisirvijast selle joonis, muuda seda ja paiguta see lehele. Juhised lintpaigutustele ja klassikalisele paigutusele.
keywords: kõrgusvaade, kõrgusvaate märgis, kõrgusvaate silt, paiguta kõrgusvaade, uus kõrgusvaade, loo kõrgusvaade, välisvaade, külgvaade, eestvaade, vaade punktist, kus on mu kõrgusvaade, ava kõrgusvaade, kõrgusvaade lehel, pööra kõrgusvaadet, nimeta kõrgusvaade ümber, põhjavaade, vaated kõrvuti, lõige, plaan ja 3D kõrvuti
from: a7cfd2b9
---

## Mida sa teed

Teed oma kõrgusvaate: hoone joonise, mida vaatad valitud punktist ja valitud suunas. Selleks kulub kaks klõpsu korruseplaanil. Joonis lisatakse seejärel hoone teiste vaadete hulka.

:::note
Neli külge on juba olemas. Igal hoonel on {{ui:Project browser}} all jaotises {{ui:Elevations}} vaated Põhi, Ida, Lõuna ja Lääs ilma midagi paigutamata. Paiguta oma vaade siis, kui soovid vaadata mujalt: risti nurga all oleva tiiva suunast, õuest või seina ühest küljest ruumi sees.
:::

## Kus tööriist asub

- Lintpaigutused: {{ui:View}} › **Loo** › {{ui:Elevation}}.
- Klassikaline paigutus: lülita sisse {{ui:Draw}}, seejärel {{ui:Build}} › {{ui:Elevation}}.
- Mis tahes menüüstiil: käsk on nimega {{ui:Elevation}}; käsupalett leiab selle ja käsurida võtab käsu ELEVATION.

## Sammud

1. Vali {{ui:Elevation}}. Kõrgusvaade paigutatakse korruseplaanile, nii et kui olid 3D-vaates, näitab BimCraft tasandi plaani, millel sa olid. Osuti ütleb **Määra koht, kus vaade seisab**.
2. Klõpsa kohta, kust vaadet võetakse. Välisvaate puhul klõpsa hoonest väljaspool, veidi kaugemal seinast, mida soovid näha.
3. Osuti ütleb nüüd **Määra vaatesuund**. Liigu hoone poole: nool näitab suunda ja esimese klõpsu üle joonistatud lühike joon on serv, kust vaadet vaadatakse. Klõpsa.
4. Plaanile ilmub number ja osutiga ring. See on kõrgusvaate märgis. Esimene on 1, järgmine 2.
5. Lõpetamiseks vajuta Esc või jätka ja paiguta veel üks.

Märgise paigutamine on üks samm: {{key:Mod+Z}} võtab selle tagasi.

## Joonise avamine

Plaan jääb pärast teist klõpsu ette. Joonis asub paneelis {{ui:Project browser}}:

1. Ava {{ui:Elevations}}. Sinu vaade on loetletud nelja külje järel nimega **Elevation 1**.
2. Klõpsa rea pliiatsinuppu {{ui:Edit in this view}}, et joonist näha ja selles töötada: seinu, uksi, aknaid ja korruseid teisaldada, lisada märkmeid ja mõõtmeid. Vt [Vaadete ja lõigete muutmine](topic:edit-in-elevations).
3. Klõpsa rea enda peale, et avada joonisekomplekt, või lisa vaade oma lehele. Vt [Vaated ja lehed](topic:views-and-sheets).

Klassikalises paigutuses on projektisirvija vasakus paneelis, kui {{ui:Draw}} on sisse lülitatud. Lintpaigutustes on see vahekaart {{ui:Project Browser}} all **Atribuudid**.

## Mida vaade näitab

- Kõik, mis on markeri ees, ulatudes hoone piirini. Markeri taga olevat ei näidata.
- Korrused koos nimede ja kõrgustega.
- Kui marker seisab hoones, lõigatakse seal olev asi, nagu seda teeks lõige. Puhta välisvaate jaoks seisa väljaspool.

## Muuda seda

Vali marker plaanil (klõpsa selle ringi abil {{ui:Select}}). Atribuudid sisaldab:

- {{ui:Label}}: selle number või sinu nimi, kuni 8 märki.
- {{ui:Flip the view}}: vaata samast kohast vastupidi.
- {{ui:Look as far as}}: kui kaugele markeri ees vaade ulatub. 0 näitab kõike.

Vajuta Delete, et marker ja selle joonis eemaldada. {{ui:Undo}} taastab mõlemad.

:::tip
Plaani ja 3D-vaate nägemiseks korraga töötamise ajal kasuta lintpaigutustes {{ui:View}} › **Aknad** › {{ui:Tile Views}} või klassikalises paigutuses {{ui:Split}}. Klõps vaatesakil viib tagasi ühe vaate juurde.
:::

## Piirangud

- Markerit ei saa plaanil veel lohistada ega pöörata. Kustuta see ja paiguta uuesti või kasuta {{ui:Flip the view}}.
- Vaadete loendis, mida saab lisada lehele, on sinu kõrgusvaade loetletud lõigetega koos.
- Ukse- ja aknamärgised joonistatakse neljale külje vaatele, mitte sinu paigutatud vaatele.

## IFC-s

Marker salvestatakse failis IfcAnnotationina nimega "Elevation 1", objektitüübiga "Elevation marker", sellel korrusel, kuhu see paigutati. Teine programm näitab seda märkusena; joonise teeb BimCraft ise mudelist iga kord uuesti.
