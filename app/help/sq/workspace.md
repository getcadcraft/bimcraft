---
title: Ekrani i BimCraft
summary: Një turne i çdo shiriti, paneli dhe butoni sipas emrit të tij në ekran, dhe si ndryshon ekrani për çdo lloj skedari.
keywords: ekran, paraqitje, panele, shiriti i veglave, ndërfaqe, ui, turne, panel vetish, shfletues, shiriti i aplikacionit
from: 2eb01ec2
---

Ekrani i BimCraft ka një shirit në krye dhe tri zona nën të: një panel në të majtë, skenën në mes dhe panelin {{ui:Properties}} në të djathtë. Çfarë shfaqet në çdo zonë varet nga ajo që keni hapur: një model IFC, një skedar projekti ose familjeje, një vizatim ose një dosje.

## Shiriti i aplikacionit

Shiriti i hollë në krye i takon sitit CadCraft, jo vetë BimCraft. Nga e majta në të djathtë:

- Shenja CadCraft: të çon në faqen kryesore të CadCraft.
- Emri i aplikacionit dhe një menu versionesh. Në versionin e stafit tregon cilin version po përdorni dhe lejon kalimin në një version të publikuar.
- {{ui:About BimCraft}}: faqja e aplikacionit në sit.
- {{ui:Settings}}: cilësimet e vetë BimCraft dhe ato që ndajnë të gjitha aplikacionet. Shih [Cilësimet e BimCraft](topic:settings).
- {{ui:Full screen}}: kalon midis mënyrave të ekranit. Shih [Mënyrat e ekranit](topic:workspace#screen-modes) më poshtë.
- {{ui:Paper}} dhe {{ui:Model}}: temat e çelët dhe të errët. Pamja 3D dhe vizatimet 2D ndjekin temën që zgjidhni.

## Paneli i majtë

Paneli i majtë nis gjithmonë me **Hap një skedar ose dosje**:

- Zona e rënies, {{ui:Choose a file, or drop a file or folder here}}. Klikoni për të zgjedhur një skedar, ose lëshoni një skedar ose dosje mbi të (ose kudo në faqe).
- {{ui:Open a folder}}: zgjidhni një dosje të tërë projekti. Shih [Hap një dosje të plotë projekti](topic:open-project-folder).
- {{ui:Recent folders}}: shfaqet në Chrome dhe Edge pasi hapni një dosje me zgjedhësin e dosjeve ose duke e lëshuar. Klikoni {{ui:Reopen}} dhe emrin e dosjes për ta hapur përsëri, ose × të vogël për ta harruar.

Më poshtë, seksionet shfaqen sipas zbatimit:

| Seksioni | Kur shfaqet | Çfarë përmban |
|---|---|---|
| {{ui:Changes}} | Një model IFC është i hapur | Ndryshimet tuaja të paruajtura, më të rejat e para, me {{ui:Undo}} dhe {{ui:Save as IFC}} |
| {{ui:File}} | Një model ose kartelë skedari është e hapur | Të dhëna për skedarin: madhësia, skema ose versioni, projekti, autori, numri i elementeve |
| {{ui:Drawing}} | Një DWG ose DXF është i hapur | Formati, njësitë, numri i entiteteve dhe shtresave, fletët, vizatimet e lidhura, pajisjet |
| {{ui:Folder}} | Një dosje është e hapur | Numri i skedarëve dhe i modeleve, madhësia, problemet e gjetura |
| {{ui:Back to the folder}} | Keni hapur një skedar nga një dosje | Kthehet te raporti i dosjes |
| {{ui:Layers}} | Një vizatim është i hapur | Një kuti kontrolli për çdo shtresë, me {{ui:All on}} dhe {{ui:All off}} |
| {{ui:Storeys}} | Një model IFC është i hapur | Një kuti kontrolli për çdo kat, kati më i lartë i pari |
| {{ui:Elements}} | Një model IFC është i hapur | Sa elemente të çdo lloji mban modeli (30 më të shpeshtit) |

## Skena

Mesi i ekranit shfaq skedarin e hapur.

- **Bosh**: "Hap një model ndërtese." me {{ui:Choose a file}} dhe {{ui:Open a folder}}, dhe një përshkrim të shkurtër të çdo formati.
- **Model IFC**: pamja 3D me një shirit veglash në krye, në grupe të emëruara si ato të aplikacionit të vizatimit CadCraft, me ikonën e çdo veglë mbi emrin e saj: {{ui:View}} ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}, {{ui:Edges}}, {{ui:Spaces}}); {{ui:Edit}} ({{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} dhe {{ui:More}}, shih [Kopjo, ngjit dhe dublo elementet e bibliotekës](topic:copy-paste)); {{ui:Model}} ({{ui:Units}} dhe {{ui:Draw}}); {{ui:Library}} ({{ui:Library}}, {{ui:Equipment}}, {{ui:Updates}}, {{ui:Credits}}); {{ui:Review}} ({{ui:Show}}, {{ui:Section}}, {{ui:Walk}}, {{ui:Measure}}; shih [Pritni një model IFC me një plan prerjeje](topic:section-plane)); dhe {{ui:Output}} (renderim, pamje e drejtpërdrejtë, VR, eksporte, ngjyrosje dhe pamjet e ruajtura). Me {{ui:Draw}} të ndezur, shiriti i vizatimit nën të ka të njëjtin pamje: {{ui:View}} (niveli dhe lloji i planimetrisë), {{ui:Draw}}, {{ui:Edit}} dhe {{ui:Library}}. Një kub pamjeje gjendet në qoshen e poshtme djathtas. Shih [Hapni një model IFC dhe shikoni rreth tij në 3D](topic:open-ifc-model). {{ui:Settings}}, {{ui:General}} zgjedh ikona, etiketa ose të dyja në këto butona, shfaq ose fsheh emrat e grupeve, dhe me të djathtën te shiriti i veglave rregulloni veglat dhe grupet. Në një dritare të shkurtër, shiriti heq emrat nën ikonat.
- **Skedar projekti ose familjeje**: kartela e skedarit, me imazhin e pamjes paraprake, informacionin e projektit dhe skedarët e lidhur. Shih [Lexoni një skedar projekti ose familjeje](topic:read-rvt-file).
- **DWG ose DXF**: një rresht skedash ({{ui:Model}}, pastaj një për çdo fletë, pastaj {{ui:Equipment}} kur vizatimi ka pajisje të etiketuara, {{ui:3D}}, {{ui:Fit}} dhe {{ui:Print view}}), vizatimi, dhe koordinatat e drejtpërdrejta X dhe Y në një qoshe. Shih [Shikoni një vizatim DWG ose DXF](topic:view-dwg) dhe [Shikoni një vizatim DWG ose DXF në 3D](topic:dwg-in-3d).
- **Dosje**: raporti i dosjes, me kutinë {{ui:Start here}} dhe tabela të modeleve, lidhjeve, modeleve IFC dhe vizatimeve. Shih [Hap një dosje të plotë projekti](topic:open-project-folder).

**Rreshti i statusit** në fund të skenës të tregon çfarë po bën BimCraft ("Po lexohet modeli…", "Po ndërtohet gjeometria: 1200 nga 5400 elemente") dhe çfarë shkoi keq, me të kuqe, kur diçka dështon. Mesazhet e suksesit zhduken pas disa sekondash.

## Paneli Properties

Paneli i djathtë shfaq:

- Për një model IFC: elementin që klikuat, me emrin, llojin, etiketën, GlobalId-në dhe çdo grup vetish. Vlerat që mund t'i ndryshoni duken si butona. Shih [Fushat e panelit Properties](topic:properties-panel).
- Për një vizatim: si të lëvizni, vizatimet e lidhura dhe imazhet e tij dhe nëse u gjet secili, dhe një listë të asaj që është **Not drawn yet**.
- Për një kartelë skedari ose dosje: një shënim të shkurtër për atë që duhet hapur më pas.

## Në një ekran të vogël

Kur dritarja është më e ngushtë se ekrani i një laptopi, BimCraft i vendos zonat një mbi tjetrën: skena lart, panelet poshtë. Lëvizni faqen për të arritur panelet. Në telefon formojnë një kolonë; në tablet, dy.

## Mënyrat e ekranit

Butoni {{ui:Full screen}} në shiritin e aplikacionit, ose {{key:Ctrl+Shift+F}} në çdo platformë, kalon nëpër tri mënyra:

1. Normale.
2. Ekran i plotë, me shiritat ende të dukshëm.
3. Ekran i plotë me shiritin e aplikacionit të fshehur. Lëvizni treguesin në skajin e sipërm, ose prekni atje, për ta kthyer.

Shtypni {{key:Esc}} për t'u kthyer në normale. Shfletuesit pa mbështetje për ekran të plotë (si në iPhone) kalojnë vetëm midis normales dhe shiritave të fshehur.

## Lidhur me këtë

- [Tastet dhe miu](topic:keyboard)
- [Skedarët që BimCraft hap dhe ruan](topic:files)
