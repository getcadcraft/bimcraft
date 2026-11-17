---
title: Braižykite visu dydžiu, anotuokite pagal mastelį
summary: Pastatas visada braižomas visu dydžiu. Tekstas, matmenys, žymos, patalpų pavadinimai, tinklelio žymės ir simboliai dimensionuojami popieriuje milimetrais, kaip spausdinami, ir išlaiko tą patį dydį, kai brėžinio mastelis pasikeičia nuo 1:100 iki 1:50.
keywords: anotacijos mastelis, anotatyvus, teksto dydis, teksto aukštis, popieriaus aukštis, matmenų teksto dydis, žymos dydis, patalpos pavadinimo dydis, tinklelio žymė, simbolio dydis, brėžinio mastelis, 1:50, 1:100, įstaigos standartas, rašmenys, braižyti 1:1, visas dydis, lapo tekstas
from: 94118788
---

## Ką darysite

Nustatykite, koks aukštas būna jūsų brėžinių raidės popieriuje, vieną kartą pastatui. Modelio niekada nemastelite ir teksto dydžio pagal mastelį nekeičiate: BimCraft dydį apskaičiuoja pagal popieriaus aukštį ir brėžinio mastelį.

## Kaip tai veikia

- Modelis yra visu dydžiu. 10 m ilgio siena yra 10 000 mm ilgio visuose masteliuose.
- Anotacija turi **popieriaus aukštį**: didžiosios raidės aukštį atspausdintame lape milimetrais.
- Esant 1:100 mastelio, 2.5 mm tekstas modelyje yra 250 mm aukščio; esant 1:50 – 125 mm. Popieriuje jis abiem atvejais 2.5 mm.
- Planų simboliai (elektros, santechnikos) braižomi popieriaus milimetrais ir paklūsta tai pačiai taisyklei.

## Žingsniai

1. Atidarykite projekto naršyklę. Po {{ui:Lapai}} spustelėkite {{ui:Anotacijų dydžiai…}}.
2. Įrašykite aukštį milimetrais tiems tipams, kuriuos norite nustatyti: {{ui:Pastabos ir etiketės}}, {{ui:Matmenų tekstas}}, {{ui:Žymos ir lygių pavadinimai}}, {{ui:Patalpų pavadinimai}}, {{ui:Tinklelio žymių raidės}}, {{ui:Lapų vaizdų pavadinimai}} ir {{ui:Žiniaraščio tekstas}}. Tuščias laukelis palieka BimCraft savąjį dydį, rodomą pilkai.
3. Spustelėkite {{ui:Įrašyti}}. Tai vienas žingsnis, kurį galite anuliuoti.

Kiekvienas lapas, brėžinių rinkinys, planų PDF ir fasadai bei pjūviai nuo to laiko naudoja šiuos dydžius. Tarpas tarp matmenų linijos ir jos teksto, tinklelio žymės dydis ir žiniaraščio eilutės aukštis didėja kartu su tekstu.

## Planas su savo mastelių

Nustatykite planui mastelį jo peržiūros diapazone ({{ui:Mastelis}}; žr. [Vaizdai ir lapai](topic:views-and-sheets)). Tada:

- ekrane patalpų pavadinimai, žymos, matmenų tekstas ir tinklelio žymės rodomi savo spausdintu dydžiu, palyginti su modeliu, todėl matote tai, ką rodys lapas;
- planų simboliai ir jų žymos dimensionuojami pagal tą mastelį. Pakeitus mastelį iš 1:100 į 1:50, jie modelyje tampa perpus mažesni, o popieriuje lieka tokio pat dydžio.

Planas be savo mastelio išlaiko fiksuotą ekrano tekstą, o jo simboliai dimensionuojami 1:50 masteliui (1/4" = 1'-0" pėdomis ir coliais), kaip anksčiau.

## Jūsų įstaigos dydžiai

Įjungus priedą Default Policies, įstaigos aukščius nustatykite Parametrai › Global › Default Policies › {{ui:Anotacijų dydžiai popieriuje}}. Naujas pastatas juos gauna, kai spustelėsite Create. Jau pradėtame pastate dialogo lange yra {{ui:Naudoti mano įstaigos dydžius}}. Žr. [Default Policies](topic:default-policies).

## Reglamento paketo dydžiai

Reglamento paketas gali nustatyti teksto aukščius, kurių reikalauja jo vieta (priedas Building regulations, brėžinių konvencijos). Pažymėkite paketą Parametrai › Building regulations, tada dialogo lange spustelėkite {{ui:Naudoti reglamento paketo dydžius}}: laukeliai užsipildo, juos patikrinate ir įrašote. Dydis, kurį paketas nurodo punktais, yra šrifto dydis ir paverčiamas didžiųjų raidžių aukščiu, todėl jį patikrinkite. Nieko nenustatoma, kol neįrašote.

## Ką turėtumėte matyti

- Tą patį teksto aukštį milimetrais lape 1:100 ir lape 1:50, nors pats planas 1:50 mastelyje yra dvigubai didesnis.
- Dydžiai keliauja kartu su pastatu: jie įrašomi jo IFC faile.

## Verta žinoti

- BimCraft savieji dydžiai yra tie, kuriuos jo lapai visada naudojo (maždaug 1.5 mm didžiosios raidės matmenų tekstui). Tai nėra brėžinių standartas: nustatykite savo įstaigos.
- Aukštis turi būti nuo 0.5 iki 50 mm.
- Antraštės bloko rašmenys ir simbolių legendos į tai neįeina: jie išlaiko savo dydžius.
