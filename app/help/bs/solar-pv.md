---
title: Solarni PV nizovi, zasjenjenje i prinos
summary: Postavite solarne nizove na krovove ili na tlo, zasjenite ih iz modela, procijenite godišnju energiju, odredite veličine stringova i napravite podatke za jednolinijski dijagram. Svi ulazi su prikazani, a početni modul i gubici su generički.
keywords: solar, pv, fotonaponski, niz, modul, krov, zasjenjenje, prinos, kwh, kwp, dimenzioniranje stringova, invertor, jednolinijski, jedna linija, nagib, azimut, razmak redova
from: adf4aaf3
---

## Šta ćete uraditi

Otvorite okno **Solarni PV**. Odaberite krovnu plohu (njen nagib i orijentacija čitaju se iz modela) ili postavite niz na tlu s nagibom i orijentacijom; moduli se smještaju unutra s povlačenjima i broje se, dajući DC snagu u kWp. Postavljanje niza upisuje ga u model kao solarne uređaje, u jednom koraku poništavanja.

## Zasjenjenje, prinos i stringovi

- **Zasjenjenje** šalje zraku od svakog modula prema suncu za tipične dane svakog mjeseca, u odnosu na sopstvenu geometriju modela, pa se računaju susjedne zgrade, atike i redovi ispred. Smanjuje se samo direktna sunčeva svjetlost, a djelimično zasjenjen niz gubi snagu srazmjerno.
- **Prinos** daje kWh po mjesecima i godini, kWh po kWp i omjer performansi. Sunce dolazi iz vaših mjesečnih ukupnih vrijednosti na horizontalnoj površini ako ih upišete. Bez njih okno koristi gornju granicu za vedro nebo i to kaže. **Preuzmite klimu iz NASA POWER** dugmetom na kartici Prinos: šalje samo geografsku širinu i dužinu gradilišta, jednom, i čuva odgovor na ovom računaru (provjereno iz preglednika 2026-10-30). PVGIS ne dozvoljava web stranici da čita njegov odgovor, pa kartica daje link koji u novoj kartici otvara PVGIS-ove mjesečne podatke za gradilište; zalijepite ono što prikazuje u polje i popune se dvanaest mjeseci.
- **Stringovi** provjeravaju module po stringu u odnosu na naponski prozor invertora za najhladniji i najtopliji dan, a paralelne stringove u odnosu na njegovu struju.
- **Jednolinijski** pravi podatke dijagrama (niz, kombinator, rastavljač, invertor, panel, mreža) s veličinama kablova i osigurača iz faktora koje upišete. To su podaci i SVG; dodatak Električni u CadCraft-u može ih postaviti kao simbole.

Moduli, invertor, gubici i faktori kablova koji dolaze s BimCraft-om su generički primjeri, označeni u svakom rezultatu. Upišite podatke proizvođača i kodne vrijednosti na koje projektujete, a dizajn neka pregleda osoba koja za njega odgovara.
