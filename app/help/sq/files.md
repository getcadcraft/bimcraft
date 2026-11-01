---
title: Skedarët që BimCraft hap dhe ruan
summary: Çdo format që hap BimCraft, çfarë mban, çfarë ruan, ku shkojnë skedarët e ruajtur dhe çfarë ndryshon midis shfletuesve dhe kur jeni jashtë linje.
keywords: formate, hap, ruaj, eksporto, shkarko, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, ngarko, privatësi, madhësia e skedarit
from: a1f0161b
---

BimCraft lexon skedarët në kompjuterin tuaj, në skedën e shfletuesit. **Asgjë nuk ngarkohet** te CadCraft ose te askush tjetër. Kur ruani, BimCraft i jep shfletuesit një skedar të ri për ta shkarkuar; nuk shkruan kurrë mbi një skedar që keni hapur.

## Çfarë hap

| Format | Shtesat | Çfarë merrni |
|---|---|---|
| IFC | `.ifc` | Modeli në 3D, katet, numrat e elementeve dhe vetitë e çdo elementi. Emrat, etiketat dhe vlerat e vetme të vetive mund të ndryshohen. |
| Skedarë projekti dhe familjesh | `.rvt` `.rfa` `.rte` `.rft` | Një kartelë skedari: versioni, ndërtimi, punimi në grup, informacioni i projektit, parametrat e familjes, skedarët e lidhur dhe imazhi i pamjes paraprake. Pa 3D. |
| DWG | `.dwg` | Vizatimi në 2D: hapësira e modelit, çdo fletë, shtresat, vizatimet e lidhura, imazhet dhe pamja e printimit. Hapësira e modelit edhe në 3D. Kontrollohen formatet nga AutoCAD 2000 deri 2018. |
| DXF | `.dxf` | Njëlloj si DWG. |
| STEP | `.step` `.stp` | Një pjesë, një pajisje ose modeli i një furnizuesi (AP203, AP214, AP242) në 3D: çdo trup i ngurtë bëhet një element (një proxy elementi ndërtimi) i një modeli të vogël IFC në një kat, lexohet si trekëndësha në madhësinë e tyre të vërtetë, një montim me çdo pjesë aty ku e vendos skedari. Nga aty funksionon si çdo IFC: veti, prerje, matje, ruaj si IFC. Ngjyrat dhe pema e montimit nuk lexohen. |
| Re pikash | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skanimi në pamjen 3D, pranë një modeli ose vetëm: shih [Shfaq një re pikash pranë modelit](topic:point-clouds). |
| Paketë projekti | `.ccbundle.zip` | Modeli me pamjet, paraqitjet dhe grupet e vetive: shih [Hap një paketë projekti](topic:open-project-bundle). |
| Një dosje | çdo | Një raport i çdo modeli, vizatimi dhe pakete projekti në të. Çdo IFC, model, vizatim ose paketë në raport hapet me një klik. |

[Çfarë lexon BimCraft nga çdo format](topic:file-formats) shpjegon në detaje.

BimCraft e përcakton se çfarë është një skedar duke parë edhe bajtet e tij të para, jo vetëm emrin, kështu që një skedar projekti me shtesë të pazakontë hapet prapë si kartelë skedari.

### Nuk hapen

- `.ifczip` dhe `.ifcxml`: BimCraft thotë ".ifczip nuk mbështetet ende. Ruani ose eksportoni modelin si skedar të thjeshtë .ifc." Shpaketoni `.ifczip` (përmban një `.ifc` të thjeshtë) ose eksportoni përsëri si IFC të thjeshtë.
- Vizatimet DGN listohen në raportin e dosjes, por nuk hapen.
- PDF, imazhet dhe skedarët e zyrës nuk hapen vetë. Imazhet përdoren si foto brenda një DWG, dhe {{ui:Build}} › {{ui:From a drawing…}} i kthen faqet e një PDF ose skanimi në mure: shih [Mure nga një grup planesh](topic:walls-from-plans).

## Çfarë ruan

| Ju klikoni | Ju merrni | Ku |
|---|---|---|
| {{ui:Save as IFC}} | Një skedar i ri IFC me ndryshimet tuaja, emëruar "*emri origjinal* (edited).ifc" | Dosja e shkarkimeve të shfletuesit |
| {{ui:Download CSV}} te tabela e pajisjeve | Një CSV me elementet e listës, emëruar "*emri i vizatimit* equipment.csv" | Dosja e shkarkimeve të shfletuesit |

Gjërat e tjera ruhen aty ku krijohen, secila në temën e vet: {{ui:USD}} ([Eksporto modelin si USD](topic:usd)), skedari .glb {{ui:For rendering}}, pamjet e renderuara, fletët dhe planimetritë si PDF, tabelat dhe listat si CSV, çështjet BCF, fletëllogaritësi COBie, skedarët e familjeve dhe skanimet e regjistruara si LAS ose E57. BimCraft nuk ruan DWG, DXF ose skedarë projekti, dhe nuk ndryshon kurrë skedarët që keni hapur.

:::chromium
Chrome dhe Edge ruajnë shkarkimet në dosjen e vendosur në cilësimet e tyre, zakonisht Shkarkimet. Për t'u pyetur ku të ruhet çdo skedar, aktivizoni "Pyet ku të ruhet çdo skedar përpara shkarkimit" te cilësimet e shkarkimit të shfletuesit.
:::

:::firefox
Firefox ruan në dosjen Shkarkimet, përveç nëse e keni vendosur "Gjithmonë pyet ku të ruhen skedarët" në cilësimet e tij.
:::

:::safari
Safari ruan në Shkarkimet, përveç nëse zgjidhni një dosje tjetër te **Safari > Cilësimet > Të përgjithshme > Vendndodhja e shkarkimit të skedarëve**.
:::

## Ruajtja për herë të dytë

Çdo ruajtje shkarkon të gjithë modelin me **çdo ndryshim që nga hapja e tij**, jo vetëm ndryshimet e bëra pas ruajtjes së fundit. Lista {{ui:Changes}} fillon përsëri bosh pas çdo ruajtjeje, kështu që nuk mund të zhbëni përtej një ruajtjeje. Për të nisur nga e para, hapni përsëri skedarin origjinal.

## Skedarë të mëdhenj dhe memoria

- **Skedarët IFC** lexohen plotësisht në memorinë e skedës, dhe gjeometria 3D zë më shumë memorie. Një model me disa qindra megabajt mund të jetë shumë për një laptop. Mbi 1.5 milion trekëndësha, skajet fiken për të kursyer memorien ("Skajet janë fikur për modelet shumë të mëdha").
- **Skedarët e projektit** nuk lexohen në tërësi. BimCraft lexon vetëm pjesët e vogla që i duhen, rreth 40 KB deri 100 KB, pavarësisht sa i madh është skedari, kështu që një model qendror 500 MB në një disk rrjeti hapet menjëherë.
- **Skedarët DWG dhe DXF** lexohen plotësisht. Një vizatim shumë i madh shfaq "Ky vizatim është shumë i madh; shfaqet vetëm një pjesë e tij."
- **Dosjet** deri në 20 000 skedarë hapen. Lexohen vetëm disa kilobajt që i duhen çdo kartele modeli.

Shih [Shfletuesit, pajisjet dhe memoria](topic:platforms) për më shumë.

## Online dhe offline

Hapja e skedarëve nuk kërkon kurrë internet. Një lexues ngarkohet nga faqja herën e parë që ju duhet: motori IFC, herën e parë që hapni një model IFC ("Po nis motorin IFC…"). Lexuesit DWG dhe DXF janë pjesë e vetë aplikacionit.

:::offline
Jeni jashtë linje. Nëse butoni në shiritin e aplikacionit thotë {{ui:Offline ready}}, çdo format hapet si zakonisht. Nëse jo, një model IFC nuk mund të hapet përveç nëse është hapur tashmë në këtë skedë: lidheni së pari. Shih [Në linjë dhe jashtë linje](topic:online-offline).
:::

Për të përdorur BimCraft pa lidhje, klikoni {{ui:Save for offline}} në shiritin e aplikacionit ndërsa jeni në linjë, dhe prisni {{ui:Offline ready}}. Kopja e ruajtur ka rreth 33 MB; përfshin motorin IFC, kështu që edhe modelet IFC hapen jashtë linje. [Puna jashtë linje](common:offline) shpjegon kopjet e ruajtura në përgjithësi.

## Ruajtja në cloud

Ruajtja në cloud nuk është e disponueshme ende. Ruani kopjet tuaja të ndryshuara në kompjuterin tuaj ose te serveri i skedarëve të zyrës, si çdo skedar tjetër. Shih [Skedarët tuaj](common:your-files).
