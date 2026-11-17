---
title: Mainiet tipa īpašību visiem tipa elementiem
summary: Atšķiriet tipa īpašības no gadījuma īpašībām, mainiet vērtību tipā, lai katrs elements tam sekotu, un pārbaudiet, ka viena elementa rediģējums paliek tikai tā.
keywords: tips, gadījums, tipa īpašības, ģimenes tips, koplietots, kopē, rakstot, visi elementi, grupu rediģēšana, ražotājs, modelis
from: bffd8789
---

## Ko jūs darīsiet

Iestatiet ražotāju durvju tipam, lai katrām šī tipa durvīm tas būtu redzams, un pēc tam piešķiriet vienām durvīm savu ugunsizturības klasi, nemainot pārējās. Tas parāda atšķirību starp tipa un gadījuma īpašībām BimCraft.

## Tips vai gadījums?

- **Gadījuma** īpašība pieder vienam elementam: tā birka, marķējums, telpa, savs ugunsizturības rādītājs.
- **Tipa** īpašība pieder tipam, ko kopīgo daudzi elementi: ražotājs, modelis, durvju tipa platums.

Panelī {{ui:Rekvizīti}} kopas, kas nāk no tipa, aiz sava nosaukuma ir " (type)" un rindiņa "Type property: a change here applies to every element of this type." Visas pārējās kopas pieder pašam elementam. **Tips** pirmajā blokā rāda tipa nosaukumu.

## Soļi: mainiet tipu

1. Atveriet IFC modeli un noklikšķiniet durvis.
2. Pierakstiet to **Tipu** pirmajā panelī {{ui:Rekvizīti}}, piemēram, "Single-Flush 900 x 2100".
3. Ritiniet līdz kopai, kuras nosaukums beidzas ar "(type)".
4. Noklikšķiniet vērtību, ko vēlaties mainīt, piemēram, **Manufacturer** (Ražotājs).
5. Ierakstiet jauno vērtību un nospiediet {{key:Enter}}.
6. Paskatieties sarakstā {{ui:Izmaiņas}}: ieraksts beidzas ar "(type)".
7. Noklikšķiniet citas tā paša tipa durvis.
8. Pārbaudiet to pašu vērtību: tā rāda arī jauno vērtību.

## Soļi: mainiet tikai vienu elementu

1. Noklikšķiniet vienas durvis.
2. Atveriet kopu, kuras nosaukumā nav "(type)", piemēram, `Pset_DoorCommon`.
3. Noklikšķiniet vērtību, piemēram, **FireRating**, ierakstiet jaunu vērtību un nospiediet {{key:Enter}}.
4. Noklikšķiniet blakus esošas durvis, tā paša tipa.
5. Pārbaudiet to pašu vērtību: tā joprojām rāda veco vērtību.

Pat ja eksportētājs abām durvīm kopīgoja šo īpašumu kopu, BimCraft pirms mainīšanas pirmajām durvīm iedeva savu kopiju. Skatiet [Kāpēc jūsu rediģējums maina tikai vienu elementu](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Saglabāt

1. Noklikšķiniet {{ui:Saglabāt kā IFC}} vai nospiediet {{key:Mod+S}}.
2. Atveriet saglabāto kopiju BimCraft vai jebkurā IFC skatītājā, lai pārbaudītu abas izmaiņas.

## Biežākās kļūdas

- **Ne visiem modeļiem ir tipi.** Daži eksportētāji neraksta tipu objektus vai ieliek visu gadījumā. Tad nav "(type)" kopu, un katrs elements jāmaina atsevišķi.
- **Tā pati vērtība parādās gan tipa kopā, gan gadījuma kopā.** Daži eksportētāji vienu parametru raksta abās vietās. Citas programmas var lasīt jebkuru no tām; mainiet abas, ja vēlaties, lai tās sakrīt.
- **Gaidāt, ka varēsiet atlasīt "visas šā tipa durvis" un rediģēt tās kopā.** Šajā versijā nav vairākkārtējas atlases. Tipa īpašība ir veids, kā mainīt daudzus elementus vienlaikus.
