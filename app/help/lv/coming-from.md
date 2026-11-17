---
title: No citām BIM un zīmēšanas programmām
summary: Kā paradumi no galddatora BIM izstrādes un DWG skatīšanas atbilst BimCraft un atšķirības, uz kurām cilvēki pieļauj kļūdas.
keywords: pāreja, migrācija, pazīstams, galddatora BIM, ģimene, parametri, projektu pārlūks, rekvizītu panelis, skata kubs, xref, slāņu pārvaldnieks, atšķirības, salīdzināt
from: 2de629af
---

Ja pazīstat Revit, lielākā daļa BimCraft šķitīs pazīstama pēc vārdiem un sveša pēc apjoma. Vissvarīgākā atšķirība: **šī versija nolasa un pārbauda modeļus un labo IFC datus. Tā vēl neveido modeļus kā Revit.** Jūs nevarat zīmēt sienas, ievietot ģimenes, veidot skatus vai lapas, vai saglabāt projekta failu. Jūs varat atvērt gandrīz jebkuru ēkas failu jebkurā datorā ar pārlūkprogrammu, redzēt, kas tajā ir, pārbaudīt visu projekta mapi un labot datus IFC modelī.

## Paradumi, kas salāgoti

| Ja esat pieradis pie | BimCraft |
|---|---|
| `.rvt` atvēršanas Revit, lai redzētu modeli | BimCraft atver `.rvt` kā faila kartīti: versija, projekta informācija, saites, priekšskatījums. 3D modelim eksportējiet IFC un atveriet to. [Lasīt projekta vai ģimenes failu](topic:read-rvt-file) |
| Pārbaudes, kurā Revit versijā fails saglabāts, pirms atvēršanas | Kartītē augšā rakstīts „saglabāts Revit …“, bez faila jaunināšanas vai izmaiņām |
| Projektu pārlūku | Nav skatu un lapu pārlūka. IFC modelim ir {{ui:Stāvi}} un {{ui:Elementi}} saraksti; rasējumam — lapu cilnes |
| Rekvizītu paleti | Panelis {{ui:Rekvizīti}} labajā pusē noklikšķinātajam elementam. IFC rekvizītu kopas parametru grupu vietā |
| Eksemplāra un tipa parametrus | Eksemplāra rekvizītu kopas un kopas ar atzīmi „(tips)“. Tipa maiņa attiecas uz katru šī tipa elementu, kā Revit. [Mainīt tipa rekvizītu visiem tipa elementiem](topic:type-vs-instance) |
| Rediģēt tipu | Dialoga nav: noklikšķiniet vērtību kopā „(tips)“ un ierakstiet |
| Vairāku elementu atlasi, filtrus, Atlasīt visus eksemplārus | Viens elements vienlaikus. Vēl nav izveidots |
| Skata kubu un navigācijas riteni | Skata kubs apakšējā labajā stūrī, četras pogas ({{ui:Pielāgot}}, {{ui:Augša}}, {{ui:Priekšpuse}}, {{ui:Sāns}}) un brīva orbitēšana. Navigācijas riteņa nav |
| Shift un vidējo pogu ar vilkšanu orbītai, vidējo pogu ar vilkšanu panoramēšanai | Kreisā poga ar vilkšanu orbitē, labā poga (vai {{key:Shift}} un vilkšana) panoramē, ritenītis tālina. Izvēlņu stils {{ui:BIM lente}} pārslēdz uz panoramēšanu ar vidējo pogu un orbitēšanu ar {{key:Shift}} un vidējo pogu. [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse) |
| Stāvu plānus, griezumus, griezumu kastes | Viena {{ui:Griezums}} plakne vienlaikus ({{key:X}}); nav griezumu kastes vai 2D plānu. [Sagriezt IFC modeli ar griezuma plakni](topic:section-plane) |
| Paslēpt skatā, izolēt, redzamību un grafiku | {{ui:Stāvi}} ieslēgti un izslēgti, {{ui:Telpas}} un {{ui:Malas}}. Atsevišķu elementu paslēpšanas vēl nav |
| Telpas | IFC telpas (sākumā paslēptas). Noklikšķiniet {{ui:Telpas}} |
| Saglabāt, Saglabāt kā, sinhronizēt ar centrālo | {{ui:Saglabāt kā IFC}} lejupielādē jaunu IFC failu. Oriģināls nekad nemainās. Nav centrāla, nav kopdarbības |
| Atsaukt ar {{key:Mod+Z}} | Darbojas ar IFC labojumiem līdz saglabāšanai. [Mainīt IFC rekvizītus un saglabāt labotu kopiju](topic:edit-ifc-properties) |
| Pārvaldīt saites | Atveriet projekta mapi: katra saite tiek pārbaudīta un atzīmēta kā **Šajā mapē**, **Atrasts ar tādu pašu nosaukumu**, **Bibliotēkas fails** vai **Nav šajā mapē**. [Atvērt visu projekta mapi](topic:open-project-folder) |
| Pārbaudi vai faila atvēršanu, lai redzētu, vai tas nav bojāts | Mapes pārskats pārbauda katru kopiju un dublējumu, vai tā nav nogriezta, sekundēs. [Pārbaudīt mapi, vai nav bojātu kopiju](topic:check-folder-health) |
| Pareizā faila izvēli no haotiskas mapes | Lodziņš {{ui:Sāciet šeit}} ieteiks vienu ar iemesliem |

Ja modeļus atverat galvenokārt pārbaudei, kā modeļu pārbaudes vai IFC skatīšanas programmā, izvēlieties izvēlņu stilu {{ui:Skatītājs}}: skatīšanas un pārbaudes rīki ir priekšplānā, un būvniecības rīki ir vienā izvēlnē. Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).

## No DWG skatīšanas

Ja atverat DWG failus AutoCAD vai DWG skatītājā:

| Ja esat pieradis pie | BimCraft |
|---|---|
| Modeļa un izkārtojuma cilnēm apakšā | Cilnes virs zīmējuma: {{ui:Modelis}} un viena katrai lapai |
| ZOOM Extents, divkāršs klikšķis uz riteņa | Divkāršs klikšķis, {{key:F}} vai {{ui:Pielāgot}} |
| Panoramēšana ar vidējo pogu | Vilkt ar jebkuru pogu |
| Slāņu pārvaldnieku | Saraksts {{ui:Slāņi}}: atzīmējiet, lai rādītu, noņemiet atzīmi, lai paslēptu, {{ui:Visi ieslēgti}} un {{ui:Visi izslēgti}} |
| Ārējo saišu pārvaldnieku | **Saistītie rasējumi** labajā pusē ar **Rādīts** vai **Nav atrasts**, un {{ui:Pievienot saistītos rasējumus…}} |
| Drukas priekšskatījumu | {{ui:Drukas skats}} vai {{key:P}}: melns uz balta ar līniju biezumiem. Nedrukā |
| Bloku atribūtu datu izvilkšanu | Cilne {{ui:Aprīkojums}} marķētiem ēdināšanas rasējumiem, ar {{ui:Lejupielādēt CSV}} |
| Mērīt, zīmēt, labot, saglabāt kā | Nav BimCraft. Zīmē un labo CadCraft zīmēšanas lietotne |

## Atšķirības, uz kurām cilvēki pieļauj kļūdas

- **Tas darbojas pārlūkprogrammā, un pārlūkprogramma ar jūsu failiem rīkojas piesardzīgi.** BimCraft var lasīt tikai failus un mapes, ko jūs tam nododat, izvēloties vai ievelkot. Tas pats nevar atvērt failu un nevar pārrakstīt failu. Katra saglabāšana ir lejupielāde.
- **Nekas netiek augšupielādēts.** Vārds „augšupielādēt“ dažu pārlūku mapju dialogos ir pārlūka paša formulējums. Faili paliek jūsu datorā.
- **IFC ir modeļu formāts.** Projekta fails atveras kā kartīte, jo tā 3D saturs nav dokumentēts. Uzskatiet IFC par ceļu, pa kuru modeļi nonāk BimCraft.
- **Labojumi ir kopēšana-rakstīšana.** Viena elementa vērtības maiņa nekad nemaina kaimiņus, pat ja eksportētājs šo vērtību ir kopīgojis. Tipa rekvizīti ir apzināts izņēmums.
- **Nav projekta, nav skatu.** BimCraft rāda vienu failu vienlaikus un pēc cilnes aizvēršanas neko par to neatceras, izņemot pēdējo mapju nosaukumus Chrome un Edge.
- **Mac taustiņi.** Kur Revit Windows saīsnes izmanto Ctrl, BimCraft saīsnes izmanto {{key:Mod}}: Mac datorā — Command.
- **Jūsu peles paradumi.** Orbitēšana ir kreisā poga, nevis Shift un vidējā poga, ja vien neizvēlaties izvēlņu stilu {{ui:BIM lente}} vai pats neiestatāt pogas sadaļā [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).

Skatiet [Kas vēl nav izveidots](topic:not-built-yet), lai uzzinātu, ko šodien izmantot.
