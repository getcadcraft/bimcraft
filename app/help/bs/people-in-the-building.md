---
title: Kretanje ljudi kroz zgradu
summary: Evakuacija ili uobičajeni dolasci kroz vaše prostorije, vrata i stepeništa, sa redovima tamo gdje se zgrada sužava, najdužim putem do izlaza iz svake prostorije, i nalazima kao Problemi. Gruby model gomile za odluke u projektovanju, a ne certifikat protivpožarne sigurnosti.
keywords: ljudi, evakuacija, izlaz, bijeg, izlaz, put do izlaza, red, gomila, protok, širina vrata, stepenice, dolasci, usko grlo, simulacija, stanari, pješak, šta ako, blokirana vrata
from: 84aa8920
---

Odjeljak {{ui:Ljudi u zgradi}} lijevog panela kreće ljude kroz prostorije, vrata i stepeništa otvorenog IFC modela. Ništa u modelu se ne mijenja i ništa se ne otprema.

:::warning
Ovo je **pomoćno sredstvo za projektovanje, a ne certifikat protivpožarne sigurnosti**. Ne uzima u obzir vatru, dim, paniku, razlike u pokretljivosti niti šta propis traži od vas. Granice su vaše: najduži put do izlaza i raspoloživo vrijeme su brojevi koje unosite vi, i nijedan se ne pretpostavlja.
:::

## Pokretanje

1. Otvorite model sa zatvorenim prostorijama i vratima. Vrata sa prostorijom samo s jedne strane su izlaz; vrata između dvije prostorije ih spajaju; stepenište spaja prostorije na svojim krajevima.
2. Odaberite **Evakuacija** (svi idu do izlaza), **Dolasci** (svi ulaze i idu do prostorije) ili **Razmjena** (ljudi u prostorijama odlaze dok toliko njih ulazi), i površinu poda po osobi. Prostorije nazvane kao hodnik, stepenište, predvorje ili toalet nikoga ne drže.
3. Kliknite {{ui:Pokreni}}. Dobijate vrijeme kada zadnja osoba izađe (i kada izađe polovina i devet od deset), red kod svakih vrata i stepeništa, prostoriju sa najdužim putem, i plan koji prikazuje pokretanje.

## Šta ako

Označite {{ui:Zatvoreno}} na vratima u tabeli i ponovo pokrenite: ljudi nalaze drugi put, ili se prostorije bez izlaza navode kao greške. Vrata dvostruko šira prazne prostoriju mnogo brže; tabela pokazuje gdje su redovi.

## Kako radi

Svaka prostorija je mreža, pa ljudi zaobilaze uglove, a ne prolaze kroz zidove. Brzina pada kako se prostorija puni (S = 1.4 (1 − 0.266 D) m/s, D u osobama po m²). Vrata propuštaju 1.3 osobe u sekundi kroz svaki metar svoje širine, umanjeno za 150 mm sa svake strane; stepenište 1.0 i sporije hodanje. Ljudi čekaju u redu po principu prvi došao, prvi uslužen. Broj pokretanja ponavlja isto pokretanje tačno.

Asistent može pokrenuti istu stvar: zatražite evakuaciju ili najduži put do izlaza iz svake prostorije.

## Broj ljudi u svakoj prostoriji

Otvorite {{ui:Broj ljudi u svakoj prostoriji}} da unesete broj za bilo koju prostoriju. Prazno polje koristi brojku površine poda (prikazanu sivo); 0 prazni prostoriju. Vaši brojevi se koriste za pokretanje i čuvaju se u ovom pregledaču.

## Protok u suprotnom smjeru na vratima

U **Razmjeni**, ljudi koji izlaze i ljudi koji ulaze susreću se na istim vratima. Kada vrata propuste nekoga u suprotnom smjeru odmah iza zadnje osobe, zadržavaju dio svoje brzine (0.8 ovdje; pretpostavka, jer objavljene vrijednosti variraju), a tabela broji promjene smjera. Vrata koja često mijenjaju smjer navode se u Problemima kao napomena.

## Stepenice i podesti

Svaki podest stepeništa košta pješaka jednu sekundu za okretanje (pretpostavka). Pravo stepenište nema ništa; L ili U stepenište ima jedan. Brzina stepeništa i dalje dolazi iz širine njegovog kraka.

## U 3D prikazu

Označite {{ui:Prikaži ljude u 3D pogledu}} i pješaci se pojavljuju kao figure u modelu, obojeni prema onome što rade, i kreću se dok puštate pokretanje. Ništa se ne dodaje u model.
