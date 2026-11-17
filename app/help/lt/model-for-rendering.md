---
title: Modelio siuntimas į atvaizdavimo programą
summary: Įrašykite tai, ką rodo 3D vaizdas, kaip glTF modelį (.glb) su medžiagomis, tekstūromis ir šviestuvais, skirtą atvaizdavimo ir vizualizavimo programoms, kurios skaito glTF.
keywords: glb, gltf, gl transmission format, eksportas, atvaizdavimas, vizualizacija, realus laikas, archviz, medžiagos, tekstūros, šviestuvai, lempos, šviesos, elementas, pasirinktinis elementas
from: e62d57dc
---

{{ui:Atvaizdavimui}} įrankių juostoje įrašo tai, ką rodo 3D vaizdas, į vieną **.glb** failą (glTF 2.0, atviras formatas iš Khronos Group). Atvaizdavimo programos, kurios skaito glTF, atidaro jį su modelio medžiagomis ir šviestuvais. Twinmotion importuojamų geometrijos failų sąraše nurodo glTF ir GLB ir išlaiko jų šviesas (Epic dokumentacija, „Importing geometry in Twinmotion“): naudokite {{ui:Atvaizdavimui}} ir ten importuokite .glb. Niekas neįkeliama: failas sukuriamas šiame kompiuteryje.

## Įrašykite

1. Atverkite IFC modelį ir nustatykite 3D vaizdą: paslėpkite aukštus, elementus ar susietus modelius, kurių nenorite, ir [nudažykite medžiagas](topic:paint-materials), kurias norite matyti.
2. Spustelėkite {{ui:Atvaizdavimui}} (arba įveskite `GLB`).
3. Failas atsisiunčiamas kaip „<model name>.glb“. Būsenos juosta parodo, kiek trikampių, medžiagų ir šviestuvų jame yra.

## Ką failas talpina

- **Geometrija** kiekvieno elemento, kurį rodo 3D vaizdas, metrais, su Y viršuje (glTF savosios ašys). Vienas objektas kiekvienam aukštui ir medžiagai, pavadintas „Level 1 — Brick, red“, kad atvaizdavimo programoje galėtumėte pasirinkti medžiagą ir pakeisti ją savąja.
- **Medžiagos:** kiekviena spalva su išvaizda, kurią pasirinkote [Atvaizduoti](topic:render) (matinė, satininė, blizgi, metalinė, stiklas…), ir kiekviena nudažyta bibliotekos medžiaga su spalva, šiurkštumu ir **tekstūra** (jos paveikslas įtrauktas į failą, pamastelis į tikrą dydį: plyta yra plytos dydžio). Stiklas yra permatomas.
- **Šviestuvai:** kiekvienas šviestuvas, įjungtas Atvaizduoti › Šviestuvai, kaip taškinis arba prožektoriaus šviesos šaltinis su ryškumu (liumenai paversti kandelomis), spalva ir spindulio kampu.
- **Kur yra aikštelė:** aikštelės platuma ir ilguma įrašomos faile nuorodai. Atvaizdavimo programos turi savo saulę: vietą įveskite jose.

## Ko nėra

- Pjūvio atkarpa (įeina visi elementai) ir elementai, rodomi permatomai (jie praleidžiami).
- Objektai po vieną elementą (vietoj jų – vienas objektas kiekvienam aukštui ir medžiagai), IFC savybės, iškilumo žemėlapiai, išsaugoti vaizdai ir įrašyti pasivaikščiojimai.
- Kraštinės linijos ir fonas.

## Enscape ir kiti papildinių atvaizdavimo įrankiai

Enscape veikia kitoje projektavimo programoje ir neturi failo, kurį būtų galima atidaryti visam projektui. Yra du būdai:

- Atidarykite modelio **IFC** (Failas › Įrašyti) programoje, kurioje veikia Enscape; dauguma jų skaito IFC. Spalvos perkeliamos; bibliotekos medžiagos perkeliamos kaip savo spalvos.
- Įkelkite **mažą dalį** (baldą, armatūrą) kaip pasirinktinį elementą: pirmiausia ją izoliuokite, tada spustelėkite {{ui:Enscape (.gltf)}}. Enscape pasirinktinių elementų biblioteka išvardija .gltf, .obj ir .fbx failus, o ne .glb, todėl šis mygtukas tą pačią sceną įrašo kaip vieną savarankišką **.gltf** failą (dvejetainiai duomenys ir paveikslai yra faile; kartu kopijuoti nieko nereikia). Enscape rekomenduoja mažus elementus (mažiau nei apie 20 000 trikampių).

:::note
CadCraft Studio tą patį glTF failą (ir USD failą) galima įrašyti iš {{ui:Atvaizduoti}} › Variklis › **glTF failas** / **USD failas** arba iš karto atidaryti kompiuteryje esančioje programoje: žr. [Atidaryti sceną kitoje programoje](topic:render-open-in). Papildinio ar tiesioginės jungties su Enscape ar Twinmotion nėra. FBX ir Datasmith formatai neturi paskelbtos specifikacijos, todėl BimCraft jų neįrašo; glTF yra atviras kelias.
:::
