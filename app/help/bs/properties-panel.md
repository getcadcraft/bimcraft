---
title: Polja panela Svojstva
summary: Šta znači svako polje u panelu Svojstva i u panelima Datoteka, Crtež i Folder te koja polja možete promijeniti.
keywords: svojstva, polja, atributi, globalid, guid, kopiraj, kopiraj vrijednost, kopiraj sve, csv, međuspremnik, serijski broj, oznaka, tip objekta, linija, express id, skup svojstava, pset, količine, šema, panel datoteke
from: fe55b435
---

## Element IFC

Na vrhu panela {{ui:Svojstva}} vidi se vrsta elementa bez prefiksa "Ifc" (na primjer "Door", "WallStandardCase", "FurnishingElement") i njegov naziv, ili "Bez naziva".

| Polje | Značenje | Može se mijenjati |
|---|---|---|
| Naziv | Naziv elementa, često naziv porodice i tipa iz izvoznika | Da |
| Tip | Naziv tipa elementa, kad ga ima | Ne |
| Tip objekta | Slobodan tekstualni opis tipa, koji neki izvoznici popunjavaju | Da |
| Oznaka | Oznaka ili marka elementa; mnogi izvoznici tu upisuju ID elementa | Da |
| Opis | Slobodan tekst | Da |
| GlobalId | Trajni IFC identifikator elementa od 22 znaka, isti u svakom izvozu istog elementa | Ne |
| Linija | Broj linije elementa (`#1234`) u ovoj IFC datoteci. Mijenja se između izvoza | Ne |

Ispod su **skupovi svojstava**, sortirani po nazivu:

- Svaki skup se otvara i zatvara klikom na njegov naziv. Prva tri su otvorena.
- Skup označen s "(tip)" pripada tipu elementa: "Svojstvo tipa: promjena ovdje važi za svaki element ovog tipa."
- Skupovi količina (dužine, površine, zapremine, brojevi, težine) su samo za čitanje.
- Liste i nabrojive vrijednosti se prikazuju, samo za čitanje.
- Vrijednosti Da/Ne prikazuju se kao **Da** ili **Ne**.
- Brojevi se zaokružuju na četiri decimale za prikaz. Dužine (svojstvo dužine ili dužina količine) prikazuju se u {{ui:Jedinice}} izabranim na alatnoj traci, s jedinicom pored, a novu možete upisati u toj jedinici ili s drugom oznakom jedinice (2.4 m, 8'-0"): BimCraft upisuje nazad vlastiti broj datoteke. Ostali brojevi se prikazuju onako kako ih datoteka ima.
- Prazna vrijednost prikazuje se kao *prazno*. Izmijenjena vrijednost je podebljana s plavom linijom pored nje.

## Kopiranje vrijednosti

Svaka vrijednost u {{ui:Svojstva}} ima malo dugme za kopiranje pored sebe: kliknite ga da vrijednost stavite u međuspremnik tačno onako kako je prikazana, na primjer GlobalId, serijski broj ili bilo koja vrijednost skupa svojstava. Kopiranje nikad ne počinje izmjenu.

Na vrhu, {{ui:Kopiraj sve}} kopira svaku vrijednost elementa kao tekst, skup po skup, a {{ui:Kopiraj kao CSV}} kopira ih kao redove grupe, svojstva i vrijednosti za lijepljenje u tabelarni program; prazne vrijednosti se zadržavaju pa svako polje ima red. Isto važi za element drugog otvorenog modela; kad je otvoreno više modela, CSV počinje kolonom Model s nazivom datoteke.

## Panel Datoteka (IFC)

| Polje | Značenje |
|---|---|
| Datoteka, Veličina | Datoteka koju ste otvorili |
| Šema | Verzija IFC-a, na primjer IFC2X3 ili IFC4 |
| Projekat | Naziv projekta i dugi naziv |
| Faza | Faza projekta, ako ju je izvoznik upisao |
| Izvezeno iz | Program koji je izvezao, iz zaglavlja datoteke |
| Autor | Autor iz zaglavlja datoteke |
| Izvezeno | Datum i vrijeme iz zaglavlja datoteke |
| Elementi | Koliko elemenata s oblikom je nacrtano |
| Trouglovi | Koliko trouglova čine njihovi oblici; mjera težine modela |

## Panel Datoteka (projektne i porodične datoteke)

| Polje | Značenje |
|---|---|
| Vrsta | Projekat, Šablon projekta, Porodica ili Šablon porodice |
| Sačuvano u | Izdanje koje je zadnje sačuvalo datoteku |
| Build | Tačan build tog izdanja |
| Pročitano | Koliko datoteke je BimCraft pročitao, od njene ukupne veličine |

## Panel Crtež (DWG i DXF)

| Polje | Značenje |
|---|---|
| Format | Izdanje u kojem je crtež sačuvan, s kodom formata, kao AC1032 |
| Jedinice | Jedinice umetanja crteža, kad su postavljene |
| Entiteti | Koliko objekata je pročitano |
| Slojevi | Koliko slojeva |
| Listovi | Koliko listova (rasporeda), ili Nema |
| Povezani crteži | Koliko njegovih povezanih crteža je nađeno i učitano |
| Oprema | Koliko označenih stavki opreme je na listovima |

## Panel Folder

| Polje | Značenje |
|---|---|
| Folder, Datoteke, Veličina | Folder koji ste otvorili, koliko datoteka sadrži i njihova ukupna veličina |
| Modeli | Projektne i porodične datoteke, sa svakom sigurnosnom kopijom brojanom jednom |
| CAD crteži, IFC modeli | Koliko svakih |
| Problemi | Koliko kopija modela je nepotpuno ili nečitljivo, ili Nema |
