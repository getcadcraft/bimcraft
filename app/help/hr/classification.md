---
title: Klasifikacijske šifre (Uniclass, OmniClass, UniFormat)
summary: Dodijelite klasifikacijsku šifru svakom elementu i tipu, odaberite koje sustave projekt koristi, pretražite Uniclass tablice koje dolaze uz aplikaciju, učitajte vlastite licencirane tablice ureda i prikažite šifre u specifikacijama. Šifre se upisuju u IFC datoteku za drugi softver.
keywords: klasifikacija, klasificirati, šifra, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tablica, šifra elementa, šifra tipa, zadana šifra, IfcClassification, IfcClassificationReference, cobie, stupac specifikacije, csv, licenca
from: 222b94cd
---

## Što ćete napraviti

Stavite klasifikacijsku šifru na zidove, podove, krovove, vrata, prozore i sve ostalo u modelu, u do tri sustava uz sebe: Uniclass, OmniClass i UniFormat. Drugi sudionici i drugi softver oslanjaju se na šifru, a ne na naziv, pa se šifre spremaju u IFC datoteku kao klasifikacijske reference koje svaki BIM program čita.

## Dodijelite element šifru

1. Odaberite element (ili više) i otvorite **Svojstva**. Otvorite odjeljak {{ui:Klasifikacija}}.
2. Upišite šifru u polje njezina sustava i pritisnite Enter. Kad je popis šifri učitan, upišite dio šifre ili nekoliko riječi (curtain wall) i odaberite iz podudaranja: naslov šifre ispunjava se sam.
3. {{ui:Primjenjuje se na}} kaže gdje ide šifra: **Ovaj element** ili **Njegov tip (svaki element tipa)**. Šifra na tipu zida čita je svaki zid tog tipa, uključujući one koje kasnije nacrtate.
4. {{ui:Očisti}} uklanja šifru.

Ispod svake šifre odjeljak kaže odakle dolazi: postavljena na ovom elementu, iz njegova tipa ili projektna zadana za njegovu klasu. Vlastita šifra elementa uvijek ima prednost nad šifrom tipa, a šifra tipa nad zadanom. Kad je odabrano više elemenata, okvir koji kaže „varira“ znači da nemaju istu šifru; upisivanje jedne dodjeljuje je svima. Svaka promjena je jedan korak poništavanja.

Šifru uvijek možete upisati, bez obzira je li popis učitan. Ako ne izgleda kao šifra tog sustava ili nije na učitanom popisu, savjet to navodi, a šifra ostaje onakva kakvu ste je upisali.

## Odaberite sustave projekta

Otvorite **Podaci** na traci modela i odaberite {{ui:Klasifikacija}} (ili {{ui:Klasifikacija projekta…}} u odjeljku Svojstva).

- Označite sustave koje projekt koristi. Svojstva tada prikazuju samo njih.
- **Uniclass**: tablice Elementi/funkcije (EF), Sustavi (Ss) i Proizvodi (Pr) dolaze uz aplikaciju. Autor je © NBS, licencirane su Creative Commons Attribution-NoDerivatives 4.0 i prosljeđuju se nepromijenjene. Dijaloški okvir prikazuje izdanje svake tablice i dan kad je pročitana. To nisu najnovije tablice: izdavač svaki kvartal objavljuje nove na vlastitoj stranici.
- **OmniClass** i **UniFormat**: uz aplikaciju ne dolazi nijedan popis šifri, jer izdavač ne dopušta prosljeđivanje tablica bez licence. Upišite bilo koju šifru ili učitajte vlastitu licenciranu tablicu ureda.
- {{ui:Učitaj tablicu (CSV)…}} čita vlastitu tablicu ureda iz CSV datoteke sa stupcem šifre i stupcem naslova (zaglavlje s nazivom Code, Number ili Identifier te Title, Name ili Description pronalazi se samo; bez njega koriste se prva dva stupca). Tablica ostaje u ovom pregledniku i nikad se ne stavlja u projektnu datoteku. U datoteku se spremaju samo šifre koje dodijelite. Noviju Uniclass tablicu možete učitati na isti način.
- {{ui:Daj elementima zadanu šifru prema klasi}} daje svakom zidu, podu, krovu, vratima, prozoru, stubištu, rampi, stupu, gredi i komadu namještaja početnu Uniclass šifru iz tablice Elementi/funkcije kad nema vlastitu. Elementi koje kasnije nacrtate također je dobivaju.
- {{ui:Prikaži šifre kao stupce u specifikacijama}} dodaje po jedan stupac za svaki sustav u specifikacije Vrata, Prozori, Zidovi po tipu i Prostorije te u njihov CSV. Redak s više elemenata prikazuje „varira“ kad se njihove šifre razlikuju.

## Dobro je znati

- Zadane šifre su vlastiti početni izbor CadCrafta, a ne izdavačev, i nisu provjerile stručne osobe. Provjerite ih prema standardu vašeg projekta.
- U datoteci je zadana vrijednost prava klasifikacija, označena nazivom veze „CadCraft default“, i nestaje čim element ili njegov tip dobije vlastitu šifru.
- Šifre koje je uvezena datoteka već imala čitaju se i prikazuju, bez obzira na pravopis koji je drugi program koristio za naziv sustava. Šifre bilo kojeg drugog sustava (ureda) navode se i ostavljaju netaknute.
- Šifre se ponovno čitaju kad se datoteka ponovno otvori, ovdje ili u drugom programu. Prenose se i u izvoz IFC5 alpha (IFCX) kad je ta laboratorijska opcija uključena, osim šifre postavljene na krovu.
- Još nije izrađeno: stablo za pregled tablice razinu po razinu, šifre na etažama i prostorijama kao projektne zadane vrijednosti, te provjera šifre prema izdanju navedenom u datoteci.
