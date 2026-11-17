---
title: Faze projekta, od zadatka do uputa za gradilište
summary: Počnite od zadatka s ciljanim površinama i pratite jesu li ispunjene dok crtate, usporedite koncepcijske varijante s njim, poveznite specifikacije i detalje s tipovima, pregledajte radioničke crteže i zabilježite upute za gradilište uz elemente.
keywords: zadatak, tablica prostorija, ciljana površina, ispunjeno, premalo, prostorije, koncepcijske varijante, varijante, volumen, proračun, specifikacija, spec, detalj, građevinski detalj, tip, radionički crtež, pregled, odobri, ponovno predaj, uputa za gradilište, revizija, uzrok, teren, faza
from: 0a49b852
---

## Što ćete raditi

Kroz jednu ploču vodite faze projekta: zapišite zadatak klijenta kao prostorije s ciljanim površinama, usporedite koncepcijske varijante s njim, držite specifikaciju i građevinske detalje uz tipove kojima pripadaju, pregledavajte radioničke crteže kako se vraćaju od izvođača i bilježite upute za gradilište uz elemente koje mijenjaju.

## Koraci

1. U lijevoj ploči otvorite **Faze projekta**, zatim **Zadatak**.
2. Zalijepite prostorije, jednu po retku: `Living; 1; 30` znači jednu prostoriju od 30 m². Broj se može izostaviti. Odaberite **Dodaj prostorije**. Ispunite klijenta, lokaciju, proračun, toleranciju i program, zatim **Spremi zadatak**.
3. Nacrtajte zidove. Svaka prostorija koju zidovi tvore, a ima naziv prostorije iz zadatka (broj iza naziva, poput „Spavaća soba 2”, se zanemaruje), broji se. **Tablica prostorija** pokazuje **Ispunjeno**, **Premalo**, **Previše** ili **Nije nacrtano**, s razlikom u m².
4. Za početak novog projekta na ovaj način odaberite **Započni novi projekt iz zadatka**. Otvara se novi model, iz jednog od spremljenih predložaka ako ga odaberete, i u njega se kao prvi korak stavlja zadatak.
5. Otvorite **Varijante prema zadatku**. Svaka varijanta volumena zadržana u modelu crta se u jednakom mjerilu s bruto površinom, onim što zadatak traži i koliko se prostorija iz zadatka uklapa. **Složi zadatak ovdje** stavlja prostorije u etaže varijante, počevši od najniže, i kaže što ne stane. Trošak dolazi samo iz cjenika projekta; bez odgovarajućeg retka piše „Nema cijene”.
6. Otvorite **Tipovi, specifikacije i detalji**. Svaki tip zida, vrata, prozora i poda pokazuje ima li tekst specifikacije, detalje povezane s njim te gdje se specifikacija, tablice i listovi ne slažu. **Poveži detalj** dodaje DetailCraft ili CadCraft datoteku, adresu ili list ovog modela.
7. Otvorite **Radionički crteži**. Odaberite elemente koje radionički crtež pokriva u modelu, zatim **Primi ga**. Upotrijebite **Odobri**, **Odobri uz napomene** ili **Revidiraj** s imenom i napomenom recenzenta. **Ponovno predano** stvara sljedeću reviziju istog zapisa i čuva povijest pregleda. Stanje se upisuje i na svaki element.
8. Otvorite **Upute za gradilište**. Odaberite elemente, upišite uzrok i što on znači za trošak i vrijeme svojim riječima, zatim **Zabilježi ga**. Nakon što je izdanje zabilježeno, **Objasni promjene od ovog izdanja** pokazuje koje promijenjene elemente pokriva neka uputa, a koji su se promijenili bez zabilježenog zapisa.

## Dobro je znati

- Svaki korak je jedno poništavanje. Ništa se ne odbija: zadatak koji nije ispunjen, tip koji se ne slaže sa svojim tekstom ili radionički crtež koji kasni samo su upozorenje ili napomena u **Problemi**.
- Prostorije zadatka su prostori bez zidova. Nose ciljnu površinu, a ne nacrtanu, pa ih tablice prostorija i COBie nikad ne broje kao nacrtane prostorije.
- Raspored samo slaže prostorije u etaže prema površini. Ne crta zidove.
- Tekst specifikacije piše se u **Dokumenti** iz modela. Ovdje se samo uspoređuje s vlastitim dimenzijama modela: nikad se za vas ne piše nijedna točka standarda.
- Radionički crteži i upute za gradilište zapisi su u istoj povijesti kao ploča **Izdanja i revizije**, pa ih obje ploče prikazuju.
- Stanje radioničkog crteža svojstvo je svakog elementa (`CadCraft_ShopDrawing`), a uputa za gradilište je `CadCraft_SiteInstruction`, pa ih mogu koristiti Pronađi i Boji prema svojstvu.
- Oznake provjerene na terenu (Faza 7) nalaze se u **Svojstva** pod **Provjera**.
