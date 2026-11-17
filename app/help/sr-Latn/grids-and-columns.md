---
title: Mreže i stubovi
summary: Postavite linije mreže sa numerisanim i slovnim oznakama u krugovima, po razmaku ili jednu po jednu, crtajte zidove i stubove duž njih i pogledajte ih na osnovama, izgledima i presecima.
keywords: mreža, mreže, linija mreže, mreža stubova, osa, ose, oznaka u krugu, linija mreže, konstruktivna mreža, 1 2 3, A B C, stub, stubovi, stup, hvatanje, IfcGrid, IfcColumn
from: bf99a8f7
---

## Šta ćete uraditi

Postavite zgradu na mrežu, zatim nacrtajte zidove i postavite stubove duž njenih linija.

## Postavljanje cele mreže

1. Uključite {{ui:Crtanje}}, zatim izaberite {{ui:Verzija}} › {{ui:Mreža}}.
2. Kliknite {{ui:Postavi mrežu…}}. Recite koliko **numerisanih linija** (1, 2, 3…) i **linija označenih slovima** (A, B, C…) želite i koliko su one daleko jedna od druge. Upišite jedan razmak ili više razmaka odvojenih zarezima za neravna polja (na primer `20', 24', 20'`). {{ui:Iza poslednjih linija}} je koliko se svaka linija proteže izvan spoljnih linija druge vrste, a {{ui:Okrenuto (stepeni)}} okreće celu mrežu.
3. Kliknite {{ui:Postavi}}, zatim kliknite mesto gde ide prvi presek (1 / A). Pregled prati pokazivač.

Numerisane linije idu uz osnovu i raspoređene su preko nje; linije označene slovima idu preko osnove i raspoređene su uz nju. Slova preskaču I i O, kao na crtežima, pa se nikad ne čitaju kao 1 i 0.

## Crtanje linija mreže jednu po jednu

Uz uključenu {{ui:Mreža}}, kliknite mesto gde linija počinje i mesto gde se završava. Dobija sledeću oznaku među linijama duž kojih ide (posle 3 dolazi 4; posle B dolazi C). Pritisnite {{key:Esc}} da zaustavite.

## Promena linije mreže

Uz uključenu {{ui:Mreža}}, kliknite liniju da je izaberete. Upišite novu {{ui:Oznaka}} i pritisnite {{key:Enter}}, ili kliknite {{ui:Izbriši ovu liniju}} (ili pritisnite {{key:Delete}}). {{ui:Oznake u krugu}} stavljaju oznake na oba kraja, na početku ili kraju svake linije, ili nigde. Svaka promena je jedan korak: {{key:Mod+Z}} je vraća.

## Crtanje duž mreže

Alat {{ui:Zid}}, alat {{ui:Stub}} i ostali alati za crtanje hvataju se za linije mreže i za mesta gde se seku (oznaka hvatanja je mali krug sa krstom).

**Stubovi:** izaberite {{ui:Verzija}} › {{ui:Stub}}, izaberite oblik (pravougaon ili okrugao), veličinu i da li stub ide **do nivoa iznad** ili do fiksne visine, zatim kliknite. {{ui:Na svakom preseku mreže}} postavlja stub na svaki presek koji još nema stub. Kliknite stub da promenite njegov oblik, veličinu ili visinu u {{ui:Svojstva}}; {{key:Delete}} ga uklanja. Stubovi koji idu do nivoa iznad prate taj nivo kada se promeni njegova visina.

## Šta treba da vidite

- Mreža na osnovi svakog nivoa, sa oznakom u krugu i njenom oznakom na krajevima svake linije.
- Linije mreže u skupu crteža: na osnovama, kao i na izgledima i presecima gde se linija vidi s kraja, sa oznakom u krugu iznad zgrade. Pogledajte [Izgledi, preseci i listovi](topic:sheets).
- U IFC datoteci: jedna mreža za zgradu (IfcGrid, njene numerisane linije u jednoj listi i linije označene slovima u drugoj), a stubovi kao IfcColumn sa svojom veličinom, visinom i količinama. Drugi BIM programi prikazuju oba.

:::note
Mreža koja je došla u datoteci iz drugog programa se prikazuje, a alati se hvataju za nju, ali njene linije ovde ne mogu da se menjaju.
:::
