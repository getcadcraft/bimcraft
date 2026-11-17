---
title: Simbolių paletė
summary: Raskite elektros ir santechnikos simbolius pagal pavadinimą ar paveikslėlį, pažymėkite mėgstamiausius ir dėkite juos į planą vienu spustelėjimu.
keywords: simbolių paletė, simbolių įrankių juostos mygtukas, sienos sekimas, simboliai, elektros simboliai, santechnikos simboliai, santechnikos planas, unitazas, praustuvas, vonia, dušas, grindų trapas, valymo anga, lauko čiaupas, vandens šildytuvas, vožtuvas, sklendė, šaltas vanduo, karštas vanduo, nuotekos, ventiliacija, linijos stilius, mėgstamiausi, paieška
from: 67f20bc0
---

## Ką darysite

Atidarykite vieną skydelį, kuriame išvardyti elektros simboliai ir santechnikos plano simboliai su paveikslėliais ir pavadinimais, raskite norimą ir padėkite jį ant plano. Čia nieko nereikia iš interneto: simboliai ateina su programa.

## Atidaryti ir įdėti simbolį

1. Atidarykite modelį ir atidarykite {{ui:Versija}} › {{ui:Simbolių paletė}} (įvedama komanda: SYMBOLS). Tas pats mygtukas yra Braižymo juostos įrankių meniu ir kaip **Simboliai** įrankių juostos Bibliotekos grupėje.
2. Pasirinkite rinkinį: **Elektra** arba **Santechnika**, arba **Visi rinkiniai**. Įveskite paieškos lauke, kad sumažintumėte sąrašą. Galite ieškoti pagal pavadinimą ar santrumpą (WC, CW, HB).
3. Spustelėkite simbolį. Planas paruoštas jį įdėti.
   - **Elektros** simbolis paleidžia Elektros įrankį su pasirinktu prietaisu, todėl galioja viskas iš [Elektros planas](topic:electrical-plan): spustelėkite planą, vienas anuliavimo žingsnis.
   - **Santechnikos** simbolis paleidžia plano simbolių įrankį. Spustelėkite planą. Prie sienos esantis įrenginys (unitazas, praustuvas, vonia, kriauklė, lauko čiaupas) prisitraukia prie artimiausio sienos paviršiaus nugara į sieną; trapai, vožtuvai, vandens šildytuvas ir linijų stiliai dedami ten, kur spustelėjate.
4. Paspauskite {{key:R}}, kad pasuktumėte simbolį 90 laipsnių ({{key:Shift}}+{{key:R}} pasuka kita kryptimi), arba įveskite kampą laukelyje **Pasukimas** parinkčių juostoje. Paspauskite {{key:Esc}}, kad sustabdytumėte.

Prie sienos prisitraukęs įrenginys ar lauko čiaupas prisimena tą sieną: kai siena pajuda, simbolis juda kartu (ta pati pusė, tas pats atstumas palei sieną) tame pačiame anuliavimo žingsnyje. Jei ištrinate sieną, simbolis lieka toje pačioje vietoje, o Problemos rodo „prarado savo sieną“; perkelkite jį arba ištrinkite. Simboliai, padėti toli nuo sienų, nieko nesieja.

Kiekvienas padėtas simbolis yra vienas anuliavimo žingsnis. Padėtas simbolis yra IFC failo plano anotacija su žyma (WC1, WC2, ...). Pasirinkite jį, kad pakeistumėte žymą ar pasukimą **Savybėse**, arba paspauskite {{key:Delete}}.

## Ką turi santechnikos rinkinys

Įrenginiai (unitazas, pisuaras, praustuvas, vonia, dušas, virtuvinė kriauklė, viengubė kriauklė), grindų trapas, grindų ir sienų valymo angos, lauko čiaupas, sienos hidrantas, vandens šildytuvas, vožtuvai (sklendė, sklendinis, rutulinis, atbulinis, drosselinis, slėgį mažinantis) ir linijų stiliai su jų santrumpomis: šaltas vanduo (CW), karštas vanduo (HW), karšto vandens grįžtamasis vamzdis (HWR), nuotekos (W), ventiliacija (V), lietaus nuotekos (SD) ir dujos (G). Brėžiniai keičia mastelį kartu su planu, todėl išspausdintame lape išlaiko savo dydį. Linijos stilius yra trumpas atkarpėlė, rodanti stilių plane; tikrus vamzdynus braižykite vamzdžių įrankiais.

:::note
Tai įprastos santechnikos plano konvencijos, parengtos mūsų; jos nesertifikuotos pagal ISO 4067-1 ar ASME Y32.4. Jos palygintos su viešomis brėžinių legendomis ir mokymo vadovais (sąrašas yra rinkinio šaltinių pastaboje, kurioje nurodoma, kur sutampame ir kur skiriamės), nekopijuotos iš jokio gaminio, ir jas galima naudoti laisvai (Apache-2.0). Brėžinių rinkiniai skiriasi, todėl patikrinkite savo projekto legendą. Tai plano simboliai, o ne santechnikos projektas: jie nedimensionuoja vamzdžių ir netikrina normų.
:::

## Mėgstamiausi ir klaviatūra

- Spustelėkite žvaigždutę ant simbolio (arba paspauskite {{key:F}} ant jo), kad laikytumėte jį mėgstamiausiu. Mėgstamiausi rodomi pirmi ir išlieka šioje naršyklėje. **Tik mėgstamiausi** rodo tik juos.
- {{key:Down}} iš paieškos lauko perkelia į simbolius; rodyklių klavišai, {{key:Home}} ir {{key:End}} keliauja tarp jų; {{key:Enter}} pasirenka fokusuotą; {{key:Esc}} uždaro paletę.
- Telefone paletė yra lapas ekrano apačioje; ji pasitraukia, kai pasirenkate simbolį, kad matytumėte planą. Atidarykite ją vėl iš Versijos meniu arba mygtuku **Paletė** parinkčių juostoje.

:::tip
Jei failas naudoja simbolių rinkinį, kurio ši versija neturi, plane simbolio vietoje rodomas langelis, o Problemos jį nurodo.
:::

## Susieti įdėtą elementą su simboliu

Šviestuvas iš bibliotekos yra 3D elementas, bet elektros išdėstyme jis rodomas kaip savo simbolis. Įdedate jį **vieną kartą** ir susiejate:

1. Pasirinkite Versija › **Simbolių susiejimas** (arba įveskite SYMBOLLINK). Kairiajame skydelyje atsidaro Simbolių susiejimo skyrius.
2. Pasirinkite įdėtus elementus plane ar 3D. Skyriuje nurodoma, kiek jų pasirinkta ir su kuo jie susieti.
3. Pasirinkite **Simbolį** (iš bet kurio simbolių rinkinio: Elektra, Santechnika) ir pasirinkite **Susieti**.

Elementas vis dar yra vienas elementas, o kiekvienas žiniaraštis jį skaičiuoja vieną kartą:

- **3D** visada rodo jo kūną.
- **Planas** rodo savo plano formą, kaip anksčiau.
- Planas, kurio **Šis vaizdas rodo susietus elementus kaip** nustatytas į **Jų simbolis (inžinerinis išdėstymas)**, rodo simbolį jo vietoje. Spustelėjus simbolį pasirenkamas elementas. Pasirinkimas faile išsaugomas tam vaizdui (lygio grindų planui, jo lubų planui ar iškvietimui).

**Pasukti simbolį 90°** pasuka simbolį elemento atžvilgiu. **Pašalinti susiejimą** nuima susiejimą; elementas lieka. Žiniaraštis **Susieti simboliai** išvardija kiekvieną susietą elementą po vieną kartą su jo lygiu ir kambariu, kuriame jis stovi.

Neįgyvendinta: vaizdo pasirinkimas lape yra rodomo lygio plano pasirinkimas; prietaisai, įdėti Elektros įrankiu, kaip anksčiau yra simboliai visuose planuose.
