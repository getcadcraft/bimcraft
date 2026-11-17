---
title: Polja panela Svojstva
summary: Što znači svako polje u panelu Svojstva te u panelima Datoteka, Crtež i Mapa i koja od njih možete promijeniti.
keywords: svojstva, polja, atributi, globalid, guid, kopiraj, kopiraj vrijednost, kopiraj sve, csv, međuspremnik, serijski broj, oznaka, vrsta objekta, redak, EXPRESS ID, skup svojstava, pset, količine, shema, panel datoteke
from: fe55b435
---

## IFC element

Vrh panela {{ui:Svojstva}} pokazuje vrstu elementa bez prefiksa „Ifc“ (na primjer „Door“, „WallStandardCase“, „FurnishingElement“) i njegov naziv, ili „Bez naziva“.

| Polje | Značenje | Može se uređivati |
|---|---|---|
| Naziv | Naziv elementa, često naziv obitelji i tipa iz izvoznika | Da |
| Tip | Naziv tipa elementa, kad ga ima | Ne |
| Vrsta objekta | Slobodni tekst koji opisuje tip, koji neki izvoznici popune | Da |
| Oznaka | Oznaka ili marka elementa; mnogi izvoznici ovdje zapisuju ID elementa | Da |
| Opis | Slobodni tekst | Da |
| GlobalId | Trajni IFC identifikator elementa od 22 znaka, isti u svakom izvozu istog elementa | Ne |
| Redak | Redni broj elementa (`#1234`) u ovoj IFC datoteci. Mijenja se između izvoza | Ne |

Ispod dolaze **skupovi svojstava**, sortirani po nazivu:

- Svaki skup se otvara i zatvara klikom na njegov naziv. Prva tri su otvorena.
- Skup označen s „(type)“ pripada tipu elementa: „Svojstvo tipa: promjena ovdje vrijedi za svaki element ovog tipa.“
- Skupovi količina (duljine, površine, volumeni, brojevi, težine) su samo za čitanje.
- Popisi i nabrojane vrijednosti prikazuju se, samo za čitanje.
- Vrijednosti Da/Ne prikazuju se kao **Da** ili **Ne**.
- Brojevi se zaokružuju na četiri decimale za prikaz. Duljine (svojstvo duljine ili duljina količine) prikazuju se u {{ui:Jedinice}} odabranim na alatnoj traci, s oznakom jedinice uz njih, a možete upisati novu u toj jedinici ili s drugom oznakom jedinice (2.4 m, 8'-0"): BimCraft zapisuje natrag vlastiti broj datoteke. Ostali brojevi se prikazuju kako ih datoteka ima.
- Prazna vrijednost se prikazuje kao *prazno*. Uređena vrijednost je podebljana s plavom crtom uz nju.

## Kopiranje vrijednosti

Svaka vrijednost u {{ui:Svojstva}} ima mali gumb za kopiranje uz sebe: kliknite ga da stavite tu vrijednost na međuspremnik točno kako je prikazana, npr. GlobalId, serijski broj ili bilo koju vrijednost skupa svojstava. Kopiranje nikad ne pokreće uređivanje.

Na vrhu, {{ui:Kopiraj sve}} kopira svaku vrijednost elementa kao tekst, skup po skup, a {{ui:Kopiraj kao CSV}} kopira ih kao retke grupe, svojstva i vrijednosti za lijepljenje u tablicu; prazne vrijednosti se zadržavaju tako da svako polje ima redak. Isto vrijedi za element drugog otvorenog modela; kad je otvoreno više modela, CSV počinje stupcem Model koji navodi naziv svoje datoteke.

## Panel Datoteka (IFC)

| Polje | Značenje |
|---|---|
| Datoteka, Veličina | Datoteka koju ste otvorili |
| Shema | Verzija IFC-a, kao IFC2X3 ili IFC4 |
| Projekt | Naziv projekta i dugi naziv |
| Faza | Faza projekta, ako ju je izvoznik zapisao |
| Izvezeno iz | Program koji je izvršio izvoz, iz zaglavlja datoteke |
| Autor | Autor iz zaglavlja datoteke |
| Izvezeno | Datum i vrijeme iz zaglavlja datoteke |
| Elementi | Koliko elemenata s oblikom je nacrtano |
| Trokuti | Koliko trokuta čine njihovi oblici; mjera težine modela |

## Panel Datoteka (projekt i obiteljske datoteke)

| Polje | Značenje |
|---|---|
| Vrsta | Projekt, Predložak projekta, Obitelj ili Predložak obitelji |
| Spremljeno u | Izdanje koje je zadnje spremilo datoteku |
| Build | Točna verzija (build) tog izdanja |
| Pročitano | Koliko datoteke je BimCraft pročitao, od njezine veličine |

## Panel Crtež (DWG i DXF)

| Polje | Značenje |
|---|---|
| Format | Izdanje u kojem je crtež spremljen, s kodom formata, kao AC1032 |
| Jedinice | Jedinice umetanja crteža, kad su postavljene |
| Entiteti | Koliko je objekata pročitano |
| Slojevi | Koliko slojeva |
| Listovi | Koliko listova (layouta), ili Nema |
| Povezani crteži | Koliko njegovih povezanih crteža je pronađeno i učitano |
| Oprema | Koliko označenih stavki opreme je na listovima |

## Panel Mapa

| Polje | Značenje |
|---|---|
| Mapa, Datoteke, Veličina | Mapa koju ste otvorili, koliko datoteka sadrži i njihova ukupna veličina |
| Modeli | Datoteke projekta i obitelji, svaka sa svojim sigurnosnim kopijama, računata jednom |
| CAD crteži, IFC modeli | Koliko svakog |
| Problemi | Koliko kopija modela je nepotpuno ili nečitljivo, ili Nema |
