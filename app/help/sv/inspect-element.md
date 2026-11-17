---
title: Markera ett element och läs dess egenskaper
summary: Klicka på valfritt element i 3D-modellen för att markera det och läsa dess namn, typ, tagg, GlobalId, egenskapsuppsättningar och kvantiteter.
keywords: egenskaper, markera, välj, klicka, element, parametrar, egenskapsuppsättningar, pset, kvantiteter, globalid, guid, typ, inspektera
from: 43b80aa8
---

## Vad du gör

Markera element i en IFC-modell och läs allt filen säger om dem: attribut, egenskapsuppsättningar, typegenskaper och kvantiteter.

## Steg

1. Öppna en IFC-modell.
2. Klicka på ett element, till exempel en dörr. Klicka utan att dra: ett drag på mer än några pixlar roterar i stället för att markera.
3. Titta på elementet: det markeras i blått.
4. Titta på panelen {{ui:Egenskaper}} till höger. Överst står elementets slag (till exempel ”Door” eller ”WallStandardCase”) och dess namn.
5. Läs det första blocket: **Name**, **Type**, **Object type**, **Tag**, **Description**, **GlobalId** och **Line**.
6. Rulla ned till egenskapsuppsättningarna. De tre första är öppna; klicka på namnet på någon annan uppsättning för att öppna den.
7. Klicka på ett annat element för att byta till det.
8. Tryck på {{key:Esc}}, eller klicka på en tom bakgrund, för att rensa markeringen.

## Vad du ska se

- Det markerade elementet och dess data till höger.
- Egenskapsuppsättningar i alfabetisk ordning. Uppsättningar som kommer från elementets **typ** har ” (type)” efter sitt namn och noten ”Type property: a change here applies to every element of this type.”
- Kvantitetsuppsättningar (som längder, areor och volymer) listade tillsammans med de andra uppsättningarna. Kvantiteter är skrivskyddade.
- Värden du kan ändra ser ut som knappar. [Ändra IFC-egenskaper och spara en redigerad kopia](topic:edit-ifc-properties) visar hur.

[Fälten i panelen Egenskaper](topic:properties-panel) förklarar varje fält.

## Så når du dolda element

1. För att komma åt något inne i byggnaden, avbocka våningarna ovanför det i listan {{ui:Våningsplan}}.
2. För att nå en vägg bakom en rumsvolym, stäng av {{ui:Utrymmen}}.
3. Klicka på elementet.

## Vanliga misstag

- **Att dra lite medan du klickar.** BimCraft tolkar det som en rotation och markerar inte. Håll musen stilla.
- **Att förvänta sig enheter bredvid siffror.** Värden visas så som de är lagrade i filen, avrundade till fyra decimaler, utan enhetssymbol. Längder i en metrisk export är oftast millimeter eller meter; kontrollera exportörens inställningar.
- **Att leta efter en parameter med dess välbekanta namn.** Exportörer byter namn på och grupperar om parametrar i IFC-egenskapsuppsättningar som `Pset_WallCommon`. Gå igenom varje uppsättning; egna parametrar ligger ofta i en uppsättning uppkallad efter exportprogrammet eller ditt företag.
- **Att förvänta sig en sökruta.** Klicka för att markera ett element; {{key:Mod}}+klick eller {{key:Shift}}+klick markerar fler, och {{key:Mod+A}} markerar varje visat element. Listan {{ui:Element}} till vänster räknar bara element per slag; den går inte att klicka på.
- **Att markera på ett projektfilkort.** Ett filkort har inga element att markera: ”Element properties need the 3D model. Open an IFC export of this file to see them.”
