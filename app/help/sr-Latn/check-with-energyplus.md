---
title: Proveri grejanje i hlađenje sa EnergyPlus
summary: Zapiši model kao EnergyPlus datoteku ili pokreni EnergyPlus verziju 26.2.0 nad njim u pregledaču i uporedi njegova projektna opterećenja sa brzom pomoći za grejanje i hlađenje. Drugo mišljenje za rani projekat, a ne proračun usklađenosti.
keywords: energyplus, simulacija energije, projektni dan, opterećenje grejanjem, opterećenje hlađenjem, vremenska datoteka, epw, idf, toplotna masa, godišnja energija, simulacija
from: b82a5bf2
---

## Šta ćeš uraditi

Panel **Proveri sa EnergyPlus** zapisuje otvoreni model kao ulaznu EnergyPlus datoteku (IDF): jedna zona po prostoriji, zidovi, podovi, krovovi i prozori sa svojim U-vrednostima, izmene vazduha i idealno grejanje i hlađenje. Uvek možeš da **sačuvaš tu datoteku** i pokreneš je u sopstvenom EnergyPlus-u.

Ako podesiš i motor, panel može da simulira odmah i navodi EnergyPlus-ova projektna grejanja i hlađenja uz ona iz brze pomoći, prostoriju po prostoriju.

Ovo je projektna pomoć. Energetski propisi, sertifikacija i dozvole zahtevaju odobren alat i klimatske podatke koje on traži, a rezultat mora da pregleda osoba koja za njega odgovara.

## Podesi motor

BimCraft ne sadrži EnergyPlus. To je velika WebAssembly verzija (oko 6 MB sažeto, plus datoteka sa podacima od 4.6 MB), pa je sam smeštaš na server i u panelu upisuješ njenu adresu. Stranica je učitava tek kad pritisneš dugme za simulaciju, nikad pri pokretanju. Adresa mora biti https, putanja na ovom sajtu ili localhost.

## Projektni dani ili godina

- **Simuliraj projektne dane** ne traži vremensku datoteku. Pokreće hladan zimski dan bez sunca i vreo, vedar letnji dan na temperaturama iz ulaza za grejanje i hlađenje na kartici Dnevna svetlost i prijavljuje opterećenje svake prostorije u vatima.
- **Simuliraj godinu** traži vremensku datoteku u EPW formatu koju izabereš. Dodaje ljude, svetla i opremu iz istih ulaza (uvek uključeno, jer se raspored ne izmišlja) i prijavljuje energiju grejanja i hlađenja svake prostorije u kWh. Vremenske datoteke imaju sopstvene licence, pa koristi onu koju smeš da koristiš.

## Toplotna masa

Štikliraj **Dodaj toplotnu masu zidovima sa poznatim slojevima** i zidovi, krovovi i podovi čiji su slojevi materijala poznati zapisuju se sloj po sloj, sa gustinom i specifičnom toplotom iz kratke tabele tipičnih vrednosti po nazivu materijala. Slojevi se uzimaju od spolja, redom kojim ih datoteka navodi. Elementi bez slojeva ostaju sa svojom U-vrednošću, bez mase.

## Čitanje poređenja

Dve metode odgovaraju na malo različita pitanja. Brza pomoć zadržava svaki element; EnergyPlus datoteka usrednjava U-vrednosti svake prostorije po vrsti površine. Razlika veća od 15 % u projektnom grejanju prostorije navodi se kao napomena u panelu ⚠, sa obe brojke. Hlađenje se po konstrukciji više razlikuje: brza pomoć računa vrhunac od sunca na jedan datum, a EnergyPlus dimenzionira na svom projektnom danu.
