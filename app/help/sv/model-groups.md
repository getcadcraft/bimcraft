---
title: Modellgrupper
summary: Gör valda element till en namngiven grupp, placera gruppen igen någon annanstans och ändra en kopia för att ändra alla.
keywords: grupp, modellgrupp, gruppering, upphäv gruppering, instans, kopiera, upprepa, typisk enhet, travé, lägenhet, redigera grupp, IfcGroup
from: 121c5027
---

## Vad du ska göra

Gruppera en typisk travé, placera den flera gånger och ändra alla kopior genom att ändra en.

## Var verktyget finns

- Layouter med menyflik: {{ui:Arkitektur}} › **Modell** › {{ui:Modellgrupp}}.
- Klassisk layout: ritfältet › menyn {{ui:Rum}} › Modellgrupp.

## Steg

1. Med Markera väljer du elementen: klicka på ett, Ctrl+klicka eller Shift+klicka på de andra.
2. Välj {{ui:Modellgrupp}}. De blir en grupp direkt. Skriv ett {{ui:Gruppnamn}} i raden först för att namnge den, eller skriv ett efteråt för att byta namn.
3. Tryck på {{ui:Placera en till}} och klicka där kopian ska stå: dess nedre vänstra hörn går till klicket.
4. Ändra vilken kopia som helst: flytta en väggände, ändra storlek på en dörr, ta bort en pelare. Varje annan kopia av gruppen ändras i samma steg, och ett Ångra tar tillbaka allt.
5. Medan {{ui:Modellgrupp}} är aktivt väljer ett klick på ett element hela dess grupp.

## Annat du kan göra

- {{ui:Lägg till de markerade}}: lägg till fler element i gruppen du senast valde.
- {{ui:Upphäv gruppering}}: den här kopian blir vanliga element igen. De andra kopiorna förblir en grupp.
- Flytta en hel kopia med {{ui:Flytta}}: det är samma grupp på en ny plats; de andra flyttas inte.
- Ta bort elementen i en kopia, så är kopian borta.

## Vad som kan finnas i en grupp

Väggar med sina dörrar och fönster, pelare och ritade golv kan placeras igen och hållas lika. En grupp kan också innehålla andra element, men då kan den inte placeras igen ännu; raden anger varför.

Kopior flyttas, men de vrids eller speglas inte.

## I IFC

En grupp är en IfcGroup med en IfcRelAssignsToGroup till sina medlemmar, som förblir vanliga väggar, pelare och golv. Varje kopia av en och samma grupp bär samma definitions-id.

## Finns inte ännu

- Vrida eller spegla en kopia.
- Trappor, tak, rumsgolv och biblioteksobjekt i en grupp som placeras igen.
- En väggs profil, lutning och väggöppningar förs inte över till kopior.
- Grupper inne i grupper.

Se även [Flytta, justera och fördela](topic:move-align-distribute).
