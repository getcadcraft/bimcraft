---
title: Atstumų, paviršių plotų ir vietų matavimas 3D
summary: Matuokite tarp dviejų IFC modelio taškų su prisikabinimu prie kampų ir kraštų, skaitykite skirtumą pagal X, Y ir Z bei matuokite plokščio paviršiaus plotą.
keywords: matuoti, matavimas, atstumas, ilgis, matmuo, plotas, paviršiaus plotas, prisikabinimas, kampas, kraštas, matuoklis, liniuotė, laisvas tarpas, vieta, platuma, ilguma, platuma ilguma, koordinatės, georeferencija, žemėlapio konvertavimas, EPSG, matavimas, rytinės koordinatės, šiaurinės koordinatės, WGS 84, datumas
from: 5f430bba
---

## Ką darysite

Patikrinkite laisvą tarpą, sienos ilgį ar paviršiaus dydį tiesiai iš modelio, neatidarę projektavimo programos.

## Žingsniai

1. Atidarykite IFC modelį.
2. Spustelėkite {{ui:Matuoti}} įrankių juostoje arba paspauskite {{key:M}}. Apatinėje vaizdo dalyje atsidaro juosta.
3. **Atstumas:** pasirinkus {{ui:Atstumas}}, spustelėkite pirmą tašką, tada antrą. Arti kampo žymeklis prisikabina prie jo, arti krašto – prie krašto; mažoji žymeklio etiketė parodo, kuris. Kiekviena dviejų spustelėjimų pora sudaro vieną matavimą.
4. **Paviršiaus plotas:** pasirinkite {{ui:Paviršiaus plotas}} ir spustelėkite paviršių. Visas plokščias paviršius nušvinta, o jo plotas rodomas.
5. **Tiesios linijos:** laikykite {{key:Shift}} spustelėdami antrą tašką arba paspauskite {{ui:Tiesi}} juostoje, kad linija liktų tiesi. Tada linija eina palei tą ašį, prie kurios žymeklis artimiausias (plano vaizde – pagal X arba Y; kituose vaizduose – pagal X, Y arba Z), o žymeklio etiketė rodo „tiesiai pagal ašį“. {{key:M}} vis dar pradeda ir sustabdo matavimą.
6. Spustelėkite {{ui:Išvalyti}}, kad pašalintumėte matavimus, arba {{ui:Atlikta}} (arba {{key:Esc}}), kad baigtumėte matuoti.

## Ko turėtumėte matyti

- Linija tarp dviejų taškų su jos ilgiu, o juostoje – ilgis ir kiek jis eina pagal X, Y ir Z (pagal modelio ašis, Z aukštyn), visi išreikšti {{ui:Vienetai}}, pasirinktais įrankių juostoje.
- Paviršiaus plotas kvadratiniais metrais, ant paviršiaus ir juostoje.
- Etiketės lieka prie savo matavimų, kai sukate, slenkate ir keičiate mastelį.
- Kol matuojate, spustelėjimai nepasirenka elementų. Pjūvio plokštuma ar dėžė vis dar pjauna modelį, ir galite matuoti tai, ką jos rodo, įskaitant pjūvio paviršius.

## Kur taškas yra Žemėje

Spustelėkite {{ui:Vieta}} matavimo juostoje, tada spustelėkite tašką modelyje (kaip ir atstumams, prisikabina prie kampų ir kraštų). Juosta rodo:

- **platumą ir ilgumą** dešimtainiais laipsniais ir laipsniais, minutėmis bei sekundėmis, WGS 84 pradžioje;
- **žemėlapio koordinates** (rytines ir šiaurines koordinates, išreikštas {{ui:Vienetai}}, pasirinktais įrankių juostoje) modelio paties žemėlapio sistemoje, pavyzdžiui, `EPSG:28356`;
- **aukštį** ir vertikalųjį datumą, kurį nurodo failas, bei **failo paties datumą** (pavyzdžiui, GDA94).

{{ui:Kopijuoti}} įdeda viską į iškarpinę vienoje eilutėje. Platumos ir ilgumos sistemą pakeiskite {{ui:Parametrai}} › {{ui:BimCraft}} › {{ui:Vieta}}: WGS 84 (kaip GPS ir žiniatinklio žemėlapiai), failo paties datumas arba kitas įprastas, pavyzdžiui, ETRS89 ar NAD83.

Tam reikia georeferencuoto modelio: eksportuoto su žemėlapio koordinatėmis (žemėlapio konvertavimas į projektinę sistemą su EPSG kodu). Modelis, turintis tik vietovės platumą ir ilgumą, gauna apytikslę vietą, apskaičiuotą pagal vietovės tašką ir tikrąją šiaurės kryptį, o juosta apie tai praneša. Atidarius kelis modelius, kiekvienas taškas naudoja savo modelio georeferenciją.

:::note
Pereinant tarp datumų (pavyzdžiui, GDA94 į WGS 84) naudojama be tinklelio failų, todėl tikslumas – keli metrai; būsenos eilutė parodo, koks jis. Pačios žemėlapio koordinatės yra tikslios.
:::

## Dažnos klaidos

- **„…nėra georeferencijos“.** Faile nėra žemėlapio konvertavimo ir vietovės platumos bei ilgumos. Eksportuokite jį iš naujo nustatę jo koordinačių sistemą (bendros koordinatės / matavimo taškas projektavimo įrankyje).
- **Žemėlapio koordinatės, bet nėra platumos ir ilgumos.** Faile žemėlapio sistema įvardyta be EPSG kodo arba su kodu, kurio nėra sąraše; būsenos eilutė nurodo, kuris.

- **Taškas patenka į paviršių, o ne į kampą.** Prisikabinimas žiūri į elementą po žymekliu. Priartinkite prie kampo arba padidinkite mastelį.
- **Plotas mažesnis nei tikėtasi.** Angos neįskaičiuojamos, o paviršius, kuris lankstosi, yra keli paviršiai: spustelėkite kiekvieną.
- **{{key:Esc}} sustabdė matavimą.** Pirmas {{key:Esc}} atmeta pusiau baigtą atstumą; antras sustabdo.

## Toliau

- [Pjauti IFC modelį pjūvio plokštuma](topic:section-plane)
- [Slėpti, izoliuoti ir matyti pro elementus](topic:hide-and-isolate)
