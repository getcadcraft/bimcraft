---
title: Ang screen ng BimCraft
summary: Paglilibot sa bawat bar, panel at button ayon sa pangalan nito sa screen, at kung paano nagbabago ang screen para sa bawat uri ng file.
keywords: screen, layout, panel, toolbar, interface, ui, paglilibot, properties panel, browser, app bar
from: 2eb01ec2
---

Ang screen ng BimCraft ay may bar sa itaas at tatlong bahagi sa ilalim nito: isang panel sa kaliwa, ang stage sa gitna at ang {{ui:Properties}} panel sa kanan. Ang lumalabas sa bawat bahagi ay nakadepende sa binuksan mo: isang IFC model, isang project o family file, isang drawing o isang folder.

## App bar

Ang manipis na bar sa itaas ay bahagi ng site ng CadCraft, hindi ng mismong BimCraft. Mula kaliwa pakanan:

- Ang marka ng CadCraft: dadalhin ka sa home page ng CadCraft.
- Ang pangalan ng app at isang version menu. Sa staff build, ipinapakita nito kung aling build ang tinatakbo mo at pinapayagan kang lumipat sa nailabas na bersyon.
- {{ui:Tungkol sa BimCraft}}: ang pahina ng app sa site.
- {{ui:Mga setting}}: sariling setting ng BimCraft at ang mga ibinabahagi ng bawat app. Tingnan ang [Mga setting ng BimCraft](topic:settings).
- {{ui:Full screen}}: nagpapalipat-lipat sa mga mode ng screen. Tingnan ang [Mga mode ng screen](topic:workspace#screen-modes) sa ibaba.
- {{ui:Papel}} at {{ui:Model}}: ang light at dark na tema. Sumusunod sa tema na pipiliin mo ang 3D view at ang 2D drawing.

## Kaliwang panel

Laging nagsisimula ang kaliwang panel sa **Magbukas ng file o folder**:

- Ang drop area, {{ui:Pumili ng file, o i-drop dito ang file o folder}}. I-click ito para pumili ng isang file, o i-drop ang file o folder dito (o kahit saan sa page).
- {{ui:Magbukas ng folder}}: pumili ng buong project folder. Tingnan ang [Buksan ang buong project folder](topic:open-project-folder).
- {{ui:Kamakailang folder}}: lumalabas sa Chrome at Edge pagkatapos mong magbukas ng folder gamit ang folder picker o sa pamamagitan ng pag-drop nito. I-click ang {{ui:Buksan ulit}} at ang pangalan ng folder para buksan muli ito, o ang maliit na × para kalimutan ito.

Sa ilalim nito, lumalabas ang mga seksyon kung kailan naaangkop:

| Seksyon | Kailan ito lumalabas | Ano ang nasa loob nito |
|---|---|---|
| {{ui:Mga pagbabago}} | Bukas ang isang IFC model | Ang mga hindi pa nase-save na edit mo, pinakabago muna, kasama ang {{ui:I-undo}} at {{ui:I-save bilang IFC}} |
| {{ui:File}} | Bukas ang model o file card | Mga impormasyon sa file: laki, schema o release, project, may-akda, bilang ng element |
| {{ui:Drawing}} | Bukas ang DWG o DXF | Format, unit, bilang ng entity at layer, sheet, naka-link na drawing, equipment |
| {{ui:Folder}} | Bukas ang folder | Bilang ng file at model, laki, nakitang problema |
| {{ui:Bumalik sa folder}} | Nagbukas ka ng file mula sa folder | Bumabalik sa ulat ng folder |
| {{ui:Mga Layer}} | Bukas ang drawing | Isang checkbox bawat layer, kasama ang {{ui:Lahat naka-on}} at {{ui:Lahat naka-off}} |
| {{ui:Mga palapag}} | Bukas ang IFC model | Isang checkbox bawat palapag, pinakamataas na palapag muna |
| {{ui:Mga element}} | Bukas ang IFC model | Ilan ang bawat uri ng element na nasa model (ang 30 pinakakaraniwan) |

## Ang stage

Ipinapakita ng gitna ng screen ang bukas na file.

- **Walang laman**: "Magbukas ng building model." kasama ang {{ui:Pumili ng file}} at {{ui:Magbukas ng folder}}, at maikling paglalarawan ng bawat format.
- **IFC model**: ang 3D view na may toolbar sa itaas nito, sa mga pinangalanang grupo gaya ng sa drafting app ng CadCraft, bawat icon ng tool ay nasa itaas ng pangalan nito: {{ui:View}} ({{ui:Fit}}, {{ui:Itaas}}, {{ui:Harap}}, {{ui:Side}}, {{ui:Edges}}, {{ui:Mga space}}); {{ui:Edit}} ({{ui:I-undo}}, {{ui:I-redo}}, {{ui:Kopyahin}}, {{ui:I-paste}} at {{ui:Higit pa}}, tingnan ang [Kopyahin, i-paste at i-duplicate ang mga library item](topic:copy-paste)); {{ui:Model}} ({{ui:Units}} at {{ui:Draw}}); {{ui:Library}} ({{ui:Library}}, {{ui:Equipment}}, {{ui:Mga update}}, {{ui:Credits}}); {{ui:Review}} ({{ui:Ipakita}}, {{ui:Section}}, {{ui:Walk}}, {{ui:Measure}}; tingnan ang [Hiwain ang IFC model gamit ang section plane](topic:section-plane)); at {{ui:Output}} (render, live view, VR, export, paint at mga naka-save na view). Kapag naka-on ang {{ui:Draw}}, ang Draw bar sa ilalim nito ay may parehong itsura: {{ui:View}} (ang level at uri ng plano), {{ui:Draw}}, {{ui:Edit}} at {{ui:Library}}. Nasa kanang ibaba ang view cube. Tingnan ang [Buksan ang IFC model at tumingin-tingin sa 3D](topic:open-ifc-model). Pinipili ng {{ui:Mga setting}} › {{ui:Pangkalahatan}} kung icon, label o pareho ang nasa mga button na ito, ipinapakita o itinatago ang mga pangalan ng grupo, at i-right-click ang toolbar para ayusin ang mga tool at grupo nito. Sa maikling window, inaalis ng toolbar ang mga pangalan sa ilalim ng mga icon.
- **Project o family file**: ang file card, kasama ang larawan ng preview, impormasyon ng project at mga naka-link na file. Tingnan ang [Basahin ang project o family file](topic:read-rvt-file).
- **DWG o DXF**: isang hanay ng mga tab ({{ui:Model}}, tapos isa bawat sheet, tapos {{ui:Equipment}} kapag may naka-tag na equipment ang drawing, {{ui:3D}}, {{ui:Fit}} at {{ui:Print view}}), ang drawing, at live na X at Y coordinate sa isang sulok. Tingnan ang [Tingnan ang DWG o DXF drawing](topic:view-dwg) at [Tingnan ang DWG o DXF drawing sa 3D](topic:dwg-in-3d).
- **Folder**: ang ulat ng folder, kasama ang kahon na {{ui:Magsimula dito}} at mga talahanayan ng model, link, IFC model at drawing. Tingnan ang [Buksan ang buong project folder](topic:open-project-folder).

Sinasabi sa iyo ng **status line** sa ilalim ng stage kung ano ang ginagawa ng BimCraft ("Binabasa ang model…", "Binubuo ang geometry: 1200 sa 5400 element") at kung ano ang nagkamali, sa pula, kapag may pumalya. Kumukupas pagkalipas ng ilang segundo ang mga mensahe ng tagumpay.

## Ang Properties panel

Ipinapakita ng kanang panel:

- Para sa IFC model: ang element na na-click mo, kasama ang pangalan, uri, tag, GlobalId at bawat property set. Ang mga value na maaari mong palitan ay mukhang button. Tingnan ang [Mga field ng Properties panel](topic:properties-panel).
- Para sa drawing: kung paano gumalaw, ang mga naka-link na drawing at larawan nito at kung nahanap ang bawat isa, at listahan ng **Hindi pa naiguguhit**.
- Para sa file card o folder: maikling tala kung ano ang bubuksan susunod.

## Sa maliit na screen

Kapag mas makitid ang window kaysa screen ng laptop, pinapatong ng BimCraft ang mga bahagi nito: ang stage sa itaas, at ang mga panel sa ilalim. I-scroll ang page para maabot ang mga panel. Sa telepono, iisang column ang bumubuo sa kanila; sa tablet, dalawa.

## Mga mode ng screen

Ang button na {{ui:Full screen}} sa app bar, o {{key:Ctrl+Shift+F}} sa bawat platform, ay nagpapalipat-lipat sa tatlong mode:

1. Normal.
2. Full screen, nakikita pa rin ang mga bar.
3. Full screen na nakatago ang app bar. Ilipat ang pointer sa itaas na gilid, o mag-tap doon, para maibalik ito.

Pindutin ang {{key:Esc}} para bumalik sa normal. Ang mga browser na walang suporta sa full screen (gaya sa iPhone) ay lumilipat lamang sa pagitan ng normal at nakatagong bar.

## Kaugnay

- [Mga key at mouse](topic:keyboard)
- [Mga file na binubuksan at sine-save ng BimCraft](topic:files)
