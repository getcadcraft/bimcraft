---
title: Skjul, isolér og gør elementer gennemsigtige
summary: Vælg flere elementer, skjul dem, vis kun dem, eller vis dem med alt andet gennemsigtigt, og hent så alt tilbage.
keywords: skjul, isolér, gennemsigtig, transparent, spøgelse, røntgen, vis alle, vis igen, vælg flere, flere valg, Ctrl-klik, Shift-klik, synlighed
from: 97e98b8c
---

## Hvad du skal gøre

Ryd visningen ned til det, du kigger på: skjul elementer, der er i vejen, vis kun de elementer, du har valgt, eller hold alt andet på skærmen som en svag kontur, så du stadig ved, hvor du er.

## Trin

1. Åbn en IFC-model. Se [Åbn en IFC-model og kig rundt i 3D](topic:open-ifc-model).
2. Klik på et element for at vælge det. For at vælge flere, hold {{key:Mod}} eller {{key:Shift}} nede og klik på hvert enkelt. Klik på et valgt element på den måde fjerner det igen.
3. Åbn {{ui:Vis}} på værktøjslinjen, og vælg, hvad der skal ske, eller tryk på dets tast:
   - {{ui:Skjul}} ({{key:H}}) skjuler de valgte elementer.
   - {{ui:Isolér}} ({{key:I}}) viser kun de valgte elementer.
   - {{ui:Gennemsigtig}} ({{key:T}}) viser de valgte elementer, som de er, og alt andet gennemsigtigt.
4. Klik på {{ui:Vis alle}} i den samme menu, eller tryk på {{key:Shift+H}}, for at vise alle elementer igen.
5. For i stedet at skære alt rundt om de valgte elementer væk, klik på {{ui:Snitboks om valget}} i den samme menu, eller tryk på {{key:Shift+X}}. Se [Skær i en IFC-model med et snitplan](topic:section-plane).

## Det skal du se

- Med flere elementer valgt siger {{ui:Egenskaber}}, hvor mange der er, og lister dem efter klasse. Klik på ét alene for at se dets egenskaber.
- Skjulte elementer kan ikke vælges: et klik rammer det, der står bag dem.
- Gennemsigtige elementer kan heller ikke vælges, så du kan klikke lige igennem vægge til det, du isolerede.
- Kanter skjules sammen med deres element og bliver svage sammen med det.
- Skjul, isolering og gennemsigtighed bliver, som de er, mens du redigerer, placerer biblioteksemner eller skærer modellen med et snitplan. Åbnes en anden model, vises alt igen.

## Almindelige fejl

- **Menupunkterne er nedtonede.** Intet er valgt. Klik først på et element; peg på et punkt for at læse, hvorfor det ikke kan virke.
- **Isolér viste en væg, jeg havde skjult.** Isolering viser præcis det, du valgte, skjult eller ej.
- **En hel etage mangler.** Det er listen {{ui:Etager}}, ikke {{ui:Vis alle}}: sæt krydset i etagen igen.

## Næste

- [Vis og skjul etager, zoner og kanter](topic:storeys-and-spaces)
- [Skær i en IFC-model med et snitplan](topic:section-plane)
