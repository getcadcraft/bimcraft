---
title: Oznake elemenata i specifikacije po oznaci
summary: Definirajte vlastite oznake (naziv, tip, dopuštene vrijednosti, koje razrede), označite mnogo elemenata odjednom i izradite specifikacije čiji stupci, filtri i grupe čitaju oznake. Oznake se čuvaju u IFC-u.
keywords: oznake, oznaka, označavanje, prilagođena svojstva, parametri, zajednički parametri, skup svojstava, pset, specifikacija, filtar, grupiraj po, završna obrada, vatrootpornost, masovno uređivanje, csv
from: 9cc7c90d
---

## Što ćete napraviti

Oznaka je vaše vlastito svojstvo, primjerice *Završna obrada* ili *Vatrootpornost*. Definirate je jednom za projekt, postavljate na mnogo elemenata odjednom, a svaka specifikacija u BimCraftu je može čitati: specifikacija oznaka ovdje, {{ui:Količine}}, Pronađi, Boja po svojstvu i [Dokumenti iz modela](topic:documents-from-the-model).

## Koraci

1. Otvorite IFC model ili započnite novu zgradu.
2. U lijevom oknu, pod {{ui:Količine}}, otvorite {{ui:Oznake}}.
3. Kliknite {{ui:Dodaj oznaku}}. Dajte joj naziv, odaberite njezin tip i, ako želite, popišite dopuštene vrijednosti (odvojene zarezima) i razrede za koje je (`IfcDoor`, `IfcWall` …). Kliknite {{ui:Dodaj oznaku}}.
4. Odaberite elemente u modelu (Pronađi pomaže: odaberite sva vrata odjednom).
5. Pod {{ui:Označi odabir}} odaberite ili upišite vrijednost za svaku oznaku koju želite postaviti, ostale ostavite kakve jesu, i kliknite {{ui:Primijeni na … odabranih elemenata}}.
6. Pod {{ui:Specifikacija oznaka}} označite stupce, dodajte filtre, odaberite {{ui:Grupiraj po}}, zatim {{ui:Preuzmi CSV}}.

## Što biste trebali vidjeti

- Korak u popisu promjena za svaku spremljenu definiciju i svako označavanje; {{ui:Poništi}} ga vraća.
- Elementi razreda za koji oznaka nije namijenjena ispuštaju se iz te oznake, a statusni redak kaže koliko ih je.
- Specifikacija oznaka navodi jedan redak po elementu, grupirano po polju koje ste odabrali; kliknite prvu ćeliju retka da odaberete taj element.
- {{ui:Količine}} navodi oznake pod `CadCraft_Tags`, pa tamo možete zbrojiti površine ili brojeve po oznaci.

## Vrste

Vrste su isti popis kao za parametre obitelji: Duljina (milimetri), Kut (stupnjevi), Broj, Cijeli broj, Da / Ne, Olovka (1–16), Tekst, Materijal i Ispuna. Vrijednost koja ne odgovara svojoj vrsti ili nije jedna od dopuštenih vrijednosti odbija se uz poruku i ništa se ne mijenja.

## Dobro je znati

- Sve je običan IFC, pa drugi programi čitaju vrijednosti: definicije su u skupu svojstava `CadCraft_TagDefs` na projektu, a vrijednosti u skupu svojstava `CadCraft_Tags` na svakom elementu (jedno svojstvo po oznaci). Duljine se zapisuju u jedinici duljine datoteke.
- `IfcWall` među razredima oznake obuhvaća i zidove standardnog oblika i složene zidove.
- Preimenovanje oznake preimenuje njezine vrijednosti na svakom elementu u istom koraku. Uklanjanje oznake uklanja samo njezinu definiciju: vrijednosti koje su već postavljene ostaju na elementima kao obična svojstva. Prvo ih očistite (odaberite {{ui:Očisti}}) da ih skinete.
- Oznake u aplikaciji CadCraft za crtanje (atributi blokova) još nisu izrađene.
