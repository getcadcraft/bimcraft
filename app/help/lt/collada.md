---
title: Modelio eksportavimas kaip Collada arba Google Earth
summary: Atidarytus IFC modelius įrašykite kaip Collada (.dae) failą, skirtą Blender ir kitoms 3D programoms, arba kaip Google Earth paketą (.kmz), įdėtą ten, kur modelis yra žemėlapyje.
keywords: collada, dae, kmz, kml, google earth, blender, eksportas, geolokacija, georeferencija, platuma, ilguma, vieta, 3D programos
from: 81cfec09
---

{{ui:Collada}} įrankių juostoje (arba {{ui:Export Collada (.dae, .kmz)…}} meniu Failas meniu ir juostos stiliuose) įrašo atidarytą turinį kaip Collada 1.4.1: kiekvieną rodomą modelį, o susietus modelius – ten, kur juos įdėjote.

## Eksportas

1. Pasirinkite {{ui:Collada}}.
2. Pasirinkite formatą:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Siūloma tik tada, kai modelis turi vietą.
3. Pasirinkite parinktis, tada – {{ui:Export}}. Failas atsisiunčiamas, o būsenos juostoje rodoma, kiek elementų įtraukta.

| Parinktis | Ką daro |
|---|---|
| {{ui:Write the location into the file}} | Į .dae pridedama failo pradžios taško platuma, ilguma, aukštis ir kryptis |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}} arba {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Erdvės taip pat įtraukiamos (pagal numatytuosius nustatymus praleidžiamos) |
| {{ui:Include hidden elements}} | Paslėpti elementai taip pat įrašomi (pagal numatytuosius nustatymus įrašoma tik tai, ką matote) |

## Kas yra faile

| Modelyje | Collada faile |
|---|---|
| Pastatas, aukštai | Įdėti mazgai, aukštai pagal aukštį; elementai be aukšto – po „Unplaced“ |
| Kiekvienas elementas | Vienas mazgas su savo tinkleliu, pavadintas kaip modelyje (jo pavadinimu, o jei jo nėra – klase ir žymeniu) |
| Klasė, GlobalId, iš anksto nustatytas tipas | Mazgo papildomuose duomenyse (profilis IFC), tiksliu pavadinimu (profilis ModelCraft) |
| Spalvos | Medžiagos, su skaidrumu |
| Vienetai ir ašys | Metrai, Z aukštyn. Priekyje esančio modelio 0 lygis yra 0 aukštyje |

Modelis visame plote išlieka arti pradžios taško, todėl programos, dirbančios su vienkartiniu tikslumu, rodo jį be drebėjimo. ModelCraft savo Collada failus rašo ta pačia rašykle ir atveria šiuos failus su jų elementų pavadinimais.

## Iš kur imama vieta

Priekyje esantis modelis nurodo vietą, lygiai taip, kaip {{ui:Matuoti}} apskaičiuoja taško platumą ir ilgumą:

- Žemėlapio transformacija (IFC4 IfcMapConversion arba IFC2X3 savybių rinkiniai) per modelio koordinačių sistemą. Jūsų modeliui pasirinkta sistema pirmauja prieš failo nurodytą.
- Kitu atveju – sklypo platuma ir ilguma (apytiksliai: tinka visam sklypui).

Kryptis išmatuojama, o ne spėjama: atsižvelgiama į žemėlapio pasukimą, tikrąją šiaurę ir žemėlapio konvergenciją. Norėdami modeliui priskirti vietą, naudokite {{ui:Žemėlapio pradžios taškas…}} skiltyje {{ui:Matuoti}}.

## Kitose programose

- **Google Earth** nuskaito .kmz: modelis rodomas vietoje, pasuktas į šiaurę. Paprastas .dae nežymi vietos, iš kurios Google Earth skaitytų; naudokite .kmz.
- **Blender** (4.x ir ankstesnės versijos): File, Import, Collada (.dae). Kiekvienas elementas įkeliamas kaip atskiras objektas su savo medžiaga. Vieta išsaugoma failo papildomuose duomenyse, kurių Blender neskaito. Blender 5.0 atsisakė savo įmontuoto Collada importuotojo; tuomet naudokite {{ui:USD}} arba glTF eksportą, arba atidarykite .dae programoje Blender 4.5 ir įrašykite .blend.

Mūsų testai tikrina kiekvieną failą pagal Collada 1.4.1 schemą ir nuskaito jį nepriklausomu Collada skaitytuvu. Failo dar neatidarėme Blender ar Google Earth.
