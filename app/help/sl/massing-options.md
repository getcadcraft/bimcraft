---
title: Možnosti mas stavbe, shranjene druga ob drugi
summary: Hranite več možnosti mas stavbe v istem modelu, eno določite kot trenutno možnost, jo preverite glede na gradbene linije in služnosti parcele, uvozite maso iz ModelCraft in izbrano možnost razvijete v zidove in plošče.
keywords: masa, mase, možnost, možnosti, niz možnosti, shema, koncept, koncepcijska zasnova, faza 2, alternative, primerjaj možnosti, trenutna možnost, masa stavbe, potisni povleci, modelcraft, civilcraft, bruto tlorisna površina, tlorisni obris, prostornina, razvij maso, služnost, gradbena linija, odmik
from: 69a01459
---

## Kaj boste naredili

Hranite možnosti mas koncepta v enem modelu namesto v ločenih datotekah: več mas stavb drugo ob drugi, ena od njih je **trenutna možnost**, druge so shranjene za primerjavo.

Možnost mase je masa stavbe: obris, dvignjen na višino, s številom etaž. To še niso zidovi. Ohranite jih lahko poljubno veliko, združene v **nize možnosti** (možnosti enega niza so med seboj alternative).

## Shranite možnost

1. Odprite {{ui:Program prostorov v maso}}, vpišite program prostorov in obris ter izberite {{ui:Poišči možnosti}}.
2. Izberite eno od navedenih možnosti.
3. Pod {{ui:Možnosti mas stavbe v modelu}} vpišite ime za {{ui:Niz možnosti}}, če ga želite, in izberite {{ui:Ohrani izbrano možnost}}.

Možnost se pojavi v modelu kot masa stavbe in na seznamu, z etažami, tlorisnim obrisom, bruto tlorisno površino in prostornino. Nič ni zgrajeno. Drugo shranite na enak način.

Prva možnost niza je njegova trenutna možnost. Vsak korak je en korak razveljavitve.

## Trenutna možnost

Ena možnost vsakega niza je trenutna. To pomeni dvoje:

- **Njene etaže štejejo kot tlorisne površine stavbe.** Trenutna možnost ima en prostor na etažo z bruto površino te etaže, zato vse, kar bere tlorisne površine, vidi veljavno možnost in nobene druge.
- **Preverja se glede na parcelo.** Če stoji zunaj meje parcele, čez gradbeno linijo ali na služnosti, se v {{ui:Težave}} pojavi opozorilo, ki jo imenuje. To je samo opozorilo: nič ni zavrnjeno. Možnosti, ki niso trenutne, se ne preverjajo.

Izberite {{ui:Nastavi kot trenutno}} na drugi možnosti, da jo spremenite.

{{ui:Skrij možnosti, ki niso trenutne}} skrije druge v 3D pogledu. To velja samo za ta brskalnik in se ne shrani v datoteko.

## Masa iz ModelCraft

V ModelCraft {{ui:Izvozi}} › {{ui:Masa v BimCraft …}} pošlje vsako skupino ali komponento kot eno možnost. BimCraft odpre datoteko s seznamom možnosti.

Da jih uvozite v že odprt model, izberite {{ui:Dodaj možnosti mase iz datoteke}} in izberite datoteko `.ifc`. Njene mase pridejo kot možnosti niza, v enem koraku razveljavitve, na mestu, kjer so bile modelirane. Datoteka z maso stavb iz CivilCraft deluje enako.

Možnost, označena z „(oblika poenostavljena)“, v ModelCraft ni bila navadna pokončna kocka (se umika, nagiba ali ni sklenjena). Njena masa tukaj je obris njene osnove, dvignjen na njeno višino; njene tlorisne površine in prostornina pa so izmerjene iz same telesa.

## Razvijte izbrano možnost

Izberite {{ui:Razvij}} na možnosti. Ta postane etaže (dodane do njenega števila etaž), zidovi okoli njenega obrisa na vsaki etaži in talna plošča na vsaki, v enem koraku razveljavitve. Možnost zapusti seznam; druge možnosti ostanejo, kot so bile. Strehe še ni.

{{ui:Preimenuj}} spremeni ime možnosti, {{ui:Odstrani}} jo vzame iz modela. Odstranitev trenutne možnosti naredi prvo drugo možnost niza trenutno.

## Kaj bi morali videti

- Vsaka shranjena možnost kot blok v 3D pogledu in vrstica na seznamu.
- „(trenutna)“ ob eni možnosti vsakega niza.
- Opozorilo v {{ui:Težave}}, ko trenutna možnost seka mejo parcele, gradbeno linijo ali služnost.

## Dobro je vedeti

- V datoteki IFC je možnost element proxy stavbe z naborom lastnosti `CadCraft_SiteMass` (njen niz možnosti, ime možnosti in ali je trenutna, so v tem naboru). Etaže trenutne možnosti so prostori tipa `MassingFloor`. Drugi programi berejo proxy kot splošen element.
- Shranjevanje možnosti nikoli ne doda etaž; razvijanje jih.
- Pomočnik lahko navede shranjene možnosti, shrani eno, določi eno kot trenutno, preimenuje, razvije ali odstrani.
