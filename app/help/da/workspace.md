---
title: BimCraft-skærmen
summary: En rundvisning i hver linje, hvert panel og hver knap ved deres navn på skærmen, og hvordan skærmen ændrer sig for hver slags fil.
keywords: skærm, layout, paneler, værktøjslinje, brugerflade, ui, rundvisning, egenskabspanel, browser, appfelt
from: 2eb01ec2
---

BimCraft-skærmen har en linje øverst og tre områder under den: et panel til venstre, scenen i midten og panelet {{ui:Egenskaber}} til højre. Hvad der vises i hvert område, afhænger af det, du åbnede: en IFC-model, en projekt- eller familiefil, en tegning eller en mappe.

## Appfeltet

Den tynde linje øverst hører til CadCraft-webstedet, ikke til BimCraft selv. Fra venstre mod højre:

- CadCraft-mærket: går til CadCrafts startside.
- Appens navn og en versionsmenu. I medarbejderbuildet viser den, hvilket build du kører, og lader dig skifte til en udgivet version.
- {{ui:Om BimCraft}}: appens side på webstedet.
- {{ui:Indstillinger}}: BimCrafts egne indstillinger og dem, alle apps deler. Se [BimCrafts indstillinger](topic:settings).
- {{ui:Fuld skærm}}: skifter mellem skærmtilstandene. Se [Skærmtilstande](topic:workspace#screen-modes) nedenfor.
- {{ui:Papir}} og {{ui:Model}}: de lyse og de mørke temaer. 3D-visningen og 2D-tegningerne følger det tema, du vælger.

## Panelet til venstre

Panelet til venstre begynder altid med **Åbn en fil eller mappe**:

- Slipområdet, {{ui:Vælg en fil, eller slip en fil eller mappe her}}. Klik på det for at vælge én fil, eller slip en fil eller mappe på det (eller hvor som helst på siden).
- {{ui:Åbn en mappe}}: vælg en hel projektmappe. Se [Åbn en hel projektmappe](topic:open-project-folder).
- {{ui:Seneste mapper}}: vises i Chrome og Edge, når du har åbnet en mappe med mappevælgeren eller ved at slippe den. Klik på {{ui:Åbn igen}} og mappens navn for at åbne den igen, eller på det lille × for at glemme den.

Under det vises afsnit, efterhånden som de er relevante:

| Afsnit | Hvornår det vises | Hvad der er i det |
|---|---|---|
| {{ui:Ændringer}} | En IFC-model er åben | Dine ugemte ændringer, nyeste først, med {{ui:Fortryd}} og {{ui:Gem som IFC}} |
| {{ui:Fil}} | En model eller et filkort er åbent | Fakta om filen: størrelse, skema eller udgivelse, projekt, forfatter, antal elementer |
| {{ui:Tegning}} | En DWG eller DXF er åben | Format, enheder, antal objekter og lag, ark, tilknyttede tegninger, udstyr |
| {{ui:Mappe}} | En mappe er åben | Antal filer og modeller, størrelse, fundne problemer |
| {{ui:Tilbage til mappen}} | Du åbnede en fil fra en mappe | Går tilbage til mapperapporten |
| {{ui:Lag}} | En tegning er åben | Et afkrydsningsfelt pr. lag, med {{ui:Alle til}} og {{ui:Alle fra}} |
| {{ui:Etager}} | En IFC-model er åben | Et afkrydsningsfelt pr. etage, øverste etage først |
| {{ui:Elementer}} | En IFC-model er åben | Hvor mange elementer af hver slags modellen rummer (de 30 mest almindelige) |

## Scenen

Midten af skærmen viser den åbne fil.

- **Tom**: "Åbn en bygningsmodel." med {{ui:Vælg en fil}} og {{ui:Åbn en mappe}} og en kort beskrivelse af hvert format.
- **IFC-model**: 3D-visningen med en værktøjslinje øverst, i navngivne grupper ligesom CadCraft-tegneappens, hvert værktøjs ikon over dets navn: {{ui:Visning}} ({{ui:Tilpas}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}, {{ui:Kanter}}, {{ui:Zoner}}); {{ui:Rediger}} ({{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}}, {{ui:Sæt ind}} og {{ui:Mere}}, se [Kopiér, sæt ind og duplikér biblioteksemner](topic:copy-paste)); {{ui:Model}} ({{ui:Enheder}} og {{ui:Tegn}}); {{ui:Bibliotek}} ({{ui:Bibliotek}}, {{ui:Udstyr}}, {{ui:Opdateringer}}, {{ui:Krediteringer}}); {{ui:Gennemgang}} ({{ui:Vis}}, {{ui:Snit}}, {{ui:Gå}}, {{ui:Mål}}; se [Skær en IFC-model med et snitplan](topic:section-plane)); og {{ui:Output}} (render, live-visning, VR, eksport, maling og gemte visninger). Med {{ui:Tegn}} slået til har Tegn-linjen under den samme udseende: {{ui:Visning}} (niveauet og plantypen), {{ui:Tegn}}, {{ui:Rediger}} og {{ui:Bibliotek}}. En ViewCube sidder i nederste højre hjørne. Se [Åbn en IFC-model, og se dig omkring i 3D](topic:open-ifc-model). {{ui:Indstillinger}}, {{ui:Generelt}} vælger ikoner, tekster eller begge dele på disse knapper, viser eller skjuler gruppenavnene, og med et højreklik på værktøjslinjen kan du ordne dens værktøjer og grupper. I et lavt vindue mister værktøjslinjen navnene under ikonerne.
- **Projekt- eller familiefil**: filkortet med forhåndsbilledet, projektoplysninger og tilknyttede filer. Se [Læs en projekt- eller familiefil](topic:read-rvt-file).
- **DWG eller DXF**: en række faner ({{ui:Model}}, derefter én pr. ark, derefter {{ui:Udstyr}}, når tegningen har mærket udstyr, {{ui:3D}}, {{ui:Tilpas}} og {{ui:Udskriftsvisning}}), tegningen og levende X- og Y-koordinater i et hjørne. Se [Se en DWG- eller DXF-tegning](topic:view-dwg) og [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d).
- **Mappe**: mapperapporten med feltet {{ui:Start her}} og tabeller over modeller, links, IFC-modeller og tegninger. Se [Åbn en hel projektmappe](topic:open-project-folder).

**Statuslinjen** nederst på scenen fortæller, hvad BimCraft er i gang med ("Læser modellen…", "Opbygger geometri: 1200 af 5400 elementer"), og hvad der gik galt, med rødt, når noget fejler. Beskeder om, at noget lykkedes, toner ud efter et par sekunder.

## Panelet Egenskaber

Panelet til højre viser:

- For en IFC-model: det element, du klikkede på, med dets navn, type, mærke, GlobalId og hvert egenskabssæt. Værdier, du kan ændre, ligner knapper. Se [Felter i panelet Egenskaber](topic:properties-panel).
- For en tegning: hvordan du bevæger dig rundt, tegningens tilknyttede tegninger og billeder og om hver blev fundet, og en liste under overskriften **Endnu ikke tegnet**.
- For et filkort eller en mappe: en kort bemærkning om, hvad du skal åbne som det næste.

## På en lille skærm

Når vinduet er smallere end en bærbar computers skærm, stabler BimCraft sine områder: scenen øverst og derunder panelerne. Rul siden for at nå panelerne. På en telefon danner de én kolonne, på en tablet to.

## Skærmtilstande

Knappen {{ui:Fuld skærm}} i appfeltet, eller {{key:Ctrl+Shift+F}} på alle platforme, skifter mellem tre tilstande:

1. Normal.
2. Fuld skærm, hvor linjerne stadig vises.
3. Fuld skærm med skjult appfelt. Før markøren til den øverste kant, eller tryk dér, for at få det tilbage.

Tryk på {{key:Esc}} for at gå tilbage til normal. Browsere uden understøttelse af fuld skærm (som på en iPhone) skifter kun mellem normal og skjulte linjer.

## Relateret

- [Taster og mus](topic:keyboard)
- [Filer, BimCraft åbner og gemmer](topic:files)
