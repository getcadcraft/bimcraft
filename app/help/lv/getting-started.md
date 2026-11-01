---
title: Darba sākšana ar BimCraft
summary: Ko BimCraft dara šobrīd, kā atvērt pirmo modeli, apskatīt to 3D, mainīt vienu vērtību un saglabāt kopiju.
keywords: sākums, pirmā palaišana, atvērt, ifc, rvt, dwg, ātrs sākums, ievads, skatītājs, bim
from: fc2dea19
---

BimCraft ir ēku modeļu lietotne CadCraft saimē. Šajā versijā tā **atver, nolasa un pārbauda** ēku failus, un tā **rediģē datus IFC modeļos**. Jaunus elementus tā vēl nezīmē un nemodelē. Iedomājieties to kā modeļu skatītāju un pārbaudītāju, kas ļauj arī labot nosaukumus, marķējumus un īpašību vērtības IFC failā.

Ko tas atver:

| Fails | Ko jūs iegūstat |
|---|---|
| IFC (`.ifc`) | Pilns modelis 3D: griezt skatu, stāvi, elementu īpašības un nosaukumu un īpašību vērtību rediģēšana |
| Projekta un ģimenes faili (`.rvt`, `.rfa`, `.rte`, `.rft`) | Faila kartīte: versija, kurā tas saglabāts, projekta informācija, priekšskatījuma attēls un saistītie faili. Nav 3D. |
| DWG un DXF | Rasējums 2D: modeļa telpa un visas lapas, slāņi, saistītie rasējumi, drukas skats un aprīkojuma specifikācija ēdināšanas rasējumiem ar marķējumiem |
| Projekta mape | Pārskats par katru modeli mapē: dublējumi, saites, bojātas kopijas un ieteikums, ar kuru failu sākt |

Viss notiek jūsu pārlūkprogrammā, jūsu datorā. **Nekas netiek augšupielādēts.** Skatiet [Faili, ko BimCraft atver un saglabā](topic:files), lai uzzinātu sīkāk.

## Atvērt BimCraft

1. Atveriet BimCraft jaunā pārlūkprogrammā. Chrome, Edge, Firefox un Safari visi darbojas. [Pārlūkprogrammas, ierīces un atmiņa](topic:platforms) uzskaita atšķirības.
2. Pagaidiet tukšo ekrānu, kurā rakstīts "Atveriet ēkas modeli."

:::note
BimCraft darbojas pārlūkprogrammā un darbvirsmā CadCraft Studio iekšienē kopā ar pārējām lietotnēm. Mākoņglabāšana vēl nav pieejama: failus atverat no sava datora un saglabājat kopijas atpakaļ tajā.
:::

## Atvērt pirmo modeli

Ātrākais veids, kā redzēt, ko dara BimCraft, ir IFC fails.

1. Ekrāna vidū noklikšķiniet uz {{ui:Izvēlēties failu}}.
2. Izvēlieties `.ifc` failu programmā {{pick:mac=Finder|windows=Failu pārlūks|linux=jūsu failu pārvaldnieks}} un apstipriniet.
3. Pagaidiet, kamēr ekrāna apakšā esošajā statusa rindā parādās "IFC dzinēja palaišana…", pēc tam "Ģeometrijas veidošana".

Jums vajadzētu redzēt modeli 3D vidū, {{ui:Fails}} paneli un {{ui:Stāvi}} sarakstu pa kreisi, kā arī tukšu {{ui:Rekvizīti}} paneli pa labi. Statusa rindā beigās ir "Atvērts" un elementu skaits.

:::tip
Varat arī ievilkt failu no {{pick:mac=Finder|windows=Failu pārlūks|linux=jūsu failu pārvaldnieks}} tieši lapā. Kamēr velkat, ekrānā parādās "Atlaidiet, lai atvērtu".
:::

:::offline
IFC dzinējs ielādējas no vietnes, kad pirmo reizi atverat IFC modeli, ja vien BimCraft nav saglabāts lietošanai bezsaistē. DWG un DXF rasējumiem, projekta failiem un mapēm nekas papildus nav vajadzīgs: to lasītāji ir daļa no lietotnes. Ja lietotnes joslas poga rāda {{ui:Gatavs darbam bezsaistē}}, viss atveras bezsaistē. Ja nē, IFC modeļi neatvērsies, līdz atjaunosiet savienojumu, ja vien tie jau nebija atvērti šajā cilnē. Skatiet [Tiešsaiste un bezsaiste](topic:online-offline).
:::

:::online
Dodaties uz vietu bez savienojuma? Lietotnes joslā noklikšķiniet uz {{ui:Saglabāt bezsaistei}} un pagaidiet, līdz parādās {{ui:Gatavs darbam bezsaistē}}. Saglabātā kopija (aptuveni 11 MB) ietver IFC dzinēju. Skatiet [Darbs bezsaistē](common:offline).
:::

## Apskatīt apkārt

:::mouse
1. Velciet ar kreiso peles pogu, lai griezt skatu ap modeli.
2. Ritiniet riteni, lai mainītu tālummaiņu.
3. Velciet ar labo peles pogu, lai panoramētu. Mac skārienpaliktnī turiet nospiestu {{key:Shift}} un velciet.
4. Nospiediet {{key:F}} vai noklikšķiniet uz {{ui:Pielāgot}}, lai atkal redzētu visu modeli.
:::

:::touch
1. Velciet ar vienu pirkstu, lai griezt skatu.
2. Saspiediet ar diviem pirkstiem, lai mainītu tālummaiņu, un pārvietojiet abus pirkstus kopā, lai panoramētu.
3. Pieskarieties {{ui:Pielāgot}}, lai atkal redzētu visu modeli.
:::

## Veiciet vienu reālu darbību: labojiet marķējumu

1. Noklikšķiniet uz sienas, durvīm vai jebkura elementa modelī. Tas kļūst zils, un tā īpašības parādās labajā pusē.
2. {{ui:Rekvizīti}} panelī noklikšķiniet uz vērtības blakus **Marķējums**.
3. Ierakstiet jauno marķējumu un nospiediet {{key:Enter}}.
4. Paskatieties uz sadaļu {{ui:Izmaiņas}}, kas atvērās kreisajā pusē: jūsu izmaiņa ir uzskaitīta ar veco un jauno vērtību.

## Saglabāt kopiju

1. Noklikšķiniet uz {{ui:Saglabāt kā IFC}} sadaļā {{ui:Izmaiņas}} vai nospiediet {{key:Mod+S}}.
2. Atrodiet jauno failu savā lejupielāžu mapē. Tas ir nosaukts pēc oriģināla, pievienojot " (edited)", piemēram, `Clinic (edited).ifc`.

Oriģinālais fails nekad netiek mainīts. [Mainīt IFC īpašības un saglabāt rediģētu kopiju](topic:edit-ifc-properties) izskaidro rediģēšanu pilnībā.

## Kur doties tālāk

- [BimCraft ekrāns](topic:workspace): katrs panelis pēc nosaukuma.
- [Pārejot no citām BIM un zīmēšanas programmām](topic:coming-from): kas šķitīs citādi, ja esat pieradis pie Revit.
- [Atvērt visu projekta mapi](topic:open-project-folder): norādiet BimCraft uz projekta mapi un ļaujiet tam sakārtot failus.
- [Skatīt DWG vai DXF rasējumu](topic:view-dwg): lapas, slāņi un drukas skats.
