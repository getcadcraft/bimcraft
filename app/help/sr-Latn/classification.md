---
title: Klasifikacione šifre (Uniclass, OmniClass, UniFormat)
summary: Dodeli svakom elementu i tipu klasifikacionu šifru, izaberi koje sisteme projekat koristi, pretraži tabele Uniclass koje dolaze uz aplikaciju, učitaj sopstvene licencirane tabele tvoje kancelarije i prikaži šifre u specifikacijama. Šifre se upisuju u IFC datoteku za drugi softver.
keywords: klasifikacija, klasifikovanje, šifra, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabela, šifra elementa, šifra tipa, podrazumevana šifra, IfcClassification, IfcClassificationReference, cobie, kolona specifikacije, csv, licenca
from: 222b94cd
---

## Šta ćeš uraditi

Stavi klasifikacionu šifru na zidove, podove, krovove, vrata, prozore i sve drugo u modelu, u do tri sistema jedan pored drugog: Uniclass, OmniClass i UniFormat. Ostale discipline i drugi softver oslanjaju se na šifru, a ne na naziv, pa se šifre čuvaju u IFC datoteci kao klasifikacione reference koje svaki BIM program čita.

## Dodeli elementu šifru

1. Izaberi element (ili više njih) i otvori **Svojstva**. Otvori odeljak {{ui:Klasifikacija}}.
2. Upiši šifru u polje svog sistema i pritisni Enter. Kad je lista šifara učitana, upiši deo šifre ili nekoliko reči („zavesni zid“) i izaberi iz podudaranja: naslov šifre se popunjava sam.
3. {{ui:Odnosi se na}} kaže gde šifra ide: **Ovaj element** ili **Njegov tip (svaki element tog tipa)**. Šifra na tipu zida čita je svaki zid tog tipa, i oni koje kasnije nacrtaš.
4. {{ui:Obriši}} uklanja šifru.

Ispod svake šifre odeljak kaže odakle dolazi: postavljena na ovom elementu, sa tipa ili podrazumevana šifra projekta za njegovu klasu. Sopstvena šifra elementa uvek pobeđuje onu sa tipa, a tipova ona podrazumevanu. Kad je izabrano više elemenata, polje na kom piše „različito“ znači da nemaju istu šifru; ako upišeš jednu, dodeljuje se svima. Svaka izmena je jedan korak opoziva.

Šifra se uvek može upisati, bilo da je lista učitana ili ne. Ako ne liči na šifru tog sistema ili nije na učitanoj listi, pojavljuje se savet i šifra ostaje onakva kakvu si upisao.

## Izaberi sisteme projekta

Otvori **Podaci** na traci modela i izaberi {{ui:Klasifikacija}} (ili {{ui:Klasifikacija projekta…}} u odeljku Svojstva).

- Štikliraj sisteme koje ovaj projekat koristi. Svojstva tada prikazuju samo njih.
- **Uniclass**: tabele Elementi/funkcije (EF), Sistemi (Ss) i Proizvodi (Pr) dolaze uz aplikaciju. Imaju © NBS, licencu Creative Commons Attribution-NoDerivatives 4.0, i prenose se nepromenjene. Dijalog prikazuje izdanje svake tabele i dan kad je pročitana. Nisu najnovije: izdavač objavljuje nove svakog kvartala na svom sajtu.
- **OmniClass** i **UniFormat**: lista šifara ne dolazi uz aplikaciju, jer izdavač ne dozvoljava da se tabele prenose bez licence. Upiši bilo koju šifru ili učitaj licenciranu tabelu tvoje kancelarije.
- {{ui:Učitaj tabelu (CSV)…}} čita tabelu tvoje kancelarije iz CSV datoteke sa kolonom šifre i kolonom naslova (zaglavlje Code, Number ili Identifier i Title, Name ili Description prepoznaje se samo; bez njega koriste se prve dve kolone). Tabela ostaje u ovom pregledaču i nikad se ne ubacuje u datoteku projekta. U datoteku se čuvaju samo šifre koje si dodelio. Noviju Uniclass tabelu možeš da učitaš na isti način.
- {{ui:Dodeli elementima podrazumevanu šifru prema njihovoj klasi}} daje svakom zidu, podu, krovu, vratima, prozoru, stepeništu, rampi, koloni, gredi i komadu nameštaja početnu Uniclass šifru iz tabele Elementi/funkcije kad sopstvene nema. Elementi koje nacrtaš posle takođe je dobijaju.
- {{ui:Prikaži šifre kao kolone u specifikacijama}} dodaje jednu kolonu po sistemu u specifikacije Vrata, Prozori, Zidovi po tipu i Prostorije i u njihov CSV. Red sa više elemenata prikazuje „različito“ kad se njihove šifre razlikuju.

## Dobro je znati

- Podrazumevane šifre su početni izbor CadCraft-a, a ne izdavača, i nisu proverene od strane praktičara. Proveri ih prema standardu svog projekta.
- U datoteci je podrazumevana šifra prava klasifikacija, obeležena nazivom relacije „CadCraft default“, i nestaje čim element ili njegov tip dobije sopstvenu šifru.
- Šifre koje uvezena datoteka već ima čitaju se i prikazuju, bez obzira na to kako drugi program piše naziv sistema. Šifre bilo kog drugog sistema (kancelarijskog) navode se i ostavljaju netaknute.
- Šifre se ponovo čitaju kad se datoteka ponovo otvori, ovde ili u drugom programu. Prenose se i u IFC5 alfa (IFCX) izvoz kad je ta laboratorijska opcija uključena, osim šifre postavljene na krovu.
- Nije urađeno: stablo za pregled tabele nivo po nivo, šifre na nivoima i prostorijama kao projektne podrazumevane vrednosti i provera šifre prema izdanju navedenom u datoteci.
