---
title: Modelio linijos ir modelio tekstas: brėžiami modelyje, darbo plokštumoje
summary: Modelio linija yra linija, polilinija ar lankas, kuris gyvena modelyje ir rodomas visuose vaizduose, kuriuose matomas. Modelio tekstas yra 3D raidės su tikru gyliu. Abu brėžiami darbo plokštumoje.
keywords: modelio linija, modelio tekstas, 3D tekstas, raidės, ženklas, ženklinimas, linija 3D, lankas, polilinija, darbo plokštuma, ištemptas tekstas, šriftas, gylis, detalės linija, braižymo linija, anotacija, IfcAnnotation
from: fc9cccb5
---

## Ką darysite

Brėšite linijas ir raides, kurios yra modelio dalis, o ne vieno vaizdo.

## Veiksmai

1. Pirmiausia nustatykite darbo plokštumą (žr. **Darbo plokštuma**). Aukšto plokštuma brėžiama plane; statmena plokštuma – Darbo plokštumos žiūryne.
2. Linijai meniu **Versija** pasirinkite **Modelio linija** ir išrinkite **Linija**, **Polilinija** arba **Lankas (trys taškai)**:
   - linija – du spustelėjimai;
   - polilinija – spustelėjimas kiekvienam taškui, tada {{key:Enter}} arba dvigubas spustelėjimas. Spustelėjimas ant pirmojo taško ją uždaro;
   - lankas – trys spustelėjimai: pradžia, taškas, per kurį jis eina, ir pabaiga.
3. Tekstui pasirinkite **Modelio tekstas**. Įveskite žodžius, nustatykite didžiosios raidės aukštį ir gylį, tada spustelėkite, kur tekstas prasideda (kairysis jo pagrindo galas).
4. Pasirinkite liniją ar tekstą, kad pamatytumėte jį **Savybėse**. Ten galima pakeisti teksto žodžius, aukštį ir gylį. {{key:Delete}} pašalina.

## Kur jie rodomi

- Modelio linija rodoma savo aukšto plane, 3D vaizde, fasadų ir pjūvių skydelyje bei Darbo plokštumos žiūryne, kai ji guli darbo plokštumoje. Braižymo linija (Anotuoti, Linija) priklauso tik vienam vaizdui.
- Modelio tekstas yra vientisa geometrija: jis rodomas visur, kur rodomas modelis – plane, 3D, fasaduose, pjūviuose ir lapuose.
- Modelio linijos dar nerodomos spausdintuose lapuose. Modelio tekstas rodomas.

## Šriftas

Modelio tekstas naudoja tą patį šriftą kaip lapai ir PDF: Liberation Sans, pagal SIL Open Font License. Raidė, kurios šriftas neturi, nubrėžiama kaip klaustukas, ir jums pranešama, kuri tai. Yra vienas šriftas ir vienas storis. Raidės išdėstomos pagal paties šrifto plotius, be kerningo.

## IFC faile

- Modelio linija yra IfcAnnotation su objekto tipu ModelLine. Jos forma – 3D kreivė: polilinija arba apkarpytas apskritimas lankui.
- Modelio tekstas yra IfcBuildingElementProxy su objekto tipu ModelText. Jo forma – po vieną ištemptą kiekvienos raidės dalies kietąjį kūną su raidžių, kaip O ir B, angomis. Jo kiekiai yra paviršiaus plotas ir tūris (paviršiaus plotas padaugintas iš gylio).

## Verta žinoti

- Bet koks dydis daromas taip, kaip prašote. Atmetama tik linija be ilgio, lankas, kurio trys taškai yra vienoje tiesėje, arba tekstas be raidžių, nes nėra ko daryti.
- Kiekviena linija ir kiekvienas teksto ar jo pakeitimas yra vienas Anuliuoti žingsnis.
