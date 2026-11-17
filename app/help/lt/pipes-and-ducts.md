---
title: Vamzdžiai ir ortakiai
summary: Braižykite vamzdžių ir orklių trasas plane pagal jų ašines linijas; alkūnes, trišakius, reduktorius ir perėjimus sukuria programa; trasos priklauso sistemoms su sujungtais prievadais IFC faile, ir jos rodomos planuose, žiniaraščiuose bei kiekių skaičiavime.
keywords: vamzdis, vamzdžiai, vamzdynai, santechnika, ortakis, orkliai, ortakių sistema, hvac, mep, mechaninis, alkūnė, trišakis, reduktorius, perėjimas, jungiamoji detalė, jungiamosios detalės, vožtuvas, vožtuvai, šiebtuvas, rutulinis vožtuvas, ventilis, atbulinis vožtuvas, stovas, nuolydis, nuleidimas, nuotekos, lietaus nuotekos, vėdinimas, šaltas vanduo, karštas vanduo, vėsintas vanduo, šildymas, dujos, gaisrinė apsauga, tiekiamas oras, grąžinamas oras, išmetamas oras, sistema, sistemos, prievadas, prievadai, jungtis, jungtys, įrenginys, įrenginiai, santechnikos prietaisas, kriauklė, unitazas, praustuvė, dušas, skalbimo kriauklė, prietaisų vienetai, uhc, dfu, nuleidimų dydžiai, pagrindinis nuleidimas, šakotė, magistralė, oro srautas, cfm, trintis, lygios trinties metodas, dydžiavimas, tvarkaraštis, kiekių skaičiavimas, nbr, nbr 5648, nbr 5688, nbr 8160, suvirinamas pvc, nuotekos, dn
from: 85140bc5
---

## Ką darysite

Braižykite pastato vamzdžius ir ortakius taip, kaip braižote sienas: spustelėkite trasos ašinės linijos kampus nustatytame aukštyje. BimCraft sukuria jungiamąsias detales, priskiria kiekvieną dalį jos sistemai ir sujungia jas, todėl kitos programos trasą skaito kaip vieną sujungtą sistemą.

## Nubraižykite vamzdį

1. Įjunkite {{ui:Braižymas}}, atidarykite {{ui:Versija}} ir pasirinkite {{ui:Vamzdis}}.
2. Juostoje pasirinkite **sistemą** (šaltas vanduo, karštas vanduo, buitinės nuotekos, dujos…). Ji nustato įprastą medžiagą: vandeniui – varis, nuotekoms ir vėdinimui – PVC, šildymui, vėsintam vandeniui, dujoms ir gaisrinei apsaugai – plienas. Jei reikia, pakeiskite **medžiagą**, **klasę** ir **dydį**. Dydžius ir sienelių storius nustato viešieji standartai: plieninis vamzdis ASME B36.10M, varinis vamzdelis ASTM B88, PVC ASTM D1785 ir PEX ASTM F876. Brazilijos projektuose galima naudoti **PVC vandens vamzdį (NBR 5648)** – tirpikliu suvirinamą PVC šaltam vandeniui – ir **PVC nuotekų vamzdį (NBR 5688)**, normalios arba sustiprintos serijos, nuotekoms ir vėdinimui: jų dydžiai įvardijami DN (DN 25, DN 100). Kai pasirinksite vieną iš jų, pasirinkus kitą sistemą, lieka prie brazilų vamzdžių (buitinėms nuotekoms – PVC nuotekų vamzdis po PVC vandens vamzdžio).
3. Nustatykite **At**: vamzdžio ašinės linijos aukštį virš lygio.
4. Spustelėkite, kur vamzdis prasideda, tada kiekvieną kampą. Dukart spustelėkite arba paspauskite {{key:Enter}} paskutiniame taške. {{key:Backspace}} atšaukia paskutinį kampą; {{key:Esc}} atmeta trasą.

Vamzdis prisitraukia kaip sienos ir prie kitų trasų: pradėkite nuo vamzdžio galo, kad tęstumėte nuo jo, arba baikite ant vamzdžio linijos, kad šakotumėte. Nauja trasa perima to vamzdžio, prie kurio prisitraukia, aukštį.

Trasa, pradėta ar baigta įrangos prievade, perima jo dydį ir sistemą ir lieka prie jo pritvirtinta: žr. [MEP įranga su prievadais](topic:mep-equipment) ir [Vamzdžių ir orklių jungimas prie įrangos](topic:mep-connections).

## Nustatykite projekto santechnikos standartą

Pirmasis sąrašas vamzdžio juostoje yra modelio **santechnikos standartas**: **JAV (IPC, coliai)** arba **Brazilija (ABNT, DN)**. Jis išsaugomas modelyje, todėl visi, kurie atidaro failą, trasas pradeda vienodai. Pagal **JAV** nauja trasa pradedama variu (vandeniui) arba PVC Schedule 40 (nuotekoms), coliais, su Tarptautinio santechnikos kodekso (IPC) nuolydžiu. Pagal **Braziliją** šaltas vanduo pradedamas kaip suvirinamas PVC DN 25, buitinės ir lietaus nuotekos bei vėdinimas – kaip PVC nuotekų DN 100 su NBR 8160 nuolydžiu, o karštas vanduo – variu. Tai taikoma ir trasai, pradėtai prie prietaiso jungties ar įrangos prievado. Jau nubraižyti vamzdžiai išlaiko savo medžiagą ir savas lenteles; medžiagų sąrašas lieka atviras, todėl galite sąmoningai nubraižyti vieną brazilišką trasą JAV modelyje. Failas be pasirinkimo elgiasi kaip anksčiau: nauja trasa seka dabar naudojamą medžiagą.

## Nubraižykite orklį

1. Pasirinkite {{ui:Ortakis}}. Pasirinkite sistemą (tiekimo, grąžos, išmetimo ar lauko oras) ir formą: apvalią, stačiakampę arba plokščią ovalią.
2. Įveskite plotį ir aukštį (apvalaus ortakio plotis yra jo skersmuo), o **At** – ašinės linijos aukštį.
3. Norėdami nustatyti dydį pagal oro srautą, įveskite **Oro srautas** ir **Trintis** rodiklį ir spustelėkite {{ui:Parinkti dydį}}. Ortakis parenkamas lygios trinties metodu, aprašytu ASHRAE Handbook orklių projektavimo skyriuje, ir suapvalinamas iki sandėlyje esamo dydžio, todėl trintis lygi arba mažesnė nei įvestas rodiklis. Jei rodiklis neįvestas, naudojama 0.08 in. vandens per 100 ft (0.8 Pa/m). Stačiakampis ortakis išlaiko įvestą aukštį ir gauna plotį; BimCraft tai praneša, kai kraštinių santykis viršija 4 į 1.
4. Spustelėkite kampus kaip vamzdžiui.

## Santechnikos prietaisai

{{ui:Versija}} › {{ui:Įdėti šeimą}} siūlo penkis prietaisus pradžiai, kiekvienas su nuleidimu ir šaltojo vandens jungtimi: **Unitazas**, **Praustuvė**, **Virtuvės kriauklė**, **Dušo padėklas** ir **Skalbimo kriauklė**. Jų priekis atsisuka į jus, kai juos įdedate, o nugara remiasi į sieną. Jų nuleidimai yra mažiausias NBR 8160 prietaiso nuleidimo dydis (DN 100 unitazui, DN 50 virtuvės kriauklei, DN 40 kitiems); vanduo – DN 20. Keiskite jų dydžius arba redaguokite juos kaip bet kurią šeimą: žr. [Šeimos ir jų dydžiai](topic:families).

Šeimos redaktoriaus skirtuke {{ui:Jungtys}} šeima nurodo, koks tai santechnikos prietaisas ({{ui:Santechnikos prietaisas}}). Tada jos nuleidimas skaičiuojamas prietaisų vienetais: 6 UHC unitazui, 1 praustuvei, 3 virtuvės kriauklei ar skalbimo kriauklei, 2 dušui (NBR 8160), arba IPC 709.1 lentelės nuleidimo prietaisų vienetais.

## Nuo prietaiso jungties

Iš šeimų įdėti elementai su jungtimis (kriauklės nuleidimas ir čiaupas, oro įvado kaklelis: žr. [Redaguoti šeimą](topic:family-editor)) rodo laisvas jungtis kaip taškus, kol įjungtas {{ui:Vamzdis}} ar {{ui:Ortakis}}, ir žymiklis prisitraukia prie jų.

- **Pradėkite nuo jungties**: trasa perima sistemą ir dydį (juostos medžiagos vamzdis, kurio dydis lygus jungties dydžiui arba truputį didesnis; apvalus ortakis – jo skersmens). Kai jungtis nukreipta žemyn ar aukštyn, kaip nuleidimas po kriaukle, trasa pirmiausia eina tiesiai žemyn arba aukštyn iki aukščio **At**, o paskui tęsiasi pagal jūsų spustelėjimus.
- **Baikite ant jungties**: trasa nusileidžia arba pakyla iki jos ir baigiasi ten.

Trasa sujungta su elementu IFC faile, todėl kitos programos mato prietaisą kaip jos sistemos dalį. Vėliau įdėtas elementas su jungtimi trasos gale taip pat prijungiamas prie jos. Trasa, perkelta nuo jungties, su ja nebesujungta.

## Jungiamosios detalės, sukurtos jums

| Kur | Ką sukuria BimCraft |
|---|---|
| Trasa pasisuka | Alkūnė. Plieninis vamzdis – ASME B16.9 ilgu spinduliu (1.5 × dydis), kitas vamzdis – vienu išoriniu skersmeniu, apvalus ortakis – 1.5 skersmens, stačiakampis ortakis – vienu pločiu (arba vienu aukščiu, kai posūkis aukštyn ar žemyn) |
| Trasa baigiasi ant kitos trasos linijos | Trišakis; kita trasa tame taške perskiriama |
| Dvi trasos susitinka galas į galą skirtingais dydžiais | Reduktorius (vamzdžiams) arba perėjimas (orkliams) |
| Dvi to paties dydžio trasos susitinka galas į galą kampu | Alkūnė |

Pakeitus, perkėlus ar ištrynus trasą, visos tame lygyje esančios jungiamosios detalės sukuriamos iš naujo. Jei atkarpa per trumpa jos galuose esančioms jungiamosioms detalėms, BimCraft tai praneša ir nieko nekeičia: perkelkite kampą toliau.

:::note
Jungiamosios detalės ir vožtuvai yra bendriniai: nubraižyti pagal vamzdžio ar orklio dydį, o ne pagal gamintojo katalogą. Movinės, spaudžiamos ir grioveliuotos jungiamosios detalės, vožtuvų korpusai bei įranga turi gamintojų savus dydžius: prieš užsakydami, patikrinkite juos su tiekėju.
:::

## Stovai

Braižydami įveskite naują aukštį į **At** ir paspauskite {{key:Enter}}: trasa eina tiesiai aukštyn arba žemyn paskutiniame kampe, o kiekviename gale yra alkūnė. Stovas gali pakilti į aukštesnį lygį. Kiekvienas lygis rodo trasos dalis, kurias pasiekia jo rodinio diapazonas, o prie stovo – **UP** arba **DN**.

## Nuleidimai ir jų nuolydis

Buitinės ir lietaus nuotekos pradedamos nuo mažiausio nuolydžio, kurį leidžia Tarptautinis santechnikos kodeksas jų dydžiui: 1/4 in. per pėdą iki 2-1/2 in., 1/8 in. per pėdą nuo 3 iki 6 in., 1/16 in. per pėdą nuo 8 in. Brazilijos PVC nuotekų vamzdis pradedamas NBR 8160 nuolydžiu: 2 % iki DN 75, 1 % nuo DN 100. Kitą nuolydį įveskite juostoje arba savybėse: `1/4"/ft`, `2 %` arba `1:50`. Trasa krinta nuo savo pirmo taško, todėl nuleidimus braižykite ta kryptimi, kuria jie teka. Plane rodomas nuolydis ir rodyklė. Savybėse įspėjama, kai nuleidimas lėtesnis nei kodo minimumas.

## Nuleidimų dydžiavimas pagal prietaisų vienetus

Pasirinkite buitinį nuleidimą: **Prietaisų vienetai** savybėse rodo, kiek jis neša ir koks mažiausias dydis jam reikalingas. Kiekvienas santechninis prietaisas, kurio nuleidimo jungtis yra ant trasos, skaičiuojamas, taip pat ir kiekvienas nuleidimas, tekantis į jį: braižykite nuleidimus ta kryptimi, kuria jie teka, kiekvieną baigdami ant nuleidimo, į kurį jis teka.

- Nuleidimai iš brazilų PVC nuotekų vamzdžio skaičiuojami **UHC** ir seka NBR 8160; kiti skaičiuojami **DFU** ir seka Tarptautinį santechnikos kodeksą.
- **Nuleidimas**: **Šakotė** dydžiuojama pagal kodekso prietaisų šakų lentelę; **Pagrindinis nuleidimas** – pagal jo lentelę pagal nuolydį, todėl svarbus jo **Nuolydis**.
- Nuleidimas niekada nėra mažesnis už prietaisų nuleidimus, kuriuos jis aptarnauja (unitazui reikia DN 100 arba 3 in.), nei už į jį tekantį nuleidimą. Pagal NBR 8160 pagrindinis nuleidimas yra bent DN 100.

{{ui:Parinkti nuleidimų dydžius}} padaro kiekvieną modelio buitinį nuleidimą, kuris per mažas savo prietaisų vienetams, reikiamo dydžio, kaip vieną žingsnį, kurį galima atšaukti. Nuleidimas, nubraižytas didesnis nei reikia, paliekamas kaip yra. Kai nuleidimas neša daugiau, nei gali didžiausias jo vamzdžio dydis esant jo nuolydžiui, BimCraft apie tai praneša: duokite jam statesnį nuolydį arba kitą vamzdį.

:::note
Lentelės yra horizontalių nuleidimų. Stovai, vėdinimas ir lietaus nuotekos čia nedydžiuojami: patikrinkite juos ir visą projektą pagal kodeksą, taikomą jūsų projektui.
:::

## Vožtuvai

1. Pasirinkite {{ui:Vožtuvas}} ir rūšį: šiebtuvas, rutulinis, ventilis ar atbulinis.
2. Spustelėkite vamzdį, kur jis turi būti. Vamzdis perkertamas aplink jį, o vožtuvas prijungiamas prie abiejų pusių.

Trasos savybėse išvardyti jos vožtuvai, kiekvienas su {{ui:Pašalinti}}.

Daugiau vožtuvų rūšių, filtras, dempferiai orkliuose, jūsų vamzdžių specifikacijos ir gamintojų šeimos: žr. [Vamzdžių specifikacijos, vožtuvai, dempferiai ir gamintojų šeimos](topic:pipe-specs).

## Trasos keitimas

Pasirinkite bet kurią trasos dalį plane ar 3D vaizde. Savybėse:

- **Sistema**, **Medžiaga**, **Klasė** ir **Dydis** (vamzdžiams), arba **Forma**, **Plotis**, **Aukštis** (orkliams).
- **Aukštis virš lygio** perkelia visą trasą aukštyn ar žemyn.
- **Izoliacija**: jos storis, saugomas tarpo patikrai ir angų sąrašui (jai nieko nenubraižoma): žr. [Patikrinkite vamzdžius ir orklius su konstrukcija](topic:mep-against-structure).
- Plieninis vamzdis: **Pjaustyti į ruošas**: žr. [Plieninių vamzdžių ruošos ir ruošų brėžiniai](topic:pipe-spools).
- **Nuolydis** (vamzdžiams).
- **Srautas** su {{ui:Parinkti dydį}}: vandeniui – mažiausias dydis, kuris palaiko vandens greitį 8 ft/s (2.4 m/s), o karštam vandeniui – 5 ft/s (1.5 m/s); PVC vandens vamzdžiui pagal brazilų standartą (NBR 5626) – 3 m/s. Orkliams – nubraižyto ortakio greitis ir trinties rodiklis. Buitinės nuotekos dydžiuojamos pagal prietaisų vienetus: žr. žemiau **Nuleidimų dydžiavimas pagal prietaisų vienetus**.

Kiekvienas pakeitimas yra vienas {{ui:Anuliuoti}} žingsnis. {{key:Delete}} ištrina visą trasą.

## Planai

- Vamzdžiai, mažesni nei 150 mm (apie 6 in.), vaizduojami viena linija ašinėje linijoje, didesni vamzdžiai ir visi ortakiai – dviem linijomis jų plotyje.
- Kiekviena sistema turi savo spalvą; plano PDF jas spausdina juodai.
- Kiekviena trasa pažymėta savo dydžiu ir sistema (pavyzdžiui, `2" CW` arba `16×10 SA`).
- Plano rodinio diapazonas nusprendžia, kurias trasas jis rodo, o {{ui:Rodoma šiame plane}} gali paslėpti **Vamzdžius** ar **Orklius**: žr. [Rodiniai, rodinių diapazonai ir jūsų lapai](topic:views-and-sheets).

## Žiniaraščiai ir kiekių skaičiavimas

Skydelis {{ui:Žiniaraščiai}} prideda **Vamzdžius** (pagal sistemą, medžiagą ir dydį, su ilgiais), **Orklius** (pagal sistemą, formą ir dydį, su ilgiais ir išoriniu paviršiaus plotu) ir **Jungiamosios detalės ir vožtuvai** (pagal rūšį ir dydį, suskaičiuoti). Spustelėkite eilutę, kad pasirinktumėte, ką ji išvardija; {{ui:Atsisiųsti CSV}} ją atsisiunčia.

{{ui:Kiekių skaičiavimas}} perduoda trasas TakeoffCraft: vamzdžius ir orklius pagal dydį kaip plane nubraižytas trasas (nuolydžio nuleidimai matuojami pagal jų nuolydį), jungiamąsias detales ir vožtuvus suskaičiuoja ten, kur jie yra: žr. [Modelio kiekių siuntimas į TakeoffCraft](topic:takeoff). Stovai iš to lapo išbraukiami, nes planas jų neišmatuoja; Vamzdžių žiniaraštyje yra jų ilgis.

## IFC faile

Kiekviena trasa yra surinkimas, laikantis savo dalis: vamzdžių ir orklių segmentus, jungiamąsias detales ir vožtuvus; kiekvienas su savo tipu, medžiaga, sistemos spalva ir prievadais. Besiliečiantys prievadai yra sujungti, o kiekviena dalis priklauso savo paskirstymo sistemai (IFC2X3 failuose tai gaunama kaip srauto segmentai, jungiamosios detalės ir valdikliai sistemoje). Kitos programos, kurios skaito IFC sistemas, mato po vieną sujungtą trasą kiekvienai sistemai. Trasos apibrėžimas išsaugomas kartu su ja, todėl BimCraft ją sukuria iš naujo tuo pačiu būdu, kai ją keičiate.
