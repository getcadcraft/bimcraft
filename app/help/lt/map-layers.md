---
title: Žemėlapis ant žemės po modeliu
summary: Padėkite gatvių žemėlapį ar aerofotografiją ant žemės po georeferencuotu IFC modeliu, iš žemėlapio plytelių, žemėlapio paslaugų arba paveikslėlio su pasaulio failu.
keywords: žemėlapis, žemėlapio sluoksniai, pagrindinis žemėlapis, aerofotografija, palydovinis, vietovė, žemė, plytelės, xyz, wms, wmts, žemėlapio paslauga, pasaulio failas, georeferencija, ifcmapconversion, projektinė CRS, epsg, vietovės kontekstas
from: 84e2e9df
---

## Ką darysite

Pamatykite modelį jo vietoje: vietovės gatvių žemėlapis ar aerofotografija ant žemės po juo.

## Žingsniai

1. Atidarykite IFC modelį, kuriame yra jo vieta žemėlapyje (žemėlapio konvertavimas, IfcMapConversion, su projektine koordinačių sistema). Eksportuotojai jį įrašo, kai nustatomos projekto koordinatės (matavimo taškas, bendros koordinatės).
2. Pasirinkite {{ui:Rodyti}} › {{ui:Žemėlapių sluoksniai…}}. Dialogas nurodo modelio sistemą, pavyzdžiui, EPSG:28356. Modelis be žemėlapio konvertavimo negali turėti žemėlapio sluoksnių: dialogas apie tai praneša.
3. Įjunkite {{ui:Žemėlapio sluoksniai iš interneto}}. Kol jis neįjungtas, jokiam serveriui nieko neklausiama; įjungus, jūsų pridėti serveriai mato plotą aplink modelį ir jūsų interneto adresą, bet ne jūsų modelį.
4. Skiltyje {{ui:Pridėti sluoksnį}} pasirinkite plyteles (adresą su `{z}`, `{x}` ir `{y}`), WMS, WMTS arba ArcGIS paslaugą ({{ui:Gauti sluoksnius}}, tada pasirinkite vieną), arba paveikslėlį su jo pasaulio failu.
5. Uždarykite dialogą. Žemėlapis guli ant žemės tiesiai po žemiausiu modelio tašku, virš modelio pėdsako ir tiek pat toliau aplink jį.

:::note
Žemėlapis rodomas tik ekrane; jis neįrašomas į IFC failą. Sluoksnių sąrašas saugomas šioje naršyklėje. Naudokite tik tas žemėlapio paslaugas, kurių sąlygos tai leidžia.
:::
