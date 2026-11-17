---
title: Märgi elemendid ja koosta loend siltide järgi
summary: Määra oma sildid (nimi, tüüp, lubatud väärtused, klassid), märgi paljud elemendid korraga ja koosta loendeid, mille veerud, filtrid ja rühmad loevad silte. Sildid hoitakse IFC-s.
keywords: sildid, silt, märgistamine, kohandatud omadused, parameetrid, jagatud parameetrid, omaduste hulk, pset, loend, filter, rühmita, viimistlus, tulepüsivus, massmuutmine, csv
from: 9cc7c90d
---

## Mida sa teed

Silt on sinu enda omadus, näiteks *Viimistlus* või *Tulepüsivus*. Määrad selle projekti jaoks üks kord, paned selle korraga paljudele elementidele ja iga BimCraft-i loend saab seda lugeda: siinne siltide loend, {{ui:Kogused}}, Otsing, Värvi omaduse järgi ja [Mudelist tehtud dokumendid](topic:documents-from-the-model).

## Sammud

1. Ava IFC-mudel või alusta uut hoonet.
2. Vasakul paneelil, jaotise {{ui:Kogused}} all, ava {{ui:Sildid}}.
3. Klõpsa {{ui:Lisa silt}}. Anna sellele nimi, vali tüüp ning soovi korral loetle lubatud väärtused (komadega) ja klassid, kellele see on (`IfcDoor`, `IfcWall` …). Klõpsa {{ui:Lisa silt}}.
4. Vali mudelis elemendid (Otsing aitab: vali kõik uksed korraga).
5. Jaotises {{ui:Märgi valik}} vali või sisesta väärtus igale silti, mida soovid määrata, jäta teised nagu on ja klõpsa {{ui:Rakenda … valitud elementidele}}.
6. Jaotises {{ui:Siltide loend}} märgi veerud, lisa filtrid, vali {{ui:Rühmita}} ja siis {{ui:Laadi CSV alla}}.

## Mida peaksid nägema

- Muudatusloendis üks samm iga salvestatud definitsiooni ja iga märgistuse kohta; {{ui:Võta tagasi}} võtab selle tagasi.
- Elemendid klassist, millele silt ei ole mõeldud, jäetakse sellest sildist välja ja olekureal öeldakse, mitu.
- Siltide loend näitab ühte rida elemendi kohta, rühmitatud valitud välja järgi; klõpsa rea esimesel lahtril, et valida see element.
- {{ui:Kogused}} loetleb sildid all `CadCraft_Tags`, nii et saad seal summeerida pindu või arve sildi järgi.

## Tüübid

Tüübid on samad mis perekonnaparameetritel: Pikkus (millimeetrites), Nurk (kraadides), Arv, Täisarv, Jah / Ei, Pliiats (1–16), Tekst, Materjal ja Täide. Väärtus, mis ei sobi oma tüübiga või ei ole üks lubatud väärtustest, lükatakse teatega tagasi ja midagi ei muutu.

## Hea teada

- Kõik on tavaline IFC, nii et teised programmid loevad väärtusi: definitsioonid on omadusehulgas `CadCraft_TagDefs` projektil, väärtused omadusehulgas `CadCraft_Tags` igal elemendil (üks omadus iga sildi kohta). Pikkused kirjutatakse faili pikkuseühikus.
- `IfcWall` silditüübi klassides hõlmab ka standardsed ja elemendipõhised seinad.
- Sildi ümbernimetamine nimetab ümber selle väärtused igal elemendil samas sammus. Sildi eemaldamine eemaldab ainult selle definitsiooni: juba määratud väärtused jäävad elementidele tavaliste omadustena. Eemalda need enne (vali {{ui:Tühjenda}}), et need ära võtta.
- Sildid CadCraft-i joonistusrakenduses (ploki atribuudid) ei ole veel valmis.
