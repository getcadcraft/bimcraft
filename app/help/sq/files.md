---
title: Skedarët që hap dhe ruan BimCraft
summary: Çdo format që hap BimCraft, çfarë mban, çfarë ruan, ku shkojnë skedarët e ruajtur dhe çfarë ndryshon ndërmjet shfletuesve dhe kur je jashtë linje.
keywords: formate, hap, ruaj, eksporto, shkarko, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, ngarko, privatësi, madhësia e skedarit
from: a7275dbf
---

BimCraft lexon skedarët në kompjuterin tënd, në skedën e shfletuesit. **Asgjë nuk ngarkohet** te CadCraft apo te kushdo tjetër. Kur ruan, BimCraft i jep shfletuesit një skedar të ri për ta shkarkuar; nuk shkruan kurrë mbi një skedar që ke hapur.

## Çfarë hap

| Format | Zgjatimet | Çfarë merr |
|---|---|---|
| IFC | `.ifc` | Modeli në 3D, katet, numri i elementeve dhe vetitë e çdo elementi. Emrat, etiketat dhe vlerat e vetive të vetme mund të ndryshohen. |
| Skedarët e projektit dhe të familjeve | `.rvt` `.rfa` `.rte` `.rft` | Një kartelë skedari: versioni, ndërtimi, puna e përbashkët, informacioni i projektit, parametrat e familjes, skedarët e lidhur dhe imazhi i pamjes paraprake. Pa 3D. |
| DWG | `.dwg` | Vizatimi në 2D: hapësira e modelit, çdo fletë, shtresat, vizatimet e lidhura, imazhet dhe pamja e printimit. Hapësira e modelit edhe në 3D. Kontrollohen formatet nga AutoCAD 2000 deri në 2018. |
| DXF | `.dxf` | Njësoj si DWG. |
| STEP | `.step` `.stp` | Një pjesë, një pajisje ose model i një furnitori (AP203, AP214, AP242) në 3D: çdo trup solid bëhet një element (proxy elementi ndërtimi) i një modeli të vogël IFC në një kat, lexohet si trekëndësha në madhësinë e tij reale, një montim me çdo pjesë aty ku e vendos skedari. Prej këtu funksionon si çdo IFC tjetër: veti, prerje, matje, ruaj si IFC. Ngjyrat dhe pema e montimit nuk lexohen. |
| Retë e pikave | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skanimi në pamjen 3D, pranë një modeli ose vetëm: shih [Shfaq një re pikash pranë modelit](topic:point-clouds). |
| Paketa e projektit | `.ccbundle.zip` | Modeli me pamjet, paraqitjet dhe grupet e vetive: shih [Hap një paketë projekti](topic:open-project-bundle). |
| Një dosje | çdo | Një raport për çdo model, vizatim dhe paketë projekti në të. Çdo IFC, model, vizatim ose paketë në raport hapet me një klik. |

[Çfarë lexon BimCraft nga çdo format](topic:file-formats) shkon në detaje.

BimCraft e përcakton çfarë është një skedar duke parë bajtët e tij të parë, jo vetëm emrin, prandaj një skedar projekti me zgjatim të pazakontë hapet prapë si kartelë skedari.

### Nuk hapet

- `.ifczip` dhe `.ifcxml`: BimCraft thotë: ".ifczip nuk mbështetet ende. Ruaje ose eksporto modelin si skedar të thjeshtë .ifc." Hape `.ifczip` (përmban një `.ifc` të thjeshtë) ose eksporto përsëri si IFC të thjeshtë.
- Vizatimet DGN listohen në një raport dosjeje, por nuk hapen.
- PDF, imazhet dhe skedarët e zyrës nuk hapen vetë. Imazhet përdoren si foto brenda një DWG-je, dhe {{ui:Ndërtimi}} › {{ui:Nga një vizatim…}} i kthen faqet e një PDF-je ose skanimi në mure: shih [Mure nga një grup planesh](topic:walls-from-plans).

## Çfarë ruan

| Ti klikon | Ti merr | Ku |
|---|---|---|
| {{ui:Ruaj si IFC}} | Një skedar i ri IFC me ndryshimet e tua, me emrin "*emri origjinal* (edited).ifc" | Dosja e shkarkimeve të shfletuesit tënd |
| {{ui:Shkarko CSV}} te tabela e pajisjeve | Një CSV i elementeve të listës, me emrin "*emri i vizatimit* equipment.csv" | Dosja e shkarkimeve të shfletuesit tënd |

Gjërat e tjera ruhen aty ku krijohen, secila në temën e vet: {{ui:USD}} ([Eksporto modelin si USD](topic:usd)), {{ui:Collada}} (.dae dhe Google Earth .kmz: [Eksporto modelin si Collada ose për Google Earth](topic:collada)), skedari .glb i {{ui:Për renderim}}, foto të renderuara, fletët dhe planimetritë si PDF, tabelat dhe listat si CSV, çështjet BCF, fleta e llogaritjes COBie, skedarët e familjeve dhe skanimet e regjistruara si LAS ose E57. BimCraft nuk ruan DWG, DXF ose skedarë projekti, dhe nuk ndryshon kurrë skedarët që ke hapur.

:::chromium
Chrome dhe Edge ruajnë shkarkimet në dosjen e vendosur në cilësimet e tyre, zakonisht Downloads. Për t'u pyetur çdo herë ku të ruhet, aktivizo "Ask where to save each file before downloading" te cilësimet e shkarkimit të shfletuesit.
:::

:::firefox
Firefox ruan në dosjen Downloads përveç nëse e vendos në "Always ask you where to save files" te cilësimet e tij.
:::

:::safari
Safari ruan te Downloads përveç nëse zgjedh një dosje tjetër nën **Safari > Settings > General > File download location**.
:::

## Ruajtja për herë të dytë

Çdo ruajtje shkarkon të gjithë modelin me **çdo ndryshim që nga hapja e tij**, jo vetëm ndryshimet e bëra pas ruajtjes së fundit. Lista {{ui:Ndryshimet}} fillon përsëri bosh pas çdo ruajtjeje, prandaj nuk mund të zhbësh përtej një ruajtjeje. Për të filluar nga e para me origjinalin, hap përsëri skedarin origjinal.

## Skedarë të mëdhenj dhe memoria

- **Skedarët IFC** lexohen plotësisht në memorien e skedës, dhe gjeometria 3D zë edhe më shumë memorie. Një model me disa qindra megabajt mund të jetë shumë për një laptop. Mbi 1.5 milion trekëndësha, skajet fiken për të kursyer memorien ("Skajet janë fikur për modele shumë të mëdha").
- **Skedarët e projektit** nuk lexohen plotësisht. BimCraft lexon vetëm pjesët e vogla që i duhen, rreth 40 KB deri në 100 KB, sado i madh të jetë skedari, kështu që një model qendror 500 MB në një disk rrjeti hapet në një moment.
- **Skedarët DWG dhe DXF** lexohen plotësisht. Një vizatim shumë i madh shfaq "Ky vizatim është shumë i madh; shfaqet vetëm një pjesë e tij."
- **Dosjet** deri në 20,000 skedarë hapen. Lexohen vetëm disa kilobajt që u duhen kartelave të çdo modeli.

Shih [Shfletuesit, pajisjet dhe memoria](topic:platforms) për më shumë.

## Në linjë dhe jashtë linje

Hapja e skedarëve nuk kërkon kurrë internet. Një lexues ngarkohet nga faqja herën e parë që e nevojit: motori IFC, herën e parë që hap një model IFC ("Po nis motori IFC…"). Lexuesit DWG dhe DXF janë pjesë e vetë aplikacionit.

:::offline
Je jashtë linje. Nëse butoni i shiritit të aplikacionit thotë {{ui:Gati jashtë linje}}, çdo format hapet si zakonisht. Nëse jo, një model IFC nuk mund të hapet, përveç nëse një i tillë është hapur tashmë në këtë skedë: lidhu përsëri së pari. Shih [Në linjë dhe jashtë linje](topic:online-offline).
:::

Për të përdorur BimCraft pa lidhje, kliko {{ui:Ruaje për jashtë linje}} te shiriti i aplikacionit ndërsa je në linjë, dhe prit për {{ui:Gati jashtë linje}}. Kopja e ruajtur është rreth 33 MB; përfshin motorin IFC, prandaj edhe modelet IFC hapen jashtë linje. [Puna jashtë linje](common:offline) shpjegon kopjet e ruajtura në përgjithësi.

## Ruajtja në cloud

Ruajtja në cloud nuk është e disponueshme ende. Ruaji kopjet e ndryshuara në kompjuterin tënd ose në serverin e skedarëve të zyrës, si çdo skedar tjetër. Shih [Skedarët e tu](common:your-files).
