---
title: Provjera grijanja i hlađenja s EnergyPlusom
summary: Zapišite model kao EnergyPlus datoteku ili pokrenite EnergyPlus verzije 26.2.0 nad njim u pregledniku i usporedite projektna opterećenja s brzim pomagalom za grijanje i hlađenje. Drugo mišljenje za rani projekt, a ne proračun usklađenosti.
keywords: energyplus, energetska simulacija, projektni dan, opterećenje grijanja, opterećenje hlađenja, vremenska datoteka, epw, idf, toplinska masa, godišnja energija, simulacija
from: b82a5bf2
---

## Što ćete napraviti

Okno **Provjera s EnergyPlusom** zapisuje otvoreni model kao EnergyPlus ulaznu datoteku (IDF): jedna zona po prostoriji, zidovi, podovi, krovovi i prozori s njihovim U-vrijednostima, izmjene zraka te idealno grijanje i hlađenje. Uvijek možete **spremiti tu datoteku** i pokrenuti je u vlastitom EnergyPlusu.

Ako postavite i motor, okno može simulirati odmah i prikazuje EnergyPlusovo projektno grijanje i hlađenje uz ono iz brzog pomagala, prostoriju po prostoriju.

Ovo je projektno pomagalo. Energetski propisi, certifikacija i dozvole zahtijevaju odobreni alat i klimatske podatke koje on traži, a rezultat mora pregledati osoba koja za njega odgovara.

## Postavljanje motora

BimCraft ne sadrži EnergyPlus. To je veliko WebAssembly izdanje (oko 6 MB sažeto, plus datoteka podataka od 4.6 MB), pa ga sami postavljate na svoj poslužitelj i upisujete njegovu adresu u okno. Stranica ga učitava tek kad pritisnete gumb za simulaciju, nikad pri pokretanju. Adresa mora biti https, putanja na ovom mjestu ili localhost.

## Projektni dani ili godina

- **Simuliraj projektne dane** ne treba vremenska datoteka. Pokreće hladan zimski dan bez sunca i vruć vedar ljetni dan, s temperaturama iz ulaza za grijanje i hlađenje na kartici Dnevno svjetlo, i prikazuje opterećenje svake prostorije u vatima.
- **Simuliraj godinu** treba vremensku datoteku u EPW formatu koju odaberete. Dodaje ljude, svjetla i opremu iz istih ulaza (uvijek uključeno, jer se ne izmišlja raspored) i prikazuje energiju grijanja i hlađenja svake prostorije u kWh. Vremenske datoteke imaju vlastite licence, pa koristite onu koju smijete koristiti.

## Toplinska masa

Označite **Daj zidovima s poznatim slojevima toplinsku masu** i zidovi, krovovi i podovi čiji su slojevi materijala poznati zapisuju se sloj po sloj, a gustoća i specifični toplinski kapacitet uzimaju se iz kratke tablice tipičnih vrijednosti prema nazivu materijala. Slojevi se uzimaju najprije izvana, redoslijedom kojim ih datoteka navodi. Elementi bez slojeva ostaju pri svojoj U-vrijednosti, bez mase.

## Čitanje usporedbe

Dvije metode odgovaraju na malo različita pitanja. Brzo pomagalo zadržava svaki element; EnergyPlus datoteka prosječi U-vrijednosti svake prostorije po vrsti površine. Razlika veća od 15 % u projektnom grijanju prostorije navodi se kao napomena na ploči ⚠, s obje brojke. Hlađenje se razlikuje više po konstrukciji: brzo pomagalo računa vrhunac iz sunca na jedan datum, a EnergyPlus dimenzionira prema vlastitom projektnom danu.
