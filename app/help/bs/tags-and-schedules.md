---
title: Označi elemente i pravi specifikacije po oznaci
summary: Definiši svoje oznake (naziv, tip, dozvoljene vrijednosti, kojim klasama pripadaju), označi mnogo elemenata odjednom i pravi specifikacije čije kolone, filteri i grupe čitaju oznake. Oznake se čuvaju u IFC-u.
keywords: oznake, označavanje, prilagođena svojstva, parametri, zajednički parametri, skup svojstava, pset, specifikacija, filter, grupiši po, završna obrada, protupožarna klasa, masovna izmjena, csv
from: 9cc7c90d
---

## Šta ćeš uraditi

Oznaka je tvoje vlastito svojstvo, poput *Završna obrada* ili *Protupožarna klasa*. Definišeš je jednom za projekat, postaviš na mnogo elemenata odjednom, a svaka specifikacija u BimCraftu je može čitati: specifikacija oznaka ovdje, {{ui:Količine}}, Pronađi, Boja po svojstvu i [Dokumenti iz modela](topic:documents-from-the-model).

## Koraci

1. Otvori IFC model ili počni novu zgradu.
2. U lijevom panelu, pod {{ui:Količine}}, otvori {{ui:Oznake}}.
3. Klikni {{ui:Dodaj oznaku}}. Daj joj naziv, odaberi njen tip, i ako želiš navedi dozvoljene vrijednosti (odvojene zarezima) i klase za koje je (`IfcDoor`, `IfcWall` …). Klikni {{ui:Dodaj oznaku}}.
4. Odaberi elemente u modelu (Pronađi pomaže: odaberi sva vrata odjednom).
5. Pod {{ui:Označi odabir}}, izaberi ili upiši vrijednost za svaku oznaku koju želiš postaviti, ostavi ostale kakve jesu, i klikni {{ui:Primijeni na … odabranih elemenata}}.
6. Pod {{ui:Specifikacija oznaka}}, označi kolone, dodaj filtere, izaberi {{ui:Grupiši po}}, zatim {{ui:Preuzmi CSV}}.

## Šta bi trebao vidjeti

- Korak u listi promjena za svaku sačuvanu definiciju i svako označavanje; {{ui:Poništi}} ga vraća.
- Elementi klase za koju oznaka nije namijenjena izostavljaju se iz te oznake, a statusna linija kaže koliko ih je.
- Specifikacija oznaka navodi jedan red po elementu, grupisan po polju koje si odabrao; klikni prvu ćeliju reda da odabereš taj element.
- {{ui:Količine}} navodi oznake pod `CadCraft_Tags`, pa možeš tamo sabrati površine ili brojeve po oznaci.

## Tipovi

Tipovi su isti kao lista za parametre porodice: Dužina (milimetri), Ugao (stepeni), Broj, Cijeli broj, Da / Ne, Olovka (1–16), Tekst, Materijal i Ispuna. Vrijednost koja ne odgovara svom tipu, ili nije jedna od dozvoljenih vrijednosti, odbija se uz poruku, i ništa se ne mijenja.

## Dobro je znati

- Sve je običan IFC, pa drugi programi čitaju vrijednosti: definicije su u skupu svojstava `CadCraft_TagDefs` na projektu, a vrijednosti u skupu svojstava `CadCraft_Tags` na svakom elementu (jedno svojstvo po oznaci). Dužine se pišu u jedinici dužine datoteke.
- `IfcWall` u klasama oznake obuhvata i zidove standardnog tipa i zidove sa elementima.
- Preimenovanje oznake preimenuje njene vrijednosti na svakom elementu u istom koraku. Uklanjanje oznake uklanja samo njenu definiciju: vrijednosti koje su već postavljene ostaju na elementima kao obična svojstva. Prvo ih obriši (odaberi {{ui:Obriši}}) da ih skineš.
- Oznake u CadCraft aplikaciji za crtanje (atributi blokova) još nisu urađene.
