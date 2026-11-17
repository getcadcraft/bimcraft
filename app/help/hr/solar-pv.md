---
title: Solarni PV nizovi, zasjenjenje i proizvodnja
summary: Postavite solarne nizove na krovove ili na tlo, zasjenite ih prema modelu, procijenite godišnju energiju, dimenzionirajte stringove i izradite podatke jednopolne sheme. Sve ulazne vrijednosti su prikazane, a početni modul i gubici su generički.
keywords: solar, pv, fotonaponski, niz, modul, krov, zasjenjenje, proizvodnja, kwh, kwp, dimenzioniranje stringova, izmjenjivač, jednopolna, jednopolni prikaz, nagib, azimut, razmak redova
from: adf4aaf3
---

## Što ćete napraviti

Otvorite ploču **Solar PV**. Odaberite plohu krova (njezin nagib i orijentacija čitaju se iz modela) ili postavite niz na tlu s nagibom i orijentacijom; moduli se smještaju unutar njega s odmacima i broje se, dajući DC snagu u kWp. Postavljanje niza upisuje ga u model kao solarne uređaje, u jednom koraku poništavanja.

## Zasjenjenje, proizvodnja i stringovi

- **Zasjenjenje** šalje zraku od svakog modula prema suncu za tipične dane svakog mjeseca, prema vlastitoj geometriji modela, tako da se računaju susjedne zgrade, atike i redovi ispred. Smanjuje se samo izravna sunčeva svjetlost, a djelomično zasjenjen niz gubi snagu razmjerno tome.
- **Proizvodnja** daje kWh po mjesecu i godini, kWh po kWp i omjer učinka (PR). Sunce dolazi iz vaših mjesečnih zbroja za vodoravnu plohu, ako ih upišete. Bez njih ploča koristi gornju granicu za vedro nebo i to navodi. **Dohvatite klimu iz NASA POWER** gumbom na kartici Proizvodnja: šalje samo geografsku širinu i dužinu lokacije, jednom, i odgovor čuva na ovom računalu (provjereno iz preglednika 2026-10-30). PVGIS ne dopušta web stranici čitanje svog odgovora, pa kartica daje poveznicu koja u novoj kartici otvara PVGIS-ove mjesečne podatke za lokaciju; zalijepite što pokaže u polje i dvanaest mjeseci će se popuniti.
- **Stringovi** provjeravaju module po stringu u odnosu na naponski prozor izmjenjivača za najhladniji i najtopliji dan, te paralelne stringove u odnosu na njegovu struju.
- **Jednopolna shema** izrađuje podatke dijagrama (niz, spojna kutija, rastavljač, izmjenjivač, razvodni ormarić, elektroenergetska mreža) s dimenzijama vodiča i osigurača prema faktorima koje upišete. To su podaci i SVG; dodatak Electrical u CadCraftu može ih postaviti kao simbole.

Modul, izmjenjivač, gubici i faktori vodiča koji dolaze s BimCraftom su generički primjeri, označeni u svakom rezultatu. Upišite podatke proizvođača i kodne vrijednosti prema kojima projektirate, i neka projekt pregleda osoba koja za njega odgovara.
