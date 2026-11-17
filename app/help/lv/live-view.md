---
title: Tiešraides skats
summary: Panelis blakus modelim, kas to rāda reāllaika izskatā ar sauli, ēnām un atstarotu gaismu un seko katrai jūsu izmaiņai; pārvietojieties pa to un iestatiet dienas laiku un mēnesi.
keywords: tiešraide, reāllaiks, reāllaika renderēšana, pastaiga, staigāt, pārvietoties, pirmā persona, prezentācija, klients, otrais ekrāns, otrs logs, monitors, dienas laiks, saule, sezona, mēnesis, ēnas, ambient occlusion, atspulgi, atstarotā gaisma, global illumination, webgpu, webgl
from: ea5c02bf
---

Tiešraide rāda modeli reāllaika izskatā: debesis un sauli no jūsu objekta vietas un datuma, saules ēnas, krāsas un materiālus, ko piešķirat elementiem, lampas un gaismu, kas atstarojas no sienām un grīdām. Tā seko jūsu darbībām: pagriežat 3D skatu, un tā arī pagriežas; mainiet modeli, un tā pēc brīža parāda izmaiņu. Nekas netiek augšupielādēts.

Tā zīmē to pašu ainu, krāsas, lampas un sauli kā [Renderēt attēlu](topic:render); gatavam attēlam izmantojiet to.

## Atvēršana

1. Atveriet modeli un rīkjoslā izvēlieties {{ui:Tiešraide}}. Panelis atveras pāri lietotnei, apakšā labajā pusē.
2. Velciet tā virsrakstjoslu, lai to pārvietotu, un velciet stūri, lai to palielinātu.
3. {{ui:Tiešraide jaunā logā}} (blakus esoša poga) vai {{ui:Jauns logs}} panelī pārvieto to atsevišķā logā otram ekrānam. Ja jūsu pārlūkprogramma bloķē uznirstošos logus, tas atveras kā panelis.
4. {{ui:Aizvērt}} to aizver.

## Vadības elementi

| Vadība | Ko tā dara |
|---|---|
| {{ui:Sekot skatam}} | Ieslēgts: tiešraide skatās, kur skatās 3D skats. Pārvietošanās to izslēdz |
| {{ui:Staigāt}} | Pastaigāties pa modeli (zemāk) |
| {{ui:Gravitācija}} | Pastaigas laikā: stāvēt uz grīdām un kāpt kāpnēs. Izslēgts: lidot |
| {{ui:Laiks}} | Dienas stunda. Saule pārvietojas, kamēr velkat |
| {{ui:Mēnesis}} | Mēnesis, lai redzētu sauli ziemā un vasarā |
| {{ui:Kvalitāte}} | {{ui:Šim datoram}}, vai {{ui:Zema}}, {{ui:Vidējs}} vai {{ui:Augsta}} |

Apakšējā rindā teikts, kas zīmē skatu (WebGPU vai WebGL 2), kvalitāte un atstarotā gaisma.

## Pastaigāties pa modeli

1. Pagriežiet 3D skatu uz vietu, kur vēlaties stāvēt, un izvēlieties {{ui:Staigāt}}. Jūs stāvat uz grīdas zem skata acu punkta, 1,6 m augstumā.
2. Noklikšķiniet tiešraidē un tad izmantojiet {{key:W}} {{key:A}} {{key:S}} {{key:D}} vai bultiņu taustiņus. Turiet {{key:Shift}}, lai skrietu. Velciet, lai skatītos apkārt.
3. Soļus līdz 40 cm kāpjat (kāpnes); viss augstāk ir siena. Sienas jūs aptur, un jūs slīdat gar tām.
4. Ar izslēgtu {{ui:Gravitācija}} jūs lidojat: {{key:E}} ceļ uz augšu, {{key:Q}} – uz leju.
5. {{key:Esc}} aptur pastaigu.

## Atstarotā gaisma

Gaisma, kas no saules apgaismotas sienas atstarojas uz grīdu, un tumšākā telpas iekšpuse tiek aprēķinātas fonā uz katra procesora kodola. Kamēr tā strādā, apakšējā rindā rakstīts {{ui:Atstarotā gaisma: 40 %}}; kad tā ir gatava, skats to ņem vērā. Pēc katras izmaiņas tā sākas no jauna.

:::note
Šis ir tiešraides tuvinājums, nevis renderēts attēls: mazas detaļas starp punktiem saņem tuvāko punktu atstarotās gaismas vērtību.
:::

:::note
Pārlūkprogrammas atšķiras. Ja pārlūkprogrammai ir WebGPU, tiešraide to izmanto; citādi tā izmanto WebGL 2 un izskatās vienādi. Ja nav neviena no tiem, panelis par to paziņo.
:::
