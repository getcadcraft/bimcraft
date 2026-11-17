---
title: Procijeni dnevnu svjetlost u svakoj prostoriji
summary: Prosječni faktor dnevne svjetlosti svake prostorije iz njenih prozora, unutrašnjih površina i neba koje svaki prozor vidi, s uglom neba izmjerenim u modelu. Procjena za rano projektovanje, a ne simulacija niti provjera propisa.
keywords: dnevna svjetlost, faktor dnevne svjetlosti, prosječni faktor dnevne svjetlosti, adf, vertikalna komponenta neba, vsc, solarni dobitak, sunce, g-vrijednost, mreža, podijeljeni fluks, komponenta neba, unutrašnje reflektovana komponenta, prirodno svjetlo, prozor, zastakljenje, ugao neba, zaklanjanje, nadstrešnica, balkon, prepust, refleksija, transmitancija, rano projektovanje, analiza, prostorije, prostori
from: 5f300a78
---

Kartica {{ui:Dnevna svjetlost}} u desnom panelu računa **prosječni faktor dnevne svjetlosti** svake prostorije: koliki dio svjetlosti oblačnog neba spolja prosječno dopire u prostoriju, u procentima. Čita prostorije (prostore) i prozore otvorenog IFC modela. Ništa se ne mijenja u modelu i ništa se ne šalje.

:::warning
Sve u ovom tabu je **pomoćno sredstvo za projektovanje, a ne proračun usklađenosti**: procjene za rano projektovanje po objavljenim metodama, **ne simulacija** i **ne provjera u odnosu na građevinski propis ili standard**. BS EN 17037, LEED, BREEAM i energetski propisi traže simulaciju dnevne svjetlosti s klimom mjesta; za njih koristite program za simulaciju dnevne svjetlosti.
:::

## Računanje

1. Otvori IFC model koji ima prostorije (prostore) i prozore. Modeli nacrtani ovdje imaju prostoriju unutar svakog zatvorenog skupa zidova.
2. Otvori karticu {{ui:Dnevna svjetlost}} i klikni {{ui:Izračunaj}}.
3. Svaka prostorija pokazuje svoj faktor dnevne svjetlosti i opseg: ispod 2 %, 2–5 %, 5 % ili više. Klikni prostoriju da vidiš njene površine i površinu i ugao neba svakog prozora; prostorija i njeni prozori se odabiru u modelu.

Promijenite ulaz i brojevi se odmah prate; nakon promjene modela, {{ui:Izračunaj ponovo}}. {{ui:CSV}} sprema svaku prostoriju s njenim brojevima i korištenim ulazima.

## Formula

Prosječni faktor dnevne svjetlosti (%) = T × Ag × θ × M ÷ (A × (1 − R²)), zbrojen po prozorima prostorije (Littlefairova formula, koju koriste BRE 209, BS 8206-2 i CIBSE LG10):

- **T**, propusnost svjetlosti stakla (0.7 za početak: koristite podatak proizvođača).
- **Ag**, zastakljena površina: površina svakog prozora (njegova ukupna širina × visina, inače njegova veličina u modelu) × **udio stakla** (0.75 za početak: ostatak je okvir).
- **θ**, ugao neba koji prozor vidi, u stepenima (dolje).
- **M**, faktor održavanja za prljavštinu na staklu (1 za početak).
- **A**, svaka unutrašnja površina prostorije: pod, zidovi, plafon i prozori, uzeta iz vlastitog oblika prostorije.
- **R**, njihova srednja refleksija, ponderisana površinom: pod 0.2, zidovi 0.5, plafon 0.7 za početak; staklo se računa kao 0.1.

## Kako se mjeri ugao neba

Za svaki prozor BimCraft siječe model uspravnom ravni okomitom na prozor, od vanjske strane stakla, i gleda od horizonta ravno gore: sve što presjek pogodi ispred prozora (zgrada nasuprot, balkon ili nadstrešnica iznad, streha) zaklanja dio tih 90°. θ je ono što ostane. Sam prozor i zid u kojem sjedi su izostavljeni. Ovo se radi na pet mjesta po širini prozora i uzima se prosjek, pa tanak stub ispred sredine uzima svoj dio, a ne cijelo nebo.

Zgrada 8.5 m iznad centra prozora i 9.9 m daleko zaklanja 40.65° (ugao čiji je tangens 8.5 ÷ 9.9), pa ostaje θ = 49.35°.

## Vertikalna komponenta neba svakog prozora

{{ui:Izračunaj}} također mjeri, za svaki prozor, koliko vidi od cijelog neba: isti uspravni presjek, okrenut u svaki smjer preko prednje strane prozora (svakih 2°, s jedne strane na drugu), pa zgrada s jedne strane, lamela ili duboka špaleta uzimaju svoj dio. Iz toga BimCraft računa **vertikalnu komponentu neba (VSC)**: koliko svjetlosti oblačnog neba dopire do stakla, kao udio onoga što bi dobio otvoren, ravan krov. Prozor bez ičega ispred dobija **39.6 %**, najviše što vertikalni prozor može; duga zgrada koja se diže 25° iznad prozora ostavlja oko **27 %**, brojku koju britanske smjernice (BRE 209) koriste kao pravilo za procjenu. Svaki prozor u detaljima prostorije pokazuje svoj VSC i svoj **ugao zaklanjanja** (koliko visoko se stvari dižu pravo ispred njega).

Nebo je standardno CIE oblačno nebo, koje je tri puta svjetlije ravno gore nego na horizontu, a presjek je tačan: ništa se ne uzorkuje.

## Sunce kroz prozore na datum

Otvori {{ui:Sunce kroz prozore na datum}} i odaberi datum. BimCraft prati sunce tog dana u četvrt-satnim intervalima i za svaki prozor zbraja toplinu koju sunce unosi kroz staklo:

- **direktno sunce**, kad je ispred prozora i ništa u modelu ga ne zaklanja (isti tačni presjek, okrenut prema suncu: balkon koji zaklanja visoko ljetno sunce u podne pušta nisko zimsko sunce unutra);
- **svjetlost neba** na staklu, umanjena za ono što prozor ne može vidjeti;
- svjetlost **s tla** (njena refleksija: 0.2 za početak);
- sve kroz **g-vrijednost** stakla (udio sunčeve energije koji propušta: 0.6 za početak; koristite podatak proizvođača) i njegov udio zastakljenja.

Svaka prostorija pokazuje ukupno za dan u kWh i svoj vrh u vatima s vremenom; detalji prostorije crtaju dan kao grafikon. Nebo je vedro po Hottelovom modelu (Duffie & Beckman, *Solar Engineering of Thermal Processes*), s ljetnim ili zimskim podacima za mjesto i sezonu i visinom lokacije; položaj sunca je prema NOAA. Geografska širina i dužina lokacije dolaze iz IFC-ove lokacije, a sjever iz stvarnog sjevera modela; ako model nema lokaciju, upiši geografsku širinu i dužinu. Vremena su standardna (bez ljetnog računanja) u vremenskoj zoni koju upišete, inače u onoj koju sugerira dužina.

Ne uključuje: oblake (vedar dan je), manje propuštanja stakla pod malim uglovima, okvire koji zaklanjaju staklo, roletne, i ono što zidovi i krov upijaju. Procjena hlađenja u istoj kartici koristi vrh.

## Faktor dnevne svjetlosti na mreži

Otvori {{ui:Faktor dnevne svjetlosti na mreži}} i {{ui:Izračunaj mrežu}}: BimCraft postavlja mrežu preko poda svake prostorije na visini radne ravni (0.85 m za početak), pola metra od zidova, i računa faktor dnevne svjetlosti u svakoj tački po **BRE metodi podijeljenog fluksa**:

- **komponenta neba**: oblačno nebo koje se u tački vidi kroz otvor svakog prozora, umanjeno za okvire;
- **spolja reflektovana komponenta**: ono što tačka vidi od zgrada vani kroz prozor, koje sjaje kao desetina neba iza njih (promijenite svjetlinu zaklanjanja ako su svjetlije ili tamnije);
- **unutrašnje reflektovana komponenta**: svjetlost koja se odbija po prostoriji, od površina prostorije i njihovih refleksija, površine prozora i koliko je izvan njih (BRE formula, s propusnošću stakla umjesto bistrog stakla koje je pretpostavljala).

Svaka prostorija pokazuje svoju srednju vrijednost, najnižu tačku i koliki dio dobija 2 % ili više; detalji prostorije crtaju njen plan s bojom svake tačke prema faktoru dnevne svjetlosti, a prozori crveno. Da bi bilo brzo na bilo kojem računaru, prostorija dobija najviše **400 tačaka**: u velikoj prostoriji razmak raste da stane (upiši razmak da sam odabereš).

## Što ne uključuje

- Krovni prozori (staklo leži ravno ili nagnuto) su navedeni, ali se ne računaju: formule ovdje su za prozore u zidovima.
- Prozori bez prostorije iza sebe (hodnik bez prostora, na primjer) su navedeni odvojeno.
- Špalete prozora (otvor se uzima na vanjskoj strani), odsjaj, sati sunca i dnevna svjetlost zasnovana na klimi. Za BS EN 17037, LEED ili BREEAM koristite program za simulaciju dnevne svjetlosti.
- Opsezi potječu iz starijih britanskih smjernica (BS 8206-2), prikazani kao vodič, nikad kao prolaz ili pad.
