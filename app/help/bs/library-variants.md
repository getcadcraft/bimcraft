---
title: Postavite i zamijenite stavku biblioteke koja ima varijante
summary: Neke stavke biblioteke dolaze u više veličina ili opcija. Izaberite varijantu prije postavljanja, vidite koju varijantu ima postavljena stavka, zamijenite je drugom varijantom jednim klikom, i zadržite je kada se stavka ažurira.
keywords: varijanta, varijante, veličine, opcije, konfiguracija, biblioteka, librarycraft, postavi, zamijeni, konfigurator, porodica, tip, ažuriranje, priključci
from: c05f0af3
---

## Šta ćete uraditi

Postavite stavku biblioteke u veličini ili opciji koja vam treba, i promijenite mišljenje kasnije bez ponovnog postavljanja. Stavka sa varijantama je jedna stavka u biblioteci (jedno ime, jedna licenca, jedna verzija) sa tabelom varijanti u kojima dolazi: na primjer montažna ploča u Maloj, Srednjoj i Velikoj, ili ista ploča bez rupa.

## Izaberite varijantu i postavite je

1. Otvorite karticu {{ui:Biblioteka}} i kliknite karticu stavke.
2. Ispod naziva, izbor {{ui:Varijanta}} prikazuje svaku varijantu sa njenom veličinom. Zadana vrijednost stavke se bira prva.
3. Izaberite jednu. Osnova, veličina i red 3D tijela prate vaš izbor.
4. Kliknite {{ui:Postavi u plan}} (ili {{ui:Postavi u model}} u 3D pogledu) i postavite je kao bilo koju stavku: vidi [Postavljanje opreme i namještaja iz biblioteke](topic:place-from-library).

Postavljeni element nosi ime stavke i varijante, na primjer *Montažna ploča — Velika*, pa se {{ui:Oprema}} specifikacija i stablo razlikuju. Svaka varijanta je sopstveni IFC tip: postavljanje iste varijante dva puta dijeli jedan tip, a druga varijanta dobija svoj.

## Vidite koju varijantu ima postavljena stavka

Izaberite element. U {{ui:Svojstva}}, polje **Stavka biblioteke** ima red **Varijanta**. IFC to čuva u `CadCraft_LibraryItem`: `Variant` (id varijante), `VariantName` i `VariantValues` (vrijednosti opcija, kao tekst), pa ih drugi programi mogu čitati.

## Zamijenite drugu varijantu

1. Izaberite postavljenu stavku i kliknite {{ui:Zamijeni stavku…}} u polju **Stavka biblioteke**. Otvara se kartica {{ui:Biblioteka}}.
2. Na vrhu, **Ostale varijante od** *stavke* navodi svaku varijantu sa njenom veličinom. Ona postavljena je označena i ne može se izabrati.
3. Kliknite {{ui:Zamijeni u …}} na varijanti koju želite.

Element zadržava svoje mjesto, okretanje, sprat, broj stavke, količinu i bilješke; njegov tip, oblik i podaci se mijenjaju u drugu varijantu. {{key:Mod+Z}} vraća prvu. I dalje možete izabrati bilo koju drugu stavku sa spiska ispod, kao ranije: vidi [Zamjena postavljene stavke i ažuriranje stavki iz biblioteke](topic:swap-and-update-library-items).

## Kopiranje, lijepljenje i ažuriranja

- Kopija postavljene varijante je ista varijanta: u ovom modelu, i u drugom modelu otvorenom u istoj kartici pregledača, kroz Kopiraj i Zalijepi.
- **Ažuriranja** zadržavaju varijantu: ako novija verzija stavke još ima tu varijantu, postavljanje postaje ta varijanta nove verzije. Ako nova verzija više nema tu varijantu, postavljanje uzima zadanu varijantu stavke.

## Korisno znati

- Samo neke stavke biblioteke imaju varijante. Kartice to ne kažu; izbor {{ui:Varijanta}} vidite kada otvorite jednu.
- Stavka može navesti **priključke** (tačke povezivanja za cijevi i kanale) po varijanti. Kartica Biblioteka pokazuje koliko ih varijanta ima. Oni se **još ne** upisuju u IFC kada postavite stavku iz kartice Biblioteka.
- Varijanta koja nema 3D tijelo se postavlja sa zamjenskom kutijom, kao što se postavlja svaki 2D simbol.
- Veličine u izboru su u milimetrima, kako ih biblioteka piše.
