---
title: Procijenite dnevno svjetlo u svakoj prostoriji
summary: Prosječni faktor dnevne svjetlosti svake prostorije iz njezinih prozora, unutarnjih površina i neba koje svaki prozor vidi, s kutom neba izmjerenim u modelu. Procjena rane faze projektiranja, a ne simulacija niti provjera propisa.
keywords: dnevno svjetlo, faktor dnevne svjetlosti, prosječni faktor dnevne svjetlosti, adf, vertikalna komponenta neba, vsc, solarni dobitak, sunce, g-vrijednost, mreža, podijeljeni tok, komponenta neba, unutarnje reflektirana komponenta, prirodno svjetlo, prozor, ostakljenje, kut neba, zaklanjanje, zasjenjenje, balkon, istak, refleksija, propusnost, rana faza projektiranja, analiza, prostorije, prostori
from: 5f300a78
---

Kartica {{ui:Dnevno svjetlo}} u desnom panelu izračunava **prosječni faktor dnevne svjetlosti** svake prostorije: koliki dio svjetla oblačnog neba izvan zgrade u prosjeku dopire do prostorije, kao postotak. Čita prostorije (prostore) i prozore otvorenog IFC modela. Ništa se ne mijenja u modelu i ništa se ne učitava.

:::warning
Sve u ovoj kartici je **pomoćno sredstvo za projektiranje, a ne izračun usklađenosti**: procjene rane faze projektiranja prema objavljenim metodama, **ne simulacija** i **ne provjera prema građevinskom propisu ili normi**. BS EN 17037, LEED, BREEAM i energetski propisi traže simulaciju dnevnog svjetla s klimom mjesta; za njih upotrijebite program za simulaciju dnevnog svjetla.
:::

## Izračunajte

1. Otvorite IFC model koji ima prostorije (prostore) i prozore. Modeli nacrtani ovdje imaju prostoriju unutar svakog zatvorenog skupa zidova.
2. Otvorite karticu {{ui:Dnevno svjetlo}} i kliknite {{ui:Izračunaj}}.
3. Svaka prostorija prikazuje svoj faktor dnevne svjetlosti i pojas: ispod 2 %, 2–5 %, 5 % ili više. Kliknite prostoriju da vidite njezine površine te površinu i kut neba svakog prozora; prostorija i njezini prozori odabiru se u modelu.

Promijenite ulaz i brojevi se odmah prate; nakon promjene modela kliknite {{ui:Izračunaj ponovno}}. {{ui:CSV}} sprema svaku prostoriju s njezinim brojevima i korištenim ulazima.

## Formula

Prosječni faktor dnevne svjetlosti (%) = T × Ag × θ × M ÷ (A × (1 − R²)), zbrojeno po prozorima prostorije (Littlefairova formula, koju koriste BRE 209, BS 8206-2 i CIBSE LG10):

- **T**, propusnost svjetla stakla (0.7 za početak: uzmite podatak proizvođača).
- **Ag**, ostakljena površina: površina svakog prozora (njegova ukupna širina × visina, inače njegova veličina u modelu) × **udio stakla** (0.75 za početak: ostatak je okvir).
- **θ**, kut neba koji prozor vidi, u stupnjevima (dolje).
- **M**, faktor održavanja zbog prljavštine na staklu (1 za početak).
- **A**, svaka unutarnja površina prostorije: pod, zidovi, strop i prozori, uzeti iz vlastitog oblika prostorije.
- **R**, njihova srednja refleksija, ponderirana površinom: pod 0.2, zidovi 0.5, strop 0.7 za početak; staklo se računa kao 0.1.

## Kako se mjeri kut neba

Za svaki prozor BimCraft reže model okomitom ravninom okomitom na prozor, od vanjske plohe stakla, i gleda od horizonta ravno gore: sve što rez nađe ispred prozora (zgrada nasuprot, balkon ili istak iznad, strehe) skriva dio tih 90°. θ je ono što ostane. Sam prozor i zid u kojem sjedi izostavljeni su. To radi na pet mjesta preko širine prozora i uzima srednju vrijednost, pa tanki stup ispred sredine uzima svoj dio, a ne cijelo nebo.

Zgrada 8.5 m iznad središta prozora i 9.9 m udaljena skriva 40.65° (kut čiji je tangens 8.5 ÷ 9.9), pa ostaje θ = 49.35°.

## Vertikalna komponenta neba svakog prozora

{{ui:Izračunaj}} također mjeri, za svaki prozor, koliko vidi od cijelog neba: isti okomiti rez, okrenut u svaki smjer preko prednje strane prozora (svakih 2°, od jedne do druge strane), tako da zgrada s jedne strane, lamela ili duboki otvor uzimaju svoj dio. Iz toga BimCraft izračunava **vertikalnu komponentu neba (VSC)**: koliko svjetla oblačnog neba dopire do stakla, kao udio onoga što bi dobio otvoreni, ravni krov. Prozor bez ičega ispred dobiva **39.6 %**, najviše što vertikalni prozor može; duga zgrada koja se uzdiže 25° iznad prozora ostavlja oko **27 %**, brojku koju britanske smjernice (BRE 209) koriste kao pravilo palca. Svaki prozor u detaljima prostorije prikazuje svoj VSC i svoj **kut zaklanjanja** (koliko visoko se stvari dižu ravno ispred njega).

Nebo je standardno CIE oblačno nebo, koje je tri puta svjetlije ravno gore nego pri horizontu, a rez je točan: ništa se ne uzorkuje.

## Sunce kroz prozore na određeni datum

Otvorite {{ui:Sunce kroz prozore na određeni datum}} i odaberite datum. BimCraft prati sunce tijekom tog dana u četvrtinama sata i za svaki prozor zbraja toplinu koju sunce donosi kroz staklo:

- **izravno sunce**, kad je ispred prozora i ništa u modelu ga ne zaklanja (isti točni rez, okrenut prema suncu: balkon koji zasjenjuje visoko ljetno sunce u podne pušta nisko zimsko sunce unutra);
- **svjetlost neba** na staklu, umanjenu za ono što prozor ne može vidjeti;
- svjetlost **s tla** (njezina refleksija: 0.2 za početak);
- sve kroz **g-vrijednost** stakla (udio sunčeve energije koji propušta: 0.6 za početak; uzmite podatak proizvođača) i njegov udio ostakljenja.

Svaka prostorija prikazuje ukupno za dan u kWh i svoj vrhunac u vatima uz vrijeme; detalji prostorije crtaju dan kao dijagram. Nebo je vedro prema Hottelovom modelu (Duffie & Beckman, *Solar Engineering of Thermal Processes*), s ljetnim ili zimskim vrijednostima za mjesto i sezonu te visinu lokacije; položaj sunca je NOAA-in. Zemljopisna širina i dužina lokacije dolaze iz IFC-ove lokacije, a sjever iz pravog sjevera modela; ako model nema lokaciju, upišite širinu i dužinu. Vremena su standardna (bez ljetnog računanja) u vremenskoj zoni koju upišete, inače u onoj koju sugerira dužina.

Što izostavlja: oblake (dan je vedar), slabije propuštanje stakla pod malim kutovima, okvire koji zasjenjuju staklo, roletne te ono što zidovi i krov upijaju. Procjena hlađenja u istoj kartici koristi vrhunac.

## Faktor dnevne svjetlosti na mreži

Otvorite {{ui:Faktor dnevne svjetlosti na mreži}} i kliknite {{ui:Izračunaj mrežu}}: BimCraft polaže mrežu preko poda svake prostorije na visini radne ravnine (0.85 m za početak), pola metra od zidova, i računa faktor dnevne svjetlosti u svakoj točki metodom **BRE podijeljenog toka**:

- **komponenta neba**: oblačno nebo koje točka vidi kroz otvor svakog prozora, umanjeno za okvire;
- **vanjska reflektirana komponenta**: što točka vidi od zgrada vani kroz prozor, koje sjaje na desetini neba iza njih (promijenite svjetlinu zaklanjanja ako su svjetlije ili tamnije);
- **unutarnja reflektirana komponenta**: svjetlo koje se odbija po prostoriji, iz površina prostorije i njihovih refleksija, površine prozora i udjela izvan njih (BRE formula, s propusnošću stakla umjesto prozirnog stakla koje je pretpostavila).

Svaka prostorija prikazuje svoju srednju vrijednost, najnižu točku i koliki dio prima 2 % ili više; detalji prostorije crtaju njezin tlocrt sa svakom točkom obojenom prema njezinu faktoru dnevne svjetlosti i prozorima u crvenoj boji. Da bi radilo brzo na bilo kojem računalu, prostorija dobiva najviše **400 točaka**: u velikoj prostoriji razmak raste da stane (upišite razmak da sami odaberete).

## Što izostavlja

- Krovne prozore (staklo ležeće ili nagnuto) navodi se, ali se ne računa: formule ovdje vrijede za prozore u zidovima.
- Prozori bez prostorije iza sebe (hodnik bez prostora, na primjer) navode se zasebno.
- Otvore prozora (otvor se uzima na vanjskoj plohi), odsjaj, sate sunca i dnevno svjetlo prema klimi. Za BS EN 17037, LEED ili BREEAM upotrijebite program za simulaciju dnevnog svjetla.
- Pojasevi su iz starijih britanskih smjernica (BS 8206-2), prikazani kao vodič, nikad kao prolaz ili neprolaz.
