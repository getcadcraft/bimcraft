---
title: Provedite ljude kroz zgradu
summary: Evakuacija ili uobičajeni dolasci kroz vaše prostorije, vrata i stubišta, s redovima tamo gdje se zgrada sužava, najdužim hodom do izlaza iz svake prostorije i nalazima kao problemima. Gruba simulacija gužve za projektne odluke, a ne potvrda o protupožarnoj sigurnosti.
keywords: ljudi, evakuacija, izlaz za evakuaciju, bijeg, izlaz, duljina hoda, red čekanja, gužva, tok, širina vrata, stubišta, dolasci, usko grlo, simulacija, osobe, pješak, što ako, zatvorena vrata
from: 84aa8920
---

Odjeljak {{ui:Ljudi u zgradi}} lijevog panela provodi ljude kroz prostorije, vrata i stubišta otvorenog IFC modela. Ništa se u modelu ne mijenja i ništa se ne učitava.

:::warning
Ovo je **pomoćno sredstvo za projektiranje, a ne potvrda o protupožarnoj sigurnosti**. Ne zna za vatru, dim, paniku, razlike u pokretljivosti niti što propis od vas traži. Ograničenja su vaša: najduži hod do izlaza i vrijeme na raspolaganju su brojke koje upisujete, a nijedna se ne pretpostavlja.
:::

## Pokrenite je

1. Otvorite model sa zatvorenim prostorijama i vratima. Vrata s prostorijom samo s jedne strane su izlaz; vrata između dviju prostorija spajaju ih; stubište spaja prostorije na svojim krajevima.
2. Odaberite **Evakuacija** (svi hodaju do izlaza), **Dolasci** (svi ulaze i hodaju do prostorije) ili **Zamjena** (ljudi u prostorijama odlaze dok ih toliko ulazi), i površinu poda po osobi. Prostorije nazvane kao hodnik, stubište, predvorje ili WC ne drže nikoga.
3. Kliknite {{ui:Pokreni}}. Dobivate vrijeme kad posljednja osoba izađe (i kad izađu polovica i devet od deset), red čekanja na svakim vratima i stubištu, prostoriju s najduljim hodom te plan koji prikazuje pokretanje.

## Što-ako

Označite {{ui:Zatvoreno}} na vratima u tablici i ponovno pokrenite: ljudi pronađu drugi put ili se navode prostorije bez izlaza kao pogreške. Vrata dvostruko šira prazne prostoriju puno brže; tablica pokazuje gdje su redovi.

## Kako radi

Svaka prostorija je mreža, pa ljudi hodaju oko uglova, a ne kroz zidove. Brzina pada kako se prostorija puni (S = 1.4 (1 − 0.266 D) m/s, D u osobama po m²). Vrata propuštaju 1.3 osobe u sekundi po metru svoje širine, umanjeno za 150 mm s obje strane; stubište 1.0 i sporije hodanje. Ljudi čekaju u redu po redu dolaska. Broj pokretanja ponavlja isto pokretanje točno.

Pomoćnik može pokrenuti istu stvar: zatražite evakuaciju ili najduži hod do izlaza iz svake prostorije.

## Ljudi u svakoj prostoriji

Otvorite {{ui:Ljudi u svakoj prostoriji}} da upišete broj za bilo koju prostoriju. Prazno polje koristi brojku površine poda (prikazanu sivo); 0 prazni prostoriju. Vaši brojevi koriste se za pokretanje i čuvaju se u ovom pregledniku.

## Protutok na vratima

U **Zamjeni** ljudi koji izlaze i ljudi koji ulaze susreću se na istim vratima. Kad vrata propuste nekoga u suprotnom smjeru tik iza zadnje osobe, zadržavaju dio svoje brzine (0.8 ovdje; pretpostavka, jer se objavljene vrijednosti razlikuju), a tablica broji promjene smjera. Vrata koja često mijenjaju smjer navode se među problemima kao napomena.

## Stubišta i podesti

Svaki podest stubišta košta hodača jednu sekundu da se okrene (pretpostavka). Ravno stubište nema nijedan; L ili U stubište ima jedan. Brzina stubišta i dalje dolazi iz širine njegova kraka.

## U 3D prikazu

Označite {{ui:Prikaži ljude u 3D prikazu}} i hodači se pojavljuju kao figure u modelu, obojene prema tome što rade, i kreću se dok puštate pokretanje. U model se ništa ne dodaje.
