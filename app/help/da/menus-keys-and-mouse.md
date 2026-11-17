---
title: Menuer, taster og mus
summary: Vælg en menustil, der passer til den måde, du allerede arbejder på, giv enhver kommando din egen tast, flyt kommandoer mellem menuer, og angiv, hvad hjulet og hver museknap gør.
keywords: menustil, menuer, menulinje, båndet, kommandolinje, tastaturgenveje, hurtigtaster, taster, tilpas, omlæg tast, mus, hjul, vend, zoomretning, midterknap, panorér, orbit, tobogstavstaster, eksportér, importér, skift, kendt
from: a424e836
---

Kommandoerne i BimCraft er de samme, uanset hvordan du finder dem. En **menustil** bestemmer kun, hvor de sidder på skærmen, hvad de hedder dér, og hvilke taster der kører dem, så du kan beholde de vaner, du har. Vælg en i {{ui:Indstillinger}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menuer, taster og mus}}; ændringen sker straks, og denne browser husker den.

## De fem stilarter

| Stil | Det får du |
|---|---|
| {{ui:CadCraft}} | BimCraft's egen værktøjslinje og egne taster ({{key:W}} væg, {{key:D}} dør, {{key:N}} vindue, {{key:X}} snit, {{key:F}} tilpas). Udgangspunktet. |
| {{ui:Boligdesign}} | En menulinje (Fil, Rediger, Build, Bibliotek, 3D, CAD, Værktøjer, Visning) over en række byggeværktøjer, sådan som programmer til boligdesign typisk er opbygget. De samme enkelttaster, plus {{key:Mod+L}} for biblioteket, {{key:F9}} for 3D-visningen, {{key:F10}} for planen og {{key:F11}} for begge. |
| {{ui:BIM-bånd}} | Faner med store knapper (Arkitektur, Indsæt, Notér, Ændr, Visning, Output) med en Fil-menu og hurtigknapper til højre. Tobogstavstaster: {{key:W}} og så {{key:A}} for en væg, {{key:D}} {{key:R}} dør, {{key:W}} {{key:N}} vindue, {{key:S}} {{key:C}} snit, {{key:Z}} {{key:F}} tilpas. Midterknappen panorerer; {{key:Shift}} og midterknappen kredser (orbit). |
| {{ui:Klassisk tegning}} | Et lille bånd og en kommandolinje til dem, der skriver kommandoer: WALL, DOOR, WINDOW, ROOF, U (fortryd), ZOOM, SECTION, PLOT, INSERT, HELP. Begynd at skrive hvor som helst, så går bogstaverne til kommandolinjen; {{key:Enter}} kører, {{key:Enter}} uden input gentager den sidste kommando, {{key:Esc}} rydder den. |
| {{ui:Fremviser}} | Til at åbne og kontrollere modeller frem for at tegne dem: menuerne {{ui:Fil}}, {{ui:Visning}}, {{ui:Vis}}, {{ui:Kontrollér}} og {{ui:Rediger}} over en række fremvisningsværktøjer (tilpas, top, forside, side, snit, mål, skjul, isolér, gennemsigtig, vis alle, rundtur). Byggeværktøjerne venter i en {{ui:Model}}-menu til sidst. De samme taster som BimCraft's egen stil. |

Menuerne og båndene vises, når en model er åben, eller du starter en ny bygning; indtil da åbner panelet til venstre filer og starter bygninger.

:::tip
En tast, der hører til BimCraft's egen layout, men ikke til den stil, du valgte, gør ingenting, og statuslinjen siger, hvor dens kommando er havnet ("I BIM-bånd er Snit SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piletasterne bevarer altid deres betydning, og et kørende værktøj beholder sine egne taster: {{key:R}} og {{key:Tab}} under placering, {{key:W}} {{key:A}} {{key:S}} {{key:D}} under rundtur, {{key:H}} med dør- og vinduesværktøjerne, tal mens du skriver en længde.
:::

## Lav den til din egen

1. Vælg den stil, der ligner det, du ønsker mest, og klik på {{ui:Tilpas…}}.
2. Under {{ui:Taster og menuer}} finder du en kommando (søgefeltet hjælper). Klik på {{ui:Tilføj en tast}} og tryk på tasten, eller to taster lige efter hinanden for en tobogstavstast. Klik på en tast for at fjerne den.
3. Med en menulinje eller et bånd flytter {{ui:Hvor den sidder}} kommandoen til en anden menu eller et andet panel, eller til {{ui:Kun taster}}.
4. Under {{ui:Mus}} angiver du hjulet, de knapper der panorerer planen, og hvad hver knap gør i 3D-visningerne.
5. Giv den et navn, og klik på {{ui:Gem}}.

Når du gemmer en indbygget stil, laves en egen kopi ("Min Boligdesign"); den indbyggede ændres aldrig. En tast, der er givet til to kommandoer, eller en tast, der ville køre, før en tobogstavstast kan skrives, vises med rødt og skal rettes, før du kan gemme.

## Mus

- **Musehjul**: {{ui:Rul op zoomer ind}} (udgangspunktet) eller {{ui:Rul op zoomer ud}}, og hvor hurtigt. Et knibe-zoom på trackpad zoomer altid i den retning, fingrene bevæger sig.
- **Panorér planen og tegninger med**: en hvilken som helst af venstre-, midter- og højreknappen. {{key:Space}} og træk panorerer også; et venstretræk panorerer kun der, hvor et klik ikke ville vælge eller tegne.
- **Træk i 3D-visningerne**: {{ui:Hver visnings egen}} beholder BimCraft's knapper (venstre kredser, højre panorerer). Eller sæt hver knap til kredsning (orbit), panorering, zoom eller ingenting; {{key:Shift}} sammen med knappen skifter mellem kredsning og panorering. Et klik uden træk vælger stadig.

## Tag den med dig

{{ui:Eksportér}} gemmer den stil, der er i brug, som en lille `.ccinput.json`-fil; {{ui:Importér…}} tilføjer en, fra en anden computer eller fra en kollega. En importeret fil kan kun pege på BimCraft's egne kommandoer: alt andet i den (en kommando, denne version ikke har, eller en tast, der ikke virker her) udelades og tælles i statuslinjen. {{ui:Slet denne stil}} fjerner en af dine egne.

:::note
Disse indstillinger bliver i denne browser. {{ui:Brug denne stil i alle apps}} under stilkortene får alle apps til at åbne i den tilsvarende stil (sin egen værktøjslinje, en menulinje, et bånd eller Klassisk tegning; {{ui:Fremviser}} findes kun i BimCraft og har ingen tilsvarende andre steder), med de ændringer, du har lavet i hver app; en app uden en tilsvarende stil beholder sin egen. Hvis du vælger en anden stil i én app, ændres kun den app.
:::

Se også: [Tastatur og mus](topic:keyboard) · [BimCraft-indstillinger](topic:settings) · [Fra andre BIM- og tegneprogrammer](topic:coming-from)
