---
title: Koordinatės BimCraft programoje
summary: Kur dirbate: žymeklio padėtis plane ir 3D vaizde, lygis, kuriame esate, projekto pradžia ir vietovės geodezinis taškas.
keywords: koordinatės, kur esu, padėtis, žymeklis, rodmuo, x y z, lygis, aukštas, projekto pradžia, pradžia, bazinis taškas, geodezinis taškas, vietovė, žemėlapio koordinatės, rytų koordinatės, šiaurės koordinatės, georeferencija, vienetai, vieta
from: 84df5245
---

## Ką darysite

Iš karto matykite, kur esate modelyje: kurio lygio brėžiate, kiek žymeklis nutolęs nuo projekto pradžios ir kur yra vietovės geodezinis taškas.

## Kur rodomi skaičiai

- **Virš 3D vaizdo** (apačioje dešinėje, šalia vaizdo kubo): perkelkite žymeklį virš modelio. Langelyje rodomas taško lygis ir jo aukštis virš to lygio grindų, tada **X, Y ir Z**. Virš tuščios erdvės rodoma taško, esančio žemiausio lygio grindyse, vertė.
- **Plane** (apačioje dešinėje, kai įjungtas {{ui:Braižymas}}): rodomas plano lygis ir jo grindų aukštis, o kol žymeklis yra virš plano, – jo **X ir Y**.
- Kai failas turi žemėlapio konvertavimą (eksportuotas su žemėlapio koordinatėmis), abiejuose langeliuose papildomai rodomos **rytų ir šiaurės koordinatės** žemėlapio tinklelyje, pasirinktais {{ui:Vienetai}} (šalia jų visada rašomas vienetas; pėdos ir coliai rodomi kaip dešimtainės pėdos). Brėžinys (DWG arba DXF) išlaiko savo vienetus: jo žymeklio rodmenyje jie nurodomi ir niekada nekonvertuojami.

Kiekviena X, Y ir Z koordinatė matuojama nuo **projekto pradžios**, {{ui:Vienetai}} pasirinktais įrankių juostoje (pėdos ir coliai, coliai, dešimtainės pėdos, milimetrai, centimetrai arba metrai). Teigiama Y ašis rodo į modelio šiaurę, kuri ne visada sutampa su tikrąja šiaure. Žemėlapio rytų ir šiaurės koordinatės seka tą patį pasirinkimą (pėdos ir coliai rodomi kaip dešimtainės pėdos). Jei žemėlapio sistemos vienetas skiriasi nuo jūsų pasirinkto, jis nurodomas skliausteliuose po skaičių, pavyzdžiui *(JAV geodezinės pėdos)*, kad geodezininkas matytų, kuriais vienetais užrašyta pati sistema.

## Du žymekliai

- **Projekto pradžia** (raudonas apskritimas su kryžiumi): taškas 0, 0, 0, nuo kurio matuojamos visos modelio koordinatės.
- **Geodezinis taškas** (mėlynas apskritimas su trikampiu): vietovės atskaitos taškas, kuriam nurodoma jos platuma, ilguma ir aukštis arba žemėlapio koordinatės. 3D vaizde nukreipkite į jį, kad perskaitytumėte, kur jis yra.

Kai vietovė yra projekto pradžioje, kaip čia braižomame naujame pastate, vienas žymeklis rodo abu. Spustelėkite kryžiuko mygtuką bet kuriame langelyje, kad paslėptumėte arba rodytumėte žymeklius; BimCraft įsimena jūsų pasirinkimą šioje naršyklėje.

## Ką turėtumėte matyti

- Skaičiai keičiasi, kai judinate žymeklį, o plano langelyje nurodomas lygis, kurį pasirinkote lygių sąraše.
- Žymekliai lieka savo vietose, kol sukate, slenkate ir keičiate mastelį.

:::tip
Norėdami perskaityti taško platumą ir ilgumą, naudokite {{ui:Matuoti}} › {{ui:Vieta}}: žr. [Matuoti atstumus, paviršių plotus ir vietas 3D](topic:measure).
:::

:::touch
Jutiklinio ekrano įrenginyje 3D langelis nieko nerodo, kol nenaudojate pelės ar rašiklio: pirštas vietoje to perkelia vaizdą.
:::
