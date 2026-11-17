---
title: "Klasifikacijske šifre (Uniclass, OmniClass, UniFormat)"
summary: Daj svakom elementu i tipu klasifikacijsku šifru, izaberi koje sisteme projekt koristi, pretraži Uniclass tabele koje dolaze uz aplikaciju, učitaj vlastite licencirane tabele kancelarije i prikaži šifre u specifikacijama. Šifre se upisuju u IFC datoteku za drugi softver.
keywords: klasifikacija, klasifikovati, šifra, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabela, šifra elementa, šifra tipa, zadana šifra, IfcClassification, IfcClassificationReference, cobie, kolona specifikacije, csv, licenca
from: 222b94cd
---

## Šta ćete uraditi

Stavi klasifikacijsku šifru na zidove, podove, krovove, vrata, prozore i sve drugo u modelu, u do tri sistema usporedo: Uniclass, OmniClass i UniFormat. Druge discipline i drugi softver oslanjaju se na šifru, a ne na naziv, pa se šifre čuvaju u IFC datoteci kao klasifikacijske reference koje svaki BIM program čita.

## Daj elementu šifru

1. Odaberi element (ili više) i otvori **Svojstva**. Otvori odjeljak {{ui:Classification}}.
2. Upiši šifru u polje svog sistema i pritisni Enter. Kad je lista šifara učitana, upiši dio šifre ili nekoliko riječi ("zavjesni zid") i odaberi iz podudaranja: naziv šifre se popuni za tebe.
3. {{ui:Applies to}} kaže gdje ide šifra: **Ovaj element** ili **Njegov tip (svaki element tog tipa)**. Šifra na tipu zida čita je svaki zid tog tipa, i oni koje ćeš nacrtati kasnije.
4. {{ui:Clear}} uklanja šifru.

Ispod svake šifre odjeljak kaže odakle dolazi: postavljena na ovaj element, iz njegovog tipa, ili projektna zadana za njegovu klasu. Vlastita šifra elementa uvijek pobjeđuje onu tipa, a tipa onu zadanu. Kad su odabrani elementi više, polje koje kaže "razlikuje se" znači da nemaju istu šifru; upis jedne daje je svima. Svaka promjena je jedan korak poništavanja.

Šifra se uvijek može upisati, bila lista učitana ili ne. Ako ne izgleda kao šifra tog sistema, ili nije u učitanoj listi, pojavljuje se savjet i šifra ostaje onako kako si je upisao.

## Izaberi sisteme projekta

Otvori **Podaci** na traci modela i izaberi {{ui:Classification}} (ili {{ui:Project classification…}} u odjeljku Svojstva).

- Označi sisteme koje projekt koristi. Svojstva tada prikazuju samo njih.
- **Uniclass**: tabele Elementi/funkcije (EF), Sistemi (Ss) i Proizvodi (Pr) dolaze uz aplikaciju. Autorska prava su NBS-ova, licencirana pod Creative Commons Attribution-NoDerivatives 4.0, i prenose se nepromijenjene. Dijalog prikazuje izdanje svake tabele i dan kad je pročitana. To nisu najnovije tabele: izdavač svaka tri mjeseca objavljuje nove na svom sajtu.
- **OmniClass** i **UniFormat**: lista šifara ne dolazi uz aplikaciju, jer izdavač ne dozvoljava prenos tabela bez licence. Upiši bilo koju šifru ili učitaj licenciranu tabelu svoje kancelarije.
- {{ui:Load a table (CSV)…}} čita tabelu tvoje kancelarije iz CSV datoteke sa kolonom šifre i kolonom naziva (zaglavlje s nazivom Code, Number ili Identifier i Title, Name ili Description pronalazi se samo; bez njega koriste se prve dvije kolone). Tabela ostaje u ovom pregledniku i nikad se ne stavlja u datoteku projekta. U datoteku se čuvaju samo šifre koje dodijeliš. Noviju Uniclass tabelu možeš učitati na isti način.
- {{ui:Give elements a default code by their class}} daje svakom zidu, podu, krovu, vratima, prozoru, stepeništu, rampi, stubu, gredi i komadu namještaja početnu Uniclass šifru iz tabele Elementi/funkcije kad nema svoju. Elementi koje kasnije nacrtaš također je dobijaju.
- {{ui:Show the codes as columns in the schedules}} dodaje jednu kolonu po sistemu u specifikacije Vrata, Prozori, Zidovi po tipu i Prostorije i u njihov CSV. Red s više elemenata prikazuje "razlikuje se" kad se njihove šifre razlikuju.

## Dobro je znati

- Zadane šifre su početni izbor same aplikacije CadCraft, a ne izdavača, i nije ih provjerio praktičar. Provjeri ih prema standardu svog projekta.
- U datoteci je zadana vrijednost prava klasifikacija, označena nazivom veze "CadCraft default", i nestaje čim element ili njegov tip dobije vlastitu šifru.
- Šifre koje je uvezena datoteka već imala čitaju se i prikazuju, bez obzira na pravopis koji je drugi program koristio za naziv sistema. Šifre bilo kojeg drugog (kancelarijskog) sistema navode se i ostavljaju netaknute.
- Šifre se ponovo čitaju kad se datoteka otvori, ovdje ili u drugom programu. Prenose se i u izvoz IFC5 alfa (IFCX) kad je ta laboratorijska opcija uključena, osim šifre postavljene na krov.
- Nije napravljeno: stablo za pregledanje tabele nivo po nivo, šifre na nivoima i prostorijama kao projektne zadane vrijednosti, i provjera šifre prema izdanju navedenom u datoteci.
