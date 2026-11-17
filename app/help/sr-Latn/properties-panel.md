---
title: Polja u panelu Svojstva
summary: Šta znači svako polje u panelu Svojstva i u panelima Datoteka, Crtež i Fascikla i koja možete da menjate.
keywords: svojstva, polja, atributi, globalid, guid, kopiraj, kopiraj vrednost, kopiraj sve, csv, privremena memorija, serijski broj, oznaka, vrsta objekta, linija, express id, skup svojstava, pset, količine, šema, panel datoteke
from: fe55b435
---

## IFC element

Na vrhu panela {{ui:Svojstva}} vidi se vrsta elementa bez prefiksa „Ifc“ (na primer „Door“, „WallStandardCase“, „FurnishingElement“) i njegovo ime, ili „Bez imena“.

| Polje | Značenje | Može da se menja |
|---|---|---|
| Ime | Ime elementa, često naziv familije i tipa iz izvoznika | Da |
| Tip | Naziv tipa elementa, kad ga ima | Ne |
| Vrsta objekta | Slobodan tekst o tipu koji neki izvoznici popunjavaju | Da |
| Oznaka | Oznaka ili marka elementa; mnogi izvoznici ovde upisuju ID elementa | Da |
| Opis | Slobodan tekst | Da |
| GlobalId | Trajni IFC identifikator elementa od 22 znaka, isti u svakom izvozu istog elementa | Ne |
| Linija | Broj reda elementa (`#1234`) u ovoj IFC datoteci. Menja se između izvoza | Ne |

Ispod su **skupovi svojstava**, poređani po imenu:

- Svaki skup se otvara i zatvara klikom na njegovo ime. Prva tri su otvorena.
- Skup označen sa „(tip)“ pripada tipu elementa: „Svojstvo tipa: izmena ovde važi za svaki element ovog tipa.“
- Skupovi količina (dužine, površine, zapremine, brojevi, težine) su samo za čitanje.
- Liste i nabrajane vrednosti se prikazuju, samo za čitanje.
- Vrednosti Da/Ne prikazuju se kao **Da** ili **Ne**.
- Brojevi se zaokružuju na četiri decimale za prikaz. Dužine (svojstvo dužine ili dužina količine) prikazuju se u {{ui:Jedinice}} izabranim na traci, sa jedinicom pored njih, i možete upisati novu u toj jedinici ili sa drugom oznakom jedinice (2.4 m, 8'-0"): BimCraft upisuje broj iz same datoteke. Ostali brojevi se prikazuju onako kako ih datoteka ima.
- Prazna vrednost prikazuje se kao *prazno*. Izmenjena vrednost je podebljana, sa plavom linijom pored nje.

## Kopiranje vrednosti

Svaka vrednost u {{ui:Svojstva}} ima malo dugme za kopiranje pored sebe: kliknite ga da stavite tu vrednost u privremenu memoriju tačno onako kako je prikazana, na primer GlobalId, serijski broj ili bilo koju vrednost skupa svojstava. Kopiranje nikad ne pokreće izmenu.

Na vrhu, {{ui:Kopiraj sve}} kopira svaku vrednost elementa kao tekst, skup po skup, a {{ui:Kopiraj kao CSV}} kopira ih kao redove grupe, svojstva i vrednosti, za lepljenje u tabelu. Prazne vrednosti se zadržavaju, tako da svako polje ima red. Ovo radi isto za element drugog otvorenog modela; kad je otvoreno više modela, CSV počinje kolonom Model koja navodi ime njegove datoteke.

## Panel Datoteka (IFC)

| Polje | Značenje |
|---|---|
| Datoteka, Veličina | Datoteka koju ste otvorili |
| Šema | Verzija IFC-a, na primer IFC2X3 ili IFC4 |
| Projekat | Naziv projekta i dugi naziv |
| Faza | Faza projekta, ako ju je izvoznik upisao |
| Izvezeno iz | Program koji je izvezao, iz zaglavlja datoteke |
| Autor | Autor iz zaglavlja datoteke |
| Izvezeno | Datum i vreme iz zaglavlja datoteke |
| Elementi | Koliko elemenata sa oblikom je nacrtano |
| Trouglovi | Koliko trouglova čine njihovi oblici; mera koliko je model težak |

## Panel Datoteka (projekat i familije)

| Polje | Značenje |
|---|---|
| Vrsta | Projekat, Šablon projekta, Familija ili Šablon familije |
| Sačuvano u | Izdanje koje je poslednje sačuvalo datoteku |
| Build | Tačan build tog izdanja |
| Pročitano | Koliko datoteke je BimCraft pročitao, od njene veličine |

## Panel Crtež (DWG i DXF)

| Polje | Značenje |
|---|---|
| Format | Izdanje u kojem je crtež sačuvan, sa kodom formata, na primer AC1032 |
| Jedinice | Jedinice umetanja crteža, kad su podešene |
| Entiteti | Koliko objekata je pročitano |
| Slojevi | Koliko slojeva |
| Listovi | Koliko listova (rasporeda), ili Nema |
| Povezani crteži | Koliko njegovih povezanih crteža je nađeno i učitano |
| Oprema | Koliko označenih stavki opreme je na listovima |

## Panel Fascikla

| Polje | Značenje |
|---|---|
| Fascikla, Datoteke, Veličina | Fascikla koju ste otvorili, koliko datoteka sadrži i njihova ukupna veličina |
| Modeli | Datoteke projekta i familija, svaka sa rezervnim kopijama, računatim jednom |
| CAD crteži, IFC modeli | Koliko svakog |
| Problemi | Koliko kopija modela je nepotpuno ili nečitljivo, ili Nema |
