---
title: Pamatai po sienomis
summary: Pastatui vienu spustelėjimu įrenkite plokštę ant grunto, cokolines sienas su perdanga, siaurą rūsio erdvę ar rūsį; pamatų padai apskaičiuojami pagal sienas ir aukštų skaičių, o pamatas seka sienas, kai jos perkeliamos.
keywords: pamatas, padas, plokštė ant grunto, sustorėjęs kraštas, monolitinė plokštė, cokolinė siena, siaura rūsio erdvė, rūsys, rūsio siena, šalčio gylis, betonas, pado plotis
from: c0e20172
---

## Ką darysite

Suteikite pastatui pamatą, atitinkantį jo sienas. BimCraft seka sienų išorę, nustato pamatų padų dydį pagal sienos tipą ir tai, kiek aukštų stovi ant jų, ir kiekvieną kartą, kai keičiasi sienos, pamatą sukuria iš naujo.

## Įdėkite pamatą

1. Lygyje, kurio sienos stovi ant pamato (paprastai pirmame), atidarykite {{ui:Versija}} ir pasirinkite {{ui:Pamatas}}.
2. Pasirinkite rūšį:
   - **Plokštė ant grunto**: 4" betono plokštė, kurios viršus yra grindys, su sustorėjusiu kraštu po sienomis.
   - **Cokolinės sienos ir perdanga**: pamato sienos iki grindų ant padų, o viduje — perdanga.
   - **Siaura rūsio erdvė**: pamato sienos, kurios baigiasi po grindų konstrukcija, ant padų, be perdangos.
   - **Rūsys**: pilno aukščio pamato sienos ant padų su rūsio perdanga po grindų konstrukcija.
3. Nukreipkite žymeklį į pastato vidų: padai rodomi brūkšniuoti su savo dydžiu. Spustelėkite.

Spustelėjus pastatą, kuris jau turi pamatą, jis pasirenkamas, todėl galite jį keisti, o ne pridėti antrą.

## Keiskite

Pasirinkite pamatą (spustelėkite pastato vidų su {{ui:Pamatas}} arba bet kurią jo dalį 3D vaizde ar modelio medyje) ir keiskite skiltyje **Savybės**: rūšį, pado plotį ir gylį, kiek žemyn yra pado apačia, sienos storį, kiek žemiau grindų baigiasi sienos, rūsio aukštį ir perdangos storį. Kiekvienas pakeitimas yra vienas atšaukimo žingsnis.

Dydžiai, pažymėti **auto**, nustatomi pagal sienas: padai 12", 15" ar 23" pločio vienam, dviem ar trims aukštams ant plokštės arba cokolinių sienų, 18", 22" ar 27" — ant siauros rūsio erdvės arba rūsio, ir 4" platesni po mūrinėmis ar betoninėmis sienomis. Įveskite dydį, kad nustatytumėte savo; įveskite `0`, kad grįžtumėte prie **auto**.

:::warning
Automatiniai dydžiai yra pažymėtos įprastų lengvųjų karkasinių namų numatytosios reikšmės, o ne inžineriniai skaičiavimai. Projektuotojas ar inžinierius patikrina padus, gylius ir sienas pagal gruntą, šalčio gylį ir apkrovas.
:::

## Kas išsaugoma

Pamatas įrašomas kaip IFC elementų surinkimas („Foundation“), sudarytas iš pado (arba perdangos sustorėjusio krašto), pamato sienos ir perdangos, pagal rūšį; visa iš betono, kiekvienas su savo kiekiais: ilgiais, pločiais, aukščiais, plotais ir tūriais, paruoštais kiekių skaičiavimui.

## Gerai žinoti

- Perkėlus, pridėjus ar ištrynus sienas, pamatas po jomis sukuriamas iš naujo; nubraižius sienas viršutiniame lygyje, padai apačioje platėja dėl papildomo aukšto.
- {{key:Delete}} pašalina pasirinktą pamatą su visomis jo dalimis.
- Kai vietovės gruntas yra modelyje (žr. [Vietovės gruntas, pastato aikštelė ir takai](topic:terrain)), cokolinės sienos ir siauros rūsio erdvės padai leidžiasi kartu su juo 8" žingsniais.
- Padai po vidinėmis sienomis dar nekuriami.
