---
title: "Standardregler: velg hva en ny bygning starter med"
summary: Si én gang hvilken veggtype, hvilke nivåer, første ark, LOD-merker, enheter og verktøy en ny bygning starter med, for metriske og imperiske prosjekter, og del reglene i kontoret som en liten fil.
keywords: standard, standarder, standardregler, regel, kontorstandard, kontorstandarder, mal, ny bygning, første veggtype, metrisk vegg, mur, LOD, detaljeringsnivå, første ark, papir, målestokk, nivåer, nivåhøyde, nivånavn, veggverktøy, enheter, del, eksport, import, json
from: 42379aa5
---

## Hva du skal gjøre

Si til BimCraft hva en ny bygning skal starte med, så ingen i kontoret må endre de samme tingene hver gang. Dette er et tillegg: det er av til du slår det på, og en regel du ikke angir, beholder BimCraft sin egen standard akkurat som den er.

:::note
Dette er standarder for **nye** bygninger og **nye** ting. Et prosjekt du allerede har startet, endres ikke.
:::

## Steg

1. Åpne Innstillinger, gå til {{ui:Tillegg}} og slå på {{ui:Standardregler}}.
2. I Innstillinger åpner du fanen **BimCraft** og velger {{ui:Standardregler}} i listen til venstre.
3. Angi reglene du vil ha. Hver starter på **BimCraft sin egen**, med hva den er i parentes. En regel med en boks for **Metrisk** og en for **Imperisk** tar én verdi for hver type prosjekt; fyll inn bare de du trenger.
4. Det finnes ingen Lagre-knapp: hver endring lagres når du gjør den. En verdi som ikke kan brukes, avvises med tekst, og den gamle beholdes.
5. Klikk på {{ui:Ny bygning}}. Dialogboksen fylles ut fra reglene dine, og hver verdi en regel angir, står med **fra Standardregler** ved siden av. Du kan fortsatt endre hver av dem før {{ui:Opprett}}.

## Reglene

- **Enheter for en ny bygning**: enhetene byttes til dette ved Opprett.
- **Antall etasjer**, **Nivånavn** og **Nivåhøyde**. I et navn teller `{n}` 1, 2, 3; `{n0}` teller 0, 1, 2; `{nn}` og `{nn0}` gjør det samme med to siffer. Så `Etasje {nn0}` gir Etasje 00, Etasje 01, Etasje 02.
- **Første veggtype**: det veggverktøyet tegner først. Et metrisk kontor kan starte med Yttervegg av mur 300 mm, mens imperiske prosjekter beholder Yttervegg 2×6.
- **LOD-merke på startveggtypene**: detaljeringsnivået (LOD 100 til 500) de ni startveggtypene viser der en type vises. Se [Bygg veggsammensetninger](topic:wall-assemblies).
- **LOD for en ny veggtype**: merket en ny type starter med i typeredigeringen. Du kan endre det der.
- **Første ark**: papir, målestokk, arknummer og navn (bruk `{level}` for navnet på den laveste etasjen), eller ingen første ark i det hele tatt.
- **Annotasjonsstørrelser på papir** (Innstillinger › Global › Standardregler): kontorets høyder, i millimeter som skrevet ut, for merknader, måltekst, merker, romnavn, rutenettsbobler, visningstitler og listetekst. En ny bygning tar dem ved Opprett og beholder dem i filen. Se [Tegn i full størrelse, annoter etter målestokk](topic:annotation-sizes).
- **Verktøy som er aktivt etter Opprett**: Velg, slik BimCraft gjør av seg selv, eller Vegg, slik at de to første klikkene på planen allerede tegner en vegg.

## Listeoppsett: kontorstandarden

Under **Innstillinger › Global › Standardregler**, under **Listeoppsett (kontorstandard)**, angir du hvordan hver liste grupperes, om den har delsummer og en totalsum, tittelen og bruken av store og små bokstaver i kolonneoverskriftene. Hver liste som ikke angir sine egne, tar dem, uansett hvem som satte den opp. Se [Sett opp, lagre og eksporter en liste](topic:schedule-layouts).

## Del dem i kontoret

1. I Innstillinger åpner du fanen **Global** og velger {{ui:Standardregler}}.
2. Skriv inn **Kontornavn** om du vil. Det skrives inn i filen.
3. Klikk på {{ui:Lagre til en fil}}. Du får en liten fil som slutter på `.ccdefaults.json`.
4. På en annen datamaskin slår du på tillegget, åpner samme sted og klikker på {{ui:Last inn fra en fil}}. Reglene i filen erstatter dem på den datamaskinen.

Fanen Global har også **Enhetssystem for et nytt prosjekt**, som gjelder for alle programmer som har tillegget, og {{ui:Tilbakestill alle regler}}. {{ui:Tilbakestill til BimCraft sine egne standarder}} på fanen BimCraft fjerner bare BimCraft sine.

## Greit å vite

- Filen er vanlig, åpen JSON: en liste med regelnavn og verdier. En regel filen nevner som denne versjonen ikke kjenner, utelates og nevnes i meldingen; resten lastes inn.
- Reglene lagres i denne nettleseren, for alle CadCraft-programmene på denne datamaskinen. De lagres ikke i bygningsfilen, og de synkroniseres ikke mellom datamaskiner: bruk filen.
- LOD-merket på en startype kommer fra regelen på denne datamaskinen. En type du lager som en kopi av en startype, bærer merket sitt i bygningsfilen.
- BimCraft har ingen presisjonsinnstilling, så det finnes ingen presisjonsregel her.
- En bygning startet fra en mal tar malens egne nivåer og ark. Veggtype- og enhetsregelen gjelder fortsatt.
- Slår du av tillegget, er alt BimCraft sitt eget igjen. Reglene dine beholdes til du slår det på igjen.
