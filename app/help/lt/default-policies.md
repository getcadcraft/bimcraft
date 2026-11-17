---
title: "Numatytosios nuostatos: nustatykite, nuo ko prasideda naujas pastatas"
summary: Vieną kartą nurodykite, nuo kokio sienos tipo, lygių, pirmojo lapo, LOD žymų, vienetų ir įrankio prasideda naujas pastatas, metriniams ir coliniams projektams, ir bendrinkite nuostatas biure kaip mažą failą.
keywords: numatytieji, numatytosios nuostatos, nuostata, biuro standartas, biuro numatytieji, šablonas, naujas pastatas, pirmasis sienos tipas, metrinė siena, mūras, LOD, plėtros lygis, pirmasis lapas, popierius, mastelis, lygiai, aukšto aukštis, lygių pavadinimai, sienos įrankis, vienetai, bendrinimas, eksportas, importas, json
from: 42379aa5
---

## Ką darysite

Nurodykite BimCraft, nuo ko turi prasidėti naujas pastatas, kad niekas biure kiekvieną kartą nekeistų tų pačių dalykų. Tai papildinys: jis išjungtas, kol jo neįjungsite, o nuostata, kurios nenustatote, palieka BimCraft savo numatytąją reikšmę tokią, kokia ji yra.

:::note
Tai numatytosios reikšmės **naujiems** pastatams ir **naujiems** dalykams. Jau pradėtas projektas nekeičiamas.
:::

## Žingsniai

1. Atidarykite Parametrus, eikite į {{ui:Priedai}} ir įjunkite {{ui:Numatytosios nuostatos}}.
2. Parametruose atidarykite skirtuką **BimCraft** ir kairėje sąraše pasirinkite {{ui:Numatytosios nuostatos}}.
3. Nustatykite norimas nuostatas. Kiekviena prasideda nuo **BimCraft savųjų**, su tuo, kas tai yra, skliausteliuose. Nuostata su langeliais **Metrinis** ir **Imperinis** priima po vieną reikšmę kiekvienam projekto tipui; užpildykite tik reikalingus.
4. Įrašymo mygtuko nėra: kiekvienas pakeitimas įrašomas iš karto. Reikšmė, kurios negalima naudoti, atmetama su paaiškinimu žodžiais, o sena lieka.
5. Spustelėkite {{ui:Naujas pastatas}}. Dialogas užpildomas pagal jūsų nuostatas, o kiekviena reikšmė, kurią nustatė nuostata, šalia rodo **iš jūsų numatytųjų nuostatų**. Iki {{ui:Sukurti}} galite pakeisti bet kurią iš jų.

## Nuostatos

- **Naujo pastato vienetai**: vienetai pereina į šią reikšmę paspaudus Sukurti.
- **Lygių skaičius**, **Lygių pavadinimai** ir **Lygio aukštis**. Pavadinime `{n}` skaičiuoja 1, 2, 3; `{n0}` skaičiuoja 0, 1, 2; `{nn}` ir `{nn0}` daro tą patį su dviem skaitmenimis. Taigi `Aukštas {nn0}` duoda Aukštas 00, Aukštas 01, Aukštas 02.
- **Pirmasis sienos tipas**: ką pirmiausia nubraižo sienos įrankis. Metrinis biuras gali pradėti nuo Išorinė mūrinė siena 300 mm, o coliniai projektai lieka prie Išorinė 2×6.
- **LOD žyma pradiniams sienų tipams**: plėtros lygis (nuo LOD 100 iki LOD 500), kurį devyni pradiniai tipai rodo visur, kur tipas išvardytas. Žr. [Sudarykite sienų konstrukcijas](topic:wall-assemblies).
- **Naujai sukurto sienos tipo LOD**: žyma, su kuria naujas tipas prasideda tipo redaktoriuje. Ją galite pakeisti ten.
- **Pirmasis lapas**: jo popierius, mastelis, lapo numeris ir pavadinimas (naudokite `{level}` žemiausio lygio pavadinimui) arba visai be pirmojo lapo.
- **Anotacijų dydžiai popieriuje** (Parametrai › Bendrieji › Numatytosios nuostatos): biuro aukščiai milimetrais, kaip spausdinama, skirti pastaboms, matmenų tekstui, žymoms, patalpų pavadinimams, tinklelio žymeklių raidėms, vaizdų pavadinimams ir žiniaraščių tekstui. Naujas pastatas juos perima kuriant ir išlaiko savo faile. Žr. [Braižykite pilnu dydžiu, anotuokite pagal mastelį](topic:annotation-sizes).
- **Įrankis, aktyvus po sukūrimo**: {{ui:Pasirinkti}}, kaip BimCraft daro pats, arba Siena, kad pirmi du spustelėjimai plane jau braižytų sieną.

## Žiniaraščių išdėstymas: biuro standartas

**Parametrai › Bendrieji › Numatytosios nuostatos** skyriuje **Žiniaraščių išdėstymas (biuro standartas)** nustatykite, kaip grupuojamas kiekvienas žiniaraštis, ar jis turi tarpines sumas ir bendrą sumą, jo pavadinimą ir stulpelių antraščių rašybą. Kiekvienas žiniaraštis, kuris nenurodo savo, perima šias nuostatas, kas jį bebūtų sukūręs. Žr. [Išdėstykite, išsaugokite ir eksportuokite žiniaraštį](topic:schedule-layouts).

## Bendrinkite biure

1. Parametruose atidarykite skirtuką **Bendrieji** ir pasirinkite {{ui:Numatytosios nuostatos}}.
2. Jei norite, įveskite **Biuro pavadinimas**. Jis įrašomas į failą.
3. Spustelėkite {{ui:Įrašyti į failą}}. Gausite mažą failą, besibaigiantį `.ccdefaults.json`.
4. Kitame kompiuteryje įjunkite papildinį, atidarykite tą pačią vietą ir spustelėkite {{ui:Įkelti iš failo}}. Failo nuostatos pakeičia to kompiuterio nuostatas.

Bendrųjų skirtuke yra ir **Naujo projekto vienetų sistema**, galiojanti kiekvienai programai, turinčiai papildinį, ir {{ui:Atstatyti visas nuostatas}}. {{ui:Atstatyti BimCraft numatytąsias reikšmes}} skirtuke BimCraft išvalo tik BimCraft nuostatas.

## Verta žinoti

- Failas yra paprastas, atviras JSON: nuostatų pavadinimų ir reikšmių sąrašas. Nuostata, kurią failas nurodo, bet kurios šia versija nežinoma, praleidžiama ir paminima pranešime; likusios įkeliamos.
- Nuostatos saugomos šioje naršyklėje, kiekvienai CadCraft programai šiame kompiuteryje. Jos neįrašomos į pastato failą ir nesinchronizuojamos tarp kompiuterių: naudokite failą.
- Pradinio tipo LOD žyma ateina iš šio kompiuterio nuostatos. Tipas, kurį padarėte kaip pradinio kopiją, savo žymą nešasi pastato faile.
- BimCraft neturi tikslumo nustatymo, todėl čia tikslumo nuostatos nėra.
- Pastatas, pradėtas iš šablono, perima paties šablono lygius ir lapus. Sienos tipo ir vienetų nuostatos vis tiek taikomos.
- Išjunkite papildinį – viskas vėl BimCraft savo. Jūsų nuostatos išsaugomos, kad grąžinus įjungimą.
