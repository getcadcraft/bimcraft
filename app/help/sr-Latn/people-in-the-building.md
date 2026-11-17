---
title: Kretanje ljudi kroz zgradu
summary: Evakuacija ili uobičajeni dolasci ljudi kroz vaše prostorije, vrata i stepeništa, sa redovima čekanja tamo gde se zgrada sužava, najdužim putem do izlaza iz svake prostorije, i nalazima kao Problemima. Grub model gomile za odluke u projektovanju, a ne sertifikat zaštite od požara.
keywords: ljudi, evakuacija, izlaz, put do izlaza, najduži put, red, gomila, tok, širina vrata, stepenište, dolasci, usko grlo, simulacija, stanari, pešak, šta ako, blokirana vrata
from: 84aa8920
---

Odeljak {{ui:Ljudi u zgradi}} levog panela kreće ljude kroz prostorije, vrata i stepeništa otvorenog IFC modela. Ništa u modelu se ne menja i ništa se ne otprema.

:::warning
Ovo je **pomoćno sredstvo za projektovanje, a ne sertifikat zaštite od požara**. Ne zna za vatru, dim, paniku, razlike u pokretljivosti niti šta propis od vas traži. Granice su vaše: najduži put do izlaza i vreme koje je na raspolaganju su brojevi koje unosite, a nijedan se ne pretpostavlja.
:::

## Pokretanje

1. Otvorite model sa zatvorenim prostorijama i vratima. Vrata sa prostorijom samo sa jedne strane su izlaz; vrata između dve prostorije ih spajaju; stepenište spaja prostorije na svojim krajevima.
2. Izaberite **Evakuacija** (svi idu do izlaza), **Dolasci** (svi ulaze i idu do prostorije) ili **Razmena** (ljudi iz prostorija izlaze dok toliko ih ulazi), i površinu poda po osobi. Prostorije nazvane kao hodnik, stepenište, predvorje ili toalet ne drže nikoga.
3. Kliknite {{ui:Pokreni}}. Dobijate vreme kada je poslednja osoba izašla (i kada su izašle polovina i devet od deset), red kod svakih vrata i stepeništa, prostoriju sa najdužim putem i plan koji prikazuje pokretanje.

## Šta-ako

Označite {{ui:Zatvoreno}} na vratima u tabeli i pokrenite ponovo: ljudi nalaze drugi put, ili se prostorije bez izlaza navode kao greške. Vrata duplo šira prazne prostoriju mnogo brže; tabela pokazuje gde su redovi.

## Kako radi

Svaka prostorija je mreža, pa ljudi zaobilaze uglove, a ne prolaze kroz zidove. Brzina pada kako se prostorija puni (S = 1.4 (1 − 0.266 D) m/s, D u ljudima po m²). Vrata propuštaju 1.3 osobe u sekundi po metru svoje širine, umanjeno za 150 mm sa svake strane; stepenište 1.0 i sporije hodanje. Ljudi čekaju u redu po principu prvi došao, prvi uslužen. Broj pokretanja ponavlja isto pokretanje tačno.

Asistent može da pokrene istu stvar: zatražite evakuaciju ili najduži put do izlaza iz svake prostorije.

## Broj ljudi u svakoj prostoriji

Otvorite {{ui:Broj ljudi u svakoj prostoriji}} da biste ukucali broj za bilo koju prostoriju. Prazno polje koristi brojku površine poda (prikazanu sivo); 0 prazni prostoriju. Vaši brojevi se koriste za pokretanje i čuvaju se u ovom pregledaču.

## Protok u suprotnom smeru na vratima

U **Razmeni**, ljudi koji izlaze i ljudi koji ulaze susreću se na istim vratima. Kada vrata propuste nekoga u suprotnom smeru tik iza poslednje osobe, zadržavaju deo svoje brzine (0.8 ovde; pretpostavka, jer objavljene vrednosti variraju), a tabela broji promene smera. Vrata koja često menjaju smer navode se u Problemima kao napomena.

## Stepeništa i podesti

Svaki podest stepeništa košta pešaka jednu sekundu za okret (pretpostavka). Pravo stepenište nema nijedan; L ili U stepenište ima jedan. Brzina stepeništa i dalje zavisi od širine njegovog kraka.

## U 3D prikazu

Označite {{ui:Prikaži ljude u 3D prikazu}} i pešaci se pojavljuju kao figure u modelu, obojene prema tome šta rade, i kreću se dok puštate pokretanje. Ništa se ne dodaje u model.
