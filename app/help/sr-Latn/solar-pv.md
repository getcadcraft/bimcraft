---
title: Solarni PV nizovi, senčenje i prinos
summary: Postavi solarne nizove na krovove ili na tlo, osenči ih iz modela, proceni godišnju energiju, odredi dimenzije stringova i napravi podatke za jednolinijski dijagram. Svi ulazi su prikazani, a početni modul i gubici su opšti.
keywords: solar, pv, fotonaponski, niz, modul, krov, senčenje, prinos, kwh, kwp, dimenzionisanje stringova, invertor, jednolinijski, jednolinija, nagib, azimut, razmak redova
from: adf4aaf3
---

## Šta ćeš raditi

Otvori okno **Solar PV**. Izaberi krovnu ravan (njen nagib i orijentacija čitaju se iz modela) ili postavi niz na tlu sa nagibom i orijentacijom; moduli se smeštaju unutra sa odstojanjima i broje se, dajući DC snagu u kWp. Postavljanje niza upisuje ga u model kao solarne uređaje, u jednom koraku opozivanja.

## Senčenje, prinos i stringovi

- **Senčenje** šalje zrak od svakog modula ka suncu za tipične dane svakog meseca, prema sopstvenoj geometriji modela, pa se računaju susedne zgrade, atike i redovi ispred njih. Smanjuje se samo direktna sunčeva svetlost, a delimično osenčen niz gubi snagu srazmerno.
- **Prinos** daje kWh po mesecima i godini, kWh po kWp i koeficijent performansi. Sunce dolazi iz tvojih mesečnih zbirova na horizontalnoj površini, ako ih upišeš. Bez njih okno koristi gornju granicu za vedro nebo i to kaže. **Preuzmi klimu iz NASA POWER** dugmetom na kartici Prinos: šalje samo geografsku širinu i dužinu lokacije, jednom, i zadržava odgovor na ovom računaru (proveren iz pregledača 2026-10-30). PVGIS ne dozvoljava veb stranici da čita njegov odgovor, pa kartica daje vezu koja u novoj kartici otvara PVGIS-ove mesečne podatke za lokaciju; nalepi ono što pokazuje u polje i dvanaest meseci se popuni.
- **Stringovi** proveravaju module po stringu u odnosu na naponski opseg invertora za najhladniji i najtopliji dan, a paralelne stringove u odnosu na njegovu struju.
- **Jednolinijski** pravi podatke dijagrama (niz, kombinator, rastavljač, invertor, panel, mreža) sa dimenzijama kablova i osigurača iz faktora koje upišeš. To su podaci i SVG; Električni dodatak u CadCraft-u može ih postaviti kao simbole.

Modul, invertor, gubici i faktori kablova koji dolaze uz BimCraft su opšti primeri, označeni u svakom rezultatu. Upiši podatke proizvođača i propisne vrednosti po kojima projektuješ, i neka projekat pregleda osoba koja za njega odgovara.
