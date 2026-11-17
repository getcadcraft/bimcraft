---
title: Faze projekta, od zadatka do uputstava za gradilište
summary: Počnite od zadatka sa ciljnim površinama i pratite da li je ispunjen ili nedostaje dok crtate, uporedite varijante koncepta s njim, povežite specifikacije i detalje s tipovima, pregledajte radioničke crteže i bilježite uputstva za gradilište uz elemente.
keywords: zadatak, raspored prostorija, ciljna površina, ispunjeno, nedostaje, prostorije, varijante koncepta, varijante, masa, budžet, specifikacija, spec, detalj, građevinski detalj, tip, radionički crtež, pregled, odobri, ponovno podnesi, uputstvo za gradilište, revizija, uzrok, teren, faza
from: 0a49b852
---

## Šta ćete raditi

U jednom panelu radite kroz faze projekta: pišete zadatak klijenta kao prostorije s ciljnim površinama, uporedite varijante koncepta s njim, čuvate specifikaciju i građevinske detalje uz tipove kojima pripadaju, pregledate radioničke crteže kako se vraćaju od izvođača i bilježite uputstva za gradilište uz elemente koje mijenjaju.

## Koraci

1. U lijevom panelu otvorite **Faze projekta**, zatim **Zadatak**.
2. Nalijepite prostorije, jednu po redu: `Living; 1; 30` znači jednu prostoriju od 30 m². Broj se može izostaviti. Odaberite **Dodaj prostorije**. Popunite klijenta, lokaciju, budžet, toleranciju i program, zatim **Spasi zadatak**.
3. Crtajte zidove. Svaka prostorija koju zidovi formiraju, a ima naziv iz zadatka (broj iza naziva, kao "Bedroom 2", se zanemaruje), se broji. **Raspored prostorija** prikazuje **Ispunjeno**, **Nedostaje**, **Previše** ili **Nije nacrtano**, uz razliku u m².
4. Za početak novog projekta na ovaj način odaberite **Počni novi projekat iz zadatka**. Otvara se novi model, iz jednog od vaših spašenih šablona ako ga izaberete, i zadatak se dodaje kao prvi korak.
5. Otvorite **Varijante u odnosu na zadatak**. Svaka varijanta mase sačuvana u modelu prikazuje se u jednoj razmjeri, sa svojom bruto površinom, onim što zadatak traži i koliko prostorija iz zadatka staje. **Složi zadatak ovdje** smješta prostorije na etaže varijante, od najniže, i kaže šta ne staje. Trošak dolazi samo iz cjenovnika projekta; bez odgovarajućeg reda piše "Nema cijene".
6. Otvorite **Tipovi, specifikacije i detalji**. Svaki tip zida, vrata, prozora i poda pokazuje ima li tekst specifikacije, povezane detalje, i gdje se specifikacija, rasporedi i listovi ne slažu. **Poveži detalj** dodaje datoteku DetailCraft ili CadCraft, adresu ili list ovog modela.
7. Otvorite **Radionički crteži**. Odaberite elemente koje radionički crtež pokriva u modelu, zatim **Primi ga**. Koristite **Odobri**, **Odobri uz napomene** ili **Revidiraj** uz ime i napomenu pregledača. **Ponovo podnesi** pravi sljedeću reviziju iste evidencije i čuva historiju pregleda. Stanje se također upisuje na svaki element.
8. Otvorite **Uputstva za gradilište**. Odaberite elemente, navedite uzrok i šta on znači za trošak i vrijeme, svojim riječima, zatim **Zabilježi**. Nakon što je izdanje zabilježeno, **Objasni promjene od ovog izdanja** kaže koje promijenjene elemente pokriva uputstvo, a koji su se promijenili bez zabilješke.

## Dobro je znati

- Svaki korak se može poništiti jednim **Poništi**. Ništa se ne odbija: zadatak koji nije ispunjen, tip koji se ne slaže sa svojim tekstom ili radionički crtež koji kasni su upozorenje ili napomena u **Problemi**.
- Prostorije iz zadatka su prostori bez zidova. Nose cilj, a ne nacrtanu površinu, pa ih rasporedi prostorija i COBie nikad ne broje kao nacrtane prostorije.
- Raspored samo slaže prostorije na etaže prema površini. Ne crta zidove.
- Tekst specifikacije se piše u **Dokumentima** iz modela. Ovdje se samo upoređuje s veličinama samog modela: nikad se umjesto vas ne piše klauzula nekog standarda.
- Radionički crteži i uputstva za gradilište su evidencije u istoj historiji kao panel **Izdanja i revizije**, pa ih oba panela prikazuju.
- Stanje radioničkog crteža je svojstvo svakog elementa (`CadCraft_ShopDrawing`), a uputstvo za gradilište je `CadCraft_SiteInstruction`, pa ih **Pronađi** i **Boji po svojstvu** mogu koristiti.
- Oznake provjerene na terenu (Faza 7) su u **Svojstva** pod **Verifikacija**.
