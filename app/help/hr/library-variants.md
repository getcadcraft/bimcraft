---
title: Postavljanje i zamjena stavke knjižnice s varijantama
summary: Neke stavke knjižnice dolaze u nekoliko veličina ili opcija. Odaberite varijantu prije postavljanja, pogledajte koja je varijanta postavljena stavka, zamijenite je drugom varijantom jednim klikom i zadržite je kada se stavka ažurira.
keywords: varijanta, varijante, veličine, opcije, konfiguracija, knjižnica, librarycraft, postavi, zamijeni, konfigurator, obitelj, tip, ažuriranje, priključci
from: c05f0af3
---

## Što ćete napraviti

Postavite stavku knjižnice u veličini ili opciji koja vam treba i promijenite mišljenje kasnije bez ponovnog postavljanja. Stavka s varijantama jedna je stavka u knjižnici (jedan naziv, jedna licenca, jedna verzija) s tablicom varijanti u kojima dolazi: na primjer montažna ploča u veličinama Small, Medium i Large, ili ista ploča bez rupa.

## Odaberite varijantu i postavite je

1. Otvorite karticu {{ui:Knjižnica}} i kliknite karticu stavke.
2. Ispod naziva, izbor {{ui:Varijanta}} navodi svaku varijantu s njezinom veličinom. Zadana vrijednost stavke odabire se prva.
3. Odaberite jednu. Tlocrt, veličina i redak 3D tijela prate vaš izbor.
4. Kliknite {{ui:Postavi u tlocrt}} (ili {{ui:Postavi u model}} u 3D prikazu) i postavite je kao svaku stavku: vidi [Postavljanje opreme i namještaja iz knjižnice](topic:place-from-library).

Postavljeni element nosi naziv stavke i varijante, na primjer *Mounting plate — Large*, pa se po tome razlikuju specifikacija {{ui:Oprema}} i stablo. Svaka varijanta je vlastiti IFC tip: postavljanje iste varijante dva puta dijeli jedan tip, a druga varijanta dobiva vlastiti.

## Vidite koja je varijanta postavljena stavka

Odaberite element. U {{ui:Svojstva}}, okvir **Stavka knjižnice** ima redak **Varijanta**. IFC ga čuva u `CadCraft_LibraryItem`: `Variant` (id varijante), `VariantName` i `VariantValues` (vrijednosti opcija, kao tekst), pa ih drugi programi mogu čitati.

## Zamijenite drugom varijantom

1. Odaberite postavljenu stavku i kliknite {{ui:Zamijeni stavku…}} u okviru **Stavka knjižnice**. Otvara se kartica {{ui:Knjižnica}}.
2. Na vrhu, **Ostale varijante za** *stavku* navodi svaku varijantu s njezinom veličinom. Postavljena je označena i ne može se odabrati.
3. Kliknite {{ui:Zamijeni u …}} na varijanti koju želite.

Element zadržava svoj položaj, zakretanje, etažu, broj stavke, količinu i bilješke; njegov tip, oblik i podaci mijenjaju se u drugu varijantu. {{key:Mod+Z}} vraća prvu. I dalje možete odabrati bilo koju drugu stavku s popisa ispod, kao i prije: vidi [Zamjena postavljene stavke i ažuriranje stavki iz knjižnice](topic:swap-and-update-library-items).

## Kopiranje, lijepljenje i ažuriranja

- Kopija postavljene varijante je ista varijanta: u ovom modelu te u drugom modelu otvorenom u istoj kartici preglednika, kroz kopiranje i lijepljenje.
- **Ažuriranja** zadržavaju varijantu: ako novija verzija stavke još ima tu varijantu, postavljanje postaje ta varijanta nove verzije. Ako nova verzija više nema tu varijantu, postavljanje uzima zadanu varijantu stavke.

## Dobro je znati

- Samo neke stavke knjižnice imaju varijante. Kartice to ne kažu; izbor {{ui:Varijanta}} vidite kada otvorite jednu.
- Stavka može navesti **priključke** (točke spajanja za cijevi i kanale) po varijanti. Kartica Knjižnica prikazuje koliko ih ima varijanta. Oni se još **ne** upisuju u IFC kada postavite stavku s kartice Knjižnica.
- Varijanta bez 3D tijela postavlja se sa zamjenskom kutijom, kao i svaki 2D simbol.
- Veličine u izboru su u milimetrima, kako ih zapisuje knjižnica.
