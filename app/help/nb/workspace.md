---
title: BimCraft-skjermen
summary: En omvisning i hver linje, hvert panel og hver knapp, med navnet de har på skjermen, og hvordan skjermen endres for hver filtype.
keywords: skjerm, oppsett, paneler, verktøylinje, grensesnitt, brukergrensesnitt, omvisning, egenskapspanel, nettleser, appfelt
from: 2eb01ec2
---

BimCraft-skjermen har en linje over toppen og tre områder under: et panel til venstre, scenen i midten og panelet {{ui:Egenskaper}} til høyre. Hva som vises i hvert område, avhenger av hva du åpnet: en IFC-modell, en prosjekt- eller familiefil, en tegning eller en mappe.

## Appfeltet

Den tynne linjen over toppen tilhører CadCraft-nettstedet, ikke BimCraft selv. Fra venstre mot høyre:

- CadCraft-merket: går til CadCrafts startside.
- Appnavnet og en versjonsmeny. I stabsbygget viser den hvilket bygg du kjører og lar deg bytte til en utgitt versjon.
- {{ui:Om BimCraft}}: appens side på nettstedet.
- {{ui:Innstillinger}}: BimCrafts egne innstillinger og de som alle apper deler. Se [BimCraft-innstillinger](topic:settings).
- {{ui:Fullskjerm}}: bytter mellom skjermmodusene. Se [Skjermmoduser](topic:workspace#screen-modes) nedenfor.
- {{ui:Papir}} og {{ui:Modell}}: det lyse og det mørke temaet. 3D-visningen og 2D-tegningene følger temaet du velger.

## Panelet til venstre

Panelet til venstre begynner alltid med **Åpne en fil eller mappe**:

- Slippområdet, {{ui:Velg en fil, eller slipp en fil eller mappe her}}. Klikk det for å velge én fil, eller slipp en fil eller mappe på det (eller hvor som helst på siden).
- {{ui:Åpne en mappe}}: velg en hel prosjektmappe. Se [Åpne en hel prosjektmappe](topic:open-project-folder).
- {{ui:Nylige mapper}}: vises i Chrome og Edge etter at du har åpnet en mappe med mappevelgeren eller ved å slippe den. Klikk {{ui:Gjenåpne}} og mappenavnet for å åpne den igjen, eller den lille × for å glemme den.

Under det dukker det opp deler etter behov:

| Del | Når den vises | Hva som er i den |
|---|---|---|
| {{ui:Endringer}} | En IFC-modell er åpen | Dine ulagrede endringer, de nyeste først, med {{ui:Angre}} og {{ui:Lagre som IFC}} |
| {{ui:Fil}} | En modell eller et filkort er åpent | Fakta om filen: størrelse, skjema eller utgave, prosjekt, forfatter, elementantall |
| {{ui:Tegning}} | En DWG eller DXF er åpen | Format, enheter, antall objekter og layer, ark, lenkede tegninger, utstyr |
| {{ui:Mappe}} | En mappe er åpen | Fil- og modellantall, størrelse, problemer som er funnet |
| {{ui:Tilbake til mappen}} | Du åpnet en fil fra en mappe | Går tilbake til mapperapporten |
| {{ui:Layer}} | En tegning er åpen | En avkrysningsboks per layer, med {{ui:Alle på}} og {{ui:Alle av}} |
| {{ui:Etasjer}} | En IFC-modell er åpen | En avkrysningsboks per etasje, øverste etasje først |
| {{ui:Elementer}} | En IFC-modell er åpen | Hvor mange elementer av hver type modellen inneholder (de 30 vanligste) |

## Scenen

Midten av skjermen viser den åpne filen.

- **Tom**: «Åpne en bygningsmodell.» med {{ui:Velg en fil}} og {{ui:Åpne en mappe}}, og en kort beskrivelse av hvert format.
- **IFC-modell**: 3D-visningen med en verktøylinje over toppen, i navngitte grupper som i CadCrafts tegneapp, med hvert verktøys ikon over navnet: {{ui:Visning}} ({{ui:Tilpass}}, {{ui:Topp}}, {{ui:Front}}, {{ui:Side}}, {{ui:Kanter}}, {{ui:Rom}}); {{ui:Rediger}} ({{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}}, {{ui:Lim inn}} og {{ui:Mer}}, se [Kopier, lim inn og dupliser bibliotekselementer](topic:copy-paste)); {{ui:Modell}} ({{ui:Enheter}} og {{ui:Tegn}}); {{ui:Bibliotek}} ({{ui:Bibliotek}}, {{ui:Utstyr}}, {{ui:Oppdateringer}}, {{ui:Kildehenvisninger}}); {{ui:Gjennomgang}} ({{ui:Vis}}, {{ui:Snitt}}, {{ui:Gå}}, {{ui:Mål}}; se [Skjær en IFC-modell med et snittplan](topic:section-plane)); og {{ui:Resultat}} (render, direktevisning, VR, eksporter, maling og lagrede visninger). Med {{ui:Tegn}} på har Tegn-linjen under den samme utseende: {{ui:Visning}} (nivået og planens type), {{ui:Tegn}}, {{ui:Rediger}} og {{ui:Bibliotek}}. En visningskube står i hjørnet nede til høyre. Se [Åpne en IFC-modell og se deg rundt i 3D](topic:open-ifc-model). {{ui:Innstillinger}}, {{ui:Generelt}} velger ikoner, etiketter eller begge på disse knappene, viser eller skjuler gruppenavnene, og høyreklikk på verktøylinjen for å ordne verktøyene og gruppene. I et lavt vindu mister verktøylinjen navnene under ikonene.
- **Prosjekt- eller familiefil**: filkortet, med forhåndsvisningsbildet, prosjektinformasjon og lenkede filer. Se [Les en prosjekt- eller familiefil](topic:read-rvt-file).
- **DWG eller DXF**: en rad med faner ({{ui:Modell}}, deretter én per ark, deretter {{ui:Utstyr}} når tegningen har merket utstyr, {{ui:3D}}, {{ui:Tilpass}} og {{ui:Utskriftsvisning}}), tegningen, og levende X- og Y-koordinater i et hjørne. Se [Vis en DWG- eller DXF-tegning](topic:view-dwg) og [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d).
- **Mappe**: mapperapporten, med boksen {{ui:Start her}} og tabeller over modeller, lenker, IFC-modeller og tegninger. Se [Åpne en hel prosjektmappe](topic:open-project-folder).

**Statuslinjen** nederst på scenen forteller hva BimCraft gjør («Leser modellen…», «Bygger geometri: 1200 av 5400 elementer») og hva som gikk galt, i rødt, når noe feiler. Meldinger om vellykket utførelse toner bort etter noen sekunder.

## Egenskapspanelet

Panelet til høyre viser:

- For en IFC-modell: elementet du klikket, med navn, type, merke, GlobalId og hvert egenskapssett. Verdier du kan endre, ser ut som knapper. Se [Felter i egenskapspanelet](topic:properties-panel).
- For en tegning: hvordan du beveger deg rundt, tegningens lenkede tegninger og bilder og om hver ble funnet, og en liste over det som er **Ikke tegnet ennå**.
- For et filkort eller en mappe: et kort notat om hva du kan åpne videre.

## På en liten skjerm

Når vinduet er smalere enn en bærbar skjerm, stabler BimCraft områdene sine: scenen øverst, deretter panelene under. Rull siden for å nå panelene. På en telefon danner de én kolonne; på et nettbrett, to.

## Skjermmoduser

Knappen {{ui:Fullskjerm}} i appfeltet, eller {{key:Ctrl+Shift+F}} på alle plattformer, bytter mellom tre moduser:

1. Normal.
2. Fullskjerm, med linjene fortsatt synlige.
3. Fullskjerm med appfeltet skjult. Flytt pekeren til toppkanten, eller trykk der, for å få det tilbake.

Trykk {{key:Esc}} for å gå tilbake til normal. Nettlesere uten støtte for fullskjerm (som på en iPhone) bytter bare mellom normal og skjulte linjer.

## Se også

- [Taster og mus](topic:keyboard)
- [Filer BimCraft åpner og lagrer](topic:files)
