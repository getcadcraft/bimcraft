---
title: Slett, klipp ut, kopier og lim inn bygningselementer
summary: Velg vegger, dører, møbler eller annet i en IFC-modell; slett dem, klipp dem ut, eller kopier og lim dem inn der du klikker, på samme sted eller i en annen etasje.
keywords: slett, fjern, viske ut, klipp ut, kopier, lim inn, dupliser, flytt, velg alle, plukk alle, bygningselement, vegg, dør, vindu, trapp, åpning, angre
from: d9eec37f
---

## Oppgave

Endre innholdet i en IFC-modell: fjern elementer som ikke skal være med, kopier en vegg eller et sett med møbler til et annet sted, eller flytt elementer ved å klippe ut og lime inn. Hver endring er ett steg som kan angres, og lagring skriver en ny fil, slik at originalen forblir uendret.

## Trinn

1. Åpne en IFC-modell. Se [Åpne en IFC-modell og se deg rundt i 3D](topic:open-ifc-model).
2. Velg det som skal endres: klikk et element, hold {{key:Mod}} eller {{key:Shift}} og klikk for å velge flere, eller trykk {{key:Mod+A}} ({{ui:Mer}}, {{ui:Velg alle}}) for å velge alle elementene som vises.
3. Deretter:
   - **Slett:** trykk {{key:Delete}}, eller {{ui:Mer}}, {{ui:Slett}}.
   - **Kopier:** trykk {{key:Mod+C}} eller klikk {{ui:Kopier}}.
   - **Klipp ut:** trykk {{key:Mod+X}}, eller {{ui:Mer}}, {{ui:Klipp ut}}. Elementene fjernes, og de kan limes inn.
4. For å lime inn, trykk {{key:Mod+V}} eller klikk {{ui:Lim inn}}. En gjennomsiktig boks i størrelse med det som ble kopiert, følger pekeren i etasjen valgt i plasseringslinjen. Trykk {{key:R}} for å snu den 90°, og klikk der den skal stå. Hvert klikk plasserer en ny kopi; trykk {{key:Esc}} for å stoppe.
5. Eller trykk {{key:Mod+Shift+V}} ({{ui:Mer}}, {{ui:Lim inn på samme sted}}): etter et utklipp går elementene tilbake nøyaktig dit de var; etter en kopiering havner kopien rett ved siden av originalene.
6. Klikk {{ui:Lagre som IFC}} for å laste ned den redigerte modellen.

## Hva som følger med et element

- **Deler:** en trapp tar med løpene sine, en gardinvegg tar med panelene sine, og alt som består av deler tar med dem alle.
- **Åpninger:** en vegg tar med åpningene som er kuttet i den. Når en dør eller et vindu slettes, tas også åpningen den fylte, slik at veggen lukkes, som i et tegneprogram. Når en vegg tegnet i BimCraft slettes, slettes også dørene og vinduene i den, og de gjenværende veggene knyttes sammen igjen. Når en vegg fra en fil laget et annet sted slettes, blir dørene og vinduene værende der de var.
- **Data:** en kopi har samme type, materialer, egenskapssett og mengder som originalen, og en ny GlobalId. Endres en verdi på kopien senere, forblir originalen urørt.
- **Bibliotekselementer** beholder bibliotekdataene sine; en kopi får neste ledige elementnummer, og et utklipt element som limes inn igjen beholder sitt eget.

## Resultat

- «Slettet: …» eller «Limt inn: …» vises i listen {{ui:Endringer}}. {{key:Mod+Z}} angrer siste endring; {{key:Mod+Y}} gjør den om igjen.
- Etter en sletting viser statuslinjen hvor mange deler og åpninger som også ble fjernet.
- Limte elementer er valgt, slik at de kan limes inn på samme sted igjen for å lage en rad, eller slettes.

## Greit å vite

- Kopier bruker samme geometri som originalen (IFC lar elementer dele den), så filen vokser svært lite.
- Bygningselementer limes inn i modellen de ble kopiert fra, i samme fane. For å bruke plasserte bibliotekselementer i en annen modell, kopier ett element om gangen: se [Kopier, lim inn og dupliser bibliotekselementer](topic:copy-paste).
- Etasjer, rom, bygninger og tomten kan ikke slettes eller kopieres. Velg elementene i dem i stedet. Et rom tegnet i BimCraft hentes fra veggene rundt det: slett en vegg for å slå sammen to rom.
- Vegger, dører og vinduer tegnet med BimCraft sine egne vegg-, dør- og vindusverktøy kan ikke kopieres, klippes ut eller dupliseres ennå; statuslinjen sier det. Tegn dem på nytt. Sletting fungerer.
- Kopier legger også navn og egenskaper for det som ble kopiert på utklippstavlen som tekst, for å lime inn i et regneark eller en e-post.

## Vanlige feil

- **{{ui:Slett}} er gråtonet.** Ingenting er valgt, eller bare etasjer eller rom er valgt. Hold pekeren over den for å lese hvorfor.
- **Lim inn sier at elementene kom fra en annen modell.** En annen modell er åpnet etter at elementene ble kopiert. Åpne den første modellen igjen og kopier dem der.
- **Den innlimte kopien ligger i en annen etasje.** {{ui:Etasje}} i plasseringslinjen bestemmer hvor den havner; velg etasje før du klikker.

## Relatert

- [Skjul, isoler og se gjennom elementer](topic:hide-and-isolate)
- [Taster og mus](topic:keyboard#edit)
