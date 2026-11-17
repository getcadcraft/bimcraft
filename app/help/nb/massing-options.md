---
title: Volumalternativer side om side
summary: Behold flere volumalternativer i samme modell, gjør ett til gjeldende alternativ, kontroller det mot tomtens byggegrenser og servitutter, hent volum fra ModelCraft, og utvikle det valgte alternativet til vegger og dekker.
keywords: volum, masse, alternativ, alternativer, alternativsett, konsept, konseptdesign, trinn 2, sammenlign alternativer, gjeldende alternativ, bygningsvolum, trekk og skyv, modelcraft, civilcraft, bruttoareal, fotavtrykk, volum, utvikle volum, servitutt, byggegrense, tilbaketrekning
from: 69a01459
---

## Hva du gjør

Hold volumalternativene til et konsept i én modell i stedet for i separate filer: flere bygningsvolum side om side, ett av dem **gjeldende alternativ**, og de andre beholdt for sammenligning.

Et volumalternativ er et bygningsvolum: en omriss hevet til en høyde, med et antall etasjer. Det er ikke vegger ennå. Du kan beholde så mange du vil, gruppert i **alternativsett** (alternativer i ett sett er alternativer til hverandre).

## Behold et alternativ

1. Åpne {{ui:Romprogram til masse}}, skriv inn romprogrammet og omrisset, og velg {{ui:Finn alternativer}}.
2. Velg ett av alternativene som er listet.
3. Under {{ui:Volumalternativer i modellen}} skriver du et navn for {{ui:Alternativsett}} hvis du vil ha ett, og velger {{ui:Behold det valgte alternativet}}.

Alternativet vises i modellen som et bygningsvolum og i listen, med etasjene, fotavtrykket, bruttoarealet og volumet. Ingenting bygges. Behold et annet på samme måte.

Første alternativ i et sett er dets gjeldende alternativ. Hvert steg er ett angrestegg.

## Det gjeldende alternativet

Ett alternativ i hvert sett er det gjeldende. Det betyr to ting:

- **Etasjene teller som bygningens etasjeareal.** Det gjeldende alternativet har ett rom per etasje som bærer den etasjens bruttoareal. Alt som leser etasjeareal ser derfor alternativet som gjelder, og ingen annen.
- **Det kontrolleres mot tomten.** Står det utenfor tomtegrensen, over en byggegrense eller på en servitutt, vises en advarsel som nevner det i {{ui:Problemer}}. Det er bare en advarsel: ingenting avvises. Alternativer som ikke er gjeldende, kontrolleres ikke.

Velg {{ui:Gjør gjeldende}} på et annet alternativ for å endre det.

{{ui:Skjul alternativene som ikke er gjeldende}} skjuler de andre i 3D-visningen. Det gjelder bare denne nettleseren og lagres ikke i filen.

## Volum fra ModelCraft

I ModelCraft sender {{ui:Eksporter}} › {{ui:Volum til BimCraft…}} hver gruppe eller komponent som ett alternativ. BimCraft åpner filen med alternativene listet.

For å hente dem inn i en modell som allerede er åpen, velger du {{ui:Legg til volumalternativer fra en fil}} og velger `.ifc`-filen. Volumene kommer inn som alternativer i ett sett, i ett angrestegg, og står der de ble modellert. En fil med bygningsvolum fra CivilCraft fungerer på samme måte.

Et alternativ merket «(formen forenklet)» var ikke en ren, loddrett blokk i ModelCraft (det trekker seg tilbake, skråner eller er ikke lukket). Volumet her er omrisset av basen hevet til sin høyde. Etasjearealene og volumet er de som måles fra selve volumlegemet.

## Utvikle det valgte alternativet

Velg {{ui:Utvikle}} på et alternativ. Det blir til nivåer (lagt sammen til antallet etasjer), vegger rundt omrisset på hver etasje og et dekke på hver. Alt skjer i ett angrestegg. Alternativet forlater listen, og de andre alternativene blir værende som de var. Det er ennå ingen tak.

{{ui:Gi nytt navn}} endrer navnet på et alternativ. {{ui:Fjern}} tar det ut av modellen. Å fjerne det gjeldende alternativet gjør settets første andre alternativ til gjeldende.

## Hva du bør se

- Hvert beholdt alternativ som en blokk i 3D-visningen og en rad i listen.
- «(gjeldende)» ved siden av ett alternativ i hvert sett.
- En advarsel i {{ui:Problemer}} når det gjeldende alternativet krysser tomtegrensen, en byggegrense eller en servitutt.

## Godt å vite

- I IFC-filen er et alternativ et proxy-element for bygningselement med egenskapssettet `CadCraft_SiteMass`. Alternativsett, alternativnavn og om det er gjeldende står i det settet. Det gjeldende alternativets etasjer er rom av typen `MassingFloor`. Andre programmer leser proxyen som et generisk element.
- Å beholde et alternativ legger aldri til nivåer. Å utvikle et gjør det.
- En assistent kan liste de beholdte alternativene, beholde ett, gjøre ett gjeldende, gi nytt navn, utvikle eller fjerne det.
