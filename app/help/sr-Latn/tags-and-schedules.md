---
title: Označite elemente i pravite specifikacije po oznakama
summary: Definišite sopstvene oznake (naziv, tip, dozvoljene vrednosti i klase kojima važe), označite mnogo elemenata odjednom i pravite specifikacije čije kolone, filtere i grupe čitaju oznake. Oznake se čuvaju u IFC datoteci.
keywords: oznake, označavanje, prilagođena svojstva, parametri, deljeni parametri, skup svojstava, pset, specifikacija, filter, grupiši po, završna obrada, otpornost na požar, grupna izmena, csv
from: 9cc7c90d
---

## Šta ćete uraditi

Oznaka je vaše sopstveno svojstvo, kao što su *Završna obrada* ili *Otpornost na požar*. Definišete je jednom za projekat, postavljate na mnogo elemenata odjednom, a svaka specifikacija u BimCraft-u može da je čita: specifikacija oznaka ovde, {{ui:Količine}}, Pronađi, Boja po svojstvu i [Dokumenti iz modela](topic:documents-from-the-model).

## Koraci

1. Otvorite IFC model ili započnite novu zgradu.
2. U levom panelu, pod {{ui:Količine}}, otvorite {{ui:Oznake}}.
3. Kliknite {{ui:Dodaj oznaku}}. Dajte joj naziv, izaberite njen tip i, ako želite, navedite dozvoljene vrednosti (odvojene zarezima) i klase za koje važi (`IfcDoor`, `IfcWall` …). Kliknite {{ui:Dodaj oznaku}}.
4. Izaberite elemente u modelu (Pronađi pomaže: izaberite sva vrata odjednom).
5. Pod {{ui:Označi izbor}}, izaberite ili ukucajte vrednost za svaku oznaku koju želite da postavite, ostavite ostale kakve jesu i kliknite {{ui:Primeni na … izabranih elemenata}}.
6. Pod {{ui:Specifikacija oznaka}}, označite kolone, dodajte filtere, izaberite {{ui:Grupiši po}}, pa {{ui:Preuzmi CSV}}.

## Šta treba da vidite

- Korak u listi promena za svaku sačuvanu definiciju i svako označavanje; {{ui:Opozovi}} ga vraća.
- Elementi klase za koju oznaka nije namenjena ostaju van te oznake, a statusna linija kaže koliko ih je.
- Specifikacija oznaka navodi jedan red po elementu, grupisan po polju koje ste izabrali; kliknite prvu ćeliju reda da izaberete taj element.
- {{ui:Količine}} navodi oznake pod `CadCraft_Tags`, pa tamo možete sabrati površine ili brojeve po oznaci.

## Tipovi

Tipovi su isti spisak kao kod parametara porodice: Dužina (milimetri), Ugao (stepeni), Broj, Ceo broj, Da / Ne, Pero (1–16), Tekst, Materijal i Ispuna. Vrednost koja ne odgovara svom tipu ili nije jedna od dozvoljenih vrednosti odbija se uz poruku, i ništa se ne menja.

## Dobro je znati

- Sve je običan IFC, pa drugi programi čitaju vrednosti: definicije su u skupu svojstava `CadCraft_TagDefs` na projektu, a vrednosti u skupu svojstava `CadCraft_Tags` na svakom elementu (jedno svojstvo po oznaci). Dužine se upisuju u jedinici dužine datoteke.
- `IfcWall` među klasama oznake obuhvata i zidove standardnog slučaja i zidove sastavljene od elemenata.
- Preimenovanje oznake preimenuje njene vrednosti na svakom elementu u istom koraku. Uklanjanje oznake uklanja samo njenu definiciju: vrednosti koje su već postavljene ostaju na elementima kao obična svojstva. Prvo ih obrišite (izaberite {{ui:Obriši}}) da ih skinete.
- Oznake u aplikaciji za crtanje CadCraft (atributi blokova) još nisu napravljene.
