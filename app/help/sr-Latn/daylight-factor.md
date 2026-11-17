---
title: Proceni dnevnu svetlost u svakoj prostoriji
summary: Prosečni faktor dnevne svetlosti svake prostorije iz njenih prozora, njenih unutrašnjih površina i neba koje svaki prozor vidi, sa uglom neba izmerenim u modelu. Procena u ranoj fazi projekta, a ne simulacija ni provera propisa.
keywords: dnevna svetlost, faktor dnevne svetlosti, prosečni faktor dnevne svetlosti, adf, vertikalna komponenta neba, vsc, solarni dobitak, sunce, g-vrednost, mreža, podeljeni fluks, komponenta neba, unutrašnje reflektovana komponenta, prirodno svetlo, prozor, staklarija, ugao neba, zaklanjanje, preklapanje, balkon, istak, refleksija, propustljivost, rana faza projekta, analiza, prostorije, prostori
from: 5f300a78
---

Kartica {{ui:Dnevna svetlost}} u desnom panelu računa **prosečni faktor dnevne svetlosti** svake prostorije: koliki deo svetlosti oblačnog neba spolja dopire u prostoriju, u proseku, kao procenat. Čita prostorije (prostore) i prozore otvorenog IFC modela. Ništa se ne menja u modelu i ništa se ne otprema.

:::warning
Sve u ovoj kartici je **pomoćno sredstvo za projektovanje, a ne proračun usklađenosti**: procene u ranoj fazi projekta po objavljenim metodama, **ne simulacija** i **ne provera u odnosu na građevinski propis ili standard**. BS EN 17037, LEED, BREEAM i energetski propisi traže simulaciju dnevne svetlosti sa klimom mesta; za njih koristite program za simulaciju dnevne svetlosti.
:::

## Izračunajte

1. Otvorite IFC model koji ima prostorije (prostore) i prozore. Modeli nacrtani ovde imaju prostoriju unutar svakog zatvorenog skupa zidova.
2. Otvorite karticu {{ui:Dnevna svetlost}} i kliknite {{ui:Izračunaj}}.
3. Svaka prostorija pokazuje svoj faktor dnevne svetlosti i opseg: ispod 2 %, 2–5 %, 5 % ili više. Kliknite prostoriju da vidite njene površine i površinu i ugao neba svakog prozora; prostorija i njeni prozori biraju se u modelu.

Promenite ulaz i brojevi se odmah prate; posle promene modela kliknite {{ui:Izračunaj ponovo}}. {{ui:CSV}} čuva svaku prostoriju sa njenim brojevima i upotrebljenim ulazima.

## Formula

Prosečni faktor dnevne svetlosti (%) = T × Ag × θ × M ÷ (A × (1 − R²)), zbir po prozorima prostorije (Littlefairova formula, koju koriste BRE 209, BS 8206-2 i CIBSE LG10):

- **T**, propustljivost svetlosti stakla (0.7 za početak: uzmite podatak proizvođača).
- **Ag**, ostakljena površina: površina svakog prozora (njegova ukupna širina × visina, inače veličina u modelu) × **udeo stakla** (0.75 za početak: ostatak je okvir).
- **θ**, ugao neba koji prozor vidi, u stepenima (dole).
- **M**, faktor održavanja zbog prljavštine na staklu (1 za početak).
- **A**, svaka unutrašnja površina prostorije: pod, zidovi, plafon i prozori, uzeta iz sopstvenog oblika prostorije.
- **R**, njihova srednja refleksija, ponderisana površinom: pod 0.2, zidovi 0.5, plafon 0.7 za početak; staklo se računa kao 0.1.

## Kako se meri ugao neba

Za svaki prozor BimCraft seče model uspravnom ravni normalnom na prozor, od spoljne strane stakla, i gleda od horizonta pravo gore: sve što seče ispred prozora (zgrada preko puta, balkon ili istak iznad, streha) skriva deo tih 90°. θ je ono što ostane. Sam prozor i zid u kojem sedi ne računaju se. Ovo se radi na pet mesta preko širine prozora i uzima se srednja vrednost, pa tanak stub ispred sredine uzima svoj deo, a ne celo nebo.

Zgrada 8.5 m iznad sredine prozora i udaljena 9.9 m skriva 40.65° (ugao čiji je tangens 8.5 ÷ 9.9), pa ostaje θ = 49.35°.

## Vertikalna komponenta neba svakog prozora

{{ui:Izračunaj}} takođe meri, za svaki prozor, koliko vidi od celog neba: isti uspravni presek, okrenut ka svakom pravcu preko prednje strane prozora (svakih 2°, od jedne do druge strane), pa zgrada sa jedne strane, lamela ili duboka špaleta uzima svoj deo. Iz toga BimCraft računa **vertikalnu komponentu neba (VSC)**: koliko svetlosti oblačnog neba dopire do stakla, kao udeo onoga što bi dobio otvoren, ravan krov. Prozor sa ničim ispred dobija **39.6 %**, najviše što uspravan prozor može; duga zgrada koja se diže 25° iznad prozora ostavlja oko **27 %**, što je brojka koju britansko uputstvo (BRE 209) koristi kao pravilo palca. Svaki prozor u detalju prostorije pokazuje svoj VSC i svoj **ugao zaklanjanja** (koliko visoko se stvari dižu pravo ispred njega).

Nebo je standardno CIE oblačno nebo, koje je tri puta svetlije pravo gore nego pri horizontu, a presek je tačan: ništa se ne uzorkuje.

## Sunce kroz prozore na datum

Otvorite {{ui:Sunce kroz prozore na datum}} i izaberite datum. BimCraft prati sunce tog dana u četvrt sata i za svaki prozor sabira toplotu koju sunce unosi kroz staklo:

- **direktno sunce**, kada je ispred prozora i ništa u modelu ga ne zaklanja (isti tačni presek, okrenut ka suncu: balkon koji zaklanja visoko letnje sunce u podne pušta nisko zimsko sunce unutra);
- **svetlost neba** na staklu, umanjena za ono što prozor ne vidi;
- svetlost **sa tla** (njena refleksija: 0.2 za početak);
- sve kroz **g-vrednost** stakla (udeo solarne energije koji propušta: 0.6 za početak; uzmite podatak proizvođača) i njegov udeo stakla.

Svaka prostorija pokazuje ukupno za dan u kWh i vrhunac u vatima sa vremenom; detalj prostorije crta dan kao dijagram. Nebo je vedro po Hottelovom modelu (Duffie & Beckman, *Solar Engineering of Thermal Processes*), sa letnjim ili zimskim vrednostima za mesto i sezonu i visinom lokacije; položaj sunca je prema NOAA-i. Geografska širina i dužina lokacije uzimaju se iz lokacije u IFC-u, a sever iz pravog severa modela; ako model nema lokaciju, upišite geografsku širinu i dužinu. Vremena su standardna (bez letnjeg računanja vremena) u vremenskoj zoni koju upišete, inače u onoj koju sugeriše dužina.

Šta ne uzima u obzir: oblake (dan je vedar), staklo koje propušta manje pod niskim uglovima, okvire koji zaklanjaju staklo, roletne i ono što zidovi i krov upijaju. Procena hlađenja u istoj kartici koristi vrhunac.

## Faktor dnevne svetlosti na mreži

Otvorite {{ui:Faktor dnevne svetlosti na mreži}} i {{ui:Izračunaj mrežu}}: BimCraft postavlja mrežu preko poda svake prostorije na visini radne ravni (0.85 m za početak), pola metra od zidova, i računa faktor dnevne svetlosti u svakoj tački metodom **BRE podeljenog fluksa**:

- **komponenta neba**: oblačno nebo koje tačka vidi kroz otvor svakog prozora, umanjeno za okvire;
- **spolja reflektovana komponenta**: ono što tačka vidi od zgrada napolju kroz prozor, koje sijaju na desetinu neba iza njih (promenite svetlinu zaklanjanja ako su mnogo svetlije ili tamnije);
- **unutrašnje reflektovana komponenta**: svetlost koja se odbija po prostoriji, iz površina i refleksija prostorije, površine prozora i koliki deo je van njih (BRE formula, sa propustljivošću stakla umesto providnog stakla koje je pretpostavljala).

Svaka prostorija pokazuje svoju srednju vrednost, najnižu tačku i koliki deo dobija 2 % ili više; detalj prostorije crta njen plan sa svakom tačkom obojenom po faktoru dnevne svetlosti i prozorima crvenim. Da bi bilo brzo na svakom računaru, prostorija dobija najviše **400 tačaka**: u velikoj prostoriji razmak raste da stane (upišite razmak da sami izaberete).

## Šta ne uključuje

- Krovni prozori (staklo koje leži ravno ili nagnuto) su navedeni, ali se ne računaju: formule ovde su za prozore u zidovima.
- Prozori bez prostorije iza sebe (hodnik bez prostora, na primer) navedeni su posebno.
- Špalete prozora (otvor se uzima sa spoljne strane), sjaj, sunčani sati i dnevna svetlost zasnovana na klimi. Za BS EN 17037, LEED ili BREEAM koristite program za simulaciju dnevne svetlosti.
- Opsezi su iz starijeg britanskog uputstva (BS 8206-2), prikazani kao vodič, nikada kao prolazno ili neprolazno.
