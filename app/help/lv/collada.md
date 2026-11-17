---
title: Modeļa eksportēšana kā Collada vai Google Earth
summary: Ierakstīt atvērtos IFC modeļus kā Collada (.dae) failu Blender un citām 3D programmām vai kā Google Earth paku (.kmz), novietotu tur, kur modelis atrodas kartē.
keywords: collada, dae, kmz, kml, google earth, blender, eksportēt, ģeoatrašanās, georeferencēšana, platuma grāds, garuma grāds, atrašanās vieta, 3D programmas
from: 81cfec09
---

{{ui:Collada}} rīkjoslā (vai {{ui:Eksportēt Collada (.dae, .kmz)…}} izvēlnē Fails izvēlņu un lentes stilos) ieraksta atvērto kā Collada 1.4.1: katru redzamo modeli, saistītos modeļus tur, kur tie novietoti.

## Eksportēšana

1. Izvēlieties {{ui:Collada}}.
2. Izvēlieties formātu:
   - {{ui:Collada fails (.dae) Blender un citām 3D programmām}}.
   - {{ui:Google Earth paka (.kmz): modelis novietots, kur tas atrodas kartē}}. Piedāvā tikai tad, ja modelim ir atrašanās vieta.
3. Izvēlieties opcijas un tad {{ui:Eksportēt}}. Fails tiek lejupielādēts, un statusa joslā rādīts, cik elementu iekļauts.

| Opcija | Ko tā dara |
|---|---|
| {{ui:Ierakstīt atrašanās vietu failā}} | Pievieno faila sākumpunkta platuma grādu, garuma grādu, augstumu un virzienu .dae failam |
| {{ui:Augstums}} | {{ui:Uz zemes: modeļa 0. līmenis atrodas uz reljefa}} vai {{ui:Paša modeļa augstums virs jūras līmeņa}} |
| {{ui:Iekļaut telpas un zonas}} | Telpas arī tiek iekļautas (pēc noklusējuma tās izlaistas) |
| {{ui:Iekļaut paslēptos elementus}} | Elementi, kurus paslēpāt, tiek ierakstīti arī (pēc noklusējuma tiek ierakstīts tikai redzamais) |

## Ko satur fails

| Modelī | Collada failā |
|---|---|
| Ēka, stāvi | Iekārtoti mezgli, stāvi augstuma secībā; elementi bez stāva zem „Nenovietoti“ |
| Katrs elements | Viens mezgls ar savu tīklu, nosaukts kā modelī (tā nosaukums, citādi klase un birka) |
| Klase, GlobalId, iepriekš definēts tips | Mezgla papildu datos (profils IFC), ar precīzu nosaukumu (profils ModelCraft) |
| Krāsas | Materiāli, ar caurspīdīgumu |
| Mērvienības un asis | Metri, Z uz augšu. Priekšplāna modeļa 0. līmenis ir augstumā 0 |

Modelis visu laiku paliek tuvu sākumpunktam pa zemi, tāpēc programmas, kas strādā ar vienas precizitātes skaitļiem, to rāda bez trīcēšanas. ModelCraft raksta savus Collada failus ar to pašu rakstītāju un atver šos failus ar elementu nosaukumiem.

## No kurienes nāk atrašanās vieta

Priekšplāna modelis dod atrašanās vietu tādā pašā veidā, kā {{ui:Mērīt}} aprēķina punkta platuma un garuma grādus:

- Kartes pārveidošana (IFC4 IfcMapConversion vai IFC2X3 īpašumu kopas) caur modeļa koordinātu sistēmu. Modelim izvēlēta sistēma uzvar pār to, ko fails nosauc.
- Citādi vietnes platuma un garuma grādi (aptuveni: pietiek visas vietnes ietvaros).

Virziens tiek izmērīts, nevis pieņemts: ņemts vērā kartes pagrieziens, patiesais ziemeļu virziens un kartes konverģence. Lai modelim piešķirtu atrašanās vietu, izmantojiet {{ui:Kartes sākumpunkts…}} sadaļā {{ui:Mērīt}}.

## Citās programmās

- **Google Earth** nolasa .kmz: modelis parādās savā atrašanās vietā, pagriezts uz ziemeļiem. Vienkāršs .dae fails nesatur vietu, no kuras Google Earth nolasītu atrašanās vietu; izmantojiet .kmz.
- **Blender** (4.x un vecāka): File, Import, Collada (.dae). Katrs elements tiek importēts kā atsevišķs objekts ar savu materiālu. Atrašanās vieta tiek glabāta faila papildu datos, ko Blender nelasa. Blender 5.0 atteicās no iebūvētā Collada importētāja; tur izmantojiet {{ui:USD}} vai glTF eksportu, vai atveriet .dae programmā Blender 4.5 un saglabājiet .blend.

Mūsu testi pārbauda katru failu pret Collada 1.4.1 shēmu un nolasa to ar neatkarīgu Collada lasītāju. Tie nav atvērti programmās Blender vai Google Earth.
