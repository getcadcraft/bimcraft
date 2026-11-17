---
title: Postavi i zameni stavku biblioteke koja ima varijante
summary: Neke stavke biblioteke dolaze u više veličina ili opcija. Izaberite varijantu pre postavljanja, vidite koja je postavljena stavka, zamenite je drugom varijantom jednim klikom i zadržite je kada se stavka ažurira.
keywords: varijanta, varijante, veličine, opcije, konfiguracija, biblioteka, librarycraft, postavi, zameni, konfigurator, porodica, tip, ažuriranje, priključci
from: c05f0af3
---

## Šta ćete uraditi

Postavite stavku biblioteke u veličini ili opciji koja vam treba i promenite mišljenje kasnije, bez ponovnog postavljanja. Stavka sa varijantama je jedna stavka u biblioteci (jedan naziv, jedna licenca, jedna verzija) sa tabelom varijanti u kojima dolazi: na primer montažna ploča u veličinama Mala, Srednja i Velika, ili ista ploča bez rupa.

## Izbor varijante i postavljanje

1. Otvorite karticu {{ui:Biblioteka}} i kliknite karticu stavke.
2. Ispod naziva, izbor {{ui:Varijanta}} navodi svaku varijantu sa njenom veličinom. Podrazumevana varijanta stavke je prva izabrana.
3. Izaberite jednu. Plan, veličina i red 3D tela prate vaš izbor.
4. Kliknite {{ui:Postavi u osnovu}} (ili {{ui:Postavi u model}} u 3D prikazu) i postavite je kao i svaku stavku: pogledajte [Postavljanje opreme i nameštaja iz biblioteke](topic:place-from-library).

Postavljeni element dobija ime stavke i varijante, na primer *Montažna ploča — Velika*, pa se {{ui:Oprema}} tabela i stablo razlikuju. Svaka varijanta je sopstveni IFC tip: postavljanje iste varijante dva puta deli jedan tip, a druga varijanta dobija svoj.

## Vidite koja je varijanta postavljena

Izaberite element. U {{ui:Svojstva}}, polje **Stavka biblioteke** ima red **Varijanta**. IFC to čuva u `CadCraft_LibraryItem`: `Variant` (id varijante), `VariantName` i `VariantValues` (vrednosti opcija, kao tekst), pa ih drugi programi mogu čitati.

## Zamena drugom varijantom

1. Izaberite postavljenu stavku i kliknite {{ui:Zameni stavku…}} u polju **Stavka biblioteke**. Otvara se kartica {{ui:Biblioteka}}.
2. Na vrhu, **Ostale varijante od** *stavke* navodi svaku varijantu sa njenom veličinom. Postavljena je označena i ne može se izabrati.
3. Kliknite {{ui:Zameni u …}} na varijanti koju želite.

Element zadržava svoje mesto, obrtanje, sprat, broj stavke, količinu i beleške; njegov tip, oblik i podaci se menjaju u drugu varijantu. {{key:Mod+Z}} vraća prvu. I dalje možete izabrati bilo koju drugu stavku sa spiska ispod, kao ranije: pogledajte [Zamena postavljene stavke i ažuriranje stavki iz biblioteke](topic:swap-and-update-library-items).

## Kopiranje, lepljenje i ažuriranja

- Kopija postavljene varijante je ista varijanta: u ovom modelu i u drugom modelu otvorenom u istoj kartici pregledača, kroz Kopiraj i Nalepi.
- **Ažuriranja** zadržavaju varijantu: ako novija verzija stavke i dalje ima tu varijantu, postavljanje postaje ta varijanta nove verzije. Ako nova verzija više nema tu varijantu, postavljanje uzima podrazumevanu varijantu stavke.

## Dobro je znati

- Samo neke stavke biblioteke imaju varijante. Kartice to ne kažu; izbor {{ui:Varijanta}} vidite kada otvorite stavku.
- Stavka može navesti **priključke** (tačke povezivanja za cevi i kanale) po varijanti. Kartica Biblioteka prikazuje koliko ih varijanta ima. Oni se još ne upisuju u IFC kada stavku postavite iz kartice Biblioteka.
- Varijanta bez 3D tela postavlja se sa zamenskom kutijom, kao svaki 2D simbol.
- Veličine u izboru su u milimetrima, kako ih biblioteka zapisuje.
