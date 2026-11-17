---
title: Faze projekta, od zadatka do uputstava za gradilište
summary: Počnite od zadatka sa ciljnim površinama i pratite da li su ispunjene ili manjkaju dok crtate, uporedite varijante koncepta sa njima, povežite specifikacije i detalje s tipovima, pregledajte radioničke crteže i beležite uputstva za gradilište uz elemente.
keywords: zadatak, raspored smeštaja, ciljna površina, ispunjeno, manjak, prostorije, varijante koncepta, varijante, masa, budžet, specifikacija, spec, detalj, građevinski detalj, tip, radionički crtež, pregled, odobri, ponovo podnesi, uputstvo za gradilište, revizija, uzrok, teren, faza
from: 0a49b852
---

## Šta ćete uraditi

Radite kroz faze projekta u jednom panelu: pišite klijentov zadatak kao prostorije sa ciljnim površinama, uporedite varijante koncepta sa njim, držite specifikaciju i građevinske detalje uz tipove kojima pripadaju, pregledajte radioničke crteže kako se vraćaju od izvođača i beležite uputstva za gradilište uz elemente koje menjaju.

## Koraci

1. U levom panelu otvorite **Faze projekta**, zatim **Zadatak**.
2. Nalepite prostorije, po jednu u redu: `Living; 1; 30` znači jednu prostoriju od 30 m². Broj može biti izostavljen. Izaberite **Dodaj prostorije**. Popunite klijenta, lokaciju, budžet, toleranciju i program, zatim **Sačuvaj zadatak**.
3. Nacrtajte zidove. Svaka prostorija koju zidovi formiraju, a koja ima ime iz zadatka (broj iza njega, kao „Spavaća soba 2”, se zanemaruje), se broji. **Raspored smeštaja** pokazuje **Ispunjeno**, **Manjak**, **Višak** ili **Nije nacrtano**, uz razliku u m².
4. Da biste na ovaj način počeli novi projekat, izaberite **Pokreni novi projekat iz zadatka**. Otvara se novi model, iz jednog od sačuvanih šablona ako ga izaberete, i zadatak se unosi kao prvi korak.
5. Otvorite **Varijante u odnosu na zadatak**. Svaka varijanta mase sačuvana u modelu crta se u istoj razmeri, sa svojom bruto površinom, onim što zadatak traži i koliko prostorija zadatka staje. **Složi zadatak ovde** raspoređuje prostorije na spratove varijante, počevši od najnižeg, i navodi šta ne staje. Trošak dolazi samo iz cenovnika projekta; bez odgovarajućeg reda piše „Nema cene”.
6. Otvorite **Tipovi, specifikacije i detalji**. Svaki tip zida, vrata, prozora i poda pokazuje da li ima tekst specifikacije, povezane detalje i gde se specifikacija, rasporedi i listovi ne slažu. **Poveži detalj** dodaje datoteku DetailCraft ili CadCraft, adresu ili list ovog modela.
7. Otvorite **Radionički crteži**. Izaberite elemente koje radionički crtež pokriva u modelu, zatim **Primi ga**. Koristite **Odobri**, **Odobri uz napomene** ili **Revidiraj** uz ime i napomenu recenzenta. **Ponovo podneto** pravi sledeću reviziju istog zapisa i čuva istoriju pregleda. Stanje se takođe upisuje na svaki element.
8. Otvorite **Uputstva za gradilište**. Izaberite elemente, navedite uzrok i šta on znači za trošak i vreme, svojim rečima, zatim **Zabeleži ga**. Kada je izdanje zabeleženo, **Objasni promene od ovog izdanja** kaže kojim promenjenim elementima neko uputstvo odgovara, a koji su se promenili bez zabeleženog.

## Dobro je znati

- Svaki korak je jedan **Opozovi**. Ništa se ne odbija: zadatak koji nije ispunjen, tip koji se ne slaže sa svojim tekstom ili radionički crtež kojem je istekao rok je upozorenje ili napomena u Problemima.
- Prostorije zadatka su prostori bez zidova. Imaju cilj, a ne nacrtanu površinu, pa ih rasporedi prostorija i COBie nikada ne broje kao nacrtane prostorije.
- Raspored na spratove samo slaže prostorije na spratove prema površini. Ne crta zidove.
- Tekst specifikacije se piše u Dokumentima iz modela. Ovde se samo upoređuje sa sopstvenim dimenzijama modela: nijedna tačka standarda se nikada ne piše umesto vas.
- Radionički crteži i uputstva za gradilište su zapisi u istoj istoriji kao panel Izdanja i revizije, pa oba panela ih prikazuju.
- Stanje radioničkog crteža je svojstvo svakog elementa (`CadCraft_ShopDrawing`), a uputstvo za gradilište je `CadCraft_SiteInstruction`, pa Pronađi i Boji prema svojstvu mogu da ih koriste.
- Oznake potvrđene na terenu (faza 7) nalaze se u Svojstvima, pod Provera.
