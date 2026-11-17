---
title: Provjeri grijanje i hlađenje s EnergyPlus-om
summary: Zapiši model kao EnergyPlus datoteku ili pokreni EnergyPlus verziju 26.2.0 nad njim u pregledniku, pa uporedi njegova projektna opterećenja s brzim pomagalom za grijanje i hlađenje. Druga procjena za rani projekt, a ne proračun usklađenosti.
keywords: energyplus, simulacija energije, projektni dan, opterećenje grijanjem, opterećenje hlađenjem, vremenska datoteka, epw, idf, toplinska masa, godišnja energija, simulacija
from: b82a5bf2
---

## Šta ćete uraditi

Panel **Provjeri s EnergyPlus-om** zapisuje otvoreni model kao ulaznu EnergyPlus datoteku (IDF): jedna zona po prostoriji, zidovi, podovi, krovovi i prozori s njihovim U-vrijednostima, izmjene zraka i idealno grijanje i hlađenje. Uvijek možeš **sačuvati tu datoteku** i pokrenuti je u svom EnergyPlus-u.

Ako postaviš i motor, panel može simulirati odmah i navodi EnergyPlus-ovo projektno grijanje i hlađenje pored brzog pomagala, prostoriju po prostoriju.

Ovo je projektno pomagalo. Energetski propisi, certifikacija i dozvole traže odobren alat i klimatske podatke koje on zahtijeva, a rezultat mora pregledati osoba koja za njega odgovara.

## Postavi motor

BimCraft ne sadrži EnergyPlus. To je velika WebAssembly verzija (oko 6 MB kompresovano, plus datoteka podataka od 4.6 MB), pa je hostuješ sam i upišeš njenu adresu u panel. Stranica je učitava tek kad pritisneš dugme za simulaciju, nikad pri pokretanju. Adresa mora biti https, putanja na ovom sajtu ili localhost.

## Projektni dani ili godina

- **Simuliraj projektne dane** ne treba vremenska datoteka. Pokreće hladan zimski dan bez sunca i vruć vedar ljetnji dan, na temperaturama iz ulaza za grijanje i hlađenje na kartici Dnevna svjetlost, i prijavljuje opterećenje svake prostorije u vatima.
- **Simuliraj godinu** traži vremensku datoteku u EPW formatu koju biraš. Dodaje ljude, svjetla i opremu iz istih ulaza (uvijek uključeno, jer se raspored ne izmišlja) i prijavljuje energiju grijanja i hlađenja svake prostorije u kWh. Vremenske datoteke imaju vlastite licence, pa koristi onu koju smiješ koristiti.

## Toplinska masa

Označi **Daj zidovima poznatih slojeva toplinsku masu** i zidovi, krovovi i podovi čiji su slojevi materijala poznati zapisuju se sloj po sloj, s gustinom i specifičnom toplotom uzetim iz kratke tabele tipičnih vrijednosti prema nazivu materijala. Slojevi se uzimaju prvo spolja, redom kojim ih datoteka navodi. Elementi bez slojeva ostaju pri svojoj U-vrijednosti, bez mase.

## Čitanje poređenja

Dvije metode odgovaraju na malo različita pitanja. Brzo pomagalo zadržava svaki element; EnergyPlus datoteka usrednjava U-vrijednosti svake prostorije po vrsti površine. Razlika veća od 15 % u projektnom grijanju prostorije navodi se kao napomena u ⚠ panelu, sa obje brojke. Hlađenje se po dizajnu razlikuje više: brzo pomagalo računa vrhunac iz sunca na jednom datumu, a EnergyPlus dimenzionira na svom projektnom danu.
